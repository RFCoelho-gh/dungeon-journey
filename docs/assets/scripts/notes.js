

/* <form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form>



<form action="/action_page.php">
  <input list="browsers">
  <datalist id="browsers">
    <option value="Internet Explorer">
    <option value="Firefox">
    <option value="Chrome">
    <option value="Opera">
    <option value="Safari">
  </datalist>
</form>
 */



/* ------------------------------------ */

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    console.log("car makes brrrr");
    startGame();
  };

  function startGame() {
    const player = new Player(225, 550, 50, 50, ctx);

    let game = new Game(ctx, 500, 700, player);
    game.start();

    document.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "KeyW":
        player.speedY -= 1;
          break;
        case "KeyS":
          player.speedY += 1;
          break;
        case "KeyD":
          if(player.x < 385) {
            player.x += 10;
          }
          break;
        case "KeyA":
          if(player.x > 75) {
            player.x -= 10;
          }
          break;
      }
    });

    document.addEventListener("keyup", (e) => {
      player.speedX = 0;
      player.speedY = 0;
    });

    function createRoad() {
      document.getElementById("canvas").style.backgroundImage =
        "url('./images/road.png')";
      document.getElementById("canvas").style.backgroundSize = "500px 700px";
    }
    createRoad();
  }
};