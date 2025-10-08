// counterPickLogic.js - Lógica para cálculo de counter picks

import { heroes } from './heroesData';

/**
 * Retorna o papel (role) de um herói pelo nome
 */
export const getHeroRole = (heroName) => {
  for (const [role, heroList] of Object.entries(heroes)) {
    if (heroList.find(h => h.name === heroName)) {
      return role;
    }
  }
  return null;
};

/**
 * Conta quantos heróis de um papel específico existem no time
 */
export const getRoleCount = (team, role) => {
  return team.filter(h => getHeroRole(h.name) === role).length;
};

/**
 * Verifica se um herói pode ser adicionado ao time respeitando os limites de composição
 */
export const canAddHero = (hero, team, selectedRole = null) => {
  const heroRole = getHeroRole(hero.name);
  const roleCount = getRoleCount(team, heroRole);

  // Define os limites baseado no contexto
  const limits = selectedRole
    ? {
        tank: selectedRole === 'tank' ? 0 : 1,
        damage: selectedRole === 'damage' ? 1 : 2,
        support: selectedRole === 'support' ? 1 : 2
      }
    : {
        tank: 1,
        damage: 2,
        support: 2
      };

  return roleCount < limits[heroRole];
};

/**
 * Calcula as recomendações de heróis baseado no time inimigo e aliado
 */
export const calculateRecommendations = (selectedRole, enemyTeam, allyTeam, selectedMap = null) => {
  if (!selectedRole || enemyTeam.length === 0) {
    return [];
  }

  const roleHeroes = heroes[selectedRole];
  
  // Calcula pontuação para cada herói do papel selecionado
  const scores = roleHeroes.map(hero => {
    let score = 0;
    let reasons = [];

    // Analisa counters contra o time inimigo
    enemyTeam.forEach(enemy => {
      // Hard counters (muito efetivo contra)
      if (hero.hardCounters && hero.hardCounters.includes(enemy.name)) {
        score += 3;
        reasons.push(`Hard counters ${enemy.name}`);
      }
      
      // Soft counters (efetivo contra)
      if (hero.softCounters && hero.softCounters.includes(enemy.name)) {
        score += 1;
        reasons.push(`Soft counters ${enemy.name}`);
      }
      
      // Hard countered by (muito fraco contra)
      if (hero.hardCounteredBy && hero.hardCounteredBy.includes(enemy.name)) {
        score -= 3;
        reasons.push(`Hard weak against ${enemy.name}`);
      }
      
      // Soft countered by (fraco contra)
      if (hero.softCounteredBy && hero.softCounteredBy.includes(enemy.name)) {
        score -= 1;
        reasons.push(`Soft weak against ${enemy.name}`);
      }
    });

    // Analisa sinergias com o time aliado
    let synergyCount = 0;
    let synergyHeroes = [];
    
    allyTeam.forEach(ally => {
      if (hero.synergies && hero.synergies.includes(ally.name)) {
        synergyCount++;
        synergyHeroes.push(ally.name);
      }
    });

    if (synergyCount > 0) {
      score += synergyCount;
      reasons.push(`Synergy with ${synergyHeroes.join(', ')}`);
    }
    if (selectedMap && hero.bestMaps && hero.bestMaps.includes(selectedMap)) {
      score += 3;
      reasons.push(`Strong on ${selectedMap}`);
    }

    // ⭐ ADICIONAR: Penaliza se o mapa é ruim para o herói
    if (selectedMap && hero.worstMaps && hero.worstMaps.includes(selectedMap)) {
      score -= 3; // NOVO!
      reasons.push(`Weak on ${selectedMap}`); // NOVO!
    }

    enemyTeam.forEach(enemy => {
      const enemyRole = getHeroRole(enemy.name);
      if (enemyRole === selectedRole) {
        // Hard counters na mesma role
        if (hero.hardCounters && hero.hardCounters.includes(enemy.name)) {
          score += 1;
          reasons.push(`Mirror counter vs ${enemy.name}`);
        }
        // Soft counters na mesma role
        if (hero.softCounters && hero.softCounters.includes(enemy.name)) {
          score += 1;
          reasons.push(`Mirror advantage vs ${enemy.name}`);
        }
      }
    });

    // Remove razões duplicadas
    return { 
      ...hero, 
      score, 
      reasons: [...new Set(reasons)], 
      synergyCount 
    };
  });

  // Ordena os heróis por pontuação, sinergias e dificuldade
  const sorted = scores.sort((a, b) => {
    // Primeiro critério: pontuação
    if (b.score !== a.score) return b.score - a.score;
    
    // Segundo critério: número de sinergias
    if (b.synergyCount !== a.synergyCount) return b.synergyCount - a.synergyCount;
    
    // Terceiro critério: dificuldade (favorece heróis mais fáceis)
    const difficultyOrder = { easy: 3, medium: 2, hard: 1 };
    return difficultyOrder[b.difficulty] - difficultyOrder[a.difficulty];
  });

  // Retorna os 5 melhores
  return sorted.slice(0, 5);
};

/**
 * Retorna a cor CSS baseada na dificuldade do herói
 */
export const getDifficultyColor = (difficulty) => {
  switch(difficulty) {
    case 'easy': return 'text-green-400';
    case 'medium': return 'text-yellow-400';
    case 'hard': return 'text-red-400';
    default: return 'text-gray-400';
  }
};