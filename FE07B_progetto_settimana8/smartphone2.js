// ************** CLASSE GENERALE *****************
var User = /** @class */ (function () {
    //costruttore classe
    function User(carica, numeroChimate) {
        this.carica = carica;
        this.numeroChiamate = numeroChimate;
    }
    // IMPLEMENTAZIONE DEI METODI
    User.prototype.ricarica = function (carica, caricaRicarica) {
        this.carica += caricaRicarica;
    };
    User.prototype.chiamata = function (carica, minutiDurata) {
        this.carica = this.carica - (minutiDurata * 0.20);
        this.numeroChiamate++;
    };
    User.prototype.getNumeroChiamata = function () {
        return this.numeroChiamate;
    };
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    User.prototype.numero404 = function () {
        return this.carica;
    };
    return User;
}());
// **************  IMPLEMENTAZIONE DELLA CLASSE PRIMO UTENTE
var user1 = new User(30, 7); //(credito, numero chiamate)
//ricariche
user1.ricarica(user1.carica, 20);
user1.ricarica(user1.carica, 10);
//chiamate
user1.chiamata(user1.carica, 43);
user1.chiamata(user1.carica, 28);
user1.chiamata(user1.carica, 58);
user1.chiamata(user1.carica, 16);
user1.chiamata(user1.carica, 31);
// 5
//console.log():
console.log("Primo utente");
console.log("Il tuo credito residuo \u00E8: ".concat(user1.numero404(), "\u20AC \nHai effettuato - ").concat(user1.getNumeroChiamata(), " - chiamate"));
user1.azzeraChiamate();
console.log("Hai azzerato la tua memoria chiamate. Adesso hai: - ".concat(user1.getNumeroChiamata(), " - chiamate."));
console.log("========================");
// **************  IMPLEMENTAZIONE DELLA CLASSE SECONDO UTENTE
var user2 = new User(8, 2); //(credito, numero chiamate)
//ricariche
user2.ricarica(user2.carica, 5);
//chiamate
user2.chiamata(user1.carica, 11);
//console.log():
console.log("Secondo utente");
console.log("Il tuo credito residuo \u00E8: ".concat(user2.numero404(), "\u20AC \nHai effettuato - ").concat(user2.getNumeroChiamata(), " - chiamate"));
user2.azzeraChiamate();
console.log("Hai azzerato la tua memoria chiamate. Adesso hai: - ".concat(user2.getNumeroChiamata(), " - chiamate."));
console.log("========================");
// **************  IMPLEMENTAZIONE DELLA CLASSE TERZO UTENTE
var user3 = new User(7, 18); //(credito, numero chiamate)
//ricariche
user3.ricarica(user3.carica, 10);
//chiamate
user3.chiamata(user3.carica, 4);
user3.chiamata(user3.carica, 6);
user3.chiamata(user3.carica, 1);
user3.chiamata(user3.carica, 3);
user3.chiamata(user3.carica, 7);
user3.chiamata(user3.carica, 2);
user3.chiamata(user3.carica, 5);
user3.chiamata(user3.carica, 1);
// 8
//console.log():
console.log("Terzo utente");
console.log("Il tuo credito residuo \u00E8: ".concat(user3.numero404(), "\u20AC \nHai effettuato - ").concat(user3.getNumeroChiamata(), " - chiamate"));
user3.azzeraChiamate();
console.log("Hai azzerato la tua memoria chiamate. Adesso hai: - ".concat(user3.getNumeroChiamata(), " - chiamate."));
console.log("========================");
