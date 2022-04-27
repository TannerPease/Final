let list = [""];


//main input
let inputEle = document.createElement("input");
inputEle.placeholder="Username"

// input with password
let inputElePass =  document.createElement("input")
inputElePass.placeholder="Password...";
inputElePass.setAttribute("type", "password")


//message ele
let messageEle = document.createElement("h3")

//button
let button = document.createElement("button")
button.innerHTML="Log in"

//checks for correct values
button.addEventListener("click",function (){
    if (inputEle.value==="cool"&& inputElePass.value === "password"){
        button.remove()
        inputEle.remove()
        inputElePass.remove()
        messageEle.remove()
        const pages=[
            {
                page:"Grade View",
                navigate: GradeView
            },

            {
                page:"Add Grade",
                navigate: AddGrade
            }
        ]
        let counting = 0

        function navButt(pg,pr, nv){
            let button = document.createElement("button")
            button.innerHTML=pg;
            button.addEventListener("click", function (){
                document.body.querySelector(".wrapper").innerHTML=""
                nv();
            })
            pr.appendChild(button);
        }

        function navigation(){
            let nav= document.createElement("nav")
            let wrapper= document.createElement("div")
            wrapper.classList.add("wrapper");
            nav.style.height="80px";
            nav.style.backgroundColor="green";
            for (obj of pages){
                navButt(obj.page, nav, obj.navigate)
            }
            document.body.appendChild(nav);
            document.body.appendChild(wrapper)
        }

        function GradeView(){
            // let grades= document.createElement("div")
            // grades.innerHTML="Grades"
            // document.body.querySelector(".wrapper").appendChild(grades);
            renderList()
        }



        function AddGrade(){
            let name=""
            let grade= 0

            let nameEle = document.createElement("input");
            nameEle.placeholder="Type name"
            let gradeEle = document.createElement("input");
            gradeEle.placeholder="Enter Grade 0-100"
            document.body.querySelector(".wrapper").appendChild(nameEle)
            document.body.querySelector(".wrapper").appendChild(gradeEle)
           let subButton = document.createElement("button")
          subButton.innerHTML="Submit Grade"
            document.body.querySelector(".wrapper").appendChild(subButton)
            subButton.addEventListener("click", function (){
                name=nameEle.value
                grade=gradeEle.value
                isNaN(name)
                isNaN(grade)
                if (isNaN(name)===true && isNaN(grade)===false && grade<101) {
                    // let ele = document.createElement("div")
                    // let nameGEle = document.createElement("h1")
                    // nameGEle.innerHTML = name + "     " + grade
                    // ele.appendChild(nameGEle)
                    // document.body.querySelector(".wrapper").appendChild(ele)
                    list.push(name + " " + grade)

                    // let note = document.createElement("h1")
                    //     let priority = document.createElement("h3")
                    //     noteEle.value=note
                    //     prioEle.value=priority
                    //     note.innerHTML=priority + note
                    //     document.body.appendChild(note)
                    // }
                }else{
                    let ele = document.createElement("div")
                    let nameGEle = document.createElement("h1")
                    nameGEle.innerHTML="Must be at least 1 character in the name box and only numbers 0-100 in the grade box "
                    ele.appendChild(nameGEle)
                    document.body.querySelector(".wrapper").appendChild(ele)
                }
            })

            // let interact= document.createElement("div")
            // interact.innerHTML="Interact"
            // document.body.querySelector(".wrapper").appendChild(interact);
            // let countButt = document.createElement("button")
            // countButt.innerHTML="Increase Counter " + counting
            // document.body.appendChild(countButt)
            // countButt.addEventListener("click", function (){
            //     counting=counting+1
            //     countButt.innerHTML="Increase Counter " + counting
            //
            // })

        }

        navigation();
        GradeView();
    }else{
        messageEle.innerHTML="incorrect username or password"
    }




})

let listEle = document.createElement("div")

function renderList(){

    listEle.innerHTML="";

    for (let i=0; i<list.length;i++){
        let ele = document.createElement("div")
        ele.innerHTML=list[i]
        listEle.appendChild(ele)
        document.body.querySelector(".wrapper").appendChild(ele)
        document.body.appendChild(listEle);
    }
}


//append inputs
document.body.appendChild(inputEle);
document.body.appendChild(inputElePass)
// document.body.appendChild(inputElePass)
document.body.appendChild(messageEle);
document.body.appendChild(button)
// document.body.appendChild(listEle)

