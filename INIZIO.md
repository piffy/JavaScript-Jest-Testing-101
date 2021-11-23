# Livello 101

## Obiettivo del primo passo

Apprendere le basi del testing con Jest


## Guardarsi attorno

Se avete clonato correttamente, disponete di un sistema "ready to go" per sviluppare applicazioni Javascript testabili tramite Jest.
Aprite il vostro editor (Codium, VSCode, VS, Eclipse, ...) e date un'occhiata ai diversi file. 

- index.html è un file che si limita a richiamare lo script App.js
- App.js contiene codice già pronto per essere utilizzato con Jest, quindi in forma "modularizzata" prevista dallo standard ES6 (righe 1..5). Questo codice contiene diversi errori, che dovrete trovare e correggere.
- App.test.js contiene lo scheletro del codice di test il codice di test. In particolare, per dare un tocco italianofilo, alcune istruzioni sono stati tradotti in italiano. 

Tutti gli altri file al momento non servono ma è meglio lasciarli.

## Test del test

In un terminale, posizionatevi all'interno di questa cartella. Nel caso di codium/VSCode, potete fare click in basso su terminal. Lì scrivete

```
npm test
```
Questo lancia il sistema automatico di test di Jest, che viene lanciato automaticamente ogni volta che modificate un file. In questo caso, dovrebbe avere scritto qualcowsa tipo: 

```
PASS  src/App.test.js
  test
    ✓ restituire test (2ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.67s, estimated 1s
Ran all test suites.

```

## Comandi di Jest

Come tutto in Javascript, il test è una successione di funzioni richiamate in successione. 

```describe```  (in italiano ```descrivi```)  delimita una test suite, quindi una serie di test collegati. Come parametro richiede il nome della test suite.
```it ```   delimita un singolo test. Come parametro richiede il nome della test suite. In inglese, è d'uso che la prima parola sia "should"
```expect``` (in italiano ```deve```) è la funzione che verifica il risultato. Le condizioni sono espresse da funzioni quali .toBe (uguaglianza stretta), toEqual (uguaglianza di valore), e moltissime altre. 
Queste tre funzioni sono ampiamente sufficienti per un funzionamento base di Jest.

Il test di esempio verifica che il valore di ritorno della funzione test() sia la stringa "test".



### Al lavoro, parte 1

Usando i comandi di cui sopra, scrivete un nuovo test che verifica il funzionamento dell'inizializzazione. Intestate il conto a Donanld Trumpe e verificate che la stampa risulti con il suo nome e contenga 0 Euro

