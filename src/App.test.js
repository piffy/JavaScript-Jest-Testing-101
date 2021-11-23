import {init, test, estrattoConto} from './App';

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
