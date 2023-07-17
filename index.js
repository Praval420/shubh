let count1=0;
let count2=0;
let count3=0;
let count4=0;
let count5=0;
let count6=0;
let count7=0;
let audio1= new Audio("cheques.mp3");
let audio2= new Audio("Her.mp3");
let audio3= new Audio("Baller.mp3");
let audio4= new Audio("No.mp3");
let audio5= new Audio("We.mp3");
let audio6= new Audio("Elevated.mp3");
let audio7= new Audio("Still.mp3");
function click1()
{
    if(count1==0){
    audio1.play();
    count1=1;
    if(count1==1)
{
    audio2.pause();
    count2=0;
    audio3.pause();
    count3=0;
    audio5.pause();
    count5=0;
    audio6.pause();
    count6=0;
    audio4.pause();
    count4=0;
    audio7.pause();
    count7=0;

}
    }
    else{
        audio1.pause();
        count1=0;
    }
}
function replay1()
{
    audio1.currentTime=0;
    audio1.play();
    count1=1;
    if(count1==1)
    {
        audio2.pause();
        count2=0;
        audio3.pause();
        count3=0;
        audio5.pause();
        count5=0;
        audio6.pause();
        count6=0;
        audio4.pause();
        count4=0;
        audio7.pause();
        count7=0;
    
    }
}
function click2()
{
    if(count2==0){
    audio2.play();
    count2=1;
    if(count2==1)
    {
        audio1.pause();
    count1=0;
    audio3.pause();
    count3=0;
    audio5.pause();
    count5=0;
    audio6.pause();
    count6=0;
    audio4.pause();
    count4=0;
    audio7.pause();
    count7=0;
    
    }
    }
    else{
        audio2.pause();
        count2=0;
    }
}
function replay2()
{
    audio2.currentTime=0;
    audio2.play();
    count2=1;
    if(count2==1)
    {
        audio1.pause();
    count1=0;
    audio3.pause();
    count3=0;
    audio5.pause();
    count5=0;
    audio6.pause();
    count6=0;
    audio4.pause();
    count4=0;
    audio7.pause();
    count7=0;
    
    }
}
function click3()
{
    if(count3==0){
    audio3.play();
    count3=1;
    if(count3===1)
    {
        audio2.pause();
    count2=0;
    audio1.pause();
    count1=0;
    audio5.pause();
    count5=0;
    audio6.pause();
    count6=0;
    audio4.pause();
    count4=0;
    audio7.pause();
    count7=0;
    
    }
    }
    else{
        audio3.pause();
        count3=0;
    }
}
function replay3()
{
    audio3.currentTime=0;
    audio3.play();
    count3=1;
    if(count3===1)
    {
        audio2.pause();
    count2=0;
    audio1.pause();
    count1=0;
    audio5.pause();
    count5=0;
    audio6.pause();
    count6=0;
    audio4.pause();
    count4=0;
    audio7.pause();
    count7=0;
    
    }
}
function click4()
{
    if(count4==0){
    audio4.play();
    count4=1;
    if(count4==1)
    {
        audio2.pause();
        count2=0;
        audio3.pause();
        count3=0;
        audio5.pause();
        count5=0;
        audio6.pause();
        count6=0;
        audio1.pause();
        count1=0;
        audio7.pause();
        count7=0;
    }
    }
    else{
        audio4.pause();
        count4=0;
    }
}
function replay4()
{
    audio4.currentTime=0;
    audio4.play();
    count4=1;
    if(count4==1)
    {
        audio2.pause();
        count2=0;
        audio3.pause();
        count3=0;
        audio5.pause();
        count5=0;
        audio6.pause();
        count6=0;
        audio1.pause();
        count1=0;
        audio7.pause();
        count7=0;
    }
}
function click5()
{
    if(count5==0){
    audio5.play();
    count5=1;
    if(count5==1)
    {
        audio2.pause();
        count2=0;
        audio3.pause();
        count3=0;
        audio1.pause();
        count1=0;
        audio6.pause();
        count6=0;
        audio4.pause();
        count4=0;
        audio7.pause();
        count7=0;
    
       
    }
    }
    else{
        audio5.pause();
        count5=0;
    }
}
function replay5()
{
    audio5.currentTime=0;
    audio5.play();
    count5=1;
    if(count5==1)
    {
        audio2.pause();
        count2=0;
        audio3.pause();
        count3=0;
        audio1.pause();
        count1=0;
        audio6.pause();
        count6=0;
        audio4.pause();
        count4=0;
        audio7.pause();
        count7=0;
    
       
    }
}
function click6()
{
    if(count6==0){
    audio6.play();
    count6=1;
    if(count6==1)
    {
        audio2.pause();
        count2=0;
        audio3.pause();
        count3=0;
        audio5.pause();
        count5=0;
        audio1.pause();
        count1=0;
        audio4.pause();
        count4=0;
        audio7.pause();
        count7=0;
    
    
    }
    }
    else{
        audio6.pause();
        count6=0;
    }
}
function replay6()
{
    audio6.currentTime=0;
    audio6.play();
    count6=1;
    if(count6==1)
    {
        audio2.pause();
        count2=0;
        audio3.pause();
        count3=0;
        audio5.pause();
        count5=0;
        audio1.pause();
        count1=0;
        audio4.pause();
        count4=0;
        audio7.pause();
        count7=0;
    
    
    }
}
function click7()
{
    if(count7==0){
    audio7.play();
    count7=1;
    if(count7==1)
    {
        audio2.pause();
        count2=0;
        audio3.pause();
        count3=0;
        audio5.pause();
        count5=0;
        audio6.pause();
        count6=0;
        audio4.pause();
        count4=0;
        audio1.pause();
        count1=0;
    
    
    }
    }
    else{
        audio7.pause();
        count7=0;
    }
}
function replay7()
{
    audio7.currentTime=0;
    audio7.play();
    count7=1;
    if(count7==1)
    {
        audio2.pause();
        count2=0;
        audio3.pause();
        count3=0;
        audio5.pause();
        count5=0;
        audio6.pause();
        count6=0;
        audio4.pause();
        count4=0;
        audio1.pause();
        count1=0;
    
    
    }
}
document.querySelector("#W").addEventListener("click",click1);
document.querySelector("#first").addEventListener("click",replay1);
document.querySelector("#A").addEventListener("click",click2);
document.querySelector("#second").addEventListener("click",replay2);
document.querySelector("#S").addEventListener("click",click3);
document.querySelector("#third").addEventListener("click",replay3);
document.querySelector("#D").addEventListener("click",click4);
document.querySelector("#fourth").addEventListener("click",replay4);
document.querySelector("#J").addEventListener("click",click5);
document.querySelector("#fifth").addEventListener("click",replay5);
document.querySelector("#K").addEventListener("click",click6);
document.querySelector("#sixth").addEventListener("click",replay6);
document.querySelector("#L").addEventListener("click",click7);
document.querySelector("#seventh").addEventListener("click",replay7);