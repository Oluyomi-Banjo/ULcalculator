class BasicCalc {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    add() {
        return Number(this.num1) + Number(this.num2);
    }
    
    sub() {
        return Number(this.num1) - Number(this.num2);
    }
    
    div() {
        return Number(this.num1) / Number(this.num2);
    }
    
    mult() {
        return Number(this.num1) * Number(this.num2);
    }
}

const addval = document.getElementById("addbtn");
const subval = document.getElementById("subbtn");
const mulval = document.getElementById("mulbtn");
const divval = document.getElementById("divbtn");

const calcFunctions = [addval, subval, mulval, divval];

calcFunctions.forEach(button => {
    button.addEventListener('click', () => {
        let nums1 = document.getElementById("num1").value;
        let nums2 = document.getElementById("num2").value;
        let calc = new BasicCalc(nums1, nums2);
        let result;
        
        if (button === addval) {
            result = calc.add();
        } else if (button === subval) {
            result = calc.sub();
        } else if (button === mulval) {
            result = calc.mult();
        } else if (button === divval) {
            result = calc.div();
        }
        
        alert(`Result: ${result}`);
    });
});
