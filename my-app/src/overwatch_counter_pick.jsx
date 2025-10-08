import React, { useState } from 'react';
import { Shield, Sword, Heart, AlertCircle, CheckCircle2, Users } from 'lucide-react';
import { heroes, tips } from './heroesData';
import {
  getHeroRole,
  getRoleCount,
  canAddHero,
  calculateRecommendations,
  getDifficultyColor
} from './counterPickLogic';



export default function OverwatchCounterPick() {
  const [selectedRole, setSelectedRole] = useState('');
  const [enemyTeam, setEnemyTeam] = useState([]);
  const [allyTeam, setAllyTeam] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [selectedMap, setSelectedMap] = useState('');
  // ADICIONAR (pode ser no início do arquivo, após os imports):
  const maps = [
    'Antarctic Peninsula', 'Blizzard World', 'Busan', 'Circuit Royal',
    'Colosseo', 'Dorado', 'Eichenwalde', 'Esperança', 'Hanaoka',
    'Havana', 'Hollywood', 'Ilios', 'Junkertown', 'King\'s Row',
    'Midtown', 'Nepal', 'New Junk City', 'New Queen Street',
    'Numbani', 'Paraíso', 'Rialto', 'Runasapi', 'Shambali Monastery',
    'Suravasa', 'Throne of Anubis'
  ].sort();



  const getRoleIcon = (role) => {
    switch(role) {
      case 'tank': return <Shield className="w-5 h-5" />;
      case 'damage': return <Sword className="w-5 h-5" />;
      case 'support': return <Heart className="w-5 h-5" />;
      default: return null;
    }
  };

  const addToTeam = (hero, team) => {
    const currentTeam = team === 'enemy' ? enemyTeam : allyTeam;
    const maxSize = team === 'enemy' ? 5 : 4;

    if (currentTeam.length < maxSize &&
        !currentTeam.find(h => h.name === hero.name) &&
        canAddHero(hero, currentTeam, team === 'ally' ? selectedRole : null)) {
      if (team === 'enemy') {
        setEnemyTeam([...enemyTeam, hero]);
      } else {
        setAllyTeam([...allyTeam, hero]);
      }
    }
  };

  const removeFromTeam = (heroName, team) => {
    if (team === 'enemy') {
      setEnemyTeam(enemyTeam.filter(h => h.name !== heroName));
    } else {
      setAllyTeam(allyTeam.filter(h => h.name !== heroName));
    }
  };

  const handleCalculate = () => {
    const results = calculateRecommendations(selectedRole, enemyTeam, allyTeam, selectedMap);
    setRecommendations(results);
  };

  const renderTeamBuilder = (team, teamName, bgColor, borderColor, textColor) => {
    const currentTeam = team === 'enemy' ? enemyTeam : allyTeam;
    const maxSize = team === 'enemy' ? 5 : 4;
    const limits = team === 'ally' && selectedRole
      ? {
          tank: selectedRole === 'tank' ? 0 : 1,
          damage: selectedRole === 'damage' ? 1 : 2,
          support: selectedRole === 'support' ? 1 : 2
        }
      : { tank: 1, damage: 2, support: 2 };

    return (
      <div className={`${bgColor} backdrop-blur rounded-xl p-6 border ${borderColor}`}>
        <h2 className={`text-2xl font-bold ${textColor} mb-4`}>
          {teamName} ({currentTeam.length}/{maxSize})
        </h2>
        <div className={`text-sm mb-3`} style={{ color: textColor.replace('300', '200') }}>
          Tank: {getRoleCount(currentTeam, 'tank')}/{limits.tank} |
          Damage: {getRoleCount(currentTeam, 'damage')}/{limits.damage} |
          Support: {getRoleCount(currentTeam, 'support')}/{limits.support}
        </div>

        {/* Heróis selecionados */}
        <div className="space-y-2 mb-4 min-h-[120px]">
          {currentTeam.map(hero => (
            <div key={hero.name} className={`${team === 'enemy' ? 'bg-red-900/60' : 'bg-blue-900/60'} p-2 rounded-lg flex items-center gap-3 border-2 ${team === 'enemy' ? 'border-red-500' : 'border-blue-500'}`}>              <img src={hero.image} alt={hero.name} className="w-12 h-12 rounded-lg object-cover" />
              <span className="text-white font-medium flex-1">{hero.name}</span>
              <span className={`text-xs capitalize`} style={{ color: textColor.replace('300', '300') }}>
                {getHeroRole(hero.name)}
              </span>
              <button
                onClick={() => removeFromTeam(hero.name, team)}
                className={`hover:text-white px-2`}
                style={{ color: textColor.replace('300', '300') }}
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        {/* Seletor de heróis por papel */}
        <div className="space-y-3">
          {Object.entries(heroes).map(([role, heroList]) => {
            const roleCount = getRoleCount(currentTeam, role);
            const isRoleFull = roleCount >= limits[role];

            return (
              <div key={role}>
                <button
                  onClick={() => {
                    if (!isRoleFull) {
                      const section = document.getElementById(`${team}-${role}`);
                      const arrow = document.getElementById(`${team}-arrow-${role}`);
                      section.classList.toggle('hidden');
                      arrow.classList.toggle('rotate-180');
                    }
                  }}
                  className={`w-full text-white font-bold mb-2 capitalize flex items-center justify-between gap-2 transition-colors ${
                    isRoleFull ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                  }`}
                  style={!isRoleFull ? { color: 'white' } : {}}
                >
                  <div className="flex items-center gap-2">
                    {getRoleIcon(role)}
                    <span className="capitalize">{role}</span>
                    <span className={`text-sm ${isRoleFull ? 'opacity-70' : ''}`}>
                      ({roleCount}/{limits[role]})
                    </span>
                  </div>
                  {!isRoleFull && <span id={`${team}-arrow-${role}`} className="text-sm transition-transform">▼</span>}
                </button>
                {!isRoleFull && (
                  <div id={`${team}-${role}`} className="grid grid-cols-4 gap-2 max-h-[200px] overflow-y-auto">
                    {heroList.map(hero => {
                      const isDisabled = currentTeam.find(h => h.name === hero.name) ||
                                       currentTeam.length >= maxSize ||
                                       !canAddHero(hero, currentTeam, team === 'ally' ? selectedRole : null);
                      return (
                        <button
                          key={hero.name}
                          onClick={() => addToTeam(hero, team)}
                          disabled={isDisabled}
                          className={`bg-slate-700 hover:bg-opacity-80 disabled:opacity-30 disabled:cursor-not-allowed p-2 rounded transition-colors flex flex-col items-center gap-1 ${
                            isDisabled ? 'grayscale' : ''
                          }`}
                        >
                          <img src={hero.image} alt={hero.name} className="w-12 h-12 rounded object-cover" />
                          <span className="text-white text-xs text-center line-clamp-1">{hero.name}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2">Overwatch Counter Pick</h1>
          <p className="text-orange-300">Advanced algorithm with hard/soft counters & synergies</p>
        </div>

        {/* Seleção de papel */}
        <div className="bg-slate-800/80 backdrop-blur rounded-xl p-6 mb-6 border border-orange-500/30">
          <h2 className="text-2xl font-bold text-white mb-4">1. Choose Your Role</h2>
          <div className="grid grid-cols-3 gap-4">
            {['tank', 'damage', 'support'].map(role => (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                className={`p-6 rounded-lg border-2 transition-all ${
                  selectedRole === role
                    ? 'bg-orange-600 border-orange-400 text-white scale-105'
                    : 'bg-slate-700 border-slate-600 text-slate-300 hover:border-orange-500'
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  {getRoleIcon(role)}
                  <span className="font-bold capitalize">{role}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Seleção de mapa (opcional) */}
        {selectedRole && (
          <div className="bg-slate-800/80 backdrop-blur rounded-xl p-6 mb-6 border border-orange-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">
              1.5. Select Map (Optional)
              <span className="text-sm text-slate-400 ml-2">+1 point if hero excels on this map</span>
            </h2>
            <select
              value={selectedMap}
              onChange={(e) => setSelectedMap(e.target.value)}
              className="w-full p-3 rounded-lg bg-slate-700 text-white border-2 border-slate-600 hover:border-orange-500 transition-colors"
            >
              <option value="">-- No map selected --</option>
              {maps.map(map => (
                <option key={map} value={map}>{map}</option>
              ))}
            </select>
          </div>
        )}

        {/* Construtores de times */}
        {selectedRole && (
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {renderTeamBuilder('enemy', '2. Enemy Team', 'bg-red-900/30', 'border-red-500/50', 'text-red-300')}
            {renderTeamBuilder('ally', '3. Your Team', 'bg-blue-900/30', 'border-blue-500/50', 'text-blue-300')}
          </div>
        )}

        {/* Botão de análise */}
        {selectedRole && enemyTeam.length > 0 && (
          <div className="text-center mb-6">
            <button
              onClick={handleCalculate}
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all transform hover:scale-105"
            >
              🧠 Analyze
            </button>
          </div>
        )}

        {/* Resultados */}
        {recommendations.length > 0 && (
          <div className="bg-slate-800/80 backdrop-blur rounded-xl p-6 border border-green-500/30">
            <h2 className="text-3xl font-bold text-green-400 mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-8 h-8" />
              Best Picks for {selectedRole === 'damage' ? 'Damage' : selectedRole === 'tank' ? 'Tank' : 'Support'}
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Algorithm: Hard counters (+3), Soft counters (+1), Hard weak (-3), Soft weak (-1),
              Synergies (+1 each), Best map (+1), Mirror counter (+1)
            </p>
            <div className="space-y-4">
              {recommendations.map((hero, index) => (
                <div
                  key={hero.name}
                  className={`p-5 rounded-lg border-2 ${
                    index === 0
                      ? 'bg-gradient-to-r from-yellow-900/40 to-orange-900/40 border-yellow-500'
                      : hero.score > 0
                      ? 'bg-green-900/30 border-green-500/50'
                      : hero.score < 0
                      ? 'bg-red-900/30 border-red-500/50'
                      : 'bg-slate-700/50 border-slate-500/50'
                  }`}
                >
                  <div className="flex items-start gap-4 mb-3">
                    <img src={hero.image} alt={hero.name} className="w-20 h-20 rounded-lg object-cover" />
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-2 flex-wrap">
                        {index === 0 && '🏆 '} {hero.name}
                        {index === 0 && <span className="text-sm text-yellow-400">(Best Pick)</span>}
                      </h3>
                      <div className="flex gap-2 flex-wrap">
                        <span className={`text-sm px-3 py-1 rounded ${
                          hero.score > 0 ? 'bg-green-600 text-white' : hero.score < 0 ? 'bg-red-600 text-white' : 'bg-gray-600 text-white'
                        }`}>
                          Score: {hero.score > 0 ? '+' : ''}{hero.score}
                        </span>
                        <span className={`text-sm px-3 py-1 rounded bg-slate-700 ${getDifficultyColor(hero.difficulty)} font-semibold`}>
                          {hero.difficulty.charAt(0).toUpperCase() + hero.difficulty.slice(1)}
                        </span>
                        {hero.synergyCount > 0 && (
                          <span className="text-sm px-3 py-1 rounded bg-purple-600 text-white flex items-center gap-1">
                            <Users className="w-3 h-3" /> {hero.synergyCount} Synerg{hero.synergyCount > 1 ? 'ies' : 'y'}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {hero.reasons.length > 0 && (
                    <div className="mb-3">
                      <p className="text-orange-300 font-semibold mb-2 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Analysis:
                      </p>
                      <ul className="space-y-1">
                        {hero.reasons.map((reason, i) => (
                          <li key={i} className={`text-sm ml-6 ${
                            reason.includes('Hard counters') ? 'text-green-300 font-semibold' :
                            reason.includes('Soft counters') ? 'text-green-400' :
                            reason.includes('Hard weak') ? 'text-red-300 font-semibold' :
                            reason.includes('Soft weak') ? 'text-red-400' :
                            reason.includes('Synergy') ? 'text-purple-300' :
                            reason.includes('Strong on') ? 'text-blue-300 font-semibold' :
                            reason.includes('Weak on') ? 'text-orange-300 font-semibold' :
                            reason.includes('Mirror') ? 'text-cyan-300 font-semibold' :
                            'text-slate-300'
                          }`}>
                            {reason.includes('Hard counters') && '⚡ '}
                            {reason.includes('Hard weak') && '💀 '}
                            {reason.includes('Synergy') && '🤝 '}
                            {reason.includes('Soft weak') && '⚠️ '}
                            {reason.includes('Strong on') && '🗺️ '}
                            {reason.includes('Weak on') && '⚠️ '}
                            {reason.includes('Mirror') && '🎯 '}
                            • {reason}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {hero.counterExplanation && (
                    <div className="mt-4 p-3 bg-slate-900/50 rounded-lg">
                      <p className="text-yellow-300 font-semibold mb-2">Counter Details:</p>
                      <div className="space-y-2 text-sm text-slate-300">
                        <div>
                          <strong className="text-green-400">Why {hero.name} counters enemies:</strong>
                          <p className="ml-4 mt-1">{hero.counterExplanation.counters}</p>
                        </div>
                        <div>
                          <strong className="text-red-400">Why enemies might counter {hero.name}:</strong>
                          <p className="ml-4 mt-1">{hero.counterExplanation.counteredBy}</p>
                        </div>
                      </div>
                    </div>
                  )}

              {hero.mapExplanation && (
                <div className="mt-4 p-3 bg-slate-900/50 rounded-lg">
                  <p className="text-yellow-300 font-semibold mb-2">🗺️ Map Analysis:</p>
                  <div className="space-y-2 text-sm text-slate-300">
                    <div>
                      <strong className="text-green-400">Good Maps:</strong>
                      <p className="ml-4 mt-1">{hero.mapExplanation.good}</p>
                      {hero.bestMaps && hero.bestMaps.length > 0 && (
                        <p className="ml-4 mt-1 text-blue-300 text-xs">
                          Best on: {hero.bestMaps.join(', ')}
                        </p>
                      )}
                    </div>
                    <div>
                      <strong className="text-red-400">Bad Maps:</strong>
                      <p className="ml-4 mt-1">{hero.mapExplanation.bad}</p>
                      {hero.worstMaps && hero.worstMaps.length > 0 && (
                        <p className="ml-4 mt-1 text-orange-300 text-xs">
                          Worst on: {hero.worstMaps.join(', ')}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

                  {tips[selectedRole] && tips[selectedRole][hero.name] && (
                    <div className="bg-slate-900/50 p-3 rounded mt-3">
                      <p className="text-blue-300 font-semibold mb-1">💡 Tip:</p>
                      <p className="text-slate-300 text-sm">{tips[selectedRole][hero.name]}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}