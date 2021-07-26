getValues=function(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    resultObject={
        "number1": number1,
        "number2": number2
    }
    return resultObject;
}
showResult=function(result){
    resultElement=document.getElementById("result");
    resultElement.innerText=result;
}

//Plus operation
plusButton=document.getElementById("plusButton");
plusOperation=function(){
    numberValues=getValues();
    sum=parseInt(numberValues.number1)+parseInt(numberValues.number2);
    showResult(sum);
}
plusButton.addEventListener("click",plusOperation);

//Minus operation
minusButton=document.getElementById("minusButton");
minusOperation=function(){
    numberValues=getValues();
    difference=parseInt(numberValues.number1)-parseInt(numberValues.number2);
    showResult(difference);
}
minusButton.addEventListener("click",minusOperation);

//Multiply operation
mulButton=document.getElementById("mulButton");
mulOperation=function(){
    numberValues=getValues();
    product=parseInt(numberValues.number1)*parseInt(numberValues.number2);
    showResult(product);
}
mulButton.addEventListener("click",mulOperation);

//Divide operation
divButton=document.getElementById("divButton");
divOperation=function(){
    numberValues=getValues();
    divide=parseInt(numberValues.number1)/parseInt(numberValues.number2);
    showResult(divide);
}
divButton.addEventListener("click",divOperation);
