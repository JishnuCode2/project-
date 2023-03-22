//Terrain Rotation
AFRAME.registerComponent("terrain-movement-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 },
    speedOfMovement: {type:"number", default: 0}
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      var playerEl =document.querySelector("#diver_model")
      var playerRot = playerEl.getAttribute("rotation")
      var playerPos = playerEl.getAttribute("position")
      console.log(playerPos, playerRot)
      if (e.key === "ArrowLeft") {
        if (this.data.speedOfRotation < 0.08) {
          this.data.speedOfRotation += 0.08;
          console.log(playerPos, playerRot)

          if (playerRot.y !=130 && playerRot.y != 50){
            playerRot.y = 130;
            console.log(playerPos, playerRot)
            playerPos.x = 4.5
            playerPos.z = 16.5
          }else if(playerRot.y == 50 || playerRot.y == 130){
            playerRot.y = 90;
            playerPos.x = 4.5
            playerPos.z = 20
          }

            playerEl.setAttribute("rotation", playerRot);
            playerEl.setAttribute("position",playerPos)  
        }
      }
      if (e.key === "ArrowRight") {
        if (this.data.speedOfRotation != -0.08) {
          this.data.speedOfRotation -= 0.08;
          console.log(playerRot)
          if(playerRot.y != 50 && playerRot.y != 130){
           playerRot.y = 50;
           playerPos.x = 2
           playerPos.z = 22.5
          }
          else if(playerRot.y == 130 || playerRot.y == 50){
            playerRot.y = 90;
            playerPos.x = 4.5
            playerPos.z = 20
 
          }
            playerEl.setAttribute("rotation", playerRot);
            playerEl.setAttribute("position",playerPos)  
        }
      }
      if (e.key === "ArrowUp"){
        if (this.data.speedOfMovement < 0.05) {
          this.data.speedOfMovement += 0.01;
          playerPos.y -= 0.01
          playerEl.setAttribute("position", playerPos)
        }
      }
      if (e.key === "ArrowDown"){
        if (this.data.speedOfMovement > -0.05) {
          this.data.speedOfMovement -= 0.01;
          playerPos.y += 0.01
          playerEl.setAttribute("position", playerPos)
        }   
      }
    });
  },
  tick: function () {
    var mapRotation = this.el.getAttribute("rotation");
    var mapPosition = this.el.getAttribute("position")
    mapRotation.y += this.data.speedOfRotation;
    mapPosition.z += this.data.speedOfMovement

    this.el.setAttribute("rotation", {
      x: mapRotation.x,
      y: mapRotation.y,
      z: mapRotation.z,
    });
  },
});


