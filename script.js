function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(x, y) {
    if (y !== 0) {
        return x / y;
    } else {
        return "Error: Division by zero";
    }
}

let first_number = 3
let operator = '+'
let second_number = 5


function operate(operator, num1, num2) {
    let result;

    if (operator === '+') {
        result = add(num1, num2);
    } else if (operator === '-') {
        result = subtract(num1, num2);
    } else if (operator === '*') {
        result = multiply(num1, num2);
    } else if (operator === '/') {
        result = divide(num1, num2);
    } else {
        result = "Error: Invalid operator";
    }

    return result;
}



/********************************************************************************* */
/*                  write formula on the screen                                    */
/********************************************************************************* */

function getoperator(arr) {
    const operators = ['+', '-', '*', '/'];

    for (const element of arr) {
        if (operators.includes(element)) {
            return element;
        }
    }

    return null;  
}
function getnumber(formula){
    let nextoperator = getoperator(formula);
    let n;
    if(!nextoperator){
        n= formula.join('')
        formula.splice(0);
        
    }
    else{
        let nextoperator_ind=formula.indexOf(nextoperator)
        n=formula.slice(0,nextoperator_ind).join('')
        formula.splice(0,nextoperator_ind+1)
    }
    return parseFloat(n)
}
const btns=document.querySelectorAll(".btn");
let formula=[]
btns.forEach(btn => {
    btn.addEventListener('click',()=>{
        if(btn.id==="clear"){
            formula=[]
            addtoscreen()
        }
        else if(btn.id==="del"){
            formula.pop()
            addtoscreen()
        }
        else if(btn.id==="equal"){
            while(formula.length>1){
                let op=getoperator(formula)
                let res
                if(!op){
                    res=getnumber(formula)
                    formula=[res]
                }
                else{
                    let n1=getnumber(formula)
                    let nop=getoperator(formula)
                    console.log("n1="+n1,op)
                    let n2=getnumber(formula)
                    if(isNaN(n2)){
                        break
                    }
                    console.log("n1="+n1,"n2="+n2,op)
                    let res=operate(op,n1,n2)
                    formula.unshift(res.toFixed(3))
                    
                    formula.splice(1,0,nop)
                    console.log(formula)
                    op=nop
                }
            }
            addtoscreen()

        }
        else{
            formula.push(btn.textContent)
            addtoscreen();
        }
        console.log(formula)
    })
    
});
const screen=document.querySelector("#screen");

function addtoscreen(){
    screen.textContent=formula.join('')
}


