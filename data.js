const items = [
    '3 Pandas',
    '3 Pandas 2',
    '3 Pandas in Brazil',
    'A Small Favor',
    'ABCdário',
    'Abobo Big Adventure',
    'Aboboy',
    'Abuba the Alien',
    'Alien Hominid',
    'Alter',
    'Another Small Favor',
    'Assim é uma Banda',
    'Ataque do Kraken',
    'Bad Ice Cream',
    'Bad Ice Cream 2',
    'Bad Ice Cream 3',
    'Ben 10 Critical Impact',
    'Ben 10 Giant Force',
    'Ben 10 Perseguição Selvagem',
    'Ben 10 Power Splash',
    'Ben 10 Spore Attack',
    'Ben 10 Upgrade Space Battle',
    'Ben ao Resgate',
    'Big Truck 2',
    'BigAndSmall',
    'Blob',
    'BlobStar',
    'Blobular',
    'Bloons Super Monkey',
    'Blow things up 2',
    'Bloxorz',
    'Bob Esponja Bubble Bust',
    'Bob Esponja Bust up',
    'Bob Esponja Delivery Dilemma',
    'Bob Esponja Dirty Bubble Buster',
    'Bob Esponja Dutchmans Dash',
    'Bob Esponja Patty Panic',
    'Bob Esponja Reef Rumble',
    'Bob Esponja Sea Monster Smoosh',
    'Bob Esponja Ship o Ghouls',
    'Bomb it 2',
    'Bomb it 4',
    'Bomb it 5',
    'Bomb it 6',
    'Bomb it 7',
    'Bowman 2',
    'Breaking the bank',
    'Bubble Quest',
    'BubbleShooter',
    'BucketBall',
    'BucketBall 2',
    'Bullet Bill 3',
    'Burrito Bison',
    'Burrito Bison Revenge',
    'Canary',
    'CannonBolt Pinball',
    'CannonBolt Strikes',
    'Canopy',
    'Caras',
    'Castle Clouts',
    'Cat Mario',
    'Charger Escape',
    'Civiballs',
    'Civiballs 2',
    'Coinbox Hero',
    'Conexões (Espanhol)',
    'Conexões 2',
    'Contando',
    'Cover Orange',
    'Cover Orange 2',
    'Crazy Penguin Catapult',
    'Cyborg Livestock',
    'Deep Lift II',
    'Dino Run',
    'Dino Run Enter the Planet',
    'Dino Run Marathon of Doom',
    'Doki',
    'Doki - Aprendendo Melodias',
    'Doki - Brinque de Ser Artista',
    'Doki - Jogando Com As Profissões',
    'Doki E Os Alimentos',
    'Duck Hunt reloaded',
    'Duck Life',
    'Duck Life 2',
    'Duck Life 3',
    'Duck Life 4',
    'Electric Man 2',
    'Electricbox',
    'Electricbox 2',
    'Enough Plumbers',
    'Enough Plumbers 2',
    'Escaping the prison',
    'Escola de Futebol (Espanhol)',
    'Factory Balls',
    'Factory Balls 2',
    'Factory Balls 3',
    'Factory Balls 4',
    'Fault Line',
    'Feed Me',
    'Figuras',
    'Finding Santa',
    'Fireboy and Watergirl',
    'Fireboy and Watergirl 2',
    'Fireboy and Watergirl 3',
    'Fireboy and Watergirl 4',
    'Firebug',
    'Fish Tales Deluxe',
    'Fleeing the complex',
    'Flight',
    'Flight of the Hamsters',
    'Fly Meow',
    'FPA World 1',
    'FPA World 1 Remix',
    'FPA World 2',
    'FPA World 3',
    'FPA World 4 ep1',
    'FPA World 4 ep2',
    'FPA World 4 ep3',
    'Frizzle Fraz',
    'Genio Quiz 1',
    'Genio Quiz 2',
    'Genio Quiz 3',
    'Genio Quiz 4',
    'Genio Quiz 5',
    'Gingerbread Circus',
    'Gingerbread Circus 2',
    'Gingerbread Circus 3',
    'Give Up Robot',
    'Give Up Robot 2',
    'Gogo Plant 2',
    'Grow 1',
    'Grow 2',
    'Grow Cube',
    'Grow Island',
    'Grow rpg',
    'Grow Tower',
    'Hambo',
    'Hambo 2',
    'Hanger',
    'Hanger 2',
    'Haunt The House',
    'Headcase',
    'Heróis Unidos',
    'Home Sheep Home',
    'Home Sheep Home 2',
    'Home Sheep Home Lost in London',
    'Home Sheep Home Lost in Space',
    'Infectonator 2',
    'Infiltrating the airship',
    'IQ Ball',
    'Jack Frost',
    'Joaninhas',
    'Jumping Finn',
    'Mad Bomb',
    'Magnet Face',
    'Maquina dos Sentidos (Espanhol)',
    'Mario and Luigi Wariance',
    'Mario Combat',
    'Mario Forever',
    'Mascotes',
    'Meeblings',
    'Meeblings 2',
    'Meeblings player pack',
    'Mini trem',
    'Minidash',
    'Monkey go happy',
    'Monkey go happy 2',
    'Monkey go happy 3',
    'Monkey go happy 4',
    'Monkey go happy 5',
    'Monkey go happy 6',
    'Monster Evolution',
    'Montreal Mobility',
    'Moolga',
    'New York Shark',
    'Nitrome Must Die',
    'O jogo das Cores (Espanhol)',
    'Ordenar Os Planetas',
    'PacXon',
    'Papas pizzaria',
    'Penguin Dinner',
    'Penguin Dinner 2',
    'Pigs can Fly',
    'Plumber',
    'Portal',
    'Pursuit of hat',
    'Quebrando O Cofrinho',
    'Raft Wars',
    'Raft Wars 2',
    'Reciclagem',
    'Robot Dinossaurs',
    'Rollercoaster Creator',
    'Roly-Poly Cannon',
    'Roly-Poly Cannon 2',
    'Roly-Poly Cannon 3',
    'Rubble Trouble Moscow',
    'Rubble Trouble New York',
    'Rubble Trouble Tokyo',
    'Sapo',
    'Scriball',
    'Seja O Herói Do Planeta',
    'Silly Sausage',
    'Sinta',
    'Sky Serpents',
    'Skywire',
    'Sling',
    'Sling Ice',
    'Slob',
    'Snail Bob 1',
    'Snail Bob 2',
    'Snail Bob 3',
    'Snail Bob Space',
    'Snail Bob 5',
    'Snail Bob 6',
    'Snail Bob 7',
    'Snail Bob 8',
    'Snot Put',
    'Spider Monkey',
    'Square Meal',
    'Stealing the diamond',
    'Sugar Sugar',
    'Super Angelo',
    'Super Mario 63',
    'Super Mario Bros Crossover',
    'Super Mario Flash',
    'Sushi Cat',
    'Sushi Cat 2',
    'Swindler',
    'Swindler 2',
    'Tangerine Tycoon',
    'Tasty Planet',
    'Tasty Planet Dino Time',
    'Test Subject Blue',
    'Test Subject Green',
    'Test Subject Complete',
    'The Worlds Hardest Game',
    'This is the only level',
    'Trollface Quest 2',
    'Trollface Quest 3',
    'Trollface Quest 4',
    'Trollface Quest 5',
    'Trollface Quest 13',
    'Trollface Quest sports',
    'Twee',
    'Twin Shot',
    'Twin Shot 2',
    'Ultimate Sonic Flash',
    'Use Boxmen',
    'Vida Natural',
];

export default items;