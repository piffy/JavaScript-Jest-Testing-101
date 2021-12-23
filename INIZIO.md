# Livello 102

## Obiettivo del secondo passo

Apprendere le basi del testing con Jest


## Guardarsi attorno

Se avete clonato correttamente, disponete di un sistema "ready to go" per sviluppare applicazioni Javascript testabili tramite Jest.
Aprite il vostro editor (Codium, VSCode, VS, Eclipse, ...) e date un'occhiata ai diversi file. 

- index.html è un file che si limita a richiamare lo script App.js
- App.js contiene codice già pronto per essere utilizzato con Jest, quindi in forma "modularizzata" prevista dallo standard ES6 (righe 1..5). Questo codice contiene diversi errori, che dovrete trovare e correggere.
- App.test.js contiene lo scheletro del codice di test. In particolare, per dare un tocco italianofilo, alcune istruzioni sono state tradotte in italiano (v. sotto). 

Tutti gli altri file al momento non servono ma è meglio lasciarli.

## Test del test

In un terminale, posizionatevi all'interno di questa cartella. Nel caso di codium/VSCode, potete fare click in basso su terminal. Lì scrivete

```
npm test
```
Questo lancia il sistema automatico di test di Jest, che viene lanciato automaticamente ogni volta che modificate un file. In questo caso, dovrebbe avere scritto qualcosa tipo: 

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

Il test di esempio verifica che il valore di ritorno della funzione test() sia la stringa "test". 


## Funzionalità base di Jest

Il test non è altro che una successione di funzioni.

- ```describe```  (in italiano ```descrivi```)  delimita una test suite, quindi una serie di test collegati. Come parametro richiede il nome della test suite.
- ```test``` delimita un singolo test. Come parametro richiede il nome della test suite. Ha come sinonimo ```it``` (in italiano ```deve```), in questo caso, in inglese, è d'uso che la prima parola del parametro sia "should".
- ```expect``` (in italiano ```deve```) è la funzione che verifica il risultato. Le condizioni sono espresse da funzioni quali .toBe (uguaglianza stretta), toEqual (uguaglianza di valore), e moltissime altre. 
Queste tre funzioni sono ampiamente sufficienti per un funzionamento base di Jest.



### Al lavoro, parte 1

Usando i comandi di cui sopra, scrivete un nuova test suite che verifica il funzionamento dell'inizializzazione. Intestate il conto a "Donanld Trump" e verificate che la stampa del conto corrente risulti con il suo nome e contenga 0 Euro. Questo codice non contiene errori.

### Al lavoro, parte 2

Ora scrivere una nuova test suite che controlla la funzione ``` versa() ```. Versate dapprima 100 Euro e controllate il risultato, quindi aggiungete un secondo test in cui verate ulteriori 50 euro, senza riazzerarlo. Il codice contiene un errore, che dovrete rimuovere

### Al lavoro, parte 3

Scrivere una nuova test suite che controlla la funzione ``` preleva() ```.  Verificate tre condizioni: un prelievo di danaro quando il saldo è positivo, un prelievo di danaro che porta il conto in rosso (ma superiore al limite di scoperto) e un prelievo di danaro oltre il limite - in questo caso il prelievo non dovrebbe essere effettuato. Controllare anche la somma prelevata. 
Anche in questo caso c'è un erore da rilevare

## Conclusione

Se volete vedere una possibile soluzione, salvate e committate il vostro lavoro, quindi date il comando 

``` git checkout soluzione1 ```

Troverete sia la soluzione in italiano sia la versione in cui il nome delle funzioni è in italiano sia quella in cui le funzioni sono in inglese; il resto del tutorial utilizzerà appunto i nomi inglesi, ma se lo preferite potete copiare le righe 3..5 negli esercizi successivi e ripudiare la lingua della perfida Albiore.

## Want some more?

Se vi sentite pronti per la sfida successiva, date il comando 

``` git checkout problema2  ```

e leggete il file TDD.md