function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function createTable(respByEmails, currEmail){
    for (let i = 0; i < Object.keys(respByEmails[currEmail]).length; i++){
        let ques = document.createElement("tr")
        let quesCon = document.createElement("td")
        quesCon.textContent = Object.keys(respByEmails[currEmail][i])
        let ans = document.createElement("tr")
        ans.classList.add("active-row")
        let ansCon = document.createElement("td")
        ansCon.textContent = respByEmails[currEmail][i][Object.keys(respByEmails[currEmail][i])]
        ques.appendChild(quesCon)
        ans.appendChild(ansCon)
        responsesResultTbody.appendChild(ques)
        responsesResultTbody.appendChild(ans)
    }
}
function hideContent(){
    document.getElementById("infoContent").setAttribute("style", "display: none")
    document.getElementById("responsesContent").setAttribute("style", "display: none")
    document.getElementById("graphContent").setAttribute("style", "display: none")
    document.getElementById("memberContent").setAttribute("style", "display: none")
    const buttons = document.getElementsByClassName("options")
    for (button of buttons){
        button.setAttribute("style", "color: white")
    }
}
function createChart(el,labelArr, dataArr, question){
    var data = {
        labels: labelArr,
        datasets: [
            {
                data: dataArr,
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB"
                ],
                hoverBorderColor: [
                    "#eee","#eee"														
                ]
            }]
    };
    var piectx = el.getContext("2d");
    // if (mychart){
    //     mychart.destroy()
    // }
    mychart = new Chart(piectx,{
        type: 'pie',
        data: data,
        options: { 
            showAllTooltips: true,
            animation: {
                animateRotate: true,
                animateScale: true
            }, 
            elements: {
                arc: {
                    borderColor: "#fff"
                }
            },
            title: {
                display: true,
                text: question,
                fontSize: 20,
                padding: 20,
                fontColor: "black",
                fontStyle: 'bold',
                fontFamily: "Heebo",
                fullWidth: true
            },
            legend: {
                display: true,
                position: "bottom",
                labels: {
                    boxWidth: 30,
                    fontColor: "black",
                    fontStyle: 'bold',
                    fontFamily: "Heebo",
                    fontSize: 20,
                    fullWidth: true
                } 
            },
            tooltips: {
                enabled: false,
                bodyFontColor: "#efefef",
                fontStyle: 'Normal',
                bodyFontFamily: "Montserrat",
                cornerRadius: 2,
                backgroundColor: "#333",
                xPadding: 7,
                yPadding: 7,
                caretSize: 5,
                bodySpacing: 10
            }
                        
        }
    });
}

const entry = document.getElementById("entry")
entry.addEventListener("click", function(){
    hideContent()
    entry.setAttribute("style", "color: #09BC8A")
    const infoContent = document.getElementById("infoContent")
    removeAllChildNodes(infoContent)
    //finding tourneys
    let tourneyInfo = {}
    let tourneyInfoNotGoing = {}
    let judgeInfo = {}

    for (let key in responses){
        if (responses[key]["questionTitle"].toLowerCase().includes("attend")){
            let str = responses[key]["questionTitle"].split(" ")
            let attendingIndex = 0
            for (let i = 0; i < str.length; i++){
                if (str[i].toLowerCase().includes("attend")){
                    attendingIndex = i
                }
            }
            let tourneyName = str.slice(attendingIndex + 1, str.length).join(" ")
            let punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
            let letters = tourneyName.split('');
            let cleanLetters = letters.filter(function(letter) {
                return punctuation.indexOf(letter) === -1;
            });

            let cleanString = cleanLetters.join('');
            tourneyInfo[cleanString] = {}
            judgeInfo[cleanString] = {}         
        }
    }

    //finding events going to each tourney
    currTourney = -1
    for (let key in responses){
        if (responses[key]["questionTitle"].toLowerCase().includes("event")){
            currTourney++
            for (let resps of responses[key]["responses"]){
                let formDict = tourneyInfo[Object.keys(tourneyInfo)[currTourney]]
                formDict[resps[Object.keys(resps)[0]]] = []
                tourneyInfo[Object.keys(tourneyInfo)[currTourney]] = formDict
                tourneyInfoNotGoing[Object.keys(tourneyInfo)[currTourney]] = ""


            }
        }
    }
    

    //finds names of students to access by emails
    let namesByEmails = {}
    for (let key in responses){
        if (responses[key]["questionTitle"].toLowerCase().includes("name") && !(responses[key]["questionTitle"].toLowerCase().includes("partner"))){
            for (let i = 0; i < responses[key]["responses"].length; i++){
                namesByEmails[Object.keys(responses[key]["responses"][i])[0]] = responses[key]["responses"][i][Object.keys(responses[key]["responses"][i])[0]]
            }
            break
        }
    }
    for (let tourney in tourneyInfo){
        let peoplegoing = {}
        let notgoing = []
        for (let key in responses){
            if (responses[key]["questionTitle"].toLowerCase().includes("attend") && responses[key]["questionTitle"].includes(tourney)){
                let currQuestionResp = responses[key]["responses"]
                for (item of currQuestionResp){
                    if (item[Object.keys(item)[0]].toLowerCase() == "yes"){
                        peoplegoing[Object.keys(item)[0]] = ""
                    }
                    else {
                        notgoing.push(Object.keys(item)[0])
                        console.log(notgoing)
                    }
                }

            }
        }
        tourneyInfoNotGoing[Object.keys(tourneyInfo)[currTourney]] = notgoing
        for (let key in responses){
            if (responses[key]["questionTitle"].toLowerCase().includes("event") && responses[key]["questionTitle"].includes(tourney)){
                let currQuestionResp = responses[key]["responses"]
                for (let innerkey in peoplegoing){
                    for (item of currQuestionResp){
                        if (innerkey == Object.keys(item)[0]){
                            peoplegoing[innerkey] = item[Object.keys(item)[0]]
                        }
                    }
                }
            }
        }
        for (let key in responses){
            if (responses[key]["questionTitle"].toLowerCase().includes("partner") && responses[key]["questionTitle"].includes(tourney)){
                let currQuestionResp = responses[key]["responses"]
                for (innerkey in peoplegoing){
                    for (item of currQuestionResp){
                        if (innerkey == Object.keys(item)[0]){
                            for (let innerinnerkey in tourneyInfo){
                                if (innerinnerkey == tourney){
                                    for (let finalkey in tourneyInfo[innerinnerkey]){
                                        if (finalkey == peoplegoing[innerkey]){
                                            // let flag = false
                                            // for (let i = 0; i < tourneyInfo[innerinnerkey][finalkey].length; i++){
                                            //     if (item[Object.keys(item)[0]] in tourneyInfo[innerinnerkey][finalkey][i]){
                                            //         flag = true
                                            //         break
                                            //     }
                                            // }
                                            // if (flag == false){
                                            //     let formPartnerDict = {}
                                            //     formPartnerDict[namesByEmails[innerkey]] = item[Object.keys(item)[0]]
                                            //     tourneyInfo[innerinnerkey][finalkey].push(formPartnerDict)
                                            // }
                                            let formPartnerDict = {}
                                            formPartnerDict[namesByEmails[innerkey]] = item[Object.keys(item)[0]]
                                            tourneyInfo[innerinnerkey][finalkey].push(formPartnerDict)
                                            
                                            
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        for (let key in responses){
            if (responses[key]["questionTitle"].toLowerCase().includes("judg") && !(responses[key]["questionTitle"].toLowerCase().includes("name")) && responses[key]["questionTitle"].includes(tourney)){
                for (let el of responses[key]["responses"]){
                    if (el[Object.keys(el)[0]] in judgeInfo[tourney]){
                        if (el[Object.keys(el)[0]] == "not available"){
                            let formJudgeDict = {}
                            formJudgeDict[namesByEmails[Object.keys(el)[0]]] = Object.keys(el)[0]
                            judgeInfo[tourney][el[Object.keys(el)[0]]].push(formJudgeDict)
                        }
                        else {
                            for (let newkey in responses){
                                if (responses[newkey]["questionTitle"].toLowerCase().includes("judg") && (responses[newkey]["questionTitle"].toLowerCase().includes("name")) && responses[newkey]["questionTitle"].includes(tourney)){
                                    for (let innerel of responses[newkey]["responses"]){
                                        if (Object.keys(innerel)[0] == Object.keys(el)[0]){
                                            let formJudgeDict = {}
                                            formJudgeDict[Object.keys(innerel)[0]] = innerel[Object.keys(innerel)[0]]
                                            judgeInfo[tourney][el[Object.keys(el)[0]]].push(formJudgeDict)
    
                                        }
                                    }
                                }
    
                            }

                        }
                        
                    }
                    else {
                        if (el[Object.keys(el)[0]] == "not available"){
                            let formJudgeDict = {}
                            formJudgeDict[namesByEmails[Object.keys(el)[0]]] = Object.keys(el)[0]
                            judgeInfo[tourney][el[Object.keys(el)[0]]] = [formJudgeDict]
                        }
                        else {
                            for (let newkey in responses){
                                if (responses[newkey]["questionTitle"].toLowerCase().includes("judg") && (responses[newkey]["questionTitle"].toLowerCase().includes("name")) && responses[newkey]["questionTitle"].includes(tourney)){
                                    for (let innerel of responses[newkey]["responses"]){
                                        
                                        if (Object.keys(innerel)[0] == Object.keys(el)[0]){
                                            
                                            let formJudgeDict = {}
                                            formJudgeDict[Object.keys(innerel)[0]] = innerel[Object.keys(innerel)[0]]
                                            judgeInfo[tourney][el[Object.keys(el)[0]]] = [formJudgeDict]
    
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }


        

    }
    for (let tourney in tourneyInfo){      
        let entries = []
        let h1 = document.createElement("h1")
        h1.textContent = tourney
        h1.setAttribute("style", "text-align: center;margin-top: 40px; background: transparent")   
        h1.classList.add("tourneyName")
        
        let h2 = document.createElement("h2")
        h2.textContent = "Entries: "
        h2.setAttribute("style", "text-align: center;margin-top: 20px; background: transparent;")   

        let table = document.createElement("table")
        table.classList.add("content-table")
        table.setAttribute("style", "margin: 0 auto;")
        let thead = document.createElement("thead")
        thead.setAttribute("style", "background: #89adeb;color: #444554;")
        let tbody = document.createElement("tbody")
        for (let key in tourneyInfo[tourney]){
            let th = document.createElement("th")
            th.textContent = key
            th.colSpan = "2"
            thead.appendChild(th)
            entries.push(tourneyInfo[tourney][key])
        }
        let th = document.createElement("th")
        th.textContent = "Not Entered"
        th.colSpan = "1"
        thead.appendChild(th)
        maxLength = 0
        for (let el of entries){
            console.log(el)
            if (el.length > maxLength){
                maxLength = el.length
            }

        }
        console.log(tourney, tourneyInfoNotGoing[tourney].length)

        if (tourneyInfoNotGoing[tourney].length > maxLength){
            console.log(tourney, tourneyInfoNotGoing[tourney].length)
            maxLength = tourneyInfoNotGoing[tourney].length
        }
        let currRow = 0
        //entries = [[{"hi": "aergae"}, {"aergae": "hi"}], [{"we": "wewewewe"}, {"wewewewe": "we"}], [{"aergerag": "pole"}, {"pole": "aergerag"}]]
        for (let i = 0; i < maxLength; i++){
            let tr = document.createElement("tr")
            for (let el of entries){
                let td = document.createElement("td")
                if (el[currRow]){
                    td.textContent = Object.keys(el[currRow])[0]
                }
                else {
                    td.textContent = " "
                }
                let td2 = document.createElement("td")
                if (el[currRow]){
                    let flag = false
                    for (let i = 0; i < el.length;i++){
                        if (el[currRow][Object.keys(el[currRow])[0]] in el[i]){
                            if (el[i][el[currRow][Object.keys(el[currRow])[0]]] == Object.keys(el[currRow])[0]){
                                flag = true
                            }
                        }

                    }
                    if (el[currRow][Object.keys(el[currRow])[0]] == "" || el[currRow][Object.keys(el[currRow])[0]] == "n/a"){
                        flag = true
                    }
                    if (flag){
                        td.setAttribute("style", "color: #09BC8A")
                        td2.setAttribute("style", "color: #09BC8A")
                    }
                    else {
                        td.setAttribute("style", "color: #fe7968")
                        td2.setAttribute("style", "color: #fe7968")

                    }
                    td2.textContent = el[currRow][Object.keys(el[currRow])[0]]
                }
                else {
                    td2.textContent = " "
                }
                tr.appendChild(td)
                tr.appendChild(td2)
            }

            let td = document.createElement("td")
            td.textContent = tourneyInfoNotGoing[tourney][currRow]
            tr.appendChild(td)
            tbody.appendChild(tr)
            currRow++
        }
        
        table.appendChild(thead)
        table.appendChild(tbody)
        infoContent.appendChild(h1)
        infoContent.appendChild(h2)
        infoContent.appendChild(table)
        let h2pt2 = document.createElement("h2")
        h2pt2.textContent = "Judges: "
        h2pt2.setAttribute("style", "text-align: center;margin-top: 20px; background: transparent;")
        let judges = []
        for (let key in judgeInfo){
            if (key == tourney){
                let judgeTable = document.createElement("table")
                judgeTable.classList.add("content-table")
                judgeTable.setAttribute("style", "margin: 0 auto;")
                let judgeTableHead = document.createElement("thead")
                judgeTableHead.setAttribute("style", "background: #89adeb;color: #444554;")
                let judgeTableBody = document.createElement("tbody")
                for (let innerkey in judgeInfo[key]){
                    let th = document.createElement("th")
                    th.textContent = innerkey
                    judgeTableHead.appendChild(th)
                    judges.push(judgeInfo[key][innerkey])
                }
                let maxJudgeLength = 0
                for (el of judges){
                    if (el.length  > maxJudgeLength){
                        maxJudgeLength = el.length
                    }
                }
                let currRow = 0
                for (let i = 0; i< maxJudgeLength; i++){
                    let tr = document.createElement("tr")
                    for (el of judges){
                        let td = document.createElement("td")
                        if (el[currRow]){
                            td.textContent = `${el[currRow][Object.keys(el[currRow])[0]]} (${Object.keys(el[currRow])[0]})`
                        }
                        else {
                            td.textContent = " "
                        }
                        tr.appendChild(td)

                    }
                    judgeTableBody.appendChild(tr)
                    currRow++
                }
                judgeTable.appendChild(judgeTableHead)
                judgeTable.appendChild(judgeTableBody)
                
                infoContent.appendChild(h2pt2)
                infoContent.appendChild(judgeTable)
                break
            }

        }
        let br = document.createElement("br")
        br.setAttribute("style", "background: transparent")
        infoContent.appendChild(br)
        let br2 = document.createElement("br")
        br2.setAttribute("style", "background: transparent")
        infoContent.appendChild(br2)

    }
    infoContent.removeChild(infoContent.lastChild)
    infoContent.removeChild(infoContent.lastChild)

    infoContent.setAttribute("style", "display: block")

})

const resp = document.getElementById("resp")
resp.addEventListener("click", function(){

    let respByEmails = {}
    for (let key in responses){
        for (let email of responses[key]["responses"]){
            email = Object.keys(email).join('')
            respByEmails[email] =  []
        }
        break
    }
    for (let key in responses){
        for (let email of responses[key]["responses"]){
            let emailFormatted = Object.keys(email).join('')
            let formDict = {}
            formDict[responses[key]["questionTitle"]] = email[emailFormatted]
            respByEmails[emailFormatted].push(formDict)
        }
    }
    hideContent()
    resp.setAttribute("style", "color: #09BC8A")

    const responsesResultTbody = document.getElementById("responsesResultTbody")
    removeAllChildNodes(responsesResultTbody)
    let currEmail = Object.keys(respByEmails)[0]
    createTable(respByEmails, currEmail)
    const responsesContent = document.getElementById("responsesContent")
    responsesContent.setAttribute("style", "display: block")
    const name = document.getElementById("name")
    name.textContent = Object.keys(respByEmails)[0]
    currIndex = 0
    const moveNameLeft = document.getElementById("moveNameLeft")
    moveNameLeft.addEventListener("click", function(){
        currIndex--
        if (currIndex < 0){
            currIndex = Object.keys(respByEmails).length -1
        }
        currEmail = Object.keys(respByEmails)[currIndex]
        removeAllChildNodes(responsesResultTbody)
        name.textContent = Object.keys(respByEmails)[currIndex]
        createTable(respByEmails, currEmail)


    })
    const moveNameRight = document.getElementById("moveNameRight")
    moveNameRight.addEventListener("click", function(){
        currIndex++
        if (currIndex >Object.keys(respByEmails).length -1){
            currIndex = 0
        }
        currEmail = Object.keys(respByEmails)[currIndex]
        removeAllChildNodes(responsesResultTbody)
        name.textContent = Object.keys(respByEmails)[currIndex]
        createTable(respByEmails, currEmail)


    })

})

const graph = document.getElementById("graph")
graph.addEventListener("click", function(){
    hideContent()
    graph.setAttribute("style", "color: #09BC8A")
    const graphContent = document.getElementById("graphContent")
    graphContent.setAttribute("style", "display: block")
    removeAllChildNodes(graphContent)
    //piechart on responses by tourney
    
    let chartNum = 0
    for (let key in responses){
        let dataObj = {}
        let labelArr = []
        let dataArr = []
        if (responses[key]["questionTitle"].toLowerCase().includes("attending")){
            chartNum++
            let dat = responses[key]["responses"]
            for (let el of dat){
                if (!(labelArr.includes(el[Object.keys(el)[0]]))){
                    labelArr.push(el[Object.keys(el)[0]])
                    dataObj[el[Object.keys(el)[0]]] = 0
                }
                else {
                    dataObj[el[Object.keys(el)[0]]] += 1
                }
            }
            for (el of labelArr){
                dataArr.push(dataObj[el])
            }
            let cont = document.createElement("div")
            cont.classList.add("chart-container")
            let canvas = document.createElement("canvas")
            canvas.id = "chart" + chartNum
            cont.appendChild(canvas)
            //canvas.setAttribute("style", "width: 400px !important; height: 600px !important;")
            graphContent.appendChild(cont)
            createChart(document.getElementById("chart" + chartNum), labelArr, dataArr, responses[key]["questionTitle"])
        }
        
    }
   
    
})


hideContent()
const sidenav = document.getElementById("sidenav")
let responses = JSON.parse(localStorage.getItem("jsonResponses"))
let namesByEmails = {}
    for (let key in responses){
        if (responses[key]["questionTitle"].toLowerCase().includes("name") && !(responses[key]["questionTitle"].toLowerCase().includes("partner"))){
            for (let i = 0; i < responses[key]["responses"].length; i++){
                namesByEmails[Object.keys(responses[key]["responses"][i])[0]] = responses[key]["responses"][i][Object.keys(responses[key]["responses"][i])[0]]
            }
            break
        }
}
// {sd1: {"attending": "yes", judge: "not available", event: "ld"}}
for (let key in namesByEmails){
    let a = document.createElement("a")
    a.textContent = namesByEmails[key]
    a.classList.add("options")
    a.id = key
    a.addEventListener("click", function(){
        
        hideContent()
        a.setAttribute("style", "color: #09BC8A")
        const memberContent = document.getElementById("memberContent")
        removeAllChildNodes(memberContent)
        let id = a.id
        studentInfo = {}
        for (let key in responses){
            if (responses[key]["questionTitle"].toLowerCase().includes("attend")){
                let str = responses[key]["questionTitle"].split(" ")
                let attendingIndex = 0
                for (let i = 0; i < str.length; i++){
                    if (str[i].toLowerCase().includes("attend")){
                        attendingIndex = i
                    }
                }
                let tourneyName = str.slice(attendingIndex + 1, str.length).join(" ")
                let punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
                let letters = tourneyName.split('');
                let cleanLetters = letters.filter(function(letter) {
                    return punctuation.indexOf(letter) === -1;
                });
                
                let cleanString = cleanLetters.join('');
                studentInfo[cleanString] = {}
                for (let i = 0; i < responses[key]["responses"].length; i++){
                    if (Object.keys(responses[key]["responses"][i])[0] == id){
                        studentInfo[cleanString]["attending"] = responses[key]["responses"][i][Object.keys(responses[key]["responses"][i])[0]]
                    }
                }
            }
        }
        for (tourney in studentInfo){
            for (let key in responses){
                if (responses[key]["questionTitle"].toLowerCase().includes("event") && responses[key]["questionTitle"].toLowerCase().includes(tourney.toLowerCase())){
                    for (let i = 0; i < responses[key]["responses"].length; i++){
                        if (Object.keys(responses[key]["responses"][i])[0] == id){
                            studentInfo[tourney]["event"] = responses[key]["responses"][i][Object.keys(responses[key]["responses"][i])[0]]
                        }
                    }
                }
 
            }
            if (!("event" in studentInfo[tourney])){
                studentInfo[tourney]["event"] = "n/a"
            }
        }
        for (tourney in studentInfo){
            for (let key in responses){
                if (responses[key]["questionTitle"].toLowerCase().includes("judg") && responses[key]["questionTitle"].toLowerCase().includes("name") && responses[key]["questionTitle"].toLowerCase().includes(tourney.toLowerCase())){
                    let flag = true
                    for (let i = 0; i < responses[key]["responses"].length; i++){
                        if (Object.keys(responses[key]["responses"][i])[0] == id){
                            studentInfo[tourney]["judgeProvided"] = true
                            flag = false
                        }
                    }
                    if (flag == true){
                        studentInfo[tourney]["judgeProvided"] = false

                    }
                }
 
            }
        }
        let h1pt2 = document.createElement("h1")
        h1pt2.textContent = "Overall"
        h1pt2.setAttribute("style", "text-align: center;margin-top: 40px; background: transparent")   
        h1pt2.classList.add("tourneyName")
        memberContent.appendChild(h1pt2)
        let attendingTourn = 0
        let judgeProv = 0
        let events = []
        for (tourney in studentInfo){
            if (studentInfo[tourney]["attending"] == "yes"){
                attendingTourn++
            }
            if (studentInfo[tourney]["judgeProvided"] == true){
                judgeProv++
            }
            events.push(studentInfo[tourney]["event"])
        }
        uniq = [...new Set(events)];

        let numTournies = Object.keys(studentInfo).length
        let tournamentsAttended = document.createElement("p")
        tournamentsAttended.textContent = `Attending ${(attendingTourn/numTournies)*100}% of tournaments (${attendingTourn}/${numTournies})`
        let judgeTourn = document.createElement("p")
        judgeTourn.textContent = `Provided judges for ${judgeProv} tournaments`
        let j = document.createElement("p")
        j.textContent = `Judges provided for ${judgeProv / numTournies * 100}% of all tournies`
        let j2 = document.createElement("p")
        j2.textContent = `Judges provided for ${judgeProv / attendingTourn * 100}% of attended tournies `
        let allevents = document.createElement("p")
        allevents.textContent = `Events: ${uniq.join(", ")}`
        tournamentsAttended.classList.add("pstyle")
        judgeTourn.classList.add("pstyle")
        j.classList.add("pstyle")
        j2.classList.add("pstyle")
        allevents.classList.add("pstyle")

        memberContent.appendChild(tournamentsAttended)
        memberContent.appendChild(judgeTourn)
        memberContent.appendChild(j)
        memberContent.appendChild(j2)
        memberContent.appendChild(allevents)




        let h1 = document.createElement("h1")
        h1.textContent = "Tourney by Tourney"
        h1.setAttribute("style", "text-align: center;margin-top: 40px; background: transparent")   
        h1.classList.add("tourneyName")
        memberContent.appendChild(h1)
        for (tourney in studentInfo){ 
            let h2 = document.createElement("h2")
            h2.textContent = tourney
            h2.setAttribute("style", "text-align: center;margin-top: 20px; background: transparent;")

            let attending = document.createElement("p")
            attending.textContent = "Attending: " + studentInfo[tourney]["attending"]
            let event = document.createElement("p")
            event.textContent = "Event: " + studentInfo[tourney]["event"]
            let judge = document.createElement("p")
            judge.textContent = "Judge Provided: " + studentInfo[tourney]["judgeProvided"]
            memberContent.appendChild(h2)
            memberContent.appendChild(attending)
            memberContent.appendChild(event)
            memberContent.appendChild(judge)
            attending.classList.add("pstyle")
            event.classList.add("pstyle")
            judge.classList.add("pstyle")

            


        }
        

        memberContent.setAttribute("style", "display: block")

    })
    sidenav.appendChild(a)


}

let mychart
entry.click();



