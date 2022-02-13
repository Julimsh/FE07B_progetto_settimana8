//INTERFACCIA SMARTPHONE
interface Smartphone {
    //inserire proprietà interfaccia
    carica: number;
    numeroChiamate: number

    //dichiaro i metodi/funzioni
    ricarica(carica: number, caricaRicarica: number): void // mi deve restituire un "void" perché non c'è un vero "return"
    chiamata(carica: number, minutiDurata: number): void 
    numero404(): number 
    getNumeroChiamata(): number
    azzeraChiamate(): void
}
// ************** CLASSE GENERALE *****************
class User implements Smartphone{

    //modificatori di accesso sulle proprietà
    public carica: number;
    public numeroChiamate: number;
    
    //costruttore classe
    constructor(carica: number, numeroChimate: number) {
        this.carica = carica;
        this.numeroChiamate = numeroChimate;
    }
    
    // IMPLEMENTAZIONE DEI METODI
    public ricarica(carica: number, caricaRicarica: number): void {
        this.carica += caricaRicarica
    }
    public chiamata(carica: number, minutiDurata: number): void {
        this.carica = this.carica - (minutiDurata * 0.20);
        this.numeroChiamate++;
    }
    public getNumeroChiamata(): number {
        return this.numeroChiamate;
    }
    public azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }
    public numero404(): number {
        return this.carica
    }
}
// **************  IMPLEMENTAZIONE DELLA CLASSE PRIMO UTENTE
let user1 = new User (30, 7); //(credito, numero chiamate)

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
console.log(`Il tuo credito residuo è: ${user1.numero404()}€ 
Hai effettuato - ${user1.getNumeroChiamata()} - chiamate`);
user1.azzeraChiamate();
console.log(`Hai azzerato la tua memoria chiamate. Adesso hai: - ${user1.getNumeroChiamata()} - chiamate.`);
console.log("========================")

// **************  IMPLEMENTAZIONE DELLA CLASSE SECONDO UTENTE

let user2 = new User(8, 2); //(credito, numero chiamate)

//ricariche
user2.ricarica(user2.carica, 5);

//chiamate
user2.chiamata(user1.carica, 11);

//console.log():
console.log("Secondo utente");
console.log(`Il tuo credito residuo è: ${user2.numero404()}€ 
Hai effettuato - ${user2.getNumeroChiamata()} - chiamate`);
user2.azzeraChiamate();
console.log(`Hai azzerato la tua memoria chiamate. Adesso hai: - ${user2.getNumeroChiamata()} - chiamate.`);
console.log("========================")

// **************  IMPLEMENTAZIONE DELLA CLASSE TERZO UTENTE

let user3 = new User(7, 18); //(credito, numero chiamate)

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
console.log(`Il tuo credito residuo è: ${user3.numero404()}€ 
Hai effettuato - ${user3.getNumeroChiamata()} - chiamate`);
user3.azzeraChiamate();
console.log(`Hai azzerato la tua memoria chiamate. Adesso hai: - ${user3.getNumeroChiamata()} - chiamate.`);
console.log("========================")