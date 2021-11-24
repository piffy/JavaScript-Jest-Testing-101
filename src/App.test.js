import {cesare} from './App';

describe ('la funzione esiste', () => {
    test ('e restituisce una stringa', () => {
        expect(typeof cesare()).toBe("string");
    })
})

describe ('non modifica', () => {
    test ('la stringa se non richiesto', () => {
        expect(cesare("A")).toBe("A");
        expect(cesare("B")).toBe("B");
    })
})

describe ('modifica base - 1', () => {
    test ('sposta la lettera in avanti', () => {
        expect(cesare("A",1)).toBe("B");
        expect(cesare("B",1)).toBe("C");
    })
})

describe ('modifica base - 2', () => {
    test ('anche per la Z', () => {
        expect(cesare("Z",1)).toBe("A");
    })
})

describe ('spostamento multiplo', () => {
    test ('di valori vari', () => {
        expect(cesare("A",2)).toBe("C");
        expect(cesare("B",3)).toBe("E");
        expect(cesare("Z",4)).toBe("D");
    })
})


describe ('decodifica', () => {
    test ('con valori vari', () => {
        expect(cesare("A",-1)).toBe("Z");
        expect(cesare("B",-3)).toBe("Y");
        expect(cesare("Z",-4)).toBe("V");
    })
})

describe ('più di una lettera', () => {
    test ('di valori vari', () => {
        expect(cesare("ABCD",1)).toBe("BCDE");
        expect(cesare("ABCDE",2)).toBe("CDEFG");
        expect(cesare("ABC",-3)).toBe("XYZ");
    })
})

describe ('raffinamento', () => {
    test ('sposta le minuscole', () => {
        expect(cesare("abcd",1)).toBe("bcde");
        expect(cesare("abcde",2)).toBe("cdefg");
        expect(cesare("abc",-3)).toBe("xyz");
    })
    test ('non spostare altro', () => {
        expect(cesare("Hand, Cannot, Erase",1)).toBe("Iboe, Dboopu, Fsbtf");
        expect(cesare("uno due tre?",2)).toBe("wpq fwg vtg?");
        expect(cesare("òàùèé()",-3)).toBe("òàùèé()");
    })
    test ('robustezza (parametri strani)', () => {
        expect(cesare("abcd",1000)).toBe("abcd");
        expect(cesare("abcd",-1000)).toBe("abcd");
        expect(cesare(12,-3)).toBe("");
    })

})






