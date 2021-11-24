# Livello 102

## Obiettivo del secondo

Apprendere le basi del Test Driven Development


## Che cos'è il TDD

È un modello di sviluppo del software che prevede che la stesura dei test automatici avvenga prima di quella del software che deve essere sottoposto a test, e che lo sviluppo del software applicativo sia orientato esclusivamente all'obiettivo di passare i test automatici precedentemente predisposti. [Wikipedia]

Più specificamente, i programmatori seguono  una sequenza chiamata ciclo Red-Green-Refactor. 

1. Fase rossa: scrivre un test che fallisce
2. Fase verde: scrivete la quantità minima di codice necessaria a rendere valido il test
3. Refactoring: ripulire, ristrutturare, ottimizzare il codice.

Se necessario approfondire le conoscenze sul TDD potete dare un'occhiata qui [qui](https://www.ionos.it/digitalguide/siti-web/programmazione-del-sito-web/cose-il-test-driven-development/) e/o comprare [il mio libro](https://www.ibs.it/tecnologia-progettazione-per-mondo-digitale-ebook-marcello-missiroli/e/9788899283025)

## Il problema e il metodo. 

Vogliamo scrivere una funzione che codifichi una stringa utilizzando il [Cifrario di Cesare](https://it.wikipedia.org/wiki/Cifrario_di_Cesare)

Questa volta il file App.js è praticamente vuoto, si limita a presentare una funzione che non fa assolutamente nulla. Il sistema è predisposto al test, che non fa assolutamente nulla.

Il file App.test.js, invece, è pieno di test. Tuttavia, essi sono (momentaneamente) disabilitati, indicati dal metodo .skip. Infatti, eseguendo il solito npm test si ottiene

```
Test Suites: 4 skipped, 0 of 4 total
Tests:       4 skipped, 4 total
Snapshots:   0 total
Time:        0.17s, estimated 1s
```
Non è un sistema TDD "duro e puro", perché dovrebbe essere il programmatore stesso a scrivere i test, ma d'altra parte siamo qui per imparare. Dovrete quindi, di volta in volta, eliminare la particella .skip da un test, in ordine sequenziale. 

- Se il test fallisce, tutto bene: siete nella fase rossa. Scrivete la *minima quantità di codice* che vi fa passare il test e vi porta alla fase verde. A questo punto, migliorate il codice: il test deve sempre rimanere verde. 
- Se il nuovo test NON fallisce, probabilmente avete fatto *overcoding*: avete scritto più codice di quello strettamente necessario! Ripartite dall'inizio!



## Cifrario di Cesare


### Al lavoro, parte 1

Come accennato il primo test controlla solo che la funzione esista e restituisca una stringa. 

### Al lavoro, parte 2

Il secondo test controlla che se la funzione riceve una stringa, restituisca la stringa immutata. Molto simile al precedente, non dovrebbe essere difficile, ma neppure banale.

### Al lavoro, parte 3

Il terzo applica lo spostamaento di un posto a una stringa. Come prima approssimazione *potreste* scrivere 26 ```if``` o uno ```switch``` per far passare il test. Ma se non volete che Alan Turing si rivolti nella tomba, nella fase di refactoring  dovrete fare qualcosa di meglio. 

## Conclusione

Se volete vedere una possibile soluzione, salvate e committate il vostro lavoro, quindi date il comando 

``` git checkout soluzione2 ```



## Want some more?

Se vi sentite pronti per la sfida successiva, date il comando 

``` git checkout problema3  ```

e leggete il file MOCK.md