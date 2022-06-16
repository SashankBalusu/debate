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
            "st@gmail.com":"st@gmail.com"
         },
         {
            "cd@gmail.com":"cd@gmail.com"
         },
         {
            "yz@gmail.com":"yz@gmail.com"
         },
         {
            "kl@gmail.com":"kl@gmail.com"
         },
         {
            "sashankbalusu@gmail.com":"sashankbalusu@gmail.com"
         },
         {
            "aad@gmail.com":"aad@gmail.com"
         },
         {
            "gh@gmail.com":"gh@gmail.com"
         },
         {
            "aac@gmail.com":"aac@gmail.com"
         },
         {
            "wx@gmail.com":"wx@gmail.com"
         },
         {
            "qr@gmail.com":"qr@gmail.com"
         },
         {
            "ef@gmail.com":"ef@gmail.com"
         },
         {
            "uv@gmail.com":"uv@gmail.com"
         },
         {
            "aab@gmail.com":"aab@gmail.com"
         },
         {
            "mn@gmail.com":"mn@gmail.com"
         },
         {
            "op@gmail.com":"op@gmail.com"
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
            "st@gmail.com":"s t"
         },
         {
            "cd@gmail.com":"c d"
         },
         {
            "yz@gmail.com":"y z"
         },
         {
            "kl@gmail.com":"k l"
         },
         {
            "sashankbalusu@gmail.com":"sashank balusu"
         },
         {
            "aad@gmail.com":"aa d"
         },
         {
            "gh@gmail.com":"g h"
         },
         {
            "aac@gmail.com":"aa c"
         },
         {
            "wx@gmail.com":"w x"
         },
         {
            "qr@gmail.com":"q r"
         },
         {
            "ef@gmail.com":"e f"
         },
         {
            "uv@gmail.com":"u v"
         },
         {
            "aab@gmail.com":"aa b"
         },
         {
            "mn@gmail.com":"m n"
         },
         {
            "op@gmail.com":"o p"
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
            "st@gmail.com":"yes"
         },
         {
            "cd@gmail.com":"yes"
         },
         {
            "yz@gmail.com":"yes"
         },
         {
            "kl@gmail.com":"yes"
         },
         {
            "sashankbalusu@gmail.com":"yes"
         },
         {
            "aad@gmail.com":"yes"
         },
         {
            "gh@gmail.com":"yes"
         },
         {
            "aac@gmail.com":"yes"
         },
         {
            "wx@gmail.com":"yes"
         },
         {
            "qr@gmail.com":"yes"
         },
         {
            "ef@gmail.com":"yes"
         },
         {
            "uv@gmail.com":"yes"
         },
         {
            "aab@gmail.com":"yes"
         },
         {
            "mn@gmail.com":"yes"
         },
         {
            "op@gmail.com":"yes"
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
            "st@gmail.com":"cx"
         },
         {
            "cd@gmail.com":"ld"
         },
         {
            "yz@gmail.com":"cx"
         },
         {
            "kl@gmail.com":"pf"
         },
         {
            "sashankbalusu@gmail.com":"ld"
         },
         {
            "aad@gmail.com":"parli"
         },
         {
            "gh@gmail.com":"pf"
         },
         {
            "aac@gmail.com":"parli"
         },
         {
            "wx@gmail.com":"cx"
         },
         {
            "qr@gmail.com":"cx"
         },
         {
            "ef@gmail.com":"pf"
         },
         {
            "uv@gmail.com":"cx"
         },
         {
            "aab@gmail.com":"cx"
         },
         {
            "mn@gmail.com":"cx"
         },
         {
            "op@gmail.com":"cx"
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
            "st@gmail.com":"q r"
         },
         {
            "cd@gmail.com":"n/a"
         },
         {
            "yz@gmail.com":"aa b"
         },
         {
            "kl@gmail.com":"i j"
         },
         {
            "sashankbalusu@gmail.com":"n/a"
         },
         {
            "aad@gmail.com":"aa c"
         },
         {
            "gh@gmail.com":"e f"
         },
         {
            "aac@gmail.com":"aa d"
         },
         {
            "wx@gmail.com":"u v"
         },
         {
            "qr@gmail.com":"s t"
         },
         {
            "ef@gmail.com":"g h"
         },
         {
            "uv@gmail.com":"w x"
         },
         {
            "aab@gmail.com":"y z"
         },
         {
            "mn@gmail.com":"o p"
         },
         {
            "op@gmail.com":"m n"
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
            "st@gmail.com":"not available"
         },
         {
            "cd@gmail.com":"saturday morning"
         },
         {
            "yz@gmail.com":"not available"
         },
         {
            "kl@gmail.com":"saturday afternoon"
         },
         {
            "sashankbalusu@gmail.com":"saturday morning"
         },
         {
            "aad@gmail.com":"not available"
         },
         {
            "gh@gmail.com":"saturday afternoon"
         },
         {
            "aac@gmail.com":"not available"
         },
         {
            "wx@gmail.com":"not available"
         },
         {
            "qr@gmail.com":"not available"
         },
         {
            "ef@gmail.com":"saturday afternoon"
         },
         {
            "uv@gmail.com":"not available"
         },
         {
            "aab@gmail.com":"not available"
         },
         {
            "mn@gmail.com":"not available"
         },
         {
            "op@gmail.com":"not available"
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
            "st@gmail.com":"yes"
         },
         {
            "cd@gmail.com":"yes"
         },
         {
            "yz@gmail.com":"no"
         },
         {
            "kl@gmail.com":"yes"
         },
         {
            "sashankbalusu@gmail.com":"yes"
         },
         {
            "aad@gmail.com":"yes"
         },
         {
            "gh@gmail.com":"yes"
         },
         {
            "aac@gmail.com":"yes"
         },
         {
            "wx@gmail.com":"yes"
         },
         {
            "qr@gmail.com":"yes"
         },
         {
            "ef@gmail.com":"yes"
         },
         {
            "uv@gmail.com":"yes"
         },
         {
            "aab@gmail.com":"no"
         },
         {
            "mn@gmail.com":"yes"
         },
         {
            "op@gmail.com":"no"
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
            "st@gmail.com":"cx"
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
            "aad@gmail.com":"parli"
         },
         {
            "gh@gmail.com":"pf"
         },
         {
            "aac@gmail.com":"parli"
         },
         {
            "wx@gmail.com":"cx"
         },
         {
            "qr@gmail.com":"cx"
         },
         {
            "ef@gmail.com":"pf"
         },
         {
            "uv@gmail.com":"cx"
         },
         {
            "mn@gmail.com":"cx"
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
            "st@gmail.com":"q r"
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
            "aad@gmail.com":"aa c"
         },
         {
            "gh@gmail.com":"e f"
         },
         {
            "aac@gmail.com":"aa d"
         },
         {
            "wx@gmail.com":"u v"
         },
         {
            "qr@gmail.com":"s t"
         },
         {
            "ef@gmail.com":"g h"
         },
         {
            "uv@gmail.com":"w x"
         },
         {
            "mn@gmail.com":"o p"
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
            "st@gmail.com":"not available"
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
            "aad@gmail.com":"not available"
         },
         {
            "gh@gmail.com":"saturday afternoon"
         },
         {
            "aac@gmail.com":"not available"
         },
         {
            "wx@gmail.com":"not available"
         },
         {
            "qr@gmail.com":"not available"
         },
         {
            "ef@gmail.com":"saturday afternoon"
         },
         {
            "uv@gmail.com":"not available"
         },
         {
            "mn@gmail.com":"not available"
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
