import React, { useState } from 'react';
import { Shield, Sword, Heart, AlertCircle, CheckCircle2, Users, Zap } from 'lucide-react';

const heroes = {
tank: [
{
name: 'D.Va',
image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/ca114f72193e4d58a85c087e9409242f1a31e808cf4058678b8cbf767c2a9a0a.png',
counters: ['Pharah', 'Junkrat', 'Reaper'],
counteredBy: ['Zarya', 'Symmetra', 'Mei'],
hardCounters: ['Zarya'],
softCounters: ['Pharah', 'Junkrat'],
synergies: ['Genji', 'Tracer', 'Pharah'],
difficulty: 'medium'
},
{
name: 'Doomfist',
image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/13750471c693c1a360eb19d5ace229c8599a729cd961d72ebee0e157657b7d18.png',
counters: ['Widowmaker', 'Ashe', 'Ana'],
counteredBy: ['Sombra', 'Pharah', 'Orisa'],
hardCounters: ['Sombra'],
softCounters: ['Widowmaker', 'Ashe'],
synergies: ['Ana', 'Zarya', 'Lucio'],
difficulty: 'hard'
},
{
name: 'Junker Queen',
image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/b4fa5f937fe07ef56c78bca80be9602c062b8d4451692aecff50e2f68c5c6476.png',
counters: ['Genji', 'Tracer', 'Lucio'],
counteredBy: ['Ana', 'Zenyatta', 'Reaper'],
hardCounters: ['Ana'],
softCounters: ['Genji', 'Tracer'],
synergies: ['Lucio', 'Brigitte', 'Reaper'],
difficulty: 'medium'
},
{
name: 'Mauga',
image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/9ee3f5a62893091d575ec0a0d66df878597086374202c6fc7da2d63320a7d02e.png',
counters: ['Reinhardt', 'Winston', 'Brigitte'],
counteredBy: ['Ana', 'Reaper', 'Bastion'],
hardCounters: ['Ana'],
softCounters: ['Reinhardt', 'Winston'],
synergies: ['Baptiste', 'Mercy', 'Bastion'],
difficulty: 'easy'
},
{
name: 'Orisa',
image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/71e96294617e81051d120b5d04b491bb1ea40e2933da44d6631aae149aac411d.png',
counters: ['Reinhardt', 'Roadhog', 'Pharah'],
counteredBy: ['Sombra', 'Reaper', 'Junkrat'],
hardCounters: ['Sombra'],
softCounters: ['Pharah', 'Roadhog'],
synergies: ['Bastion', 'Baptiste', 'Mercy'],
difficulty: 'easy'
},
{
name: 'Ramattra',
image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/3e0367155e1940a24da076c6f1f065aacede88dbc323631491aa0cd5a51e0b66.png',
counters: ['Genji', 'Tracer', 'D.Va'],
counteredBy: ['Bastion', 'Reaper', 'Pharah'],
hardCounters: ['Bastion'],
softCounters: ['Genji', 'Tracer'],
synergies: ['Ana', 'Zenyatta', 'Reaper'],
difficulty: 'hard'
},
{
name: 'Reinhardt',
image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/490d2f79f8547d6e364306af60c8184fb8024b8e55809e4cc501126109981a65.png',
counters: ['Genji', 'Tracer', 'Reaper'],
counteredBy: ['Bastion', 'Junkrat', 'Reaper'],
hardCounters: ['Bastion'],
softCounters: ['Junkrat'],
synergies: ['Ana', 'Lucio', 'Brigitte'],
difficulty: 'medium'
},
{
name: 'Roadhog',
image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/72e02e747b66b61fcbc02d35d350770b3ec7cbaabd0a7ca17c0d82743d43a7e8.png',
counters: ['Sombra', 'Tracer', 'Genji'],
counteredBy: ['Ana', 'Reaper', 'Mei'],
hardCounters: ['Ana'],
softCounters: ['Reaper'],
synergies: ['Zenyatta', 'Kiriko', 'Ana'],
difficulty: 'easy'
},
{
name: 'Sigma',
image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/cd7a4c0a0df8924afb2c9f6df864ed040f20250440c36ca2eb634acf6609c5e4.png',
counters: ['Pharah', 'Widowmaker', 'Hanzo'],
counteredBy: ['Doomfist', 'Symmetra', 'Sombra'],
hardCounters: ['Symmetra'],
softCounters: ['Pharah'],
synergies: ['Baptiste', 'Ashe', 'Hanzo'],
difficulty: 'hard'
},
{
name: 'Winston',
image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/bd9c8e634d89488459dfc1aeb21b602fa5c39aa05601a4167682f3a3fed4e0ee.png',
counters: ['Genji', 'Widowmaker', 'Hanzo'],
counteredBy: ['Reaper', 'Bastion', 'Roadhog'],
hardCounters: ['Reaper'],
softCounters: ['Genji', 'Widowmaker'],
synergies: ['D.Va', 'Genji', 'Tracer'],
difficulty: 'medium'
},
{
name: 'Wrecking Ball',
image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/5c18e39ce567ee8a84078f775b9f76a2ba891de601c059a3d2b46b61ae4afb42.png',
counters: ['Widowmaker', 'Ashe', 'Ana'],
counteredBy: ['Sombra', 'Mei', 'Cassidy'],
hardCounters: ['Sombra'],
softCounters: ['Mei', 'Cassidy'],
synergies: ['Tracer', 'Sombra', 'Zenyatta'],
difficulty: 'hard'
},
{
name: 'Zarya',
image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/8819ba85823136640d8eba2af6fd7b19d46b9ee8ab192a4e06f396d1e5231f7a.png',
counters: ['D.Va', 'Roadhog', 'Reinhardt'],
counteredBy: ['Pharah', 'Junkrat', 'Bastion'],
hardCounters: ['Pharah'],
softCounters: ['D.Va'],
synergies: ['Reinhardt', 'Genji', 'Hanzo'],
difficulty: 'hard'
}
],
damage: [
{
name: 'Ashe',
image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/8dc2a024c9b7d95c7141b2ef065590dbc8d9018d12ad15f76b01923986702228.png',
counters: ['Pharah', 'Echo', 'Mercy'],
counteredBy: ['Genji', 'Tracer', 'Winston'],
hardCounters: ['Genji'],
softCounters: ['Pharah', 'Echo'],
synergies: ['Mercy', 'Baptiste', 'Orisa'],
difficulty: 'medium'
},
{
name: 'Bastion',
image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/4d715f722c42215072b5dd0240904aaed7b5285df0b2b082d0a7f1865b5ea992.png',
counters: ['Reinhardt', 'Orisa', 'Roadhog'],
counteredBy: ['Genji', 'Tracer', 'Widowmaker'],
hardCounters: ['Genji'],
softCounters: ['Reinhardt', 'Orisa'],
synergies: ['Orisa', 'Baptiste', 'Mercy'],
difficulty: 'easy'
},
{
name: 'Cassidy',
image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/6cfb48b5597b657c2eafb1277dc5eef4a07eae90c265fcd37ed798189619f0a5.png',
counters: ['Tracer', 'Genji', 'Pharah'],
counteredBy: ['Widowmaker', 'Hanzo', 'Roadhog'],
hardCounters: ['Widowmaker'],
softCounters: ['Tracer', 'Genji'],
synergies: ['Ana', 'Baptiste', 'Reinhardt'],
difficulty: 'medium'
},
{
name: 'Echo',
image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/f086bf235cc6b7f138609594218a8385c8e5f6405a39eceb0deb9afb429619fe.png',
counters: ['Junkrat', 'Torbjörn', 'Bastion'],
counteredBy: ['Widowmaker', 'Soldier: 76', 'Ashe'],
hardCounters: ['Widowmaker'],
softCounters: ['Junkrat', 'Torbjörn'],
synergies: ['Mercy', 'Ana', 'Baptiste'],
difficulty: 'hard'
},
{
name: 'Genji',
image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/4edf5ea6d58c449a2aeb619a3fda9fff36a069dfbe4da8bc5d8ec1c758ddb8dc.png',
counters: ['Widowmaker', 'Hanzo', 'Bastion'],
counteredBy: ['Winston', 'Symmetra', 'Moira'],
hardCounters: ['Winston'],
softCounters: ['Widowmaker', 'Hanzo'],
synergies: ['Ana', 'Zenyatta', 'Winston'],
difficulty: 'hard'
},
{
name: 'Hanzo',
image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/aecd8fa677f0093344fab7ccb7c37516c764df3f5ff339a5a845a030a27ba7e0.png',
counters: ['Bastion', 'Torbjörn', 'Zenyatta'],
counteredBy: ['Genji', 'Tracer', 'Winston'],
hardCounters: ['Genji'],
softCounters: ['Bastion', 'Torbjörn'],
synergies: ['Zarya', 'Sigma', 'Baptiste'],
difficulty: 'hard'
},
{
name: 'Junkrat',
image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/037e3df083624e5480f8996821287479a375f62b470572a22773da0eaf9441d0.png',
counters: ['Reinhardt', 'Bastion', 'Torbjörn'],
counteredBy: ['Pharah', 'Widowmaker', 'Zarya'],
hardCounters: ['Pharah'],
softCounters: ['Reinhardt', 'Bastion'],
synergies: ['Orisa', 'Baptiste', 'Brigitte'],
difficulty: 'easy'
},
{
name: 'Mei',
image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/1533fcb0ee1d3f9586f84b4067c6f63eca3322c1c661f69bfb41cd9e4f4bcc11.png',
counters: ['Winston', 'Roadhog', 'Doomfist'],
counteredBy: ['Pharah', 'Widowmaker', 'Hanzo'],
hardCounters: ['Pharah'],
softCounters: ['Winston', 'Roadhog'],
synergies: ['Zarya', 'Ana', 'Lucio'],
difficulty: 'medium'
},
{
name: 'Pharah',
image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/f8261595eca3e43e3b37cadb8161902cc416e38b7e0caa855f4555001156d814.png',
counters: ['Junkrat', 'Torbjörn', 'Bastion'],
counteredBy: ['Widowmaker', 'Soldier: 76', 'Ashe'],
hardCounters: ['Widowmaker'],
softCounters: ['Junkrat', 'Torbjörn'],
synergies: ['Mercy', 'Ana', 'Baptiste'],
difficulty: 'medium'
},
{
name: 'Reaper',
image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/2edb9af69d987bb503cd31f7013ae693640e692b321a73d175957b9e64394f40.png',
counters: ['Winston', 'Roadhog', 'Reinhardt'],
counteredBy: ['Pharah', 'Widowmaker', 'Cassidy'],
hardCounters: ['Pharah'],
softCounters: ['Winston', 'Roadhog'],
synergies: ['Lucio', 'Moira', 'Ana'],
difficulty: 'easy'
},
{
name: 'Sojourn',
image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/a53bf7ad9d2f33aaf9199a00989f86d4ba1f67c281ba550312c7d96e70fec4ea.png',
counters: ['Pharah', 'Echo', 'Widowmaker'],
counteredBy: ['Genji', 'Tracer', 'Sombra'],
hardCounters: ['Genji'],
softCounters: ['Pharah', 'Echo'],
synergies: ['Baptiste', 'Mercy', 'Reinhardt'],
difficulty: 'medium'
},
{
name: 'Soldier: 76',
image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/20b4ef00ed05d6dba75df228241ed528df7b6c9556f04c8070bad1e2f89e0ff5.png',
counters: ['Pharah', 'Mercy', 'Bastion'],
counteredBy: ['Widowmaker', 'Genji', 'Roadhog'],
hardCounters: ['Widowmaker'],
softCounters: ['Pharah', 'Mercy'],
synergies: ['Ana', 'Baptiste', 'Reinhardt'],
difficulty: 'easy'
},
{
name: 'Sombra',
image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/bca8532688f01b071806063b9472f1c0f9fc9c7948e6b59e210006e69cec9022.png',
counters: ['Doomfist', 'Wrecking Ball', 'Tracer'],
counteredBy: ['Winston', 'Moira', 'Brigitte'],
hardCounters: ['Winston'],
softCounters: ['Doomfist', 'Wrecking Ball'],
synergies: ['Tracer', 'Wrecking Ball', 'Zenyatta'],
difficulty: 'hard'
},
{
name: 'Symmetra',
image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/7f2024c5387c9d76d944a5db021c2774d1e9d7cbf39e9b6a35b364d38ea250ac.png',
counters: ['Genji', 'D.Va', 'Tracer'],
counteredBy: ['Pharah', 'Widowmaker', 'Junkrat'],
hardCounters: ['Pharah'],
softCounters: ['Genji', 'Tracer'],
synergies: ['Orisa', 'Baptiste', 'Brigitte'],
difficulty: 'medium'
},
{
name: 'Torbjörn',
image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/1309ab1add1cc19189a2c8bc7b1471f88efa1073e9705d2397fdb37d45707d01.png',
counters: ['Tracer', 'Genji', 'Lucio'],
counteredBy: ['Pharah', 'Junkrat', 'Widowmaker'],
hardCounters: ['Pharah'],
softCounters: ['Tracer', 'Genji'],
synergies: ['Brigitte', 'Baptiste', 'Orisa'],
difficulty: 'easy'
},
{
name: 'Tracer',
image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/a66413200e934da19540afac965cfe8a2de4ada593d9a52d53108bb28e8bbc9c.png',
counters: ['Widowmaker', 'Hanzo', 'Zenyatta'],
counteredBy: ['Cassidy', 'Brigitte', 'Torbjörn'],
hardCounters: ['Cassidy'],
softCounters: ['Widowmaker', 'Hanzo'],
synergies: ['Winston', 'Lucio', 'Zenyatta'],
difficulty: 'hard'
},
{
name: 'Widowmaker',
image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/a714f1cb33cc91c6b5b3e89ffe7e325b99e7c89cc8e8feced594f81305147efe.png',
counters: ['Pharah', 'Zenyatta', 'Ana'],
counteredBy: ['Genji', 'Tracer', 'Winston'],
hardCounters: ['Genji'],
softCounters: ['Pharah', 'Zenyatta'],
synergies: ['Mercy', 'Baptiste', 'Orisa'],
difficulty: 'hard'
},
{
name: 'Venture',
image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/5d87623006ccc77578396831d4629f91b5162235a553b3f442e1a43161898e94.png',
counters: ['Bastion', 'Torbjörn', 'Symmetra'],
counteredBy: ['Pharah', 'Echo', 'Mei'],
hardCounters: ['Pharah'],
softCounters: ['Bastion', 'Torbjörn'],
synergies: ['Lucio', 'Ana', 'Baptiste'],
difficulty: 'medium'
}
],
support: [
{
name: 'Ana',
image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/3429c394716364bbef802180e9763d04812757c205e1b4568bc321772096ed86.png',
counters: ['Roadhog', 'Pharah', 'Widowmaker'],
counteredBy: ['Genji', 'Tracer', 'Winston'],
hardCounters: ['Genji'],
softCounters: ['Roadhog', 'Pharah'],
synergies: ['Reinhardt', 'Genji', 'Pharah'],
difficulty: 'hard'
},
{
name: 'Baptiste',
image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/f979896f74ba22db2a92a85ae1260124ab0a26665957a624365e0f96e5ac5b5c.png',
counters: ['Pharah', 'Genji', 'Roadhog'],
counteredBy: ['Sombra', 'Widowmaker', 'Hanzo'],
hardCounters: ['Sombra'],
softCounters: ['Pharah'],
synergies: ['Bastion', 'Ashe', 'Sigma'],
difficulty: 'medium'
},
{
name: 'Brigitte',
image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/48392820c6976ee1cd8dde13e71df85bf15560083ee5c8658fe7c298095d619a.png',
counters: ['Tracer', 'Genji', 'Doomfist'],
counteredBy: ['Pharah', 'Junkrat', 'Bastion'],
hardCounters: ['Pharah'],
softCounters: ['Tracer', 'Genji'],
synergies: ['Reinhardt', 'Lucio', 'Reaper'],
difficulty: 'easy'
},
{
name: 'Illari',
image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/5ea986038f9d307bd4613d5e6f2c4c8e7f15f30ceeeabbdd7a06637a38f17e1f.png',
counters: ['Tracer', 'Genji', 'Pharah'],
counteredBy: ['Winston', 'D.Va', 'Sombra'],
hardCounters: ['Winston'],
softCounters: ['Tracer'],
synergies: ['Pharah', 'Ashe', 'Hanzo'],
difficulty: 'medium'
},
{
name: 'Juno',
image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/585b2d60cbd3c271b6ad5ad0922537af0c6836fab6c89cb9979077f7bb0832b5.png',
counters: ['Pharah', 'Echo', 'Genji'],
counteredBy: ['Widowmaker', 'Ashe', 'Cassidy'],
hardCounters: ['Widowmaker'],
softCounters: ['Pharah', 'Echo'],
synergies: ['Pharah', 'Mercy', 'Echo'],
difficulty: 'medium'
},
{
name: 'Kiriko',
image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/088aff2153bdfa426984b1d5c912f6af0ab313f0865a81be0edd114e9a2f79f9.png',
counters: ['Genji', 'Tracer', 'Sombra'],
counteredBy: ['Winston', 'Moira', 'Symmetra'],
hardCounters: ['Winston'],
softCounters: ['Genji', 'Tracer'],
synergies: ['Genji', 'Sojourn', 'Hanzo'],
difficulty: 'medium'
},
{
name: 'Lifeweaver',
image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/39d4514f1b858bc228035b09d5a74ed41f8eeefc9a0d1873570b216ba04334df.png',
counters: ['Winston', 'Doomfist', 'Roadhog'],
counteredBy: ['Widowmaker', 'Hanzo', 'Ashe'],
hardCounters: ['Widowmaker'],
softCounters: ['Winston'],
synergies: ['Pharah', 'Bastion', 'Widowmaker'],
difficulty: 'medium'
},
{
name: 'Lucio',
image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/e2ff2527610a0fbe0c9956f80925123ef3e66c213003e29d37436de30b90e4e1.png',
counters: ['Reaper', 'Mei', 'Junkrat'],
counteredBy: ['Cassidy', 'Widowmaker', 'Pharah'],
hardCounters: ['Cassidy'],
softCounters: ['Reaper'],
synergies: ['Reinhardt', 'Reaper', 'Doomfist'],
difficulty: 'medium'
},
{
name: 'Mercy',
image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/2508ddd39a178d5f6ae993ab43eeb3e7961e5a54a9507e6ae347381193f28943.png',
counters: ['Pharah', 'Genji', 'Widowmaker'],
counteredBy: ['Widowmaker', 'Genji', 'Tracer'],
hardCounters: ['Genji'],
softCounters: ['Pharah'],
synergies: ['Pharah', 'Ashe', 'Echo'],
difficulty: 'easy'
},
{
name: 'Moira',
image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/000beeb5606e01497897fa9210dd3b1e78e1159ebfd8afdc9e989047d7d3d08f.png',
counters: ['Genji', 'Tracer', 'Reaper'],
counteredBy: ['Pharah', 'Widowmaker', 'Ana'],
hardCounters: ['Pharah'],
softCounters: ['Genji', 'Tracer'],
synergies: ['Reaper', 'Reinhardt', 'Winston'],
difficulty: 'easy'
},
{
name: 'Zenyatta',
image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/71cabc939c577581f66b952f9c70891db779251e8e70f29de3c7bf494edacfe4.png',
counters: ['Roadhog', 'Reinhardt', 'Winston'],
counteredBy: ['Tracer', 'Genji', 'Widowmaker'],
hardCounters: ['Tracer'],
softCounters: ['Roadhog', 'Reinhardt'],
synergies: ['Genji', 'Tracer', 'Winston'],
difficulty: 'hard'
}
]
};

const tips = {
  tank: {
    'D.Va': 'Use Defense Matrix to block ultimates and protect your team. Focus on long-range heroes.',
    'Doomfist': 'Use your mobility kit to create chaos. Power Block is your main survival tool.',
    'Junker Queen': 'Your Commanding Shout heals you. Be aggressive but smart with your abilities.',
    'Mauga': 'Your miniguns deal incendiary damage. Use Cardiac Overdrive to sustain your team.',
    'Orisa': 'Fortify makes you unstoppable. Use Javelin Spin for crowd control and ability denial.',
    'Ramattra': 'Switch between Omnic and Nemesis forms as needed. Block is crucial.',
    'Reinhardt': 'Keep your shield up and coordinate with your team. Protect supports and charge isolated targets.',
    'Roadhog': 'Use your hook to catch heroes out of position. Take a Breather is your survivability.',
    'Sigma': 'Use Kinetic Grasp to absorb projectiles. Accretion stuns and deals critical damage.',
    'Winston': 'Dive enemy backline but always have an escape route. Use bubble shield wisely.',
    'Wrecking Ball': 'Use mobility to disrupt. Adaptive Shield makes you tanky in teamfights.',
    'Zarya': 'Build energy with your bubbles. High energy = high damage. Protect allies in danger.'
  },
  damage: {
    'Ashe': 'Dynamite is great poke damage. B.O.B. is a 7th player - use wisely.',
    'Bastion': 'Your sustained damage is absurd. Use Reconfigure to reposition.',
    'Cassidy': 'Flash Bang counters flankers. Positioning is everything for headshots.',
    'Echo': 'Use flight for superior angles. Duplicate enemy tank to turn fights.',
    'Genji': 'Use mobility to flank. Deflect can turn the game. Choose your duels.',
    'Hanzo': 'Storm Arrows melts tanks. Sonic Arrow provides vital information.',
    'Junkrat': 'Control choke areas. Use mines for mobility and damage. Smart spam.',
    'Mei': 'Wall isolates enemies. Blizzard controls objectives. Use Cryo-Freeze wisely.',
    'Pharah': 'Stay airborne and position well. Coordinate with Mercy. Watch for hitscans.',
    'Reaper': 'Flank and surprise. Wraith Form against dangerous abilities. Eliminate tanks.',
    'Sojourn': 'Charge railgun with damage. Disruptor Shot controls area and kills sustain.',
    'Soldier: 76': 'Position on high ground. Use heal station for yourself and allies. Consistency is key.',
    'Sombra': 'Hack removes abilities. EMP turns teamfights. Be patient with your opportunities.',
    'Symmetra': 'Teleporter creates unexpected plays. Turrets control flanks and areas.',
    'Torbjörn': 'Turret guarantees area control. Overload increases survivability and DPS.',
    'Tracer': 'Be unpredictable. Focus isolated targets. Always know where health packs are.',
    'Widowmaker': 'Find unique angles. Prioritize supports and DPS. Change positions constantly.',
    'Venture': 'Use Burrow to reposition and escape. Drill Dash executes low targets.'
  },
  support: {
    'Ana': 'Prioritize healing tanks. Nano boost at the right time wins fights. Sleep dart is game changing.',
    'Baptiste': 'Immortality Field saves teamfights. Window amplifies damage massively.',
    'Brigitte': 'Protect nearby allies. Use shield bash wisely. Rally before fights.',
    'Illari': 'Pylon heal is strong but can be destroyed. Use your long-range rifle.',
    'Juno': 'Glide Gun heal is projectile. Use boost for engages or saves.',
    'Kiriko': 'Teleport saves allies. Suzu cleanses and immunizes. Protection Suzu is timing.',
    'Lifeweaver': 'Life Grip saves allies. Petal Platform creates high ground.',
    'Lucio': 'Speed boost for engages. Stay mobile. Boop enemies into bad positions.',
    'Mercy': 'Damage boost when possible. Use vertical movement. Rez safely.',
    'Moira': 'Balance healing and damage. Use fade to escape. Coalescence at the right time.',
    'Zenyatta': 'Discord priority targets. Position behind team. Trans saves fights.'
  }
};

export default function OverwatchCounterPick() {
  const [selectedRole, setSelectedRole] = useState('');
  const [enemyTeam, setEnemyTeam] = useState([]);
  const [allyTeam, setAllyTeam] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  const getRoleIcon = (role) => {
    switch(role) {
      case 'tank': return <Shield className="w-5 h-5" />;
      case 'damage': return <Sword className="w-5 h-5" />;
      case 'support': return <Heart className="w-5 h-5" />;
      default: return null;
    }
  };

  const getHeroRole = (heroName) => {
    for (const [role, heroList] of Object.entries(heroes)) {
      if (heroList.find(h => h.name === heroName)) {
        return role;
      }
    }
    return null;
  };

  const getRoleCount = (team, role) => {
    return team.filter(h => getHeroRole(h.name) === role).length;
  };

  const canAddHero = (hero, team) => {
    const heroRole = getHeroRole(hero.name);
    const currentTeam = team === 'enemy' ? enemyTeam : allyTeam;
    const roleCount = getRoleCount(currentTeam, heroRole);
    
    // For ally team, if a role is selected, reduce that role's limit by 1
    const limits = team === 'ally' && selectedRole 
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

  const addToTeam = (hero, team) => {
    const currentTeam = team === 'enemy' ? enemyTeam : allyTeam;
    const maxSize = team === 'enemy' ? 5 : 4;
    
    if (currentTeam.length < maxSize && 
        !currentTeam.find(h => h.name === hero.name) && 
        canAddHero(hero, team)) {
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

  const calculateRecommendations = () => {
    if (!selectedRole || enemyTeam.length === 0) return;

    const roleHeroes = heroes[selectedRole];
    const scores = roleHeroes.map(hero => {
      let score = 0;
      let reasons = [];

      // Check counters and hard counters
      enemyTeam.forEach(enemy => {
        // Hard counter = +3 points
        if (hero.hardCounters && hero.hardCounters.includes(enemy.name)) {
          score += 3;
          reasons.push(`Hard counters ${enemy.name}`);
        }
        // Soft counter = +1 point
        else if (hero.softCounters && hero.softCounters.includes(enemy.name)) {
          score += 1;
          reasons.push(`Soft counters ${enemy.name}`);
        }
        // Regular counter = +2 points
        else if (hero.counters.includes(enemy.name)) {
          score += 2;
          reasons.push(`Counters ${enemy.name}`);
        }
        
        // Countered by = -2 points
        if (hero.counteredBy.includes(enemy.name)) {
          score -= 2;
          reasons.push(`Weak against ${enemy.name}`);
        }
      });

      // Check synergies with ally team (+1 point per synergy)
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

      return { ...hero, score, reasons: [...new Set(reasons)], synergyCount };
    });

    const sorted = scores.sort((a, b) => {
      // First sort by score
      if (b.score !== a.score) return b.score - a.score;
      // If scores are equal, prioritize heroes with more synergies
      if (b.synergyCount !== a.synergyCount) return b.synergyCount - a.synergyCount;
      // If still equal, prioritize easier heroes
      const difficultyOrder = { easy: 3, medium: 2, hard: 1 };
      return difficultyOrder[b.difficulty] - difficultyOrder[a.difficulty];
    });
    
    setRecommendations(sorted.slice(0, 5));
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'easy': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'hard': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2">Overwatch Counter Pick</h1>
          <p className="text-orange-300">Advanced algorithm with counters, synergies & difficulty</p>
        </div>

        {/* Role Selection */}
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

        {selectedRole && (
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Enemy Team */}
            <div className="bg-red-900/30 backdrop-blur rounded-xl p-6 border border-red-500/50">
              <h2 className="text-2xl font-bold text-red-300 mb-4">
                2. Enemy Team ({enemyTeam.length}/5)
              </h2>
              <div className="text-sm text-red-200 mb-3">
                Tank: {getRoleCount(enemyTeam, 'tank')}/1 | Damage: {getRoleCount(enemyTeam, 'damage')}/2 | Support: {getRoleCount(enemyTeam, 'support')}/2
              </div>
              <div className="space-y-2 mb-4 min-h-[120px]">
                {enemyTeam.map(hero => (
                  <div key={hero.name} className="bg-red-800/50 p-2 rounded-lg flex items-center gap-3">
                    <img src={hero.image} alt={hero.name} className="w-12 h-12 rounded-lg object-cover" />
                    <span className="text-white font-medium flex-1">{hero.name}</span>
                    <span className="text-xs text-red-300 capitalize">{getHeroRole(hero.name)}</span>
                    <button
                      onClick={() => removeFromTeam(hero.name, 'enemy')}
                      className="text-red-300 hover:text-white px-2"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {Object.entries(heroes).map(([role, heroList]) => {
                  const roleCount = getRoleCount(enemyTeam, role);
                  const limits = { tank: 1, damage: 2, support: 2 };
                  const isRoleFull = roleCount >= limits[role];
                  
                  return (
                    <div key={role}>
                      <button
                        onClick={() => {
                          if (!isRoleFull) {
                            const section = document.getElementById(`enemy-${role}`);
                            const arrow = document.getElementById(`enemy-arrow-${role}`);
                            section.classList.toggle('hidden');
                            arrow.classList.toggle('rotate-180');
                          }
                        }}
                        className={`w-full text-white font-bold mb-2 capitalize flex items-center justify-between gap-2 transition-colors ${
                          isRoleFull ? 'opacity-50 cursor-not-allowed' : 'hover:text-red-300 cursor-pointer'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {getRoleIcon(role)} 
                          <span className="capitalize">{role}</span>
                          <span className={`text-sm ${isRoleFull ? 'text-red-400' : 'text-red-200'}`}>
                            ({roleCount}/{limits[role]})
                          </span>
                        </div>
                        {!isRoleFull && <span id={`enemy-arrow-${role}`} className="text-sm transition-transform">▼</span>}
                      </button>
                      {!isRoleFull && (
                        <div id={`enemy-${role}`} className="grid grid-cols-4 gap-2 max-h-[200px] overflow-y-auto">
                          {heroList.map(hero => {
                            const isDisabled = enemyTeam.find(h => h.name === hero.name) || 
                                             enemyTeam.length >= 5 || 
                                             !canAddHero(hero, 'enemy');
                            return (
                              <button
                                key={hero.name}
                                onClick={() => addToTeam(hero, 'enemy')}
                                disabled={isDisabled}
                                className={`bg-slate-700 hover:bg-red-700 disabled:opacity-30 disabled:cursor-not-allowed p-2 rounded transition-colors flex flex-col items-center gap-1 ${
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

            {/* Ally Team */}
            <div className="bg-blue-900/30 backdrop-blur rounded-xl p-6 border border-blue-500/50">
              <h2 className="text-2xl font-bold text-blue-300 mb-4">
                3. Your Team ({allyTeam.length}/4)
              </h2>
              <div className="text-sm text-blue-200 mb-3">
                Tank: {getRoleCount(allyTeam, 'tank')}/{selectedRole === 'tank' ? 0 : 1} | Damage: {getRoleCount(allyTeam, 'damage')}/{selectedRole === 'damage' ? 1 : 2} | Support: {getRoleCount(allyTeam, 'support')}/{selectedRole === 'support' ? 1 : 2}
              </div>
              <div className="space-y-2 mb-4 min-h-[120px]">
                {allyTeam.map(hero => (
                  <div key={hero.name} className="bg-blue-800/50 p-2 rounded-lg flex items-center gap-3">
                    <img src={hero.image} alt={hero.name} className="w-12 h-12 rounded-lg object-cover" />
                    <span className="text-white font-medium flex-1">{hero.name}</span>
                    <span className="text-xs text-blue-300 capitalize">{getHeroRole(hero.name)}</span>
                    <button
                      onClick={() => removeFromTeam(hero.name, 'ally')}
                      className="text-blue-300 hover:text-white px-2"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {Object.entries(heroes).map(([role, heroList]) => {
                  const roleCount = getRoleCount(allyTeam, role);
                  const limits = selectedRole 
                    ? {
                        tank: selectedRole === 'tank' ? 0 : 1,
                        damage: selectedRole === 'damage' ? 1 : 2,
                        support: selectedRole === 'support' ? 1 : 2
                      }
                    : { tank: 1, damage: 2, support: 2 };
                  const isRoleFull = roleCount >= limits[role];
                  
                  return (
                    <div key={role}>
                      <button
                        onClick={() => {
                          if (!isRoleFull) {
                            const section = document.getElementById(`ally-${role}`);
                            const arrow = document.getElementById(`ally-arrow-${role}`);
                            section.classList.toggle('hidden');
                            arrow.classList.toggle('rotate-180');
                          }
                        }}
                        className={`w-full text-white font-bold mb-2 capitalize flex items-center justify-between gap-2 transition-colors ${
                          isRoleFull ? 'opacity-50 cursor-not-allowed' : 'hover:text-blue-300 cursor-pointer'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {getRoleIcon(role)} 
                          <span className="capitalize">{role}</span>
                          <span className={`text-sm ${isRoleFull ? 'text-blue-400' : 'text-blue-200'}`}>
                            ({roleCount}/{limits[role]})
                          </span>
                        </div>
                        {!isRoleFull && <span id={`ally-arrow-${role}`} className="text-sm transition-transform">▼</span>}
                      </button>
                      {!isRoleFull && (
                        <div id={`ally-${role}`} className="grid grid-cols-4 gap-2 max-h-[200px] overflow-y-auto">
                          {heroList.map(hero => {
                            const isDisabled = allyTeam.find(h => h.name === hero.name) || 
                                             allyTeam.length >= 4 || 
                                             !canAddHero(hero, 'ally');
                            return (
                              <button
                                key={hero.name}
                                onClick={() => addToTeam(hero, 'ally')}
                                disabled={isDisabled}
                                className={`bg-slate-700 hover:bg-blue-700 disabled:opacity-30 disabled:cursor-not-allowed p-2 rounded transition-colors flex flex-col items-center gap-1 ${
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
          </div>
        )}

        {selectedRole && enemyTeam.length > 0 && (
          <div className="text-center mb-6">
            <button
              onClick={calculateRecommendations}
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all transform hover:scale-105"
            >
              🧠 Analyze with Advanced Algorithm
            </button>
          </div>
        )}

        {/* Recommendations */}
        {recommendations.length > 0 && (
          <div className="bg-slate-800/80 backdrop-blur rounded-xl p-6 border border-green-500/30">
            <h2 className="text-3xl font-bold text-green-400 mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-8 h-8" />
              Best Picks for {selectedRole === 'damage' ? 'Damage' : selectedRole === 'tank' ? 'Tank' : 'Support'}
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Algorithm considers: Hard counters (+3), Soft counters (+1), Regular counters (+2), Synergies (+1 each), Difficulty
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
                        {index === 0 && '👑'} {hero.name}
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
                            reason.includes('Counters') ? 'text-green-500' :
                            reason.includes('Synergy') ? 'text-purple-300' :
                            'text-slate-300'
                          }`}>
                            {reason.includes('Hard counters') && '⚡ '}
                            {reason.includes('Synergy') && '🤝 '}
                            {reason.includes('Weak') && '⚠️ '}
                            • {reason}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {tips[selectedRole] && tips[selectedRole][hero.name] && (
                    <div className="bg-slate-900/50 p-3 rounded">
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