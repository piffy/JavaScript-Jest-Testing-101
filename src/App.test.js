import {init, test, estrattoConto, versa, preleva} from './App';

const descrivi=describe;
const deve=it;
var aspettatiChe=expect;


descrivi ('test', () => {
    deve ('restituire test', () => {
        aspettatiChe(test()).toBe('test');
    })
})




