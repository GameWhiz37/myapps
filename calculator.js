console.log("Hello");

let workingNumber = "";
let numberStored;
let operaterPressed;

function buttonPressed(theButton){
    console.log(theButton);
    if (workingNumber=="0"){
        workingNumber = theButton;
    }
    else{
        workingNumber = workingNumber + theButton;
    }

    setDisplayNumber(workingNumber);
}

function setDisplayNumber(theNumber){
    document.getElementById("displayText").textContent=theNumber;
}

function clearButtonPressed(){
    console.log("AC");
    setDisplayNumber("0");
    workingNumber = "";
}

function operationButtonPressed(theOperator){
    console.log(theOperator);
    operaterPressed = theOperator;
    numberStored = workingNumber;
    workingNumber = "";
}


function equalButtonPressed(){
    console.log("=");
    if(operaterPressed=="+"){
        let result = parseInt(numberStored) + parseInt(workingNumber);
        setDisplayNumber(result);
        console.log("result = " + result);
    }

    if(operaterPressed=="-"){
        let result = parseInt(numberStored) - parseInt(workingNumber);
        setDisplayNumber(result);
        console.log("result = " + result);

    }

    if(operaterPressed=="x"){
        let result = parseInt(numberStored) * parseInt(workingNumber);
        setDisplayNumber(result);
        console.log("result = " + result);
    }

    if(operaterPressed=="÷"){
        let result = parseInt(numberStored)/parseInt(workingNumber);
        setDisplayNumber(result);
        console.log("result = " + result);
    }
}