console.log("Hello");

let workingNumber = "";
let numberStored;
let operationPressed;

function buttonPressed(theButton){
    console.log(theButton);

    workingNumber = workingNumber + theButton;

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

function plusButtonPressed(){
    console.log("+");
    numberStored = workingNumber;
    workingNumber = "";
}

function equalButtonPressed(){
    console.log("=")
}