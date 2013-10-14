// Et c'est parti pour votre premier nodebot !!!

// ce ficher est l'endroit ou reside l'esprit (ou l'ame c'est selon) de votre premier nodebots

// variables
var five = require('johnny-five'),  // johnny-five, le gentleman qui nous permet de discuter avec l'arduino
    board = new five.Board(),       // initialisation d'un objet "board", qui represente l'arduino et ses connecteurs
    myFirstLed;                     // un nom pour une petite diode que vous allez pouvoir allumer et eteindre a volontée
    
// board initialisation
board.on('ready', function() { // document ready, J5 style

    // dans cette section nous allons créer des objets qui vont représenter nos élément physiques
    myFirstLed = new five.Led(13);     // maintenant qu'on l'a nommée, donnons lui un objet pour interagir avec

    // on injecte notre hardware dans le REPL (Read-Eval-Print-Loop, http://nodejs.org/api/repl.html) 
    // pour pouvoir interagir avec en ligne de commande
    board.repl.inject({
        myFirstLed: myFirstLed
    });

    
});

