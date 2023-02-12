const dropDown = document.querySelector(".dropdwon-section");
const allDropDown = [...document.querySelectorAll(".eachdrop")];

dropDown.addEventListener("click", (e) => {

   let parentDiv;

   if(e.target.classList.contains("header") || e.target.classList.contains("head")){
        if(e.target.classList.contains("header")){
            parentDiv = e.target.parentElement;
        }else if(e.target.classList.contains("head")){
            parentDiv = e.target.parentElement.parentElement;
        }else if(e.target.classList.contains("head-opener")){
            parentDiv = e.target.parentElement.parentElement
        }
    }

    if(parentDiv == undefined)return;

    closeAll(parentDiv);

    init(parentDiv)
})

function closeAll(parentDiv){
    allDropDown.forEach((item) => {
        if(item.classList != parentDiv.classList){
            item.classList.remove("active");
            item.classList.add("not-active");
        }else if(parentDiv.classList == item.classList){
            return
        }
    })
}

function init(parentDiv){
    if((parentDiv.classList.contains("not-active"))){
        parentDiv.classList.remove("not-active");
        parentDiv.classList.add("active");
    }else if(parentDiv.classList.contains("active")){
        parentDiv.classList.add("not-active")
        parentDiv.classList.remove("active");
    }
}