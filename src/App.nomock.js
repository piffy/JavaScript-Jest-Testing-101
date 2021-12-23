import {pariDispari} from './App';

import * as gioco from './gioco'


test('Test di unità (Monkey patching)', () => {
    const originalGetWinner = gioco.ottieniVincitore

    gioco.conta=0;
    gioco.ottieniVincitore = function (p1, p2) {
            gioco.conta++; 
            return p2};
  
    const vincitore = pariDispari('Pippo', 'Pluto');
    expect(vincitore).toBe('Pluto')
    expect(gioco.conta).toBe(2)


    gioco.ottieniVincitore = originalGetWinner
  })


  









  

