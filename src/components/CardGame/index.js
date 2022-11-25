import "./style.css";



function CardGame() {

  const executarFuncao = addEventListener('click', (event) => {
    console.log("hello world")
  })

  return `
    <article onclick="executarFuncao() class="card-game">
      <img src='http://placeskull.com/130/160/051932/1' alt=''/>
    </article>
  `;
};

// const CardGame = () => {
//   return `
//     <article class="card-game>
//       CardGame Hello World
//     </article>
//   `
// };

export default CardGame;
