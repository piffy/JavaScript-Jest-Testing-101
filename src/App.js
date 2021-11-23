exports.init = init
exports.preleva = preleva
exports.versa = versa
exports.estrattoConto = estrattoConto
exports.test= test;


var saldo=0,intestatario="";
const limiteScoperto=-500;


    function test() {
        return "test";
    }

    function init(nome) {
        intestatario=nome;
        saldo=0;
    }

    function preleva(somma){
        if(saldo - somma > limiteScoperto){
            saldo -= somma;
            return somma;
        }
        return 0;
        
    }

    function versa(somma){
        saldo += somma;
    }

    function estrattoConto() {
        return intestatario+": "+saldo+"€";
    }