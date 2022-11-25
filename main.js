import "./src/styles/settings/colors.css";
// Reset CSS
import "./src/styles/reset.css";
import "./src/styles/elements/base.css";
import CardGame from "./src/components/CardGame";

const $root = document.querySelector("#root");
const $htmlCardGame = CardGame();

$root.insertAdjacentHTML("beforeend", $htmlCardGame);
