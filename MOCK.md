# Livello 103

## Obiettivo del secondo

Migliorare le conoscenze di testubg in generale tramite Mocking e la sua applicazione in Jest


## Che cos'è il Mocking
I mock object (oggetti simulati od oggetti mock) sono degli oggetti simulati che riproducono il comportamento degli oggetti reali in modo controllato. Un programmatore crea un oggetto mock per testare il comportamento di altri oggetti, reali, ma legati ad un oggetto inaccessibile o non implementato. [Wikipedia] (https://it.wikipedia.org/wiki/Mock_object)

In altre parole, è una tecnica che permette di *isolare* le funzioni soggette a test, sostituendo le dipendende con entità che si possono controllare e/o ispezionare. 

## Il problema e il metodo. 

Vogliamo simulare un'incontro di pari e dispari; per vincere, un giocatore deve essere il primo a vincere due partite. La singola partita è gestita dalla funzione  ottieniVincitore(g1,g2) - attualmente estrae il risultato a caso, ma potrebbe essere sostituita in futuro da un'interazione diretta con l'utente. 

ottieniVincitore() è organizzata come un normale modulo chiamato *Gioco.js*, e possiede il suo test di unità in *Gioco.test.js*. Data la natura randomica della funzione, il test non può fare altro che controllare che il risultato sia plausibile. 

App.js contiene il codice per l'esecuzione di una intera partita. Al suo interno richiama gioco, e prosegue sinché uno dei contendenti vince la partita.

Testare questa applicazione è problematico. Dato che non abbiamo un controllo sul funzionamento di ottieniVincitore(), l'unica cosa testabile richiamando la funzione è che "qualcuno" vinca - un po' poco. In effetti si tratta di un test di integrazione, e potete vederlo in App.integration.test.js e, in pratica, non testa molto di più di quanto faccia Gioco.test.js. 

Dobbiamo operare con più decisione



## Step 1

La prima soluzione non richiede l'uso di Jest e la si propone solo 
a livello esplicativo. Si tratta di applicare un [Monkey Patching](https://en.wikipedia.org/wiki/Monkey_patch). In effetti sostituiamo la funzione *esterna* al modulo oggetto di test con una funzione interna, più limitata, che ne simula il comportamento in modo prevedibile. Vorremmo poter controllare che se un giocatore vince sue partite vinca anche l'incontro, e che la funzione sia stata chiamata estattamente due volte. 

Ciò porta ad alcune modifiche: 

- cambiare la modalità di importazione della modulo esterno (che originariamente era una costante)
- sostituire la funzione che ha un output non prevedibile con una funzione deterministica 
- aggiungere il meccanismo per contare quante volte la funzione è stata chiamata. 

Seguite le istruzioni che trovate nei commenti di App.test.js, commitate e poi proseguite con  il seguente comando

``` git checkout problema3a  ```



## Conclusione

Abbiamo imparato a usare i seguenti matcher per expect(): 

- .includes()



## Want some more?

Se vi sentite pronti per la sfida successiva, date il comando 

``` git checkout problema3  ```

e leggete il file MOCK.md