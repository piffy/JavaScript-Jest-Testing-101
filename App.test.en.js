import {init, test, estrattoConto, versa, preleva} from './App';

describe ('test', () => {
    test ('restituire test', () => {
        expect(test()).toBe('test');
    })
})


describe ('conto vuoto', () => {
    test ('settare il nome', () => {
        init('Donald Trump');
        expect(estrattoConto()).toBe('Donald Trump: 0€');
    })
})

describe ('versamento', () => {
    test ('accettare un versamento', () => {
        init('Donald Trump');
        versa(100);
        expect(estrattoConto()).toBe('Donald Trump: 100€');
    });
    test ('accettare due versamenti', () => {
        versa(50);
        expect(estrattoConto()).toBe('Donald Trump: 150€');
    });
    
})

describe ('prelievo', () => {
    test ('accettare un prelievo', () => {
        init('Donald Trump');
        versa(100);
        preleva(50);
        expect(estrattoConto()).toBe('Donald Trump: 50€');
    });

    test ('accettare un piccolo scoperto', () => {
        init('Donald Trump');
        versa(100);
        let x=preleva(200);
        expect(estrattoConto()).toBe('Donald Trump: -100€');
        expect(x).toBe(200);
    });
    test ('rifiutare uno scoperto eccessivo', () => {
        init('Donald Trump');
        versa(100);
        let x=preleva(610);
        expect(estrattoConto()).toBe('Donald Trump: 100€');
        expect(x).toBe(0);

    });

    
})


