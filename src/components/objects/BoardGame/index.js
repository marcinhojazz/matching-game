import CardGame from "../../CardGame";

export default function BoardGame(amountCards) {
  const $htmlCardGame = CardGame();
  const $htmlBoardGame = $htmlCardGame.repeat(amountCards)

  console.log($htmlCardGame)
  return $htmlBoardGame;
}
