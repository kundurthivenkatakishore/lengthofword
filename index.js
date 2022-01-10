//function getlength(){
//    let result=document.getElementById("first").value;
//    let len=result.length;

//    document.getElementsByClassName("output")[0].innerHTML="Length of theword is "+len;
//}
let button=document.getElementById("btn");
button.addEventListener("click",function(){
    let input=document.getElementById("first").value;
    let count=input.length;
    
    let output=document.getElementById("output");
    output.innerHTML=`<h1>${count}</h1>`;

})