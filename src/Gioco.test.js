import {pariDispari} from './App';
import * as gioco from './gioco'

describe("Modulo Gioco", () => {
    test('restituisce vincitore partita', () => {
        const winner = gioco.ottieniVincitore('Pippo', 'Pluto');
        expect(['Pippo', 'Pluto','pari'].includes(winner)).toBe(true)
        });
  });


  

