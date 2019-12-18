function function1(){
    var x=document.getElementById("test1").value;
    if(x=="before"){
        document.getElementById("p1").style.visibility="hidden";
        document.getElementById("test1").value="after"; // x="after";
    }
    else if(x=="after"){
        document.getElementById("p1").style.visibility="visible";
        document.getElementById("test1").value="before";
        }
}

function mymove(){
    var elem=document.getElementById("animate");
    var pos=0;
    var id=setInterval(frame,5);
    var direct=1;
    function frame(){
        if(direct==1){
            if(pos == 450){
                direct=-1;
            }
            else{
                pos++;
                //console.log(pos);
                elem.style.left= pos + "px";
                elem.style.top= pos + "px";
            }
        }
        else if(direct== -1){
            if(pos==0){
                direct=1;
            }
            else{
                pos--;
                elem.style.left= pos + "px";
                elem.style.top= pos + "px";
            }
        }
        
    }
}

function changeColor(){
    var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
    console.log(r);
    console.log(g);
    console.log(b);
    document.getElementById("animate").style.backgroundColor="rgba(r,g,b,1)";
}
