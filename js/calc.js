//alert('bob');

const myButtons = document.querySelectorAll('span');
const butt = document.querySelector(".calculator");

const el = document.getElementById("calc");

// el.addEventListener("mouseover", function(e){
//     console.log('wat', e);
//     //alert('mousey');
// });


for (let i = 0; i < myButtons.length; i++) {
    //console.log(myButtons[i].innerHTML);
    myButtons[i].addEventListener("click", function(){;
        console.log(myButtons[i].innerHTML);
    }, false);
  }


