//alert('bob');

const myButtons = document.querySelectorAll('span');
//const butt = document.querySelector(".calculator");

const screen = document.querySelector(".screen");
var num = ""; //string until used
var op = "";
var result = 0;

const el = document.getElementById("calc");

// el.addEventListener("mouseover", function(e){
//     console.log('wat', e);
//     //alert('mousey');
// });


for (let i = 0; i < myButtons.length; i++) {
    //console.log(myButtons[i].innerHTML);
 
    myButtons[i].addEventListener("click", function(){;
        //console.log(myButtons[i].innerHTML);
       // console.log(myButtons[i].className);
       if(myButtons[i].className === "clear"){
            screen.innerHTML = 0;
            num = "";
            op = "";
         }
        else { 
        if((myButtons[i].className != "operator") && (myButtons[i].className != "equals")){
            
            if(op===""){
            screen.innerHTML = num + myButtons[i].innerHTML;
            //num = parseInt(myButtons[i].innerHTML);
            num = num + myButtons[i].innerHTML;
            //console.log(num);
            }
            else {
                //do the operation
                result = doOperation(myButtons[i].innerHTML, op);
                //let result = parseInt(num) + parseInt(myButtons[i].innerHTML);
                screen.innerHTML = myButtons[i].innerHTML;
            }
        }

        if(myButtons[i].className === "operator"){
            op = doOperators(myButtons[i].innerHTML);
            }

        if(myButtons[i].className === "equals"){
                if(isFinite(result)){
                  screen.innerHTML = result;
                 }
                else screen.innerHTML = "N/A"; //no dividing by zero
                }    
                op = "";
                num = "";
        }    
    }, false);
  }


function doOperators(myOp){
    console.log(myOp);
    let theOp = "";
    switch(myOp){
        case '+':
            theOp = myOp;
            break;
        case '-':
            theOp = myOp;
            break;
        case '/':
            theOp = myOp;
            break;
        case '*':
            theOp = myOp;
            break;
        default:
            break;    
    }
    return theOp;
}

    function doOperation(myNum, myOp){
        console.log(num);
        let answer = "";
        switch(myOp){
            case '+':
                answer = parseInt(num) + parseInt(myNum);
                num = answer;
                console.log(answer);
                break;
            case '-':
                answer = parseInt(num) - parseInt(myNum);
                num = answer;
                break;
            case '/':
                answer = parseInt(num) / parseInt(myNum);
                num = answer;
                break;
            case '*':
                answer = parseInt(num) * parseInt(myNum);
                num = answer;
                console.log(num);
                break;
            case '=':
                break;    
            case 'C': // this should not appear
                answer = "bob";
                break;    
        }   
     return answer;   
    }   