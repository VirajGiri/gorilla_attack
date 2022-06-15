window.onload = function(){
var count = 000;
document.getElementById('score').innerHTML = "Level: 1, Score: 000";
document.getElementById("game_body").addEventListener("click", jump);

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
function jump(){
    const runnerID = document.getElementById('runner');
    const objectID = document.getElementById('object');
    const gameoverID = document.getElementById('game-over');
    console.log("runner jump");
    console.log(elementsOverlap(runnerID, objectID)); // 👉️ true
    if(elementsOverlap(runnerID, objectID)){
        runnerID.style.animationPlayState = 'paused';
        gameoverID.style.visibility = "visible";
    }else{
        count++;
        document.getElementById('object').classList.add("jump");
        document.getElementById('score').innerHTML = "Level: 1, Score:" +count;
        setTimeout(res=>{
            document.getElementById('object').classList.remove("jump");
        },3000);
    }
}
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
}