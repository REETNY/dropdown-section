const dropDown = document.querySelector(".dropdwon-section");
const allDropDown = [...document.querySelectorAll(".eachdrop")];
const openHeader = [...document.querySelectorAll(".head-opener")];
const dropBody = [...document.querySelectorAll(".drop-body")];

dropDown.addEventListener("click", (e) => {

   let parentDiv;

   if(e.target.classList.contains("header") || e.target.classList.contains("head") || e.target.classList.contains("fa"))
   {
        if(e.target.classList.contains("header")){
            parentDiv = e.target.parentElement;
        }else if(e.target.classList.contains("head")){
            parentDiv = e.target.parentElement.parentElement;
        }else if(e.target.classList.contains("fa")){
            parentDiv = e.target.parentElement.parentElement.parentElement;
        }
    }

    if(parentDiv == undefined)return;

    closeAll(parentDiv);

    init(parentDiv)
})

function closeAll(parentDiv){
    closeHead()
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
        parentDiv.childNodes[1].childNodes[3].innerHTML = `<i class="fa fa-chevron-up" aria-hidden="true"></i>`
    }else if(parentDiv.classList.contains("active")){
        parentDiv.classList.add("not-active")
        parentDiv.classList.remove("active");
        parentDiv.childNodes[1].childNodes[3].innerHTML = `<i class="fa fa-chevron-down" aria-hidden="true"></i>`
    }
}

function closeHead(){
    openHeader.forEach( (opener) => {
        opener.innerHTML = `<i class="fa fa-chevron-down" aria-hidden="true"></i>`
    })
}