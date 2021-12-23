import {pariDispari, setup, leaderBoard, salvaClassifica, caricaClassifica} from './App';

describe("Test di integrazione", () => {
    test('restituisce vincitore incontro', () => {
        const vincitore = pariDispari('Pippo', 'Pluto');
        expect(['Pippo', 'Pluto','pari'].includes(vincitore)).toBe(true)
      });
  });


  describe("Partita", () => {
    test('setup di una partita', () => {
        setup(['Pippo', 'Pluto']);
        expect (leaderBoard()).toEqual('Pippo = 0\nPluto = 0\n');
      });
    test('salvataggio', () => {
        const fs = require('fs');
        setup(['Pippo', 'Pluto']);
        salvaClassifica();
        for(let i=0;i<10000;i++); 
        expect (fs.existsSync('salvafile.txt')).toBe(true);
      });  
      test('ripristino partita salvata', () => {
        const fs = require('fs');
        caricaClassifica();
        expect (fs.existsSync('salvafile.txt')).toBe(false);
        expect (leaderBoard()).toEqual('Pippo = 0\nPluto = 0\n');
      });    
  });


  

