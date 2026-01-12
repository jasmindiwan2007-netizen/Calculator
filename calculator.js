function insert(value)
{
   document.getElementById("result").value+=value;
}
function calculate()
{
document.getElementById("result").value=eval(document.getElementById("result").value);
}
function clearinsert()
{
 document.getElementById("result").value="";
}
function backspace()
{
   document.getElementById("result").value;
   result.value= result.value.slice(0,-1);
}