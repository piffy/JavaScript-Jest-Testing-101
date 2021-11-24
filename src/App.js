exports.cesare = cesare

    function cesare(str,spostamento) {
        if(str==undefined) return "";
        if(spostamento==undefined) spostamento=0;
        let lettera=str.charCodeAt(0)+spostamento;
        lettera = (lettera ==91)  ?  65 : lettera;
        let retStr= String.fromCharCode(lettera);
        return retStr;
    }
