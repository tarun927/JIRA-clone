///////////////////////////////PLUSBTN
var plusBtn = document.querySelector(".plus");


function plusBtnClick(){
    
        document.querySelector(".dialog")
       .style
       .display = "flex"
    }
plusBtn.addEventListener("click",plusBtnClick)

// ///////////////////////////// CROSSBTN
var crossBtn = document.querySelector(".cross");


function crossBtnClick(){
    document.querySelector(".dialog")
    .style
    .display = "none"
}
crossBtn.addEventListener("click",crossBtnClick)
///////////////////////////////CLOSEBTN
var closebtnarr=document.querySelectorAll(".icon.color-3")

// function dialogbtnclick(){
//     document.querySelector(".dialog").style.display="none"
// }

function closeTicket(e){
    var box = e.target.parentElement.parentElement ;
    console.log(box)
    box.style.display = "none"
}
for(let i=0;i<closebtnarr.length;i++){
    const closebtn=closebtnarr[i];
    closebtn.addEventListener("click",closeTicket)

}
// close.addEventListener("click",dialogbtnclick)
/////////////////////////////////////////////ADDTICKET
function addTicket(){
    crossBtnClick() ;
    var boxes = document.querySelector(".wrapper main");
    var puranaHTML = boxes.innerHTML;  //selecting inner html of main area 
    var boxContent = document.getElementById("box-content");
    var title = document.getElementById("title");
    boxes.innerHTML = puranaHTML + `
    <div class="box">
            <div class="headerbox">
                <div class="box-heading">${title.value}</div>
                <div  class="icon color-1">+</div>
                <div class="icon color-2">+</div>
                 <div class="icon color-3">+</div>
           </div>
           <main>
            <textarea name="" id="" cols="30" rows="10" class="colorarea">${boxContent.value}</textarea>
           </main>
        </div>` ;
        title.value = ""
        boxContent.value = ""
        addDelTktLogic();
}

////////////////////minimize
function addDelTktLogic(){
    var closebtnarr = document
    .querySelectorAll(".icon.color-3")
    var minimizeIcons = document
    .querySelectorAll(".icon.color-1")

    function closeTicket(e){
        var box = e.target.closest(".box");
        console.log(box)
        box.style.display = "none"
    }

    function minimize(e){
       var box = e.target.closest(".box") ;
        console.log(box)
      if(box.querySelector("main").style.display !== "none"){
          box.querySelector("main").style.display = "none"
       }else{
          box.querySelector("main").style.display = "block"
       }

    }
    
    for(let i=0;i<closebtnarr.length;i++){
        const closebtn=closebtnarr[i];
        closebtn.addEventListener("click",closeTicket)
    
    }
    for(let i=0; i<minimizeIcons.length;i++){
        const closebtn = minimizeIcons[i];
       closebtn.addEventListener("click", minimize)
      }
}
////////////////////////////////////////try

var RedBtn = document.querySelector("#bird1");


function RedBtnClick(){
    // document.querySelectorAll(".colorarea").style.background="Red"
    var allBtn = document.querySelectorAll(".colorarea")
    for(let i=0; i<allBtn.length; i++){
        allBtn[i].style.background = "rgb(253, 108, 108)"
    }
}
RedBtn.addEventListener("click",RedBtnClick)
////////////////////////////////////////////////
var BlueBtn = document.querySelector("#bird2");


function BlueBtnClick(){
    // document.querySelector(".colorarea").style.background="blue"
    var allBtn = document.querySelectorAll(".colorarea")
    for(let i=0; i<allBtn.length; i++){
        allBtn[i].style.background = "rgb(97, 97, 252)"
    }
}
BlueBtn.addEventListener("click",BlueBtnClick)
///////////////////////////////////////////////////
var PinkBtn = document.querySelector("#bird3");


function PinkBtnClick(){
    // document.querySelector(".colorarea").style.background="pink"
    var allBtn = document.querySelectorAll(".colorarea")
    for(let i=0; i<allBtn.length; i++){
        allBtn[i].style.background = "rgb(84, 156, 156)"
    }
}
PinkBtn.addEventListener("click",PinkBtnClick)