import * as gioco from './gioco'

export function pariDispari(giocatore1, giocatore2) {
  const partiteDaVincere = 2
  let giocatore1vittorie = 0
  let giocatore2vittorie = 0
  while (giocatore1vittorie < partiteDaVincere && giocatore2vittorie < partiteDaVincere) {
    const vincitore = gioco.ottieniVincitore(giocatore1, giocatore2)
    if (vincitore === giocatore1) {
      giocatore1vittorie++
    } else if (vincitore === giocatore2) {
      giocatore2vittorie++
    }
  }
  return giocatore1vittorie > giocatore2vittorie ? giocatore1 : giocatore2
}
