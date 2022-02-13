// ************** PRIMO UTENTE *****************
var FirstUser = /** @class */ (function () {
    //costruttore classe
    function FirstUser(carica, numeroChimate) {
        this.carica = carica;
        this.numeroChiamate = numeroChimate;
    }
    // IMPLEMENTAZIONE DEI METODI
    FirstUser.prototype.ricarica = function (carica, caricaRicarica) {
        this.carica += caricaRicarica;
    };
    FirstUser.prototype.chiamata = function (carica, minutiDurata) {
        this.carica = this.carica - (minutiDurata * 0.20);
        this.numeroChiamate++;
    };
    FirstUser.prototype.getNumeroChiamata = function () {
        return this.numeroChiamate;
    };
    FirstUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    FirstUser.prototype.numero404 = function () {
        return this.carica;
    };
    return FirstUser;
}());
// IMPLEMENTAZIONE DELLA CLASSE
var utente1 = new FirstUser(30, 7); //(credito, numero chiamate)
//ricariche
utente1.ricarica(utente1.carica, 20);
utente1.ricarica(utente1.carica, 10);
//chiamate
utente1.chiamata(utente1.carica, 43);
utente1.chiamata(utente1.carica, 28);
utente1.chiamata(utente1.carica, 58);
utente1.chiamata(utente1.carica, 16);
utente1.chiamata(utente1.carica, 31);
// 5
//console.log():
console.log("Primo utente");
console.log("Il tuo credito residuo \u00E8: ".concat(utente1.numero404(), "\u20AC \nHai effettuato - ").concat(utente1.getNumeroChiamata(), " - chiamate"));
utente1.azzeraChiamate();
console.log("Hai azzerato la tua memoria chiamate. Adesso hai: - ".concat(utente1.getNumeroChiamata(), " - chiamate."));
console.log("========================");
// SECONDA E TERZA CLASSE (IDENTICHE ALLA PRIMA)
// **************** SECONDO UTENTE *******************
var SecondUser = /** @class */ (function () {
    //costruttore classe
    function SecondUser(carica, numeroChimate) {
        this.carica = carica;
        this.numeroChiamate = numeroChimate;
    }
    // IMPLEMENTAZIONE DEI METODI
    SecondUser.prototype.ricarica = function (carica, caricaRicarica) {
        this.carica += caricaRicarica;
    };
    SecondUser.prototype.chiamata = function (carica, minutiDurata) {
        this.carica = this.carica - (minutiDurata * 0.20);
        this.numeroChiamate++;
    };
    SecondUser.prototype.getNumeroChiamata = function () {
        return this.numeroChiamate;
    };
    SecondUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    SecondUser.prototype.numero404 = function () {
        return this.carica;
    };
    return SecondUser;
}());
// IMPLEMENTAZIONE DELLA CLASSE
var utente2 = new SecondUser(8, 2); //(credito, numero chiamate)
//ricariche
utente2.ricarica(utente2.carica, 5);
//chiamate
utente2.chiamata(utente1.carica, 11);
//console.log():
console.log("Secondo utente");
console.log("Il tuo credito residuo \u00E8: ".concat(utente2.numero404(), "\u20AC \nHai effettuato - ").concat(utente2.getNumeroChiamata(), " - chiamate"));
utente2.azzeraChiamate();
console.log("Hai azzerato la tua memoria chiamate. Adesso hai: - ".concat(utente2.getNumeroChiamata(), " - chiamate."));
console.log("========================");
// ************** TERZO UTENTE **********************
var ThirdUser = /** @class */ (function () {
    //costruttore classe
    function ThirdUser(carica, numeroChimate) {
        this.carica = carica;
        this.numeroChiamate = numeroChimate;
    }
    // IMPLEMENTAZIONE DEI METODI
    ThirdUser.prototype.ricarica = function (carica, caricaRicarica) {
        this.carica += caricaRicarica;
    };
    ThirdUser.prototype.chiamata = function (carica, minutiDurata) {
        this.carica = this.carica - (minutiDurata * 0.20);
        this.numeroChiamate++;
    };
    ThirdUser.prototype.getNumeroChiamata = function () {
        return this.numeroChiamate;
    };
    ThirdUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    ThirdUser.prototype.numero404 = function () {
        return this.carica;
    };
    return ThirdUser;
}());
// IMPLEMENTAZIONE DELLA CLASSE
var utente3 = new ThirdUser(7, 18); //(credito, numero chiamate)
//ricariche
utente3.ricarica(utente3.carica, 10);
//chiamate
utente3.chiamata(utente3.carica, 4);
utente3.chiamata(utente3.carica, 6);
utente3.chiamata(utente3.carica, 1);
utente3.chiamata(utente3.carica, 3);
utente3.chiamata(utente3.carica, 7);
utente3.chiamata(utente3.carica, 2);
utente3.chiamata(utente3.carica, 5);
utente3.chiamata(utente3.carica, 1);
// 8
//console.log():
console.log("Terzo utente");
console.log("Il tuo credito residuo \u00E8: ".concat(utente3.numero404(), "\u20AC \nHai effettuato - ").concat(utente3.getNumeroChiamata(), " - chiamate"));
utente3.azzeraChiamate();
console.log("Hai azzerato la tua memoria chiamate. Adesso hai: - ".concat(utente3.getNumeroChiamata(), " - chiamate."));
console.log("========================");
