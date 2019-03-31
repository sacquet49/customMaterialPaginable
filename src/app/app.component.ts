import { Component } from '@angular/core';

const ELEMENT_DATA: any[] = [{"nom":"Abbaretz","code":"44001","codesPostaux":["44170"],"codeDepartement":"44","codeRegion":"52","population":2068},{"nom":"Aigrefeuille-sur-Maine","code":"44002","codesPostaux":["44140"],"codeDepartement":"44","codeRegion":"52","population":3763},{"nom":"Ancenis-Saint-Géréon","code":"44003","codesPostaux":["44150"],"codeDepartement":"44","codeRegion":"52","population":10595},{"nom":"Chaumes-en-Retz","code":"44005","codesPostaux":["44320","44680"],"codeDepartement":"44","codeRegion":"52","population":6691},{"nom":"Assérac","code":"44006","codesPostaux":["44410"],"codeDepartement":"44","codeRegion":"52","population":1797},{"nom":"Avessac","code":"44007","codesPostaux":["44460"],"codeDepartement":"44","codeRegion":"52","population":2501},{"nom":"Basse-Goulaine","code":"44009","codesPostaux":["44115"],"codeDepartement":"44","codeRegion":"52","population":8867},{"nom":"Batz-sur-Mer","code":"44010","codesPostaux":["44740"],"codeDepartement":"44","codeRegion":"52","population":2947},{"nom":"La Bernerie-en-Retz","code":"44012","codesPostaux":["44760"],"codeDepartement":"44","codeRegion":"52","population":2944},{"nom":"Besné","code":"44013","codesPostaux":["44160"],"codeDepartement":"44","codeRegion":"52","population":2999},{"nom":"Le Bignon","code":"44014","codesPostaux":["44140"],"codeDepartement":"44","codeRegion":"52","population":3718},{"nom":"Blain","code":"44015","codesPostaux":["44130"],"codeDepartement":"44","codeRegion":"52","population":9687},{"nom":"La Boissière-du-Doré","code":"44016","codesPostaux":["44430"],"codeDepartement":"44","codeRegion":"52","population":1040},{"nom":"Bouaye","code":"44018","codesPostaux":["44830"],"codeDepartement":"44","codeRegion":"52","population":7620},{"nom":"Bouée","code":"44019","codesPostaux":["44260"],"codeDepartement":"44","codeRegion":"52","population":956},{"nom":"Bouguenais","code":"44020","codesPostaux":["44340"],"codeDepartement":"44","codeRegion":"52","population":19049},{"nom":"Villeneuve-en-Retz","code":"44021","codesPostaux":["44580"],"codeDepartement":"44","codeRegion":"52","population":4931},{"nom":"Boussay","code":"44022","codesPostaux":["44190"],"codeDepartement":"44","codeRegion":"52","population":2632},{"nom":"Bouvron","code":"44023","codesPostaux":["44130"],"codeDepartement":"44","codeRegion":"52","population":3141},{"nom":"Brains","code":"44024","codesPostaux":["44830"],"codeDepartement":"44","codeRegion":"52","population":2790},{"nom":"Campbon","code":"44025","codesPostaux":["44750"],"codeDepartement":"44","codeRegion":"52","population":4018},{"nom":"Carquefou","code":"44026","codesPostaux":["44470"],"codeDepartement":"44","codeRegion":"52","population":19384},{"nom":"Casson","code":"44027","codesPostaux":["44390"],"codeDepartement":"44","codeRegion":"52","population":2217},{"nom":"Le Cellier","code":"44028","codesPostaux":["44850"],"codeDepartement":"44","codeRegion":"52","population":3698},{"nom":"Divatte-sur-Loire","code":"44029","codesPostaux":["44450"],"codeDepartement":"44","codeRegion":"52","population":6713},{"nom":"La Chapelle-des-Marais","code":"44030","codesPostaux":["44410"],"codeDepartement":"44","codeRegion":"52","population":4109},{"nom":"La Chapelle-Glain","code":"44031","codesPostaux":["44670"],"codeDepartement":"44","codeRegion":"52","population":816},{"nom":"La Chapelle-Heulin","code":"44032","codesPostaux":["44330"],"codeDepartement":"44","codeRegion":"52","population":3265},{"nom":"La Chapelle-Launay","code":"44033","codesPostaux":["44260"],"codeDepartement":"44","codeRegion":"52","population":2983},{"nom":"La Chapelle-sur-Erdre","code":"44035","codesPostaux":["44240"],"codeDepartement":"44","codeRegion":"52","population":19348},{"nom":"Châteaubriant","code":"44036","codesPostaux":["44110"],"codeDepartement":"44","codeRegion":"52","population":11854},{"nom":"Château-Thébaud","code":"44037","codesPostaux":["44690"],"codeDepartement":"44","codeRegion":"52","population":3007},{"nom":"Chauvé","code":"44038","codesPostaux":["44320"],"codeDepartement":"44","codeRegion":"52","population":2814},{"nom":"Cheix-en-Retz","code":"44039","codesPostaux":["44640"],"codeDepartement":"44","codeRegion":"52","population":1047},{"nom":"La Chevrolière","code":"44041","codesPostaux":["44118"],"codeDepartement":"44","codeRegion":"52","population":5490},{"nom":"Clisson","code":"44043","codesPostaux":["44190"],"codeDepartement":"44","codeRegion":"52","population":7035},{"nom":"Conquereuil","code":"44044","codesPostaux":["44290"],"codeDepartement":"44","codeRegion":"52","population":1109},{"nom":"Cordemais","code":"44045","codesPostaux":["44360"],"codeDepartement":"44","codeRegion":"52","population":3692},{"nom":"Corsept","code":"44046","codesPostaux":["44560"],"codeDepartement":"44","codeRegion":"52","population":2684},{"nom":"Couëron","code":"44047","codesPostaux":["44220"],"codeDepartement":"44","codeRegion":"52","population":20900},{"nom":"Couffé","code":"44048","codesPostaux":["44521"],"codeDepartement":"44","codeRegion":"52","population":2543},{"nom":"Le Croisic","code":"44049","codesPostaux":["44490"],"codeDepartement":"44","codeRegion":"52","population":4066},{"nom":"Crossac","code":"44050","codesPostaux":["44160"],"codeDepartement":"44","codeRegion":"52","population":2926},{"nom":"Derval","code":"44051","codesPostaux":["44590"],"codeDepartement":"44","codeRegion":"52","population":3488},{"nom":"Donges","code":"44052","codesPostaux":["44480"],"codeDepartement":"44","codeRegion":"52","population":7852},{"nom":"Drefféac","code":"44053","codesPostaux":["44530"],"codeDepartement":"44","codeRegion":"52","population":2188},{"nom":"Erbray","code":"44054","codesPostaux":["44110"],"codeDepartement":"44","codeRegion":"52","population":2983},{"nom":"La Baule-Escoublac","code":"44055","codesPostaux":["44500"],"codeDepartement":"44","codeRegion":"52","population":15455},{"nom":"Fay-de-Bretagne","code":"44056","codesPostaux":["44130"],"codeDepartement":"44","codeRegion":"52","population":3601},{"nom":"Fégréac","code":"44057","codesPostaux":["44460"],"codeDepartement":"44","codeRegion":"52","population":2447},{"nom":"Fercé","code":"44058","codesPostaux":["44660"],"codeDepartement":"44","codeRegion":"52","population":483},{"nom":"Frossay","code":"44061","codesPostaux":["44320"],"codeDepartement":"44","codeRegion":"52","population":3227},{"nom":"Le Gâvre","code":"44062","codesPostaux":["44130"],"codeDepartement":"44","codeRegion":"52","population":1781},{"nom":"Gétigné","code":"44063","codesPostaux":["44190"],"codeDepartement":"44","codeRegion":"52","population":3621},{"nom":"Gorges","code":"44064","codesPostaux":["44190"],"codeDepartement":"44","codeRegion":"52","population":4543},{"nom":"Grand-Auverné","code":"44065","codesPostaux":["44520"],"codeDepartement":"44","codeRegion":"52","population":772},{"nom":"Grandchamps-des-Fontaines","code":"44066","codesPostaux":["44119"],"codeDepartement":"44","codeRegion":"52","population":5841},{"nom":"Guémené-Penfao","code":"44067","codesPostaux":["44290"],"codeDepartement":"44","codeRegion":"52","population":5215},{"nom":"Guenrouet","code":"44068","codesPostaux":["44530"],"codeDepartement":"44","codeRegion":"52","population":3335},{"nom":"Guérande","code":"44069","codesPostaux":["44350"],"codeDepartement":"44","codeRegion":"52","population":16186},{"nom":"La Haie-Fouassière","code":"44070","codesPostaux":["44690"],"codeDepartement":"44","codeRegion":"52","population":4648},{"nom":"Haute-Goulaine","code":"44071","codesPostaux":["44115"],"codeDepartement":"44","codeRegion":"52","population":5755},{"nom":"Herbignac","code":"44072","codesPostaux":["44410"],"codeDepartement":"44","codeRegion":"52","population":6719},{"nom":"Héric","code":"44073","codesPostaux":["44810"],"codeDepartement":"44","codeRegion":"52","population":5930},{"nom":"Indre","code":"44074","codesPostaux":["44610"],"codeDepartement":"44","codeRegion":"52","population":3915},{"nom":"Issé","code":"44075","codesPostaux":["44520"],"codeDepartement":"44","codeRegion":"52","population":1853},{"nom":"Jans","code":"44076","codesPostaux":["44170"],"codeDepartement":"44","codeRegion":"52","population":1342},{"nom":"Joué-sur-Erdre","code":"44077","codesPostaux":["44440"],"codeDepartement":"44","codeRegion":"52","population":2434},{"nom":"Juigné-des-Moutiers","code":"44078","codesPostaux":["44670"],"codeDepartement":"44","codeRegion":"52","population":351},{"nom":"Le Landreau","code":"44079","codesPostaux":["44430"],"codeDepartement":"44","codeRegion":"52","population":2977},{"nom":"Lavau-sur-Loire","code":"44080","codesPostaux":["44260"],"codeDepartement":"44","codeRegion":"52","population":766},{"nom":"Legé","code":"44081","codesPostaux":["44650"],"codeDepartement":"44","codeRegion":"52","population":4493},{"nom":"Ligné","code":"44082","codesPostaux":["44850"],"codeDepartement":"44","codeRegion":"52","population":5143},{"nom":"La Limouzinière","code":"44083","codesPostaux":["44310"],"codeDepartement":"44","codeRegion":"52","population":2401},{"nom":"Le Loroux-Bottereau","code":"44084","codesPostaux":["44430"],"codeDepartement":"44","codeRegion":"52","population":8126},{"nom":"Louisfert","code":"44085","codesPostaux":["44110"],"codeDepartement":"44","codeRegion":"52","population":1020},{"nom":"Lusanger","code":"44086","codesPostaux":["44590"],"codeDepartement":"44","codeRegion":"52","population":1035},{"nom":"Machecoul-Saint-Même","code":"44087","codesPostaux":["44270"],"codeDepartement":"44","codeRegion":"52","population":7393},{"nom":"Maisdon-sur-Sèvre","code":"44088","codesPostaux":["44690"],"codeDepartement":"44","codeRegion":"52","population":2908},{"nom":"Malville","code":"44089","codesPostaux":["44260"],"codeDepartement":"44","codeRegion":"52","population":3429},{"nom":"La Marne","code":"44090","codesPostaux":["44270"],"codeDepartement":"44","codeRegion":"52","population":1479},{"nom":"Marsac-sur-Don","code":"44091","codesPostaux":["44170"],"codeDepartement":"44","codeRegion":"52","population":1499},{"nom":"Massérac","code":"44092","codesPostaux":["44290"],"codeDepartement":"44","codeRegion":"52","population":691},{"nom":"Mauves-sur-Loire","code":"44094","codesPostaux":["44470"],"codeDepartement":"44","codeRegion":"52","population":3208},{"nom":"La Meilleraye-de-Bretagne","code":"44095","codesPostaux":["44520"],"codeDepartement":"44","codeRegion":"52","population":1512},{"nom":"Mésanger","code":"44096","codesPostaux":["44522"],"codeDepartement":"44","codeRegion":"52","population":4686},{"nom":"Mesquer","code":"44097","codesPostaux":["44420"],"codeDepartement":"44","codeRegion":"52","population":1938},{"nom":"Missillac","code":"44098","codesPostaux":["44780"],"codeDepartement":"44","codeRegion":"52","population":5271},{"nom":"Moisdon-la-Rivière","code":"44099","codesPostaux":["44520"],"codeDepartement":"44","codeRegion":"52","population":1960},{"nom":"Monnières","code":"44100","codesPostaux":["44690"],"codeDepartement":"44","codeRegion":"52","population":2179},{"nom":"La Montagne","code":"44101","codesPostaux":["44620"],"codeDepartement":"44","codeRegion":"52","population":6215},{"nom":"Montbert","code":"44102","codesPostaux":["44140"],"codeDepartement":"44","codeRegion":"52","population":3097},{"nom":"Montoir-de-Bretagne","code":"44103","codesPostaux":["44550"],"codeDepartement":"44","codeRegion":"52","population":7079},{"nom":"Montrelais","code":"44104","codesPostaux":["44370"],"codeDepartement":"44","codeRegion":"52","population":859},{"nom":"Mouais","code":"44105","codesPostaux":["44590"],"codeDepartement":"44","codeRegion":"52","population":384},{"nom":"Les Moutiers-en-Retz","code":"44106","codesPostaux":["44760"],"codeDepartement":"44","codeRegion":"52","population":1576},{"nom":"Mouzeil","code":"44107","codesPostaux":["44850"],"codeDepartement":"44","codeRegion":"52","population":1874},{"nom":"Mouzillon","code":"44108","codesPostaux":["44330"],"codeDepartement":"44","codeRegion":"52","population":2810},{"nom":"Nantes","code":"44109","codesPostaux":["44100","44000","44300","44200"],"codeDepartement":"44","codeRegion":"52","population":306694},{"nom":"Nort-sur-Erdre","code":"44110","codesPostaux":["44390"],"codeDepartement":"44","codeRegion":"52","population":8651},{"nom":"Notre-Dame-des-Landes","code":"44111","codesPostaux":["44130"],"codeDepartement":"44","codeRegion":"52","population":2144},{"nom":"Noyal-sur-Brutz","code":"44112","codesPostaux":["44110"],"codeDepartement":"44","codeRegion":"52","population":592},{"nom":"Nozay","code":"44113","codesPostaux":["44170"],"codeDepartement":"44","codeRegion":"52","population":4130},{"nom":"Orvault","code":"44114","codesPostaux":["44700"],"codeDepartement":"44","codeRegion":"52","population":25931},{"nom":"Oudon","code":"44115","codesPostaux":["44521"],"codeDepartement":"44","codeRegion":"52","population":3763},{"nom":"Paimbœuf","code":"44116","codesPostaux":["44560"],"codeDepartement":"44","codeRegion":"52","population":3144},{"nom":"Le Pallet","code":"44117","codesPostaux":["44330"],"codeDepartement":"44","codeRegion":"52","population":3236},{"nom":"Pannecé","code":"44118","codesPostaux":["44440"],"codeDepartement":"44","codeRegion":"52","population":1342},{"nom":"Paulx","code":"44119","codesPostaux":["44270"],"codeDepartement":"44","codeRegion":"52","population":1978},{"nom":"Le Pellerin","code":"44120","codesPostaux":["44640"],"codeDepartement":"44","codeRegion":"52","population":5050},{"nom":"Petit-Auverné","code":"44121","codesPostaux":["44670"],"codeDepartement":"44","codeRegion":"52","population":429},{"nom":"Petit-Mars","code":"44122","codesPostaux":["44390"],"codeDepartement":"44","codeRegion":"52","population":3605},{"nom":"Pierric","code":"44123","codesPostaux":["44290"],"codeDepartement":"44","codeRegion":"52","population":983},{"nom":"Le Pin","code":"44124","codesPostaux":["44540"],"codeDepartement":"44","codeRegion":"52","population":770},{"nom":"Piriac-sur-Mer","code":"44125","codesPostaux":["44420"],"codeDepartement":"44","codeRegion":"52","population":2261},{"nom":"La Plaine-sur-Mer","code":"44126","codesPostaux":["44770"],"codeDepartement":"44","codeRegion":"52","population":4164},{"nom":"La Planche","code":"44127","codesPostaux":["44140"],"codeDepartement":"44","codeRegion":"52","population":2610},{"nom":"Plessé","code":"44128","codesPostaux":["44630"],"codeDepartement":"44","codeRegion":"52","population":5241},{"nom":"Pontchâteau","code":"44129","codesPostaux":["44160"],"codeDepartement":"44","codeRegion":"52","population":10666},{"nom":"Pont-Saint-Martin","code":"44130","codesPostaux":["44860"],"codeDepartement":"44","codeRegion":"52","population":5877},{"nom":"Pornic","code":"44131","codesPostaux":["44210"],"codeDepartement":"44","codeRegion":"52","population":14703},{"nom":"Pornichet","code":"44132","codesPostaux":["44380"],"codeDepartement":"44","codeRegion":"52","population":10676},{"nom":"Port-Saint-Père","code":"44133","codesPostaux":["44710"],"codeDepartement":"44","codeRegion":"52","population":2910},{"nom":"Pouillé-les-Côteaux","code":"44134","codesPostaux":["44522"],"codeDepartement":"44","codeRegion":"52","population":1025},{"nom":"Le Pouliguen","code":"44135","codesPostaux":["44510"],"codeDepartement":"44","codeRegion":"52","population":4410},{"nom":"Préfailles","code":"44136","codesPostaux":["44770"],"codeDepartement":"44","codeRegion":"52","population":1223},{"nom":"Prinquiau","code":"44137","codesPostaux":["44260"],"codeDepartement":"44","codeRegion":"52","population":3476},{"nom":"Puceul","code":"44138","codesPostaux":["44390"],"codeDepartement":"44","codeRegion":"52","population":1119},{"nom":"Quilly","code":"44139","codesPostaux":["44750"],"codeDepartement":"44","codeRegion":"52","population":1379},{"nom":"La Regrippière","code":"44140","codesPostaux":["44330"],"codeDepartement":"44","codeRegion":"52","population":1525},{"nom":"La Remaudière","code":"44141","codesPostaux":["44430"],"codeDepartement":"44","codeRegion":"52","population":1284},{"nom":"Remouillé","code":"44142","codesPostaux":["44140"],"codeDepartement":"44","codeRegion":"52","population":1899},{"nom":"Rezé","code":"44143","codesPostaux":["44400"],"codeDepartement":"44","codeRegion":"52","population":40368},{"nom":"Riaillé","code":"44144","codesPostaux":["44440"],"codeDepartement":"44","codeRegion":"52","population":2319},{"nom":"Rouans","code":"44145","codesPostaux":["44640"],"codeDepartement":"44","codeRegion":"52","population":2913},{"nom":"Rougé","code":"44146","codesPostaux":["44660"],"codeDepartement":"44","codeRegion":"52","population":2237},{"nom":"Ruffigné","code":"44148","codesPostaux":["44660"],"codeDepartement":"44","codeRegion":"52","population":708},{"nom":"Saffré","code":"44149","codesPostaux":["44390"],"codeDepartement":"44","codeRegion":"52","population":3860},{"nom":"Saint-Aignan-Grandlieu","code":"44150","codesPostaux":["44860"],"codeDepartement":"44","codeRegion":"52","population":3912},{"nom":"Saint-André-des-Eaux","code":"44151","codesPostaux":["44117"],"codeDepartement":"44","codeRegion":"52","population":6355},{"nom":"Sainte-Anne-sur-Brivet","code":"44152","codesPostaux":["44160"],"codeDepartement":"44","codeRegion":"52","population":2984},{"nom":"Saint-Aubin-des-Châteaux","code":"44153","codesPostaux":["44110"],"codeDepartement":"44","codeRegion":"52","population":1777},{"nom":"Saint-Brevin-les-Pins","code":"44154","codesPostaux":["44250"],"codeDepartement":"44","codeRegion":"52","population":13778},{"nom":"Saint-Colomban","code":"44155","codesPostaux":["44310"],"codeDepartement":"44","codeRegion":"52","population":3333},{"nom":"Corcoué-sur-Logne","code":"44156","codesPostaux":["44650"],"codeDepartement":"44","codeRegion":"52","population":2873},{"nom":"Saint-Étienne-de-Mer-Morte","code":"44157","codesPostaux":["44270"],"codeDepartement":"44","codeRegion":"52","population":1715},{"nom":"Saint-Étienne-de-Montluc","code":"44158","codesPostaux":["44360"],"codeDepartement":"44","codeRegion":"52","population":6952},{"nom":"Saint-Fiacre-sur-Maine","code":"44159","codesPostaux":["44690"],"codeDepartement":"44","codeRegion":"52","population":1186},{"nom":"Saint-Gildas-des-Bois","code":"44161","codesPostaux":["44530"],"codeDepartement":"44","codeRegion":"52","population":3776},{"nom":"Saint-Herblain","code":"44162","codesPostaux":["44800"],"codeDepartement":"44","codeRegion":"52","population":46603},{"nom":"Vair-sur-Loire","code":"44163","codesPostaux":["44150"],"codeDepartement":"44","codeRegion":"52","population":4624},{"nom":"Saint-Hilaire-de-Chaléons","code":"44164","codesPostaux":["44680"],"codeDepartement":"44","codeRegion":"52","population":2265},{"nom":"Saint-Hilaire-de-Clisson","code":"44165","codesPostaux":["44190"],"codeDepartement":"44","codeRegion":"52","population":2268},{"nom":"Saint-Jean-de-Boiseau","code":"44166","codesPostaux":["44640"],"codeDepartement":"44","codeRegion":"52","population":5692},{"nom":"Saint-Joachim","code":"44168","codesPostaux":["44720"],"codeDepartement":"44","codeRegion":"52","population":3983},{"nom":"Saint-Julien-de-Concelles","code":"44169","codesPostaux":["44450"],"codeDepartement":"44","codeRegion":"52","population":6888},{"nom":"Saint-Julien-de-Vouvantes","code":"44170","codesPostaux":["44670"],"codeDepartement":"44","codeRegion":"52","population":973},{"nom":"Saint-Léger-les-Vignes","code":"44171","codesPostaux":["44710"],"codeDepartement":"44","codeRegion":"52","population":1776},{"nom":"Sainte-Luce-sur-Loire","code":"44172","codesPostaux":["44980"],"codeDepartement":"44","codeRegion":"52","population":15247},{"nom":"Saint-Lumine-de-Clisson","code":"44173","codesPostaux":["44190"],"codeDepartement":"44","codeRegion":"52","population":2109},{"nom":"Saint-Lumine-de-Coutais","code":"44174","codesPostaux":["44310"],"codeDepartement":"44","codeRegion":"52","population":2128},{"nom":"Saint-Lyphard","code":"44175","codesPostaux":["44410"],"codeDepartement":"44","codeRegion":"52","population":4699},{"nom":"Saint-Malo-de-Guersac","code":"44176","codesPostaux":["44550"],"codeDepartement":"44","codeRegion":"52","population":3175},{"nom":"Saint-Mars-de-Coutais","code":"44178","codesPostaux":["44680"],"codeDepartement":"44","codeRegion":"52","population":2630},{"nom":"Saint-Mars-du-Désert","code":"44179","codesPostaux":["44850"],"codeDepartement":"44","codeRegion":"52","population":4787},{"nom":"Vallons-de-l'Erdre","code":"44180","codesPostaux":["44540"],"codeDepartement":"44","codeRegion":"52","population":6589},{"nom":"Saint-Michel-Chef-Chef","code":"44182","codesPostaux":["44730"],"codeDepartement":"44","codeRegion":"52","population":4813},{"nom":"Saint-Molf","code":"44183","codesPostaux":["44350"],"codeDepartement":"44","codeRegion":"52","population":2560},{"nom":"Saint-Nazaire","code":"44184","codesPostaux":["44600"],"codeDepartement":"44","codeRegion":"52","population":69719},{"nom":"Saint-Nicolas-de-Redon","code":"44185","codesPostaux":["44460"],"codeDepartement":"44","codeRegion":"52","population":3164},{"nom":"Sainte-Pazanne","code":"44186","codesPostaux":["44680"],"codeDepartement":"44","codeRegion":"52","population":6659},{"nom":"Saint-Père-en-Retz","code":"44187","codesPostaux":["44320"],"codeDepartement":"44","codeRegion":"52","population":4553},{"nom":"Saint-Philbert-de-Grand-Lieu","code":"44188","codesPostaux":["44310"],"codeDepartement":"44","codeRegion":"52","population":8851},{"nom":"Sainte-Reine-de-Bretagne","code":"44189","codesPostaux":["44160"],"codeDepartement":"44","codeRegion":"52","population":2353},{"nom":"Saint-Sébastien-sur-Loire","code":"44190","codesPostaux":["44230"],"codeDepartement":"44","codeRegion":"52","population":26872},{"nom":"Saint-Viaud","code":"44192","codesPostaux":["44320"],"codeDepartement":"44","codeRegion":"52","population":2457},{"nom":"Saint-Vincent-des-Landes","code":"44193","codesPostaux":["44590"],"codeDepartement":"44","codeRegion":"52","population":1521},{"nom":"Sautron","code":"44194","codesPostaux":["44880"],"codeDepartement":"44","codeRegion":"52","population":7915},{"nom":"Savenay","code":"44195","codesPostaux":["44260"],"codeDepartement":"44","codeRegion":"52","population":8448},{"nom":"Sévérac","code":"44196","codesPostaux":["44530"],"codeDepartement":"44","codeRegion":"52","population":1628},{"nom":"Sion-les-Mines","code":"44197","codesPostaux":["44590"],"codeDepartement":"44","codeRegion":"52","population":1598},{"nom":"Les Sorinières","code":"44198","codesPostaux":["44840"],"codeDepartement":"44","codeRegion":"52","population":8216},{"nom":"Soudan","code":"44199","codesPostaux":["44110"],"codeDepartement":"44","codeRegion":"52","population":2000},{"nom":"Soulvache","code":"44200","codesPostaux":["44660"],"codeDepartement":"44","codeRegion":"52","population":351},{"nom":"Sucé-sur-Erdre","code":"44201","codesPostaux":["44240"],"codeDepartement":"44","codeRegion":"52","population":6958},{"nom":"Teillé","code":"44202","codesPostaux":["44440"],"codeDepartement":"44","codeRegion":"52","population":1785},{"nom":"Le Temple-de-Bretagne","code":"44203","codesPostaux":["44360"],"codeDepartement":"44","codeRegion":"52","population":1928},{"nom":"Thouaré-sur-Loire","code":"44204","codesPostaux":["44470"],"codeDepartement":"44","codeRegion":"52","population":9778},{"nom":"Les Touches","code":"44205","codesPostaux":["44390"],"codeDepartement":"44","codeRegion":"52","population":2488},{"nom":"Touvois","code":"44206","codesPostaux":["44650"],"codeDepartement":"44","codeRegion":"52","population":1794},{"nom":"Trans-sur-Erdre","code":"44207","codesPostaux":["44440"],"codeDepartement":"44","codeRegion":"52","population":1065},{"nom":"Treffieux","code":"44208","codesPostaux":["44170"],"codeDepartement":"44","codeRegion":"52","population":862},{"nom":"Treillières","code":"44209","codesPostaux":["44119"],"codeDepartement":"44","codeRegion":"52","population":8978},{"nom":"Trignac","code":"44210","codesPostaux":["44570"],"codeDepartement":"44","codeRegion":"52","population":7871},{"nom":"La Turballe","code":"44211","codesPostaux":["44420"],"codeDepartement":"44","codeRegion":"52","population":4502},{"nom":"Vallet","code":"44212","codesPostaux":["44330"],"codeDepartement":"44","codeRegion":"52","population":8953},{"nom":"Loireauxence","code":"44213","codesPostaux":["44370"],"codeDepartement":"44","codeRegion":"52","population":7540},{"nom":"Vay","code":"44214","codesPostaux":["44170"],"codeDepartement":"44","codeRegion":"52","population":2060},{"nom":"Vertou","code":"44215","codesPostaux":["44120"],"codeDepartement":"44","codeRegion":"52","population":23581},{"nom":"Vieillevigne","code":"44216","codesPostaux":["44116"],"codeDepartement":"44","codeRegion":"52","population":3961},{"nom":"Vigneux-de-Bretagne","code":"44217","codesPostaux":["44360"],"codeDepartement":"44","codeRegion":"52","population":5923},{"nom":"Villepot","code":"44218","codesPostaux":["44110"],"codeDepartement":"44","codeRegion":"52","population":662},{"nom":"Vue","code":"44220","codesPostaux":["44640"],"codeDepartement":"44","codeRegion":"52","population":1648},{"nom":"La Chevallerais","code":"44221","codesPostaux":["44810"],"codeDepartement":"44","codeRegion":"52","population":1556},{"nom":"La Roche-Blanche","code":"44222","codesPostaux":["44522"],"codeDepartement":"44","codeRegion":"52","population":1187},{"nom":"Geneston","code":"44223","codesPostaux":["44140"],"codeDepartement":"44","codeRegion":"52","population":3638},{"nom":"La Grigonnais","code":"44224","codesPostaux":["44170"],"codeDepartement":"44","codeRegion":"52","population":1657}]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'paginable';
  pageEvent: any;
  displayedColumns: string[] = ['nom', 'code', 'codeDepartement', 'population'];
  dataSource = ELEMENT_DATA;
  dataSourcePaginable = ELEMENT_DATA;
}
