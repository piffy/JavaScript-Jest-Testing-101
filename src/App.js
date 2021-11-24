exports.cesare = cesare

    function cambia (lettera,spostamento) {
        if (spostamento>26 || spostamento < -26) spostamento=0;
        if (lettera>=65 && lettera<=90) {
            lettera = lettera+spostamento;
            lettera = (lettera >=91)  ?  lettera - 26 : lettera;
            lettera = (lettera <65)  ?  lettera + 26 : lettera;
        }
        if (lettera>=97 && lettera<=122) {
            lettera = lettera+spostamento;
            lettera = (lettera >=122)  ?  lettera - 26 : lettera;
            lettera = (lettera <97)  ?  lettera + 26 : lettera;
        }
        return String.fromCharCode(lettera);
    }

    function cesare(str,spostamento) {
        let retStr="";
        if(typeof str!="string") return retStr;
        if(spostamento==undefined) spostamento=0;
        for (let c of str)
            retStr=retStr+cambia(c.charCodeAt(0),spostamento)
        return retStr;
    }
