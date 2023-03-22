// Register chest component in Target.js

AFRAME.registerComponent("target-chest", {
   init: function(){
     for(var i =1; i<=15; i++){

      //id
      var id = `chest${i}`

      //position variable 
      var posX = ((Math.random(1,5))*50 - 40) 
      var posY = 5
      var posZ = ((Math.random()) *30 + 50)
      
      var position = {x: posX, y:posY, z:posZ}
      this.createChests(id,position)
     }
   },
   createChests: function(id,position){
     
     var chestEl = document.createElement("a-entity")
     
     chestEl.setAttribute("material", "color", "#ff9100")
     chestEl.setAttribute("gltf-model", "./models/stylized_chest/scene.gltf")
     chestEl.setAttribute("id", id)
     chestEl.setAttribute("scale", {x: 0.3, y:0.3, z:0.3})
     chestEl.setAttribute("position", position)
     chestEl.setAttribute("static-body")
     
     var terrainEl = document.querySelector("#terrain")
     terrainEl.appendChild(chestEl)
   }
});

