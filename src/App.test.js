import {init, test, estrattoConto, versa, preleva} from './App';

const descrivi=describe;
const deve=it;


descrivi ('test', () => {
    deve ('restituire test', () => {
        expect(test()).toBe('test');
    })
})


descrivi ('conto vuoto', () => {
    deve ('settare il nome', () => {
        init('Donald Trump');
        expect(estrattoConto()).toBe('Donald Trump: 0€');
    })
})

descrivi ('versamento', () => {
    deve ('accettare un versamento', () => {
        init('Donald Trump');
        versa(100);
        expect(estrattoConto()).toBe('Donald Trump: 100€');
    });
    deve ('accettare due versamenti', () => {
        versa(50);
        expect(estrattoConto()).toBe('Donald Trump: 150€');
    });
    
})

descrivi ('prelievo', () => {
    deve ('accettare un prelievo', () => {
        init('Donald Trump');
        versa(100);
        preleva(50);
        expect(estrattoConto()).toBe('Donald Trump: 50€');
    });

    deve ('accettare un piccolo scoperto', () => {
        init('Donald Trump');
        versa(100);
        let x=preleva(200);
        expect(estrattoConto()).toBe('Donald Trump: -100€');
        expect(x).toBe(200);
    });
    deve ('rifiutare uno scoperto eccessivo', () => {
        init('Donald Trump');
        versa(100);
        let x=preleva(610);
        expect(estrattoConto()).toBe('Donald Trump: 100€');
        expect(x).toBe(0);

    });


    
})


