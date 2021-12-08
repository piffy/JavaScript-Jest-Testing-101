
export function ottieniVincitore(giocatore1,giocatore2) {
    const ris=Math.floor(Math.random() * 3);
    switch(ris) {
        case 0: return giocatore2; break;
        case 1: return giocatore1;  break;
    }
    return "pari";
}


