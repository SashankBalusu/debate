// function receiveMessage(e){
//   console.log("hi")
//     console.log("Message Received: "+e.data);
// }
// window.addEventListener('message',receiveMessage);
localStorage.clear()
const moveup = document.getElementById("moveup")
moveup.setAttribute("style", "display: none")
let currpage = 0

const pages = document.querySelectorAll(".page");
const translateAmount = 100; 
let translate = 0;

slide = (direction) => {
    if (direction == "next"){
      currpage++
    }
    else {
      currpage--
    }
    if (currpage == 0){
      const moveup = document.getElementById("moveup")
      moveup.setAttribute("style", "display: none")
      const movedown = document.getElementById("movedown")
      movedown.setAttribute("style", "display: block")
    }
    else if (currpage == 2){
      setTimeout(() => {
         const questionResponses = document.getElementById("questionResponses")
         localStorage.setItem("jsonResponses", questionResponses.textContent)
         window.location = "insights.html"
      }, "1000")
      

    }
    else {
      const moveup = document.getElementById("moveup")
      moveup.setAttribute("style", "display: block")
    }
    direction === "next" ? translate -= translateAmount : translate += translateAmount;

    pages.forEach(
      pages => (pages.style.transform = `translateY(${translate}%)`)
    );
}
const questionResponses = document.getElementById("questionResponses")

document.addEventListener('DOMContentLoaded',function(){
  //questionResponses.innerText = localStorage.getItem("data")
       navigator.clipboard
           .readText()
           .then(
               cliptext =>
                  (questionResponses.innerText = cliptext),
                  err => console.log(err)
           );
});

//questionResponses.textContent = JSON.stringify(responsesByQuestion)

//console.log(responsesByQuestionDict)
