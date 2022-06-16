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

responsesByQuestion = {
   "5b07303a":{
      "questionTitle":"Email",
      "responses":[
         {
            "ab@gmail.com":"ab@gmail.com"
         },
         {
            "ij@gmail.com":"ij@gmail.com"
         },
         {
            "cd@gmail.com":"cd@gmail.com"
         },
         {
            "kl@gmail.com":"kl@gmail.com"
         },
         {
            "sashankbalusu@gmail.com":"sashankbalusu@gmail.com"
         },
         {
            "gh@gmail.com":"gh@gmail.com"
         },
         {
            "ef@gmail.com":"ef@gmail.com"
         }
      ]
   },
   "612cef97":{
      "questionTitle":"Name",
      "responses":[
         {
            "ab@gmail.com":"a b"
         },
         {
            "ij@gmail.com":"i j"
         },
         {
            "cd@gmail.com":"c d"
         },
         {
            "kl@gmail.com":"k l"
         },
         {
            "sashankbalusu@gmail.com":"sashank balusu"
         },
         {
            "gh@gmail.com":"g h"
         },
         {
            "ef@gmail.com":"e f"
         }
      ]
   },
   "77a083a1":{
      "questionTitle":"Attending SD1?",
      "responses":[
         {
            "ab@gmail.com":"yes"
         },
         {
            "ij@gmail.com":"yes"
         },
         {
            "cd@gmail.com":"yes"
         },
         {
            "kl@gmail.com":"yes"
         },
         {
            "sashankbalusu@gmail.com":"yes"
         },
         {
            "gh@gmail.com":"yes"
         },
         {
            "ef@gmail.com":"yes"
         }
      ]
   },
   "670a259b":{
      "questionTitle":"Event at SD1?",
      "responses":[
         {
            "ab@gmail.com":"ld"
         },
         {
            "ij@gmail.com":"pf"
         },
         {
            "cd@gmail.com":"ld"
         },
         {
            "kl@gmail.com":"pf"
         },
         {
            "sashankbalusu@gmail.com":"ld"
         },
         {
            "gh@gmail.com":"pf"
         },
         {
            "ef@gmail.com":"pf"
         }
      ]
   },
   "09ed269a":{
      "questionTitle":"Partner at SD1 (N/A if none)",
      "responses":[
         {
            "ab@gmail.com":"n/a"
         },
         {
            "ij@gmail.com":"k l"
         },
         {
            "cd@gmail.com":"n/a"
         },
         {
            "kl@gmail.com":"i j"
         },
         {
            "sashankbalusu@gmail.com":"n/a"
         },
         {
            "gh@gmail.com":"e f"
         },
         {
            "ef@gmail.com":"g h"
         }
      ]
   },
   "756ddae8":{
      "questionTitle":"Judge at SD1?",
      "responses":[
         {
            "ab@gmail.com":"saturday morning"
         },
         {
            "ij@gmail.com":"saturday afternoon"
         },
         {
            "cd@gmail.com":"saturday morning"
         },
         {
            "kl@gmail.com":"saturday afternoon"
         },
         {
            "sashankbalusu@gmail.com":"saturday morning"
         },
         {
            "gh@gmail.com":"saturday afternoon"
         },
         {
            "ef@gmail.com":"saturday afternoon"
         }
      ]
   },
   "419612cc":{
      "questionTitle":"Judge name at SD1",
      "responses":[
         {
            "ab@gmail.com":"judge 2"
         },
         {
            "ij@gmail.com":"judge 6"
         },
         {
            "cd@gmail.com":"judge 3"
         },
         {
            "kl@gmail.com":"judge 7"
         },
         {
            "sashankbalusu@gmail.com":"judge 1"
         },
         {
            "gh@gmail.com":"judge 5"
         },
         {
            "ef@gmail.com":"judge 4"
         }
      ]
   },
   "003c5d82":{
      "questionTitle":"Attending SD2?",
      "responses":[
         {
            "ab@gmail.com":"yes"
         },
         {
            "ij@gmail.com":"yes"
         },
         {
            "cd@gmail.com":"yes"
         },
         {
            "kl@gmail.com":"yes"
         },
         {
            "sashankbalusu@gmail.com":"yes"
         },
         {
            "gh@gmail.com":"yes"
         },
         {
            "ef@gmail.com":"yes"
         }
      ]
   },
   "49ceb6c6":{
      "questionTitle":"Event at SD2?",
      "responses":[
         {
            "ab@gmail.com":"ld"
         },
         {
            "ij@gmail.com":"pf"
         },
         {
            "cd@gmail.com":"ld"
         },
         {
            "kl@gmail.com":"pf"
         },
         {
            "sashankbalusu@gmail.com":"ld"
         },
         {
            "gh@gmail.com":"pf"
         },
         {
            "ef@gmail.com":"pf"
         }
      ]
   },
   "6fe919db":{
      "questionTitle":"Partner at SD2(N/A if none)",
      "responses":[
         {
            "ab@gmail.com":"n/a"
         },
         {
            "ij@gmail.com":"k l"
         },
         {
            "cd@gmail.com":"n/a"
         },
         {
            "kl@gmail.com":"i j"
         },
         {
            "sashankbalusu@gmail.com":"n/a"
         },
         {
            "gh@gmail.com":"e f"
         },
         {
            "ef@gmail.com":"g h"
         }
      ]
   },
   "05d16228":{
      "questionTitle":"Judge at SD2?",
      "responses":[
         {
            "ab@gmail.com":"saturday morning"
         },
         {
            "ij@gmail.com":"saturday afternoon"
         },
         {
            "cd@gmail.com":"saturday morning"
         },
         {
            "kl@gmail.com":"saturday afternoon"
         },
         {
            "sashankbalusu@gmail.com":"saturday morning"
         },
         {
            "gh@gmail.com":"saturday afternoon"
         },
         {
            "ef@gmail.com":"saturday afternoon"
         }
      ]
   },
   "31154a6d":{
      "questionTitle":"Judge name at SD2",
      "responses":[
         {
            "ab@gmail.com":"judge 2"
         },
         {
            "ij@gmail.com":"judge 6"
         },
         {
            "cd@gmail.com":"judge 3"
         },
         {
            "kl@gmail.com":"judge 7"
         },
         {
            "sashankbalusu@gmail.com":"judge 1"
         },
         {
            "gh@gmail.com":"judge 5"
         },
         {
            "ef@gmail.com":"judge 4"
         }
      ]
   },
   "25e85434":{
      "questionTitle":"Comments",
      "responses":[
         
      ]
   }
}
questionResponses.textContent = JSON.stringify(responsesByQuestion)

//console.log(responsesByQuestionDict)
