var StonPans = require('./ston-refac');

var basePans = ['donut', 'bread', 'croissant'];

var fruits = [
  'strawberry',
  'watermelon',
  'grape',
  'pear',
  'orange',
  'grapefruit',
  'melon',
  'coconut',
];

var topings = [
  'choco',
  'vanila',
  'caramel',
  'honey',
  'milk',
  'dalgona',
  'flakes',
  'protien',
];

// 유효한 값이 들어온다고 가정

var customer1 = new StonPans(1, 11, basePans, fruits, topings);

// customer1.makePanOneSet();
// customer1.showPanOneSet();

var customer2 = new StonPans(2, 8, basePans, fruits, topings);

customer2.makePanSets();
customer2.showPanSets();
