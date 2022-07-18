class Calculator{
    constructor(previousOperandTextElement,currentOperandtextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandtextElement = currentOperandtextElement;
        this._clear();
    }

    _clear(){
        //clear all values from the screen
        this.currentOperand = '';
        this.previosOperand = '';
        this.operation = null;
    }
    
    _delete(){
    //delete numbers one by one
    }
    
    _operation(param,equal){
    //choose which operation
        let previosOperand = this.previosOperand?(parseInt(this.previosOperand)):this.previosOperand;
        let currentOperand = this.currentOperand? (parseInt(this.currentOperand)):this.currentOperand;
        switch(param){
            
            case "+":
                this.flag = true;
                previosOperand = previosOperand + parseInt(this.currentOperand);
                (!!equal)? (this.previosOperand = this.previosOperand +"+"+ this.currentOperand + "="+ previosOperand):(this.previosOperand = previosOperand + param);
                this.currentOperand = previosOperand
                break;
            case "-":
                this.flag = true;
                previosOperand = currentOperand - previosOperand;
               
                this.previosOperand = previosOperand + param;
                break;
            case "*":
                this.flag=true;
                if(!previosOperand){previosOperand = 1}
                previosOperand = currentOperand * previosOperand;
                this.previosOperand = previosOperand + param;
                break;
            case "/":
                this.flag=true;
                break;
        }
        
    }
    
    _append(number){
        // to append numbers like calculator
        if(!!this.flag){
            this.currentOperand = '';
            this.flag = false;
        }
        this.currentOperand =   this.currentOperand.toString() + number.toString();
        // console.log(this.previosOperand)
    }

    _calculate(){
        //to  caluculate total
        this.currentOperand;
        this.previosOperand;
        const arr=["+","-","/","*"];
        let operator = null;
         arr.forEach(element => {
            let boolValue = this.previosOperand.includes(element);
            if(!!boolValue){
                operator= element;
                }
            
        });
        
        this.previosOperand = parseInt(this.previosOperand.replace("+",""));
        console.log(this.previosOperand)
        let equal = true;
        this._operation(operator, equal);

    }

    _display(){
        //to display numbers in the calculator screen
        this.currentOperandtextElement.innerText = this.currentOperand;
        this.previousOperandTextElement.innerText = this.previosOperand;
    }
}




const allnumbers = document.querySelectorAll('[data-number]');
const allOperation = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const clearAllButton = document.querySelector('[data-allClear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandtextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement,currentOperandtextElement);

allnumbers.forEach(button => {
    button.addEventListener('click',()=>{
        calculator._append(button.innerText);
        calculator._display();
    })
});
clearAllButton.addEventListener('click',()=>{
    calculator._clear();
    calculator._display();
})
allOperation.forEach(button=>{
    button.addEventListener('click',()=>{
        calculator._operation(button.innerText)
        calculator._display();
    })
})
equalButton.addEventListener('click',()=>{
    calculator._calculate();
    calculator._display();
})
