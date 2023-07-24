function add()
{
    var num1 = Number(document.getElementById("number1").value);
   var num2 = Number(document.getElementById("number2").value);
   var num3 = Number(document.getElementById("number3").value);
   var sum = num1 + num2 +num3;
    alert(sum)
}


function reset()
{
    document.getElementById("number1").value = "0";
    document.getElementById("number2").value = "0";
    document.getElementById("number3").value = "0";
}