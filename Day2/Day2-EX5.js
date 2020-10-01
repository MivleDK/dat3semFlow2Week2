//# 5 # this in JavaScript
//EX A

var car = {
    brand: "Nissan",
    getBrand: function () {
        console.log(this.brand);;
    }
};

var getCarBrand = car.getBrand;


/*
I "this.brand" henviser "this" til det globale scope, og ikke car objektet.
Eksekverer man i browseren er det globale objekt "window". 
Eksekverer man med node.js er det globale objekt "global".
Her henviser vi til getBrand: som er udefineret.
 */

 //EX B
 /* Same as EX A */