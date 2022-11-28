import "./style.css";



function CardGame() {
  // const itemcard = '1'
  const evento = document.addEventListener("click", (evento) => {
    console.log(`card ${evento.button.toFixed}`)
    const eventos = document.querySelectorAll(".key")
    console.log(evento)
  });

  return `
    <article onclick=${evento} class="card-game">
      <img src='http://placeskull.com/130/160/051932/1' alt=''/>
    </article>
  `;
};

export default CardGame;
