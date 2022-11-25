import "./src/styles/settings/colors.css";
// Reset CSS
import "./src/styles/reset.css";
import "./src/styles/elements/base.css";
import BoardGame from "./src/components/objects/BoardGame";

const $root = document.querySelector("#root");
const $htmlBoardGame = BoardGame(3);

$root.insertAdjacentHTML("beforeend", $htmlBoardGame);
