exports.cesare = cesare

    function cambia (lettera,spostamento) {
        lettera = lettera+spostamento;
        lettera = (lettera >=91)  ?  lettera - 26 : lettera;
        lettera = (lettera <65)  ?  lettera + 26 : lettera;
        return String.fromCharCode(lettera);
    }

    function cesare(str,spostamento) {
        let retStr="";
        if(str==undefined) return retStr;
        if(spostamento==undefined) spostamento=0;
        retStr=retStr+cambia(str.charCodeAt(0),spostamento)
        return retStr;
    }
