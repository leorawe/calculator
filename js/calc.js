//alert('bob');

const myButtons = document.querySelectorAll('span');
//const butt = document.querySelector(".calculator");

const screen = document.querySelector(".screen");
let entries = [];
let op = "";

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
            // num = "";
            // num2 = "";
            op = "";
            entries = [];
         }
        else { 
        if((myButtons[i].className != "operator") && (myButtons[i].className != "equals")){
            //console.log('num is ',  typeof(num));
            entries.push(myButtons[i].innerHTML);
            screen.innerHTML = doScreen(entries);
        }

        if(myButtons[i].className === "operator"){
            op = getOperator(myButtons[i].innerHTML);
            entries.push(myButtons[i].innerHTML);
            }

        if(myButtons[i].className === "equals"){
            console.log(entries);
            let result = doOperation(entries);
            console.log(result);
                if(isFinite(result)){
                    // console.log("num is", num);  
                    // console.log("result is", result);  
                     console.log("result type is", typeof(result));  
                  screen.innerHTML = result.toFixed(2).replace(/\.?0*$/g,'');
                 }
                else screen.innerHTML = "N/A"; //no dividing by zero
                }    
                // op = "";
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

function doOperation(arr){
     let n1 = "", n2 = "";
     let opReached = false;
     for(let i=0; i < arr.length; i++){
         if((arr[i] != op) && (opReached === false))
           {n1 = n1 + arr[i];}
         else {
             if(arr[i]===op)
             //start n2
             opReached = true;
             else {n2 = n2 + arr[i];}
         }
     }
         console.log("n1 is ", n1);
        console.log("nu2 is ", n2);
        console.log("op is ", op);
        console.log(opReached, "opReached is ");
        if(opReached === true){
     let ans = calculate(n1, n2, op);
             return ans;  
        }      else return parseFloat(n1);
}
    function calculate(num1, num2, op){
        console.log("num1 is ", num1);
        console.log("num2 is ", num2);
        console.log("op is ", op);
        let answer = "";
        switch(op){
            case '+':
                answer = parseFloat(num1) + parseFloat(num2);
              //  console.log('answer is', answer.toFixed(4));
                break;
            case '-':
                answer = parseFloat(num1) - parseFloat(num2);
                //console.log(answer, " in a minus")
                break;
            case '/':
                answer = parseFloat(num1) / parseFloat(num2);

                break;
            case '*':
                answer = parseFloat(num1) * parseFloat(num2);
                break;
        }   
     return answer;   
    }   

    function doScreen(arr){
        let opReached = false;
        let myNum = "";
        for(let i=0; i < arr.length; i++){
            //no operator
            if(op === "")
                {myNum = myNum + arr[i];}
            else {
                //do fooo
                if((arr[i] === op))
                {
                   opReached = true;
                }
             else  if(opReached === true){
                {myNum = myNum + arr[i];}
                 }
            }
         }
         return myNum;
    }     
