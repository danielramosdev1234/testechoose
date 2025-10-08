// heroesData.js - Updated Overwatch 2 Heroes Data (October 2025)

export const heroes = {
  tank: [
    {
      name: 'D.Va',
      image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/ca114f72193e4d58a85c087e9409242f1a31e808cf4058678b8cbf767c2a9a0a.png',
      difficulty: 'medium',
      hardCounters: [],
      softCounters: ['Pharah', 'Junkrat', 'Torbjorn'],
      hardCounteredBy: ['Zarya'],
      softCounteredBy: ['Winston', 'Moira', 'Sojourn', 'Bastion', 'Mei', 'Symmetra'],
      synergies: ['Genji', 'Tracer', 'Winston'],
      bestMaps: ['Antarctic Peninsula', 'Colosseo', 'Dorado'],
      worstMaps: ['Ilios', 'Nepal', 'Lijiang Tower'],
      mapExplanation: {
        good: 'D.Va excels on maps with tight corridors and multiple flank routes where Defense Matrix can eat key abilities. Vertical mobility allows her to contest high ground easily.',
        bad: 'Struggles on open KOTH maps where beam weapons (her counters) have clear sightlines and she cannot use cover effectively. Limited sustainability in long sightline engagements.'
      },
      counterExplanation: {
        counters: 'Defense Matrix blocks projectiles from Pharah and Junkrat. Mobility allows chasing snipers and flying to eliminate Torbjorn turrets',
        counteredBy: 'Zarya beam bypasses Defense Matrix entirely. Winston, Moira and Sojourn also ignore matrix with beam attacks. Bastion tracks her mobility with sustained damage. Mei freeze stops her mobility and boosters. Symmetra beam bypasses matrix and locks on.'
      }
    },
    {
      name: 'Doomfist',
      image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/13750471c693c1a360eb19d5ace229c8599a729cd961d72ebee0e157657b7d18.png',
      difficulty: 'hard',
      hardCounters: [],
      softCounters: ['Widowmaker', 'Ashe', 'Ana'],
      hardCounteredBy: ['Sombra'],
      softCounteredBy: ['Tracer', 'Genji', 'Brigitte', 'Wrecking Ball', 'Echo', 'Pharah', 'Mei'],
      synergies: ['Ana', 'Zarya', 'Lucio'],
      bestMaps: ['Circuit Royal', 'Colosseo', 'Midtown'],
      worstMaps: ['Junkertown', 'Havana', 'Rialto'],
      mapExplanation: {
        good: 'Thrives on maps with environmental kill opportunities and tight spaces where Power Block is effective. Vertical architecture allows for powerful Seismic Slam combos.',
        bad: 'Struggles on open, flat maps where he can be kited easily. Long sightlines expose him to poke damage and he lacks escape options in wide-open areas.'
      },
      counterExplanation: {
        counters: 'Can dive on static snipers. Power Block absorbs their shots. Mobility makes it hard to be hit',
        counteredBy: 'Sombra hack removes all abilities. Mobile heroes (Tracer/Genji) avoid Power Block and kite. Brigitte stuns and cancels combos. Ball disrupts positioning. Echo flight avoids dives, Pharah stays airborne, Mei freeze stops slam and punch.'
      }
    },
    {
      name: 'Junker Queen',
      image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/b4fa5f937fe07ef56c78bca80be9602c062b8d4451692aecff50e2f68c5c6476.png',
      difficulty: 'medium',
      hardCounters: [],
      softCounters: ['Genji', 'Tracer', 'Lucio'],
      hardCounteredBy: ['Ana'],
      softCounteredBy: ['Lucio', 'Kiriko', 'Widowmaker', 'Hanzo', 'Orisa', 'Bastion', 'Mei'],
      synergies: ['Lucio', 'Brigitte', 'Reaper'],
      bestMaps: ['Hollywood'],
      worstMaps: ['Junkertown', 'Havana', 'Circuit Royal'],
      mapExplanation: {
        good: 'Excels on close-quarters brawl maps where her axe and knife are most effective. Short engagements allow her wounds to stack quickly.',
        bad: 'Struggles on maps with long sightlines where she can be poked down before engaging. Open areas prevent her from utilizing her close-range kit effectively.'
      },
      counterExplanation: {
        counters: 'Jagged Blade catches mobile heroes. Commanding Shout speed helps chase Genji/Tracer. Area damage hits Lucio',
        counteredBy: 'Ana anti-heal negates her lifesteal entirely. Lucio and Kiriko cleanse wound damage. Long-range snipers stay out of her effective range. Orisa fortify resists, Bastion shreds at range, Mei walls block engages.'
      }
    },
    {
      name: 'Mauga',
      image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/9ee3f5a62893091d575ec0a0d66df878597086374202c6fc7da2d63320a7d02e.png',
      difficulty: 'easy',
      hardCounters: [],
      softCounters: ['Reinhardt', 'Winston', 'Brigitte'],
      hardCounteredBy: ['Ana'],
      softCounteredBy: ['Wrecking Ball', 'Kiriko', 'Sombra', 'Sigma'],
      synergies: ['Baptiste', 'Mercy', 'Bastion'],
      bestMaps: ['Busan', 'Hollywood', 'Midtown'],
      worstMaps: ['Junkertown', 'Circuit Royal', 'Havana'],
      mapExplanation: {
        good: 'Dominates on KOTH maps and tight corridors where enemies are forced into his dual-gun range. Cardiac Overdrive sustains through spam damage in grouped fights.',
        bad: 'Struggles on payload maps with long sightlines where he can be poked from distance. Lacks mobility to reposition quickly on maps with multiple levels.'
      },
      counterExplanation: {
        counters: 'Sustained dual guns melt shields and close-range brawlers. Cardiac Overdrive outheals their damage output',
        counteredBy: 'Ana anti-heal stops his lifesteal. Ball outmaneuvers him. Kiriko mobility escapes his range. Sombra hack removes abilities. Sigma grasp absorbs guns and stuns.'
      }
    },
    {
      name: 'Orisa',
      image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/71e96294617e81051d120b5d04b491bb1ea40e2933da44d6631aae149aac411d.png',
      difficulty: 'easy',
      hardCounters: [],
      softCounters: ['Reinhardt', 'Roadhog', 'Pharah'],
      hardCounteredBy: ['Sombra'],
      softCounteredBy: ['Winston', 'Mei', 'Zarya', 'D.Va', 'Bastion', 'Lifeweaver', 'Zenyatta'],
      synergies: ['Bastion', 'Baptiste', 'Mercy'],
      bestMaps: ['Antarctic Peninsula', 'Busan', 'Eichenwalde'],
      worstMaps: ['Lijiang Tower', 'Nepal', 'Ilios'],
      mapExplanation: {
        good: 'Strong on defense points and chokepoints where Javelin Spin blocks spam. Fortify prevents displacement on maps with environmental hazards.',
        bad: 'Struggles on maps requiring high mobility and quick rotations. Open KOTH maps where flankers can easily access her backline.'
      },
      counterExplanation: {
        counters: 'Javelin Spin blocks Rein attacks and Roadhog shots. Fortify prevents hooks. Energy Javelin penetrates shields',
        counteredBy: 'Sombra hack removes Fortify. Beam weapons (Winston/Mei/Zarya) bypass Javelin Spin. D.Va eats projectiles and dives her. Bastion sustained DPS melts, Lifeweaver grip saves from javelin, Zen discord amplifies damage.'
      }
    },
    {
      name: 'Ramattra',
      image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/3e0367155e1940a24da076c6f1f065aacede88dbc323631491aa0cd5a51e0b66.png',
      difficulty: 'hard',
      hardCounters: [],
      softCounters: ['Bastion', 'D.Va', 'Reaper'],
      hardCounteredBy: ['Bastion'],
      softCounteredBy: ['Genji', 'Tracer', 'Pharah', 'Kiriko', 'Zenyatta', 'Ana', 'Orisa'],
      synergies: ['Ana', 'Zenyatta', 'Reaper'],
      bestMaps: ['Antarctic Peninsula', 'Shambali Monastery'],
      worstMaps: ['Junkertown', 'Havana', 'Circuit Royal'],
      mapExplanation: {
        good: 'Excels on maps with tight spaces where Nemesis form punches hit multiple enemies. Control points benefit from his area denial with Ravenous Vortex.',
        bad: 'Struggles on open maps where enemies can maintain distance from Nemesis form. Long sightlines allow poke damage that drains his resources.'
      },
      counterExplanation: {
        counters: 'Block ability counters Bastion turret mode. Nemesis form punches through D.Va. Area damage in Nemesis catches Reaper',
        counteredBy: 'Bastion sustained DPS burns through his forms. Mobile DPS (Genji/Tracer/Pharah) kite around Nemesis form Block. Kiriko range damage is safe. Zenyatta discord melts, Ana anti-heal, Orisa javelin pins.'
      }
    },
    {
      name: 'Reinhardt',
      image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/490d2f79f8547d6e364306af60c8184fb8024b8e55809e4cc501126109981a65.png',
      difficulty: 'medium',
      hardCounters: [],
      softCounters: ['Genji', 'Tracer'],
      hardCounteredBy: ['Bastion'],
      softCounteredBy: ['Sombra', 'Junkrat', 'Cassidy', 'Zenyatta', 'Ramattra', 'Pharah'],
      synergies: ['Ana', 'Lucio', 'Brigitte'],
      bestMaps: ['Busan', 'Eichenwalde', 'Hanaoka'],
      worstMaps: ['Junkertown', 'Circuit Royal', 'Dorado'],
      mapExplanation: {
        good: 'Dominates on maps with narrow corridors and chokepoints where his barrier provides maximum value. Environmental kill opportunities with Charge.',
        bad: 'Struggles on open maps with multiple angles of attack that bypass his frontal barrier. High ground access routes that avoid his effective range.'
      },
      counterExplanation: {
        counters: 'Shield blocks projectiles from mobile DPS. Fire Strike damages through deflect. Charge punishes positioning',
        counteredBy: 'Bastion melts shield instantly. Sombra hack drops shield. Junkrat spam breaks barrier. Cassidy flashbang stops charge. Zen discord melts him when exposed. Ramattra nemesis punches through shield, Pharah attacks from air.'
      }
    },
    {
      name: 'Roadhog',
      image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/72e02e747b66b61fcbc02d35d350770b3ec7cbaabd0a7ca17c0d82743d43a7e8.png',
      difficulty: 'easy',
      hardCounters: [],
      softCounters: ['Sombra', 'Zenyatta', 'Kiriko'],
      hardCounteredBy: ['Ana'],
      softCounteredBy: ['Tracer', 'Genji', 'Junkrat', 'Reaper', 'Ashe', 'Sojourn', 'Orisa'],
      synergies: ['Zenyatta', 'Kiriko', 'Ana'],
      bestMaps: ['Havana', 'Ilios', 'Junkertown'],
      worstMaps: ['Circuit Royal', 'Rialto', 'Numbani'],
      mapExplanation: {
        good: 'Excels on maps with environmental kill opportunities and tight corners for hook setups. Close-quarters areas where his one-shot combo is effective.',
        bad: 'Struggles on open maps where he becomes an ultimate battery. Long sightlines allow enemies to poke him safely without hook threat.'
      },
      counterExplanation: {
        counters: 'Hook one-shots squishies. Can catch out-of-position flankers. High damage punishes bad positioning',
        counteredBy: 'Ana anti-heal negates self-heal entirely (biggest counter). Mobile heroes dodge hook. Junkrat and Reaper deal massive damage he cannot outheal. Ashe and Sojourn outrange, Orisa fortify resists hook.'
      }
    },
    {
      name: 'Sigma',
      image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/cd7a4c0a0df8924afb2c9f6df864ed040f20250440c36ca2eb634acf6609c5e4.png',
      difficulty: 'hard',
      hardCounters: [],
      softCounters: ['Pharah', 'Widowmaker', 'Hanzo'],
      hardCounteredBy: ['Symmetra'],
      softCounteredBy: ['Genji', 'Lucio', 'Ramattra', 'Roadhog', 'Zarya', 'Sombra', 'Bastion'],
      synergies: ['Baptiste', 'Ashe', 'Hanzo'],
      bestMaps: ['Antarctic Peninsula', 'Busan', 'Circuit Royal'],
      worstMaps: ['King\'s Row', 'Eichenwalde', 'Hollywood'],
      mapExplanation: {
        good: 'Strong on maps with long sightlines where he can poke safely. Multiple angles to place barrier strategically and absorb projectile spam with Kinetic Grasp.',
        bad: 'Struggles on close-quarters brawl maps where beam weapons dominate. KOTH maps where fast-paced fights prevent careful barrier placement.'
      },
      counterExplanation: {
        counters: 'Kinetic Grasp absorbs projectiles from snipers and Pharah. Accretion stuns flying targets. Shield blocks sightlines',
        counteredBy: 'Symmetra beam bypasses shield and grasp. Fast heroes (Genji/Lucio) dodge abilities. Ramattra and Roadhog brawl in close range where Sigma struggles. Zarya bubbles absorb, Sombra hacks, Bastion shreds.'
      }
    },
    {
      name: 'Winston',
      image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/bd9c8e634d89488459dfc1aeb21b602fa5c39aa05601a4167682f3a3fed4e0ee.png',
      difficulty: 'medium',
      hardCounters: [],
      softCounters: ['Genji', 'Widowmaker', 'Hanzo', 'Sombra'],
      hardCounteredBy: ['Reaper'],
      softCounteredBy: ['Bastion', 'Ana', 'Brigitte', 'D.Va'],
      synergies: ['D.Va', 'Genji', 'Tracer'],
      bestMaps: ['Circuit Royal', 'Colosseo', 'Dorado'],
      worstMaps: ['Junkertown', 'Havana', 'Rialto'],
      mapExplanation: {
        good: 'Excels on maps with abundant high ground and vertical spaces. Control points where he can dive backlines and use bubble for cover.',
        bad: 'Struggles on flat, open maps with limited cover where he becomes an easy target. Maps with long sightlines that favor his counters like Reaper.'
      },
      counterExplanation: {
        counters: 'Beam auto-locks mobile targets like Genji. Jump Pack reaches high-ground snipers. Bubble blocks their shots',
        counteredBy: 'Reaper massive close-range damage melts him. Bastion tracks and shreds him. Ana sleep and anti-heal stop dives. Brigitte stun cancels jump. D.Va matrix eats tesla cannon.'
      }
    },
    {
      name: 'Wrecking Ball',
      image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/5c18e39ce567ee8a84078f775b9f76a2ba891de601c059a3d2b46b61ae4afb42.png',
      difficulty: 'hard',
      hardCounters: [],
      softCounters: ['Widowmaker', 'Ashe', 'Ana', 'Mauga'],
      hardCounteredBy: ['Sombra'],
      softCounteredBy: ['Mei', 'Roadhog', 'Brigitte', 'Cassidy', 'Tracer'],
      synergies: ['Tracer', 'Sombra', 'Zenyatta'],
      bestMaps: ['Dorado', 'Esperança', 'Junkertown'],
      worstMaps: ['King\'s Row', 'Eichenwalde', 'Hollywood'],
      mapExplanation: {
        good: 'Dominates on maps with environmental kill opportunities and open spaces for building momentum. Vertical architecture for creative grapple plays.',
        bad: 'Struggles on tight indoor maps where he cannot build speed effectively. Cramped spaces where CC abilities easily interrupt his movement.'
      },
      counterExplanation: {
        counters: 'Mobility disrupts static snipers. Piledriver displaces them. Speed makes him hard to hit. Outmaneuvers slow Mauga',
        counteredBy: 'Sombra hack disables all movement abilities. Mei freeze stops momentum. Roadhog hook interrupts roll. Brigitte stun stops engages. Cassidy flashbang, Tracer kites.'
      }
    },
    {
      name: 'Zarya',
      image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/8819ba85823136640d8eba2af6fd7b19d46b9ee8ab192a4e06f396d1e5231f7a.png',
      difficulty: 'hard',
      hardCounters: ['D.Va'],
      softCounters: ['Roadhog', 'Reinhardt', 'Ashe', 'Junkrat'],
      hardCounteredBy: [],
      softCounteredBy: ['Cassidy', 'Widowmaker', 'D.Va', 'Reinhardt', 'Soldier: 76', 'Lifeweaver'],
      synergies: ['Reinhardt', 'Genji', 'Hanzo'],
      bestMaps: ['Rialto'],
      worstMaps: ['Junkertown', 'Circuit Royal', 'Havana'],
      mapExplanation: {
        good: 'Strong on brawl-heavy maps where she can consistently gain energy from spam damage. Tight corridors where high-energy beam is devastating.',
        bad: 'Struggles on maps with long sightlines where burst damage exploits bubble downtime. Open areas where teams can spread out to avoid Graviton Surge.'
      },
      counterExplanation: {
        counters: 'Bubbles absorb spam damage gaining charge. D.Va Defense Matrix feeds massive energy. High charge melts shields and tanks',
        counteredBy: 'Burst damage heroes (Cassidy/Widow) exploit bubble downtime. D.Va eats Grav. Precision damage avoids feeding bubbles. Reinhardt pins with fire strike, Soldier tracks, Lifeweaver grips away.'
      }
    }
  ],
  damage: [
    {
      name: 'Ashe',
      image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/8dc2a024c9b7d95c7141b2ef065590dbc8d9018d12ad15f76b01923986702228.png',
      difficulty: 'medium',
      hardCounters: [],
      softCounters: ['Pharah', 'Echo', 'Mercy'],
      hardCounteredBy: ['Genji'],
      softCounteredBy: ['Tracer', 'Widowmaker', 'Zarya', 'Ana', 'Winston', 'Doomfist', 'Kiriko'],
      synergies: ['Mercy', 'Baptiste', 'Orisa'],
      bestMaps: ['Antarctic Peninsula', 'Circuit Royal', 'Colosseo'],
      worstMaps: ['King\'s Row', 'Eichenwalde', 'Nepal'],
      mapExplanation: {
        good: 'Excels on maps with long sightlines and high ground positions for Coach Gun mobility. Open areas where Dynamite splash damage hits multiple targets.',
        bad: 'Struggles on tight indoor maps where flankers can close distance quickly. Close-quarters combat negates her range advantage.'
      },
      counterExplanation: {
        counters: 'Hitscan shots hit flying Pharah/Echo easily. Dynamite area damage tags Mercy. B.O.B. zones flyers',
        counteredBy: 'Genji deflects shots and B.O.B. Tracer flanks before she can react. Widow outduels at range. Zarya bubble negates damage. Ana sleeps B.O.B. Winston dives, Doomfist punches, Kiriko suzu cleanses dynamite.'
      }
    },
    {
      name: 'Bastion',
      image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/4d715f722c42215072b5dd0240904aaed7b5285df0b2b082d0a7f1865b5ea992.png',
      difficulty: 'easy',
      hardCounters: ['Reinhardt', 'Ramattra'],
      softCounters: ['Orisa', 'Roadhog', 'Winston'],
      hardCounteredBy: ['Genji'],
      softCounteredBy: ['Junkrat', 'Pharah', 'Venture', 'Ana', 'Sigma'],
      synergies: ['Orisa', 'Baptiste', 'Mercy'],
      bestMaps: [],
      worstMaps: ['Lijiang Tower', 'Nepal', 'Ilios'],
      mapExplanation: {
        good: 'Strong on defense points with clear sightlines and limited flanking routes. Payload maps where he can set up behind barriers.',
        bad: 'Struggles on open KOTH maps where he is easily flanked from multiple angles. Maps with abundant cover that allow enemies to approach safely.'
      },
      counterExplanation: {
        counters: 'Sustained DPS melts shields. Shreds tanks with large hitboxes. Configuration: Tank breaks barriers',
        counteredBy: 'Genji deflects turret damage back. Junkrat/Pharah/Venture attack from cover and angles. Ana sleep dart stops turret mode. Sigma grasp absorbs artillery.'
      }
    },
    {
      name: 'Cassidy',
      image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/6cfb48b5597b657c2eafb1277dc5eef4a07eae90c265fcd37ed798189619f0a5.png',
      difficulty: 'medium',
      hardCounters: ['Tracer', 'Wrecking Ball'],
      softCounters: ['Genji', 'Pharah', 'Lucio'],
      hardCounteredBy: ['Widowmaker'],
      softCounteredBy: ['Genji', 'Winston', 'Tracer', 'Mei'],
      synergies: ['Ana', 'Baptiste', 'Reinhardt'],
      bestMaps: ['Busan', 'Eichenwalde', 'Hanaoka'],
      worstMaps: ['Junkertown', 'Circuit Royal', 'Havana'],
      mapExplanation: {
        good: 'Excels on mid-range maps with clear sightlines for flashbang setups. Control points where he can protect supports from flankers.',
        bad: 'Struggles on long-range sniper maps where he is outranged. Very tight maps where his lack of mobility is exploited.'
      },
      counterExplanation: {
        counters: 'Magnetic Grenade sticks and kills flankers. Flashbang stops Tracer recall. Roll dodges close attacks',
        counteredBy: 'Widowmaker outranges him significantly. Genji deflects flashbang and headshots. Winston jumps and pressures with bubble. Tracer outmaneuvers, Mei freezes.'
      }
    },
    {
      name: 'Echo',
      image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/f086bf235cc6b7f138609594218a8184fb8e5f6405a39eceb0deb9afb429619fe.png',
      difficulty: 'hard',
      hardCounters: [],
      softCounters: ['Junkrat', 'Torbjorn', 'Bastion'],
      hardCounteredBy: ['Widowmaker'],
      softCounteredBy: ['Ana', 'Mei', 'Soldier: 76', 'Cassidy', 'Ashe'],
      synergies: ['Mercy', 'Ana', 'Baptiste'],
      bestMaps: ['Blizzard World', 'Busan', 'Colosseo'],
      worstMaps: ['King\'s Row', 'Hollywood', 'Numbani'],
      mapExplanation: {
        good: 'Dominates on maps with vertical space and open skybox for flight. Control points where she can access unique angles above the fight.',
        bad: 'Struggles on indoor maps with low ceilings that limit flight. Tight corridors where hitscan can easily track her movements.'
      },
      counterExplanation: {
        counters: 'Flight accesses angles above turrets and static heroes. Focusing Beam executes low targets. Mobility avoids ground spam',
        counteredBy: 'Widowmaker easily headshots while flying. Ana sleep dart. Mei slows flight. Hitscan heroes (Soldier/Cassidy/Ashe) track her in air.'
      }
    },
    {
      name: 'Genji',
      image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/4edf5ea6d58c449a2aeb619a3fda9fff36a069dfbe4da8bc5d8ec1c758ddb8dc.png',
      difficulty: 'hard',
      hardCounters: ['Ashe', 'Bastion'],
      softCounters: ['Widowmaker', 'Hanzo', 'Zenyatta'],
      hardCounteredBy: ['Winston'],
      softCounteredBy: ['Moira', 'Mei', 'Ana', 'Brigitte'],
      synergies: ['Ana', 'Zenyatta', 'Winston'],
      bestMaps: ['Antarctic Peninsula', 'Dorado', 'Esperança'],
      worstMaps: ['Junkertown', 'Havana', 'Circuit Royal'],
      mapExplanation: {
        good: 'Excels on maps with abundant vertical mobility and flanking routes. Control points where he can dive backlines and escape quickly.',
        bad: 'Struggles on open maps with limited cover where he is easily tracked. Flat areas without walls for climbing or escape routes.'
      },
      counterExplanation: {
        counters: 'Deflect sends shots back at snipers. Mobility flanks immobile targets. Swift Strike executes low HP heroes',
        counteredBy: 'Winston beam auto-locks through deflect. Moira beam ignores deflect. Mei freeze stops mobility. Ana sleep and anti-heal. Brigitte stuns dashes.'
      }
    },
    {
      name: 'Hanzo',
      image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/aecd8fa677f0093344fab7ccb7c37516c764df3f5ff339a5a845a030a27ba7e0.png',
      difficulty: 'hard',
      hardCounters: [],
      softCounters: ['Bastion', 'Torbjorn', 'Zenyatta'],
      hardCounteredBy: ['Genji'],
      softCounteredBy: ['Genji', 'Lucio', 'D.Va', 'Winston', 'Echo'],
      synergies: ['Zarya', 'Sigma', 'Baptiste'],
      bestMaps: ['Circuit Royal', 'Dorado', 'Eichenwalde'],
      worstMaps: ['Nepal', 'Lijiang Tower', 'Oasis'],
      mapExplanation: {
        good: 'Strong on maps with long sightlines and natural chokepoints for Dragonstrike. High ground positions for Sonic Arrow surveillance.',
        bad: 'Struggles on tight indoor maps where projectile travel time is a disadvantage. Close-quarters where his lack of mobility is exposed.'
      },
      counterExplanation: {
        counters: 'Storm Arrows shreds stationary targets. Sonic Arrow reveals positioning. One-shot potential on 200HP heroes',
        counteredBy: 'Genji deflects arrows and storm arrows. Mobile heroes (Lucio/Tracer) dodge projectiles. D.Va eats arrows and ultimate. Winston dives, Echo duplicates and outmobiles.'
      }
    },
    {
      name: 'Junkrat',
      image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/037e3df083624e5480f8996821287479a375f62b470572a22773da0eaf9441d0.png',
      difficulty: 'easy',
      hardCounters: [],
      softCounters: ['Reinhardt', 'Bastion', 'Torbjorn'],
      hardCounteredBy: ['Pharah'],
      softCounteredBy: ['Sombra', 'Kiriko', 'Tracer', 'Zarya', 'Lifeweaver', 'Echo'],
      synergies: ['Orisa', 'Baptiste', 'Brigitte'],
      bestMaps: ['Blizzard World', 'Eichenwalde', 'Ilios'],
      worstMaps: ['Junkertown', 'Circuit Royal', 'Havana'],
      mapExplanation: {
        good: 'Dominates on maps with tight corridors and chokepoints where grenade spam is unavoidable. Environmental hazards for mine displacement.',
        bad: 'Struggles on open maps where Pharah and long-range heroes can avoid his projectiles. High ground positions he cannot easily contest.'
      },
      counterExplanation: {
        counters: 'Grenades spam shields. Mine destroys turrets. Area damage denies choke points',
        counteredBy: 'Pharah attacks from above his arc. Fast heroes (Sombra/Kiriko/Tracer) dodge grenades. Zarya absorbs for charge. Lifeweaver outheals poke. Echo flies above.'
      }
    },
    {
      name: 'Mei',
      image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/1533fcb0ee1d3f9586f84b4067c6f63eca3322c1c661f69bfb41cd9e4f4bcc11.png',
      difficulty: 'medium',
      hardCounters: [],
      softCounters: ['Winston', 'Roadhog', 'Doomfist', 'Wrecking Ball'],
      hardCounteredBy: ['Pharah'],
      softCounteredBy: ['Tracer', 'Sombra', 'D.Va', 'Orisa', 'Kiriko'],
      synergies: ['Zarya', 'Ana', 'Lucio'],
      bestMaps: ['Eichenwalde', 'Hollywood', 'King\'s Row'],
      worstMaps: ['Junkertown', 'Havana', 'Ilios'],
      mapExplanation: {
        good: 'Excels on chokepoint-heavy maps where Ice Wall creates powerful separations. Indoor areas where freeze is most effective.',
        bad: 'Struggles on open maps with multiple flanking routes that bypass Ice Wall. Long sightlines where Pharah and ranged heroes dominate.'
      },
      counterExplanation: {
        counters: 'Freeze stops dive tanks. Ice Wall blocks Winston jump. Cryo-Freeze survives burst damage',
        counteredBy: 'Pharah attacks from range/air. Tracer recall cleanses freeze. Sombra hack prevents abilities. D.Va flies away from freeze. Orisa spin blocks, Kiriko suzu cleanses.'
      }
    },
    {
      name: 'Pharah',
      image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/f8261595eca3e43e3b37cadb8161902cc416e38b7e0caa855f4555001156d814.png',
      difficulty: 'medium',
      hardCounters: ['Junkrat', 'Reaper', 'Torbjorn', 'Symmetra'],
      softCounters: ['Brigitte', 'Bastion', 'Moira'],
      hardCounteredBy: ['Widowmaker'],
      softCounteredBy: ['Cassidy', 'Ashe', 'Soldier: 76', 'D.Va', 'Symmetra'],
      synergies: ['Mercy', 'Ana', 'Baptiste'],
      bestMaps: ['Blizzard World', 'Eichenwalde', 'Ilios'],
      worstMaps: ['King\'s Row', 'Hollywood', 'Numbani'],
      mapExplanation: {
        good: 'Dominates on maps with open skybox and vertical space for safe positioning. Control points where splash damage hits grouped enemies.',
        bad: 'Struggles on indoor maps with low ceilings that force ground-level play. Maps with abundant cover that protect enemies from rockets.'
      },
      counterExplanation: {
        counters: 'Flight avoids all ground-based heroes. Splash damage hits them from safety. Concussive Blast displaces',
        counteredBy: 'Widowmaker easy headshots on predictable flight. Hitscan heroes (Cassidy/Ashe/Soldier) track and burst. D.Va flies to contest and matrix rockets. Symmetra turrets track air.'
      }
    },
    {
      name: 'Reaper',
      image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/2edb9af69d987bb503cd31f7013ae693640e692b321a73d175957b9e64394f40.png',
      difficulty: 'easy',
      hardCounters: ['Winston', 'Roadhog'],
      softCounters: ['Reinhardt', 'Zarya'],
      hardCounteredBy: ['Pharah'],
      softCounteredBy: ['Echo', 'Widowmaker', 'Junkrat', 'D.Va'],
      synergies: ['Lucio', 'Moira', 'Ana'],
      bestMaps: ['Eichenwalde', 'Junkertown', 'King\'s Row'],
      worstMaps: ['Junkertown', 'Circuit Royal', 'Havana'],
      mapExplanation: {
        good: 'Excels on close-quarters maps where shotguns deal maximum damage. Indoor areas with limited escape routes for enemies.',
        bad: 'Struggles on open maps with long sightlines where he cannot close distance. High ground positions he cannot easily access.'
      },
      counterExplanation: {
        counters: 'Massive close-range DPS melts tanks. Lifesteal sustains through damage. Wraith escapes danger',
        counteredBy: 'Pharah/Echo stay airborne out of range. Long-range heroes (Widow/Hanzo) outrange shotguns. Junkrat mines create distance. D.Va matrix blocks shots.'
      }
    },
    {
      name: 'Sojourn',
      image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/a53bf7ad9d2f33aaf9199a00989f86d4ba1f67c281ba550312c7d96e70fec4ea.png',
      difficulty: 'medium',
      hardCounters: [],
      softCounters: ['Pharah', 'Echo', 'Widowmaker'],
      hardCounteredBy: ['Genji'],
      softCounteredBy: ['Genji', 'Lucio', 'Mauga', 'Roadhog', 'D.Va', 'Widowmaker', 'Winston', 'Tracer'],
      synergies: ['Baptiste', 'Mercy', 'Reinhardt'],
      bestMaps: ['Busan', 'Esperança', 'Paraíso'],
      worstMaps: ['King\'s Row', 'Eichenwalde', 'Nepal'],
      mapExplanation: {
        good: 'Strong on maps with long sightlines for charged railgun shots. Open areas where Power Slide provides effective mobility.',
        bad: 'Struggles on tight indoor maps where her mobility is limited. Close-quarters combat where flankers can pressure her effectively.'
      },
      counterExplanation: {
        counters: 'Railgun charged shots one-shot flyers. Hitscan tracking. Disruptor Shot zones areas',
        counteredBy: 'Genji deflects railgun. Fast heroes (Tracer/Lucio) dodge shots. Mauga and Roadhog disrupt and pull her out of position. D.Va matrix, Widow outranges, Winston dives.'
      }
    },
    {
      name: 'Soldier: 76',
      image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/20b4ef00ed05d6dba75df228241ed528df7b6c9556f04c8070bad1e2f89e0ff5.png',
      difficulty: 'easy',
      hardCounters: [],
      softCounters: ['Pharah', 'Mercy', 'Bastion', 'Echo'],
      hardCounteredBy: ['Widowmaker'],
      softCounteredBy: ['Roadhog', 'Ashe', 'D.Va', 'Winston', 'Lucio'],
      synergies: ['Ana', 'Baptiste', 'Reinhardt'],
      bestMaps: ['Antarctic Peninsula', 'Blizzard World', 'Busan'],
      worstMaps: ['Junkertown', 'Circuit Royal', 'Numbani'],
      mapExplanation: {
        good: 'Excels on maps with accessible high ground for Sprint positioning. Medium-range sightlines where his consistent damage is effective.',
        bad: 'Struggles on extreme long-range maps where snipers dominate. Very tight spaces where his positioning advantage is negated.'
      },
      counterExplanation: {
        counters: 'Consistent hitscan damage tracks flyers. Sprint positions for angles. Helix Rockets burst damage',
        counteredBy: 'Widowmaker outranges and one-shots. Roadhog hook punishes positioning. Ashe out-duels at range. D.Va matrix, Winston dives, Lucio boops.'
      }
    },
    {
      name: 'Sombra',
      image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/bca8532688f01b071806063b9472f1c0f9fc9c7948e6b59e210006e69cec9022.png',
      difficulty: 'hard',
      hardCounters: ['Doomfist', 'Orisa', 'Wrecking Ball'],
      softCounters: ['Tracer', 'Bastion'],
      hardCounteredBy: ['Winston'],
      softCounteredBy: ['Hanzo', 'Ana', 'Kiriko', 'Moira', 'Zenyatta'],
      synergies: ['Tracer', 'Wrecking Ball', 'Zenyatta'],
      bestMaps: ['Busan', 'Dorado', 'New Queen Street'],
      worstMaps: ['Junkertown', 'Havana', 'Rialto'],
      mapExplanation: {
        good: 'Dominates on maps with abundant health packs near key positions. Control points where EMP can catch multiple enemies.',
        bad: 'Struggles on payload maps with limited health pack access. Open areas where she has difficulty approaching safely even while invisible.'
      },
      counterExplanation: {
        counters: 'Hack disables ability-reliant heroes entirely. EMP removes all abilities and shields. Virus executes low targets',
        counteredBy: 'Winston reveals her with tesla cannon area damage. Hanzo Sonic Arrow reveals stealth. Ana sleep. Kiriko Suzu cleanses hack. Moira beam tracks, Zen discord.'
      }
    },
    {
      name: 'Symmetra',
      image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/7f2024c5387c9d76d944a5db021c2774d1e9d7cbf39e9b6a35b364d38ea250ac.png',
      difficulty: 'medium',
      hardCounters: ['Sigma'],
      softCounters: ['Genji', 'D.Va', 'Tracer', 'Lucio'],
      hardCounteredBy: ['Pharah'],
      softCounteredBy: ['Sombra', 'Mauga', 'Roadhog', 'Winston', 'Zarya'],
      synergies: ['Orisa', 'Baptiste', 'Brigitte'],
      bestMaps: ['Nepal', 'Throne of Anubis'],
      worstMaps: ['Junkertown', 'Circuit Royal', 'Havana'],
      mapExplanation: {
        good: 'Excels on control points where turret placement denies flanking routes. Tight corridors where charged orbs are difficult to avoid.',
        bad: 'Struggles on open maps where turrets are easily destroyed from range. Long sightlines where Pharah and snipers dominate.'
      },
      counterExplanation: {
        counters: 'Beam auto-locks mobile heroes. Turrets slow and reveal flankers. Teleporter creates unexpected angles',
        counteredBy: 'Pharah attacks from air. Sombra hacks turrets and teleporter. Tanks (Mauga/Roadhog) ignore turret damage. Winston dives, Zarya bubbles.'
      }
    },
    {
      name: 'Torbjorn',
      image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/1309ab1add1cc19189a2c8bc7b1471f88efa1073e9705d2397fdb37d45707d01.png',
      difficulty: 'easy',
      hardCounters: [],
      softCounters: ['Tracer', 'Genji', 'Lucio'],
      hardCounteredBy: ['Pharah'],
      softCounteredBy: ['Junkrat', 'D.Va', 'Widowmaker', 'Winston', 'Ramattra', 'Sombra'],
      synergies: ['Brigitte', 'Baptiste', 'Orisa'],
      bestMaps: ['Antarctic Peninsula', 'Suravasa'],
      worstMaps: ['Numbani', 'Circuit Royal', 'Dorado'],
      mapExplanation: {
        good: 'Strong on defense points where turret has clear sightlines. Indoor areas where turret is protected from long-range destruction.',
        bad: 'Struggles on open maps where turret is easily destroyed by Pharah. Attack-focused maps where turret setup time is a disadvantage.'
      },
      counterExplanation: {
        counters: 'Turret auto-locks flankers providing persistent damage. Overload increases survivability. Molten Core zones',
        counteredBy: 'Pharah destroys turret from air safely. Junkrat spam breaks turret. D.Va flies and eats rivet shots. Widow picks from range. Winston dives, Ramattra punches, Sombra hacks.'
      }
    },
    {
      name: 'Tracer',
      image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/a66413200e934da19540afac965cfe8a2de4ada593d9a52d53108bb28e8bbc9c.png',
      difficulty: 'hard',
      hardCounters: [],
      softCounters: ['Widowmaker', 'Hanzo', 'Zenyatta', 'Ana'],
      hardCounteredBy: ['Cassidy'],
      softCounteredBy: ['Mei', 'Symmetra', 'Torbjorn', 'Moira', 'Brigitte', 'Torbjorn'],
      synergies: ['Winston', 'Lucio', 'Zenyatta'],
      bestMaps: ['Blizzard World', 'Colosseo', 'Dorado'],
      worstMaps: ['Junkertown', 'Havana', 'Circuit Royal'],
      mapExplanation: {
        good: 'Excels on maps with abundant flanking routes and health packs. Control points where she can harass backlines effectively.',
        bad: 'Struggles on open maps with limited cover where she is easily tracked. Maps with few health packs that limit her sustain.'
      },
      counterExplanation: {
        counters: 'Extreme mobility flanks immobile targets. Recall cleanses damage. Pulse Bomb one-shots squishies',
        counteredBy: 'Cassidy Magnetic Grenade sticks and kills. Mei freeze stops blinks. Torb/Sym turrets auto-lock. Moira beam tracks. Brigitte bash stuns. Torb turret locks on blinks.'
      }
    },
    {
      name: 'Widowmaker',
      image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/a714f1cb33cc91c6b5b3e89ffe7e325b99e7c89cc8e8feced594f81305147efe.png',
      difficulty: 'hard',
      hardCounters: ['Pharah', 'Echo', 'Soldier: 76'],
      softCounters: ['Zenyatta', 'Ana', 'Mercy'],
      hardCounteredBy: ['Genji'],
      softCounteredBy: ['Tracer', 'Winston', 'Widowmaker', 'Sombra', 'Lucio', 'Wrecking Ball', 'D.Va'],
      synergies: ['Mercy', 'Baptiste', 'Orisa'],
      bestMaps: ['Antarctic Peninsula', 'Blizzard World', 'Busan'],
      worstMaps: ['King\'s Row', 'Eichenwalde', 'Nepal'],
      mapExplanation: {
        good: 'Dominates on maps with long sightlines and secure high ground positions. Open areas where enemies are forced into her crosshairs.',
        bad: 'Struggles on close-quarters maps where flankers can dive her easily. Indoor areas with limited sightlines that negate her range advantage.'
      },
      counterExplanation: {
        counters: 'One-shot headshots on squishies. Infra-Sight reveals positions. Grapple accesses unique sightlines',
        counteredBy: 'Genji deflects shots and dives. Tracer flanks before she can react. Winston jumps and pressures. Widow mirror match. Sombra hacks, Lucio boops, Ball swings in, D.Va dives.'
      }
    },
    {
      name: 'Venture',
      image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/5d87623006ccc77578396831d4629f91b5162235a553b3f442e1a43161898e94.png',
      difficulty: 'medium',
      hardCounters: [],
      softCounters: ['Bastion', 'Torbjorn', 'Symmetra'],
      hardCounteredBy: ['Pharah'],
      softCounteredBy: ['Widowmaker', 'Sigma', 'Zarya', 'Mei', 'Sombra', 'Echo'],
      synergies: ['Lucio', 'Ana', 'Baptiste'],
      bestMaps: ['Hanaoka', 'Numbani', 'Shambali Monastery'],
      worstMaps: ['Junkertown', 'Circuit Royal', 'Ilios'],
      mapExplanation: {
        good: 'Excels on maps with uneven terrain for creative burrow approaches. Control points where underground mobility disrupts enemy positioning.',
        bad: 'Struggles on flat, open maps where burrow paths are predictable. Maps with abundant high ground she cannot easily access underground.'
      },
      counterExplanation: {
        counters: 'Burrow approaches turrets underground. Drill Dash executes low HP targets. Underground immune to static defenses',
        counteredBy: 'Pharah attacks from air where Venture cannot reach. Widow/Sigma attack from high ground with sightlines. Zarya beam catches them emerging. Mei freezes on emergence, Sombra hacks, Echo flies.'
      }
    }
  ],
  support: [
    {
      name: 'Ana',
      image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/3429c394716364bbef802180e9763d04812757c205e1b4568bc321772096ed86.png',
      difficulty: 'hard',
      hardCounters: ['Roadhog', 'Junker Queen', 'Mauga'],
      softCounters: ['Pharah', 'Widowmaker', 'Bastion'],
      hardCounteredBy: [],
      softCounteredBy: ['Lucio', 'Tracer', 'Winston', 'Doomfist', 'Genji', 'Sombra', 'Kiriko', 'Widowmaker'],
      synergies: ['Reinhardt', 'Genji', 'Pharah'],
      bestMaps: ['Blizzard World', 'Busan', 'Circuit Royal'],
      worstMaps: ['Nepal', 'Lijiang Tower', 'Oasis'],
      mapExplanation: {
        good: 'Excels on maps with long sightlines for safe healing and anti-nade. High ground positions where she can sleep dart key targets.',
        bad: 'Struggles on maps with abundant cover that blocks her line of sight heals. Close-quarters where flankers can easily dive her.'
      },
      counterExplanation: {
        counters: 'Anti-heal negates lifesteal heroes entirely. Sleep dart stops channeled abilities. Nano Boost turns fights',
        counteredBy: 'Mobile dive heroes (Tracer/Winston/Doom/Genji) pressure before she can sleep. Lucio speed makes team hard to hit. No escape ability. Sombra hacks, Kiriko suzu, Widow picks.'
      }
    },
    {
      name: 'Baptiste',
      image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/f979896f74ba22db2a92a85ae1260124ab0a26665957a624365e0f96e5ac5b5c.png',
      difficulty: 'medium',
      hardCounters: [],
      softCounters: ['Pharah', 'Genji', 'Roadhog'],
      hardCounteredBy: ['Sombra'],
      softCounteredBy: ['Lucio', 'Cassidy', 'Widowmaker', 'Hanzo', 'Reaper', 'Venture'],
      synergies: ['Bastion', 'Ashe', 'Sigma'],
      bestMaps: ['Busan', 'Dorado', 'Esperança'],
      worstMaps: ['Nepal', 'Lijiang Tower', 'Ilios'],
      mapExplanation: {
        good: 'Strong on maps with clear sightlines for Immortality Field placement. High ground positions for Amplification Matrix usage.',
        bad: 'Struggles on chaotic KOTH maps where Immortality Field is easily destroyed. Close-quarters where he cannot maintain safe distance.'
      },
      counterExplanation: {
        counters: 'Immortality Field prevents burst damage. Amplification Matrix doubles team damage. Regenerative Burst group heal',
        counteredBy: 'Sombra hack disables lamp. Lucio boops team away from lamp. Precision heroes (Cassidy/Widow/Hanzo) destroy lamp and pick him. Reaper melts, Venture burrows under.'
      }
    },
    {
      name: 'Brigitte',
      image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/48392820c6976ee1cd8dde13e71df85bf15560083ee5c8658fe7c298095d619a.png',
      difficulty: 'easy',
      hardCounters: [],
      softCounters: ['Tracer', 'Genji', 'Doomfist', 'Wrecking Ball'],
      hardCounteredBy: ['Pharah'],
      softCounteredBy: ['Cassidy', 'Soldier: 76', 'Junkrat', 'Bastion', 'Ramattra', 'Baptiste'],
      synergies: ['Reinhardt', 'Lucio', 'Reaper'],
      bestMaps: ['Eichenwalde', 'Hollywood', 'King\'s Row'],
      worstMaps: ['Junkertown', 'Circuit Royal', 'Havana'],
      mapExplanation: {
        good: 'Dominates on close-quarters brawl maps where her melee range is effective. Tight corridors where Whip Shot hits are guaranteed.',
        bad: 'Struggles on open maps with long sightlines where she cannot reach enemies. High ground positions she cannot easily access.'
      },
      counterExplanation: {
        counters: 'Shield Bash stuns flankers. Inspire heal sustains brawl. Whip Shot displaces divers',
        counteredBy: 'Pharah attacks from air out of range. Long-range DPS (Cassidy/Soldier) break shield. Spam damage (Junkrat/Bastion) overwhelms. Ramattra punches through, Baptiste lamp negates burst.'
      }
    },
    {
      name: 'Illari',
      image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/5ea986038f9d307bd4613d5e6f2c4c8e7f15f30ceeeabbdd7a06637a38f17e1f.png',
      difficulty: 'medium',
      hardCounters: [],
      softCounters: ['Tracer', 'Genji', 'Pharah'],
      hardCounteredBy: ['Winston'],
      softCounteredBy: ['Widowmaker', 'Ashe', 'Baptiste', 'D.Va', 'Sombra', 'Genji', 'Kiriko'],
      synergies: ['Pharah', 'Ashe', 'Hanzo'],
      bestMaps: ['New Junk City', 'Runasapi', 'Suravasa'],
      worstMaps: ['King\'s Row', 'Eichenwalde', 'Nepal'],
      mapExplanation: {
        good: 'Excels on maps with long sightlines for Solar Rifle poke damage. Open areas where Healing Pylon covers large zones.',
        bad: 'Struggles on tight indoor maps where pylon is easily destroyed. Close-quarters combat where dive heroes can pressure her.'
      },
      counterExplanation: {
        counters: 'Solar Rifle long-range burst damage. Healing Pylon area heal. Captive Sun massive area damage',
        counteredBy: 'Winston dives and destroys pylon. Snipers (Widow/Ashe) outrange her. Baptiste outheals. D.Va eats rifle shots. Sombra hacks pylon. Genji deflects, Kiriko suzu.'
      }
    },
    {
      name: 'Juno',
      image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/585b2d60cbd3c271b6ad5ad0922537af0c6836fab6c89cb9979077f7bb0832b5.png',
      difficulty: 'medium',
      hardCounters: [],
      softCounters: ['Pharah', 'Echo', 'Genji'],
      hardCounteredBy: ['Widowmaker'],
      softCounteredBy: ['D.Va', 'Lucio', 'Sombra', 'Ashe', 'Cassidy'],
      synergies: ['Pharah', 'Mercy', 'Echo'],
      bestMaps: ['Runasapi', 'Throne of Anubis'],
      worstMaps: ['King\'s Row', 'Hollywood', 'Numbani'],
      mapExplanation: {
        good: 'Strong on maps with open skybox for glide mobility. Control points where speed boost enables aggressive team plays.',
        bad: 'Struggles on indoor maps with low ceilings that limit glide effectiveness. Tight spaces where her mobility advantage is negated.'
      },
      counterExplanation: {
        counters: 'Glide Gun projectile heal keeps flyers alive. Speed boost enables dive. Orbital Ray area damage',
        counteredBy: 'Widowmaker easily snipes while gliding. D.Va chases with boosters. Lucio matches speed. Sombra hack removes mobility. Hitscan burst (Ashe/Cassidy).'
      }
    },
    {
      name: 'Kiriko',
      image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/088aff2153bdfa426984b1d5c912f6af0ab313f0865a81be0edd114e9a2f79f9.png',
      difficulty: 'medium',
      hardCounters: [],
      softCounters: ['Genji', 'Tracer', 'Sombra'],
      hardCounteredBy: ['Winston'],
      softCounteredBy: ['Tracer', 'Genji', 'Roadhog', 'Mei', 'Brigitte', 'Moira', 'Symmetra', 'Pharah', 'Echo'],
      synergies: ['Genji', 'Sojourn', 'Hanzo'],
      bestMaps: ['Esperança', 'Hanaoka', 'Havana'],
      worstMaps: ['Junkertown', 'Circuit Royal', 'Ilios'],
      mapExplanation: {
        good: 'Excels on maps with flanking routes for teleport plays. Control points where Protection Suzu saves key positions.',
        bad: 'Struggles on open maps with limited cover for teleport escapes. Long sightlines where her projectile kunai are difficult to land.'
      },
      counterExplanation: {
        counters: 'Protection Suzu cleanses all debuffs and provides invulnerability. Teleport saves allies. Kunai headshot potential',
        counteredBy: 'Winston beam auto-locks through teleport. Fast flankers bait Suzu. Roadhog hook before teleport. Mei/Brigitte stun. Moira/Sym beam track. Pharah/Echo air attacks.'
      }
    },
    {
      name: 'Lifeweaver',
      image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/39d4514f1b858bc228035b09d5a74ed41f8eeefc9a0d1873570b216ba04334df.png',
      difficulty: 'medium',
      hardCounters: [],
      softCounters: ['Winston', 'Doomfist', 'Roadhog'],
      hardCounteredBy: ['Widowmaker'],
      softCounteredBy: ['Sombra', 'Lucio', 'Hanzo', 'Ashe', 'Pharah', 'D.Va'],
      synergies: ['Pharah', 'Bastion', 'Widowmaker'],
      bestMaps: [],
      worstMaps: ['Junkertown', 'Numbani', 'Circuit Royal'],
      mapExplanation: {
        good: 'Strong on maps with environmental hazards where Life Grip saves allies. Vertical spaces where Petal Platform creates value.',
        bad: 'Struggles on flat maps where Petal Platform provides minimal advantage. Open areas where he is easily focused by long-range damage.'
      },
      counterExplanation: {
        counters: 'Life Grip saves allies from dives and hooks. Petal Platform creates high ground. Healing Blossom strong heal',
        counteredBy: 'Widowmaker picks from long range. Sombra hack disables grip and platform. Lucio boops off platforms. Snipers exploit positioning. Pharah air, D.Va dives.'
      }
    },
    {
      name: 'Lucio',
      image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/e2ff2527610a0fbe0c9956f80925123ef3e66c213003e29d37436de30b90e4e1.png',
      difficulty: 'medium',
      hardCounters: [],
      softCounters: ['Reaper', 'Mei', 'Junkrat'],
      hardCounteredBy: [],
      softCounteredBy: ['Symmetra', 'Moira', 'Winston', 'Mei', 'Wrecking Ball', 'Ramattra', 'Sombra'],
      synergies: ['Reinhardt', 'Reaper', 'Doomfist'],
      bestMaps: ['Busan', 'Colosseo', 'Dorado'],
      worstMaps: ['Numbani', 'Havana', 'Hollywood'],
      mapExplanation: {
        good: 'Dominates on maps with environmental kill opportunities and abundant walls for riding. Control points where speed boost enables aggressive plays.',
        bad: 'Struggles on open flat maps with limited wall-ride surfaces. Indoor areas with low ceilings that restrict his mobility.'
      },
      counterExplanation: {
        counters: 'Speed boost enables brawl and disengages. Wall-ride avoids ground damage. Boop displaces enemies',
        counteredBy: 'Auto-lock heroes (Sym/Moira/Winston) track through movement. Mei freeze stops wall-ride. Ball disrupts positioning. Ramattra nemesis catches, Sombra hacks.'
      }
    },
    {
      name: 'Mercy',
      image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/2508ddd39a178d5f6ae993ab43eeb3e7961e5a54a9507e6ae347381193f28943.png',
      difficulty: 'easy',
      hardCounters: [],
      softCounters: ['Pharah', 'Genji', 'Widowmaker'],
      hardCounteredBy: ['Genji'],
      softCounteredBy: ['Widowmaker', 'Cassidy', 'Tracer', 'Reaper', 'Sombra', 'Soldier: 76'],
      synergies: ['Pharah', 'Ashe', 'Echo'],
      bestMaps: ['Dorado', 'Hanaoka', 'Ilios'],
      worstMaps: ['King\'s Row', 'Eichenwalde', 'Nepal'],
      mapExplanation: {
        good: 'Excels on maps with vertical space for Guardian Angel mobility. Open areas where she can damage boost safely from multiple angles.',
        bad: 'Struggles on tight indoor maps where flankers can corner her easily. Close-quarters combat where her lack of self-defense is exposed.'
      },
      counterExplanation: {
        counters: 'Damage boost amplifies DPS output. Guardian Angel flight enables Pharmercy. Resurrect recovers key picks',
        counteredBy: 'Genji dives and pressures. Hitscan (Widow/Cassidy) shoot her while flying. Tracer/Reaper corner and eliminate. Sombra hacks GA, Soldier tracks.'
      }
    },
    {
      name: 'Moira',
      image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/000beeb5606e01497897fa9210dd3b1e78e1159ebfd8afdc9e989047d7d3d08f.png',
      difficulty: 'easy',
      hardCounters: [],
      softCounters: ['Genji', 'Tracer', 'Reaper', 'Lucio'],
      hardCounteredBy: ['Pharah'],
      softCounteredBy: ['Bastion', 'Junkrat', 'Widowmaker', 'Ana', 'D.Va', 'Brigitte'],
      synergies: ['Reaper', 'Reinhardt', 'Winston'],
      bestMaps: ['Antarctic Peninsula', 'Eichenwalde', 'King\'s Row'],
      worstMaps: ['Junkertown', 'Circuit Royal', 'Havana'],
      mapExplanation: {
        good: 'Dominates on close-quarters brawl maps where her beam range is effective. Tight corridors where Coalescence hits multiple targets.',
        bad: 'Struggles on open maps with long sightlines where she cannot reach enemies. High ground positions she cannot easily access.'
      },
      counterExplanation: {
        counters: 'Biotic Grasp auto-locks mobile heroes. Fade escapes danger. Coalescence pierces shields and heals through damage',
        counteredBy: 'Pharah stays out of beam range. Long-range DPS (Bastion/Junkrat/Widow) outrange her. Ana anti-heal stops self-heal. D.Va matrix, Brigitte armor packs.'
      }
    },
    {
      name: 'Zenyatta',
      image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/71cabc939c577581f66b952f9c70891db779251e8e70f29de3c7bf494edacfe4.png',
      difficulty: 'hard',
      hardCounters: [],
      softCounters: ['Roadhog', 'Reinhardt', 'Winston'],
      hardCounteredBy: ['Tracer'],
      softCounteredBy: ['Genji', 'Pharah', 'Widowmaker', 'Sombra', 'Junker Queen', 'Zarya'],
      synergies: ['Genji', 'Tracer', 'Winston'],
      bestMaps: ['Nepal', 'Numbani'],
      worstMaps: ['Dorado', 'Hollywood', 'King\'s Row'],
      mapExplanation: {
        good: 'Strong on maps with long sightlines for safe Discord Orb placement. High ground positions where his lack of mobility is less punishing.',
        bad: 'Struggles on maps with abundant flanking routes where he is easily dove. Close-quarters combat where he cannot maintain safe distance.'
      },
      counterExplanation: {
        counters: 'Discord Orb amplifies damage on tanks by 25%. Transcendence counters ultimates. High damage output',
        counteredBy: 'Tracer flanks and one-clips. Mobile heroes (Genji/Pharah) avoid his orbs. Widow one-shots. No mobility to escape. Sombra hacks, Junker Queen wounds, Zarya bubbles.'
      }
    }
  ]
};

export const tips = {
  tank: {
    'D.Va': 'Use Defense Matrix to eat ultimates like Graviton Surge, Blizzard, and Pulse Bomb. Fly to high ground to contest snipers. Micro Missiles while boosting for burst damage.',
    'Doomfist': 'Power Block is your main survival tool - it reduces damage and empowers your next Rocket Punch. Use Seismic Slam to initiate, then punch to escape.',
    'Junker Queen': 'Your Commanding Shout heals you and gives speed - use it before engaging. All your abilities apply wound damage that heals you. Play aggressively.',
    'Mauga': 'Your Incendiary gun (left) deals critical damage, Volatile gun (right) ignites enemies. Use Cardiac Overdrive when taking heavy fire - it provides lifesteal.',
    'Orisa': 'Fortify makes you unstoppable and reduces damage by 40%. Use Javelin Spin to advance while blocking projectiles. Energy Javelin can pin enemies to walls.',
    'Ramattra': 'Switch between Omnic form (range) and Nemesis form (brawl) strategically. In Nemesis, use Block while punching. Ravenous Vortex slows and pulls enemies down.',
    'Reinhardt': 'Keep your barrier up and coordinate with your team. Fire Strike pierces shields. Charge isolated targets only - youre vulnerable during it.',
    'Roadhog': 'Land hooks on key targets. Take a Breather gives 50% damage reduction while healing. Your ultimate pushes enemies away - use it for environmental kills.',
    'Sigma': 'Use Kinetic Grasp to absorb projectiles and gain shields. Accretion stuns enemies. Place barrier strategically, not just in front of you.',
    'Winston': 'Jump Pack has a short cooldown - use it to engage then disengage. Drop bubble on landing. Primary fire auto-locks - track fleeing targets. Primal Rage for disruption.',
    'Wrecking Ball': 'Build momentum by swinging for more slam damage. Use Adaptive Shields when surrounded (more enemies = more shields). Piledriver into Minefield combo.',
    'Zarya': 'Build energy with bubbles by absorbing damage. At high energy, you have one of the highest DPS in the game. Save bubbles for saving allies or yourself from burst.'
  },
  damage: {
    'Ashe': 'Dynamite is incredible poke damage - aim it at groups. Coach Gun can be used for mobility or to create space. B.O.B. captures objectives and is a 7th player.',
    'Bastion': 'Configuration: Assault gives you mobility. Configuration: Artillery is great for breaking shields and hitting distant targets. Position near cover.',
    'Cassidy': 'Magnetic Grenade is your anti-flank tool. Combat Roll reloads your weapon instantly. High Noon forces enemies into cover or kills them.',
    'Echo': 'Flight gives you superior angles - use it aggressively. Focusing Beam executes targets below 50% HP. Duplicate the enemy tank for 2-tank advantage.',
    'Genji': 'Deflect projectiles back at enemies. Swift Strike resets on elimination - chain kills during Dragonblade. Climb walls for unexpected angles.',
    'Hanzo': 'Storm Arrows melts barriers and tanks. Sonic Arrow reveals enemy positions - use it before engagements. Lead your shots on moving targets.',
    'Junkrat': 'Spam chokes and deny areas. Concussion Mine is both mobility and damage. RIP-Tire can climb walls - use alternate routes.',
    'Mei': 'Ice Wall isolates enemies or blocks sightlines. Primary fire slows and freezes. Cryo-Freeze heals you and makes you invulnerable. Blizzard captures points.',
    'Pharah': 'Stay airborne and use cover in the air (buildings, walls). Concussive Blast boops enemies off high ground. Coordinate Barrage with barriers or when enemies use abilities.',
    'Reaper': 'Wraith Form cleanses anti-heal and escapes danger. Shadow Step flanks. Shoot-Melee combo for burst. Death Blossom in the middle of grouped enemies.',
    'Sojourn': 'Deal damage to charge railgun. Charged railgun headshots deal 195 damage. Disruptor Shot denies areas and slows enemies. Power Slide for mobility.',
    'Soldier: 76': 'Sprint to high ground quickly. Helix Rockets deal burst damage. Biotic Field heals you and allies - place it smartly. Tactical Visor guarantees hits.',
    'Sombra': 'Hack disables abilities for 1.75 seconds. EMP destroys barriers and hacks everyone. Virus amplifies damage dealt to target. Stay near health packs.',
    'Symmetra': 'Primary fire locks on and gains damage over time. Place turrets on flanks and on ceilings. Teleporter enables aggressive plays and quick rotations.',
    'Torbjorn': 'Your turret auto-aims - place it with sightlines. Overload gives armor, fire rate, and movement speed. Molten Core denies areas with lava pools.',
    'Tracer': 'Recall goes back 3 seconds - bait abilities then recall. Blink through enemies for confusion. Pulse Bomb sticks to enemies - target supports or tanks.',
    'Widowmaker': 'Fully charge shots for 300 damage headshots. Grappling Hook has a short cooldown. Venom Mine alerts you to flankers. Change positions after 2-3 kills.',
    'Venture': 'Burrow to reposition safely underground and become invulnerable. Drill Dash through multiple enemies. Tectonic Shock damages and launches enemies.'
  },
  support: {
    'Ana': 'Sleep Dart stops channeled ultimates and dangerous targets. Biotic Grenade anti-heals enemies (huge impact). Nano Boost aggressive tanks or DPS with ultimates.',
    'Baptiste': 'Immortality Field prevents deaths in teamfights - place it smartly. Amplification Matrix doubles healing and damage. Crouch-jump for super jump mobility.',
    'Brigitte': 'Inspire activates when you damage enemies - constantly deal damage. Shield Bash stuns. Rally before fights for armor overheal. Protect your other support.',
    'Illari': 'Healing Pylon provides passive healing - place it safely. Solar Rifle deals high damage at range. Captive Sun chains massive damage between enemies.',
    'Juno': 'Glide Gun fires healing projectiles - lead your targets. Hyper Ring speeds up allies. Pulsar Torpedoes auto-lock and deal damage. Orbital Ray from ultimate.',
    'Kiriko': 'Protection Suzu cleanses all negative effects and provides brief invulnerability. Teleport has many uses - saving allies or yourself. Kunai headshots deal 120 damage.',
    'Lifeweaver': 'Life Grip pulls allies to safety - use it to save from hooks, charges, or environmental deaths. Petal Platform creates high ground. Heal with Healing Blossom.',
    'Lucio': 'Speed boost is incredibly valuable - use it more than healing. Wall-ride constantly for survivability. Boop enemies into environmental kills or bad positions.',
    'Mercy': 'Damage boost when your target doesnt need healing. Guardian Angel to teammates constantly. Resurrect safely behind cover. Valkyrie enables chain healing/boosting.',
    'Moira': 'Balance healing resource with damage dealing. Fade has a short cooldown - use it aggressively. Coalescence pierces barriers - use it for value on multiple allies/enemies.',
    'Zenyatta': 'Discord Orb on priority targets - call it out to your team. Charge right-click for burst damage. Transcendence counters most offensive ultimates but NOT anti-heal.'
  }
};

// Updated win rates based on Season 18 data (October 2025) from various sources including Blizzard Hero Stats, tier lists, and community analyses.
export const winRates = {
  tank: {
    'D.Va': 52,
    'Doomfist': 50,
    'Junker Queen': 51.97,
    'Mauga': 52,
    'Orisa': 50,
    'Ramattra': 52,
    'Reinhardt': 48,
    'Roadhog': 48,
    'Sigma': 51.03,
    'Winston': 54,
    'Wrecking Ball': 50,
    'Zarya': 54
  },
  damage: {
    'Ashe': 52,
    'Bastion': 48,
    'Cassidy': 52,
    'Echo': 52,
    'Genji': 50,
    'Hanzo': 48,
    'Junkrat': 50,
    'Mei': 58,
    'Pharah': 52,
    'Reaper': 50,
    'Sojourn': 54,
    'Soldier: 76': 50,
    'Sombra': 50,
    'Symmetra': 55,
    'Torbjorn': 55.28,
    'Tracer': 54,
    'Widowmaker': 54,
    'Venture': 50
  },
  support: {
    'Ana': 54,
    'Baptiste': 50,
    'Brigitte': 52,
    'Illari': 50,
    'Juno': 51.16,
    'Kiriko': 54,
    'Lifeweaver': 46,
    'Lucio': 58,
    'Mercy': 48,
    'Moira': 50,
    'Zenyatta': 52
  }
};
