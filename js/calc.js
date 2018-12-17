//alert('bob');

const myButtons = document.querySelectorAll('span');
//const butt = document.querySelector(".calculator");

const screen = document.querySelector(".screen");
let num = ""; //string until used

const el = document.getElementById("calc");

// el.addEventListener("mouseover", function(e){
//     console.log('wat', e);
//     //alert('mousey');
// });


for (let i = 0; i < myButtons.length; i++) {
    //console.log(myButtons[i].innerHTML);
    myButtons[i].addEventListener("click", function(){;
        console.log(myButtons[i].innerHTML);
       // console.log(myButtons[i].className);

        if(myButtons[i].className != "operator"){
            screen.innerHTML = num + myButtons[i].innerHTML;
            //num = parseInt(myButtons[i].innerHTML);
            num = num + myButtons[i].innerHTML ;
            //console.log(num);
        }
        if(myButtons[i].className === "clear"){
            screen.innerHTML = "";
            num = "";
        }
    }, false);
  }


