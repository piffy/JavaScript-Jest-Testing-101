import {pariDispari} from './App';

describe("Test di integrazione", () => {
    test('restituisce vincitore incontro', () => {
        const vincitore = pariDispari('Pippo', 'Pluto');
        expect(['Pippo', 'Pluto','pari'].includes(vincitore)).toBe(true)
      });
  });


  

