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

describe ('modifica base', () => {
    test ('sposta la lettera in avanti', () => {
        expect(cesare("A",1)).toBe("B");
        expect(cesare("B",1)).toBe("C");
    })
})

describe ('modifica base', () => {
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




