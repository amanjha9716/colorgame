var color=randcolor(6);
var target = random();
var numsquare=6;
document.querySelector("#hed").textContent=target;
var eBtn=document.querySelector(".easyBtn");
var hBtn=document.querySelector(".hardBtn");
hBtn.classList.add("selected");
eBtn.addEventListener("click", function(){
    hBtn.classList.remove("selected");
    eBtn.classList.add("selected");
    document.querySelector(".win").textContent="";
    numsquare=3;
    color=randcolor(numsquare);
    target=random();
    document.querySelector("#hed").textContent=target;
    for(var i=0;i<sqr.length;i++)
    {
        if(color[i])
        {
            sqr[i].style.backgroundColor=color[i];
        }
        else
        {
            sqr[i].style.display="none";
        }
    }
});
hBtn.addEventListener("click", function(){
    eBtn.classList.remove("selected");
    hBtn.classList.add("selected");
    document.querySelector(".win").textContent="";
    numsquare=6;
    color=randcolor(numsquare);
    target=random();
    document.querySelector("#hed").textContent=target;
    for(var i=0;i<sqr.length;i++)
    {
        sqr[i].style.backgroundColor=color[i];
        sqr[i].style.display="block";
    } 
});
var sqr=document.querySelectorAll(".square");
for(var i=0;i<sqr.length;i++)
{
    sqr[i].style.backgroundColor=color[i];
} 

for(var i=0;i<sqr.length;i++)
{
   
    sqr[i].addEventListener("click",function(){
        var picked = this.style.backgroundColor;
        if(picked == target)
        {
            
            console.log(picked);
            finalchange(picked);
            document.querySelector(".win").textContent="you win";
            document.querySelector("button").textContent="play again ?";
        }
        else{
            this.style.backgroundColor="#232323";
            document.querySelector(".win").textContent="try again!";
        }
    });
}

var restart=document.querySelector("#restart");
restart.addEventListener("click", function()
{
    document.querySelector(".heading").style.backgroundColor="rgb(80, 155, 221)";
    var sqr=document.querySelectorAll(".square");
    color=randcolor(numsquare);
    restart.textContent="NEW COLOR";
    document.querySelector(".win").textContent="";
    var sqr=document.querySelectorAll(".square");
for(var i=0;i<sqr.length;i++)
{
    sqr[i].style.backgroundColor=color[i];
} 
    target=random();
    document.querySelector("#hed").textContent=target;
});
function finalchange(color)
{
    for(var i=0;i<sqr.length;i++)
    {
        sqr[i].style.backgroundColor=color;
    }
    document.querySelector(".heading").style.backgroundColor=color;
}
function random()
{
    var rand=Math.floor(Math.random()*color.length);
    return color[rand];
}
function randcolor(num)
{
    var a=[]

    for (let i = 0; i < num; i++) {
        a[i]= "rgb("+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+")";
    }
    return a;
}