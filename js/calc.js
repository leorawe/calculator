//alert('bob');

const myButtons = document.querySelectorAll('span');
//const butt = document.querySelector(".calculator");

const screen = document.querySelector(".screen");
var num = ""; //string until used
var num2 = "";
var op = "";
var result = 0;
screen.innerHTML = 0;

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
            console.log('num is ',  typeof(num));
            let newNum = num + myButtons[i].innerHTML;
            let newNum2 = num2 + myButtons[i].innerHTML;
            if(op===""){
                screen.innerHTML = newNum;
                num = newNum;
                console.log("new num is", newNum);
            }
            else {
                //do the operation - here? or no?
                console.log("new num is", newNum2);
                result = doOperation(newNum2, op);
                //let result = parseFloat(num) + parseFloat(myButtons[i].innerHTML);
                screen.innerHTML = newNum2;
                num2 = newNum2;
               // screen.innerHTML = myButtons[i].innerHTML;
            }
        }

        if(myButtons[i].className === "operator"){
            op = getOperator(myButtons[i].innerHTML);
            }

        if(myButtons[i].className === "equals"){
                if(isFinite(result)){
                    console.log("num is", num);  
                    console.log("result is", result);  
                  screen.innerHTML = result;
                 }
                else screen.innerHTML = "N/A"; //no dividing by zero
                }    
               // op = "";
              //  num = "";
        }    
    }, false);
  }


function getOperator(myOp){
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
                answer = parseFloat(num) + parseFloat(myNum);
                console.log('answer is', answer.toFixed(4));
                break;
            case '-':
                answer = parseFloat(num) - parseFloat(myNum);

                break;
            case '/':
                answer = parseFloat(num) / parseFloat(myNum);

                break;
            case '*':
                answer = parseFloat(num) * parseFloat(myNum);

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