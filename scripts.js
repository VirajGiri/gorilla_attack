
function jump(){
    const runnerID = document.getElementById('runner');
    const objectsID = document.getElementById('objects');
    const gameoverID = document.getElementById('game-over');
    console.log("runner jump");
    console.log(elementsOverlap(runnerID, objectsID)); // 👉️ true
    if(elementsOverlap(runnerID, objectsID)){
        objectsID.style.animationPlayState = 'paused';
        gameoverID.style.visibility = "visible";
    }else{
        document.getElementById('runner').classList.add("jump");
        setTimeout(res=>{
            document.getElementById('runner').classList.remove("jump");
        },3000);
    }
}
document.addEventListener('keydown',function(event){
switch (event.key) {
    case "ArrowLeft":
        // Left pressed
        break;
    case "ArrowRight":
        // Right pressed
        break;
    case "ArrowUp":
        // Up pressed
        jump();
        break;
    case "ArrowDown":
        // Down pressed  
        // document.getElementById('runner').classList.add("downkey");
        // setTimeout(res=>{
        //     document.getElementById('runner').classList.remove("downkey");
        // },3000)
        break;
}
});

function elementsOverlap(el1, el2) {
    const domRect1 = el1.getBoundingClientRect();
    const domRect2 = el2.getBoundingClientRect();
  
    return !(
      domRect1.top > domRect2.bottom ||
      domRect1.right < domRect2.left ||
      domRect1.bottom < domRect2.top ||
      domRect1.left > domRect2.right
    );
  }