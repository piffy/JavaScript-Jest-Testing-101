import {init, test, estrattoConto, versa, preleva} from './App';

const descrivi=describe;
const deve=it;
var aspettatiChe=expect;


descrivi ('test', () => {
    deve ('restituire test', () => {
        aspettatiChe(test()).toBe('test');
    })
})


descrivi ('conto vuoto', () => {
    deve ('settare il nome', () => {
        init('Donald Trump');
        aspettatiChe(estrattoConto()).toBe('Donald Trump: 0€');
    })
})

descrivi ('versamento', () => {
    deve ('accettare un versamento', () => {
        init('Donald Trump');
        versa(100);
        aspettatiChe(estrattoConto()).toBe('Donald Trump: 100€');
    });
    deve ('accettare due versamenti', () => {
        versa(50);
        aspettatiChe(estrattoConto()).toBe('Donald Trump: 150€');
    });
    
})

descrivi ('prelievo', () => {
    deve ('accettare un prelievo', () => {
        init('Donald Trump');
        versa(100);
        preleva(50);
        aspettatiChe(estrattoConto()).toBe('Donald Trump: 50€');
    });

    deve ('accettare un piccolo scoperto', () => {
        init('Donald Trump');
        versa(100);
        let x=preleva(200);
        aspettatiChe(estrattoConto()).toBe('Donald Trump: -100€');
        aspettatiChe(x).toBe(200);
    });
    deve ('rifiutare uno scoperto eccessivo', () => {
        init('Donald Trump');
        versa(100);
        let x=preleva(610);
        aspettatiChe(estrattoConto()).toBe('Donald Trump: 100€');
        aspettatiChe(x).toBe(0);

    });


    
})


