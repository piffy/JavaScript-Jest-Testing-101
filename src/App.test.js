import * as app from './App';

import * as gioco from './gioco'


test('Test di unità (Mock version)', () => {

    jest.spyOn(gioco, 'ottieniVincitore')

    gioco.ottieniVincitore.mockImplementation((p1, p2) => p2);
  
    const vincitore = app.pariDispari('Pippo', 'Pluto');
    expect(vincitore).toBe('Pluto')
    expect(gioco.ottieniVincitore).toHaveBeenCalledTimes(2);

    gioco.ottieniVincitore.mockRestore();

  })



  describe("Partita (Mock version)", () => {
    test('setup di una partita', () => {
        app.setup(['Pippo', 'Pluto']);
        expect (app.leaderBoard()).toEqual('Pippo = 0\nPluto = 0\n');
        jest.mock('./gioco', () => jest.fn(() => 'Pippo'));
        
        app.pariDispari('Pippo', 'Pluto');
        expect (app.leaderBoard()).toEqual('Pippo = 0\nPluto = 1\n');
      });
    test('salvataggio', () => {
        //const fs = require('fs');
        //setup(['Pippo', 'Pluto']);
        //salvaClassifica();
        //for(let i=0;i<10000;i++); 
        //expect (fs.existsSync('salvafile.txt')).toBe(true);
      });  
      test('ripristino partita salvata', () => {
        //const fs = require('fs');
        //caricaClassifica();
        //expect (fs.existsSync('salvafile.txt')).toBe(false);
        //expect (leaderBoard()).toEqual('Pippo = 0\nPluto = 0\n');
      });    
  });


  

