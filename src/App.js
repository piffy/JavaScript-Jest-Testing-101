import * as gioco from './gioco'
const fs = require('fs');


var board;

export function pariDispari(giocatore1, giocatore2) {
  var partiteDaVincere = 2;
  let giocatore1vittorie = 0
  let giocatore2vittorie = 0
  while (giocatore1vittorie < partiteDaVincere && giocatore2vittorie < partiteDaVincere) {
    const vincitore = gioco.ottieniVincitore(giocatore1, giocatore2)
    if (vincitore === giocatore1) {
      giocatore1vittorie++
    } else if (vincitore === giocatore2) {
      giocatore2vittorie++
    }
  }
  return giocatore1vittorie > giocatore2vittorie ? giocatore1 : giocatore2
}

export function setup(giocatori) {
board=new Map();
giocatori.forEach(element => {
   board.set(element,0);
});
}

export function leaderBoard() {
  let output="";
  for (const [key, value] of board) {
    output=output+key + ' = ' + value + "\n";
  }
  return output  
  }

export function salvaClassifica() {

  fs.writeFile('salvafile.txt', leaderBoard(), function (err) {
  if (err) return console.log(err);
});
}
  

export function caricaClassifica() {

  fs.readFile('salvafile.txt', 'utf8' , (err, data) => {
    if (err) { 
      setup([]);
      return
    }
    const righe = data.split("\n");
    righe.forEach(riga => {
      let dati=riga.split(" = ");
      //console.log(dati[0]+" "+dati[1]);
      board.set(dati[0],dati[1]);
    });

 
  })
  fs.unlinkSync('salvafile.txt');
}

