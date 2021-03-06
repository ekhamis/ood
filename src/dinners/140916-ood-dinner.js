var Mauro = require('./../attenders/MauroMandracchia'),
    Mohanad = require('./../attenders/MohanadMjawaz'),
    Ali = require('./../attenders/AliAtrash'),
    MontePulcianoWine = require('./../recipes/wine-monte_pulciano'),
    PastaCarbonara = require('./../recipes/pasta-carbonara'),
    DessertTiramisu = require('./../recipes/dessert-tiramisu'),
    Vodka = require('./../recipes/vodka'),
    Patat = require('./../recipes/patat');

Mohanad.brings(Patat);
Mauro.brings([ MontePulcianoWine, PastaCarbonara, DessertTiramisu ]);
Ali.brings([Vodka]); 

var Dinner = new Meal({
  title: 'Hack your future OOP',
  date: '14/08/2015',
  time: '13:00',
  where: 'Amsterdam'
});

Dinner.addOwner( Mauro );
Dinner.addGuest( Mohanad );
Dinner.addGuest( Ali );
module.exports = Dinner;
