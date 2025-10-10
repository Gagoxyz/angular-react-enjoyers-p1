import { Player } from '../models/player.model';

export const PLAYERS: Player[] = [
  {
    id: 1,
    nombre: 'Nikola',
    apellidos: 'Jokić',
    posicion: 'Pívot',
    edad: 30,
    altura: 211,
    multimedia: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Nikola_Jokic_free_throw_%28cropped%29.jpg/330px-Nikola_Jokic_free_throw_%28cropped%29.jpg'
    ],
    youtubeId: '-9lP95Qo-I0' // Nikola Jokic Highlights
  },
  {
    id: 2,
    nombre: 'Giannis',
    apellidos: 'Antetokounmpo',
    posicion: 'Ala-Pívot',
    edad: 30,
    altura: 211,
    multimedia: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Giannis_Antetokounmpo_%2851915153421%29_%28cropped%29.jpg/330px-Giannis_Antetokounmpo_%2851915153421%29_%28cropped%29.jpg'
    ]
  },
  {
    id: 3,
    nombre: 'Luka',
    apellidos: 'Dončić',
    posicion: 'Base',
    edad: 25,
    altura: 201,
    multimedia: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Luka_Doncic_%2851914951721%29_%28cropped1%29.jpg/330px-Luka_Doncic_%2851914951721%29_%28cropped1%29.jpg'
    ]
  },
  {
    id: 4,
    nombre: 'Stephen',
    apellidos: 'Curry',
    posicion: 'Base',
    edad: 36,
    altura: 191,
    multimedia: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Steph_Curry_P20230117AS-1347_%28cropped%29.jpg/330px-Steph_Curry_P20230117AS-1347_%28cropped%29.jpg'
    ]
  },
  {
    id: 5,
    nombre: 'Kevin',
    apellidos: 'Durant',
    posicion: 'Alero',
    edad: 36,
    altura: 208,
    multimedia: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Kevin_Durant_Interview_in_2023_-_2.png/330px-Kevin_Durant_Interview_in_2023_-_2.png'
    ]
  },
  {
    id: 6,
    nombre: 'LeBron',
    apellidos: 'James',
    posicion: 'Alero',
    edad: 40,
    altura: 206,
    multimedia: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg/330px-LeBron_James_%2851959977144%29_%28cropped2%29.jpg'
    ]
  },
  {
    id: 7,
    nombre: 'Jayson',
    apellidos: 'Tatum',
    posicion: 'Ala-Pívot',
    edad: 26,
    altura: 203,
    multimedia: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Jayson_Tatum_%2851839569977%29_%28cropped%29.jpg/330px-Jayson_Tatum_%2851839569977%29_%28cropped%29.jpg'
    ]
  },
  {
    id: 8,
    nombre: 'Shai',
    apellidos: 'Gilgeous-Alexander',
    posicion: 'Base',
    edad: 27,
    altura: 196,
    multimedia: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Shai_Gilgeous-Alexander_-_Thunder_vs._Wizards.png/500px-Shai_Gilgeous-Alexander_-_Thunder_vs._Wizards.png'
    ]
  }
  // {
  //   id: 9,
  //   nombre: 'Joel',
  //   apellidos: 'Embiid',
  //   posicion: 'Pívot',
  //   edad: 30,
  //   altura: 213,
  //   multimedia: [
  //     'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Joel_Embiid_2019.jpg/330px-Joel_Embiid_2019.jpg'
  //   ]
  // },
  // {
  //   id: 10,
  //   nombre: 'Anthony',
  //   apellidos: 'Davis',
  //   posicion: 'Ala-Pívot / Pívot',
  //   edad: 32,
  //   altura: 208,
  //   multimedia: [
  //     'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Anthony_Davis_pre-game_%28cropped%29.jpg/500px-Anthony_Davis_pre-game_%28cropped%29.jpg'
  //   ]
  // },
  // {
  //   id: 11,
  //   nombre: 'Devin',
  //   apellidos: 'Booker',
  //   posicion: 'Escolta / Alero',
  //   edad: 28,
  //   altura: 196,
  //   multimedia: [
  //     'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Devin_Booker_%282022_All-Star_Weekend%29.jpg/330px-Devin_Booker_%282022_All-Star_Weekend%29.jpg'
  //   ]
  // },
  // {
  //   id: 12,
  //   nombre: 'Damian',
  //   apellidos: 'Lillard',
  //   posicion: 'Base / Escolta',
  //   edad: 35,
  //   altura: 185,
  //   multimedia: [
  //     'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Damian_Lillard_%282021%29_%28cropped%29.jpg/330px-Damian_Lillard_%282021%29_%28cropped%29.jpg'
  //   ]
  // },
  // {
  //   id: 13,
  //   nombre: 'Kawhi',
  //   apellidos: 'Leonard',
  //   posicion: 'Alero / Escolta',
  //   edad: 33,
  //   altura: 201,
  //   multimedia: [
  //     'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Kawhi_Leonard_%287440607%29_%28cropped%29.jpg/330px-Kawhi_Leonard_%287440607%29_%28cropped%29.jpg'
  //   ]
  // },
  // {
  //   id: 14,
  //   nombre: 'Paul',
  //   apellidos: 'George',
  //   posicion: 'Alero / Escolta',
  //   edad: 34,
  //   altura: 203,
  //   multimedia: [
  //     'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_George_Pacers.jpg/330px-Paul_George_Pacers.jpg'
  //   ]
  // },
  // {
  //   id: 15,
  //   nombre: 'Julius',
  //   apellidos: 'Randle',
  //   posicion: 'Ala-Pívot / Pívot',
  //   edad: 30,
  //   altura: 201,
  //   multimedia: [
  //     'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Jalen_Brunson_-_52977333593_%28cropped%29.jpg/330px-Jalen_Brunson_-_52977333593_%28cropped%29.jpg'
  //   ]
  // },
  // {
  //   id: 16,
  //   nombre: 'Zion',
  //   apellidos: 'Williamson',
  //   posicion: 'Ala-Pívot / Pívot',
  //   edad: 24,
  //   altura: 198,
  //   multimedia: [
  //     'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Zion_Williamson_2020.jpg/330px-Zion_Williamson_2020.jpg'
  //   ]
  // },
  // {
  //   id: 17,
  //   nombre: 'Ja',
  //   apellidos: 'Morant',
  //   posicion: 'Base / Escolta',
  //   edad: 25,
  //   altura: 191,
  //   multimedia: [
  //     'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Ja_Morant_2021.jpg/330px-Ja_Morant_2021.jpg'
  //   ]
  // },
  // {
  //   id: 18,
  //   nombre: 'Anthony',
  //   apellidos: 'Edwards',
  //   posicion: 'Escolta / Alero',
  //   edad: 22,
  //   altura: 196,
  //   multimedia: [
  //     'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Anthony_Edwards_Kentavious_Caldwell-Pope_%2851734745028%29_%28cropped%29_%28cropped%29.jpg/330px-Anthony_Edwards_Kentavious_Caldwell-Pope_%2851734745028%29_%28cropped%29_%28cropped%29.jpg'
  //   ]
  // },
  // {
  //   id: 19,
  //   nombre: 'Jalen',
  //   apellidos: 'Brunson',
  //   posicion: 'Base / Escolta',
  //   edad: 28,
  //   altura: 185,
  //   multimedia: [
  //     'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Jalen_Brunson_2023_%28cropped%29.jpg/330px-Jalen_Brunson_2023_%28cropped%29.jpg'
  //   ]
  // },
  // {
  //   id: 20,
  //   nombre: 'Victor',
  //   apellidos: 'Wembanyama',
  //   posicion: 'Pívot / Ala-Pívot',
  //   edad: 20,
  //   altura: 224,
  //   multimedia: [
  //     'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Victor_Wembanyama_Mets_92_%28cropped%29.jpg/330px-Victor_Wembanyama_Mets_92_%28cropped%29.jpg'
  //   ]
  // }
];
