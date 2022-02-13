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
// ************** PRIMO UTENTE *****************
class FirstUser implements Smartphone{

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
// IMPLEMENTAZIONE DELLA CLASSE
let utente1 = new FirstUser(30, 7); //(credito, numero chiamate)

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
console.log(`Il tuo credito residuo è: ${utente1.numero404()}€ 
Hai effettuato - ${utente1.getNumeroChiamata()} - chiamate`);
utente1.azzeraChiamate();
console.log(`Hai azzerato la tua memoria chiamate. Adesso hai: - ${utente1.getNumeroChiamata()} - chiamate.`);
console.log("========================")

// SECONDA E TERZA CLASSE (IDENTICHE ALLA PRIMA)

// **************** SECONDO UTENTE *******************
class SecondUser implements Smartphone{

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
// IMPLEMENTAZIONE DELLA CLASSE
let utente2 = new SecondUser(8, 2); //(credito, numero chiamate)

//ricariche
utente2.ricarica(utente2.carica, 5);

//chiamate
utente2.chiamata(utente1.carica, 11);

//console.log():
console.log("Secondo utente");
console.log(`Il tuo credito residuo è: ${utente2.numero404()}€ 
Hai effettuato - ${utente2.getNumeroChiamata()} - chiamate`);
utente2.azzeraChiamate();
console.log(`Hai azzerato la tua memoria chiamate. Adesso hai: - ${utente2.getNumeroChiamata()} - chiamate.`);
console.log("========================")

// ************** TERZO UTENTE **********************
class ThirdUser implements Smartphone{

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
// IMPLEMENTAZIONE DELLA CLASSE
let utente3 = new ThirdUser(7, 18); //(credito, numero chiamate)

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
console.log(`Il tuo credito residuo è: ${utente3.numero404()}€ 
Hai effettuato - ${utente3.getNumeroChiamata()} - chiamate`);
utente3.azzeraChiamate();
console.log(`Hai azzerato la tua memoria chiamate. Adesso hai: - ${utente3.getNumeroChiamata()} - chiamate.`);
console.log("========================")