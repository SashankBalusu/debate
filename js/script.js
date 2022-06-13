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
            "bob@gmail.com":"bob@gmail.com"
         },
         {
            "ricky@gmail.com":"ricky@gmail.com"
         },
         {
            "peter@gmail.com":"peter@gmail.com"
         },
         {
            "hihi@gmail.com":"hihi@gmail.com"
         },
         {
            "sasbal@gmail.com":"sasbal@gmail.com"
         },
         {
            "sashankbalusu@gmail.com":"sashankbalusu@gmail.com"
         }
      ]
   },
   "612cef97":{
      "questionTitle":"Name",
      "responses":[
         {
            "bob@gmail.com":"bob dylan"
         },
         {
            "ricky@gmail.com":"ricky rick"
         },
         {
            "peter@gmail.com":"peter gold"
         },
         {
            "hihi@gmail.com":"hi hi"
         },
         {
            "sasbal@gmail.com":"sas bal"
         },
         {
            "sashankbalusu@gmail.com":"sashank balusu"
         }
      ]
   },
   "77a083a1":{
      "questionTitle":"Attending SD1?",
      "responses":[
         {
            "bob@gmail.com":"yes"
         },
         {
            "ricky@gmail.com":"yes"
         },
         {
            "peter@gmail.com":"yes"
         },
         {
            "hihi@gmail.com":"yes"
         },
         {
            "sasbal@gmail.com":"yes"
         },
         {
            "sashankbalusu@gmail.com":"yes"
         }
      ]
   },
   "670a259b":{
      "questionTitle":"Event at SD1?",
      "responses":[
         {
            "bob@gmail.com":"ld"
         },
         {
            "ricky@gmail.com":"ld"
         },
         {
            "peter@gmail.com":"pf"
         },
         {
            "hihi@gmail.com":"ld"
         },
         {
            "sasbal@gmail.com":"pf"
         },
         {
            "sashankbalusu@gmail.com":"ld"
         }
      ]
   },
   "09ed269a":{
      "questionTitle":"Partner at SD1(N/A if none)",
      "responses":[
         {
            "bob@gmail.com":"n/a"
         },
         {
            "ricky@gmail.com":"n/a"
         },
         {
            "peter@gmail.com":"sas bal"
         },
         {
            "hihi@gmail.com":"n/a"
         },
         {
            "sasbal@gmail.com":"peter gold"
         },
         {
            "sashankbalusu@gmail.com":"n/a"
         }
      ]
   },
   "003c5d82":{
      "questionTitle":"Attending SD2?",
      "responses":[
         {
            "bob@gmail.com":"yes"
         },
         {
            "ricky@gmail.com":"yes"
         },
         {
            "peter@gmail.com":"yes"
         },
         {
            "hihi@gmail.com":"yes"
         },
         {
            "sasbal@gmail.com":"yes"
         },
         {
            "sashankbalusu@gmail.com":"yes"
         }
      ]
   },
   "49ceb6c6":{
      "questionTitle":"Event at SD2?",
      "responses":[
         {
            "bob@gmail.com":"ld"
         },
         {
            "ricky@gmail.com":"ld"
         },
         {
            "peter@gmail.com":"cx"
         },
         {
            "hihi@gmail.com":"pf"
         },
         {
            "sasbal@gmail.com":"cx"
         },
         {
            "sashankbalusu@gmail.com":"pf"
         }
      ]
   },
   "6fe919db":{
      "questionTitle":"Partner at SD2(N/A if none)",
      "responses":[
         {
            "bob@gmail.com":"n/a"
         },
         {
            "ricky@gmail.com":"n/a"
         },
         {
            "peter@gmail.com":"sas bal"
         },
         {
            "hihi@gmail.com":"sashank balusu"
         },
         {
            "sasbal@gmail.com":"peter gold"
         },
         {
            "sashankbalusu@gmail.com":"hi hi"
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
