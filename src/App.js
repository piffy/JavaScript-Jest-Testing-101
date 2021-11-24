exports.cesare = cesare

    function cesare(str,spostamento) {
        if(str==undefined) return "";
        if(spostamento==undefined) spostamento=0;
        let lettera=str.charCodeAt(0)+spostamento;
        lettera = (lettera >=91)  ?  lettera - 26 : lettera;
        lettera = (lettera <65)  ?  lettera + 26 : lettera;
        let retStr= String.fromCharCode(lettera);
        return retStr;
    }
