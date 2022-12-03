let matrice=[];
for( let i=0;i<9;i++){
    matrice[i]=0;
}
let c=0;
let a=3;
let contor=0;
let ggg;
let aya;
let parent;
let  children;
let d=0;
var element;



function adaugare(indicator){

  

    contor++;

    if(matrice[indicator]!=0){
    contor--;
    return;
    }

    
    if(contor%2==1){ //x incepe
        document.getElementById("player1").style.backgroundColor="";
        document.getElementById("player2").style.backgroundColor="#dc3848";
        matrice[indicator]=1;
        
        parent=document.getElementById(indicator);
        children=parent.children[0];
        children.src="x.png";
        
      
    }
    else{
        document.getElementById("player1").style.backgroundColor="#dc3848";
        document.getElementById("player2").style.backgroundColor="";
        matrice[indicator]=2; //y 
        parent=document.getElementById(indicator);
        children=parent.children[0];
        children.src="0.png";
        
    }
    
    console.log("contor:"+contor,"matrice["+indicator+"]:"+matrice[indicator]);


   
    if(matrice[0]==1 && matrice[3]==1 && matrice[6]==1 ){
        console.log("x player won");
        drawLine("l1");
    }
    else if(matrice[1]==1 && matrice[4]==1 && matrice[7]==1){
        console.log("x player won");
        drawLine("l2");
    }
    else if(matrice[2]==1 && matrice[5]==1 && matrice[8]==1){
        console.log("x player won");
        drawLine("l3");
    }
    else if(matrice[0]==1 && matrice[1]==1 && matrice[2]==1){
        console.log("x player won");
        c=0;
        a=1;
        drawLine("l4");
    }
    else if(matrice[3]==1 && matrice[4]==1 && matrice[5]==1){
        console.log("x player won");
        c=1;
        a=2;
        drawLine("l4");
    }
    else if(matrice[6]==1 && matrice[7]==1 && matrice[8]==1){
        console.log("x player won");
        c=2;
        a=3;
        drawLine("l4");
    }
    else if(matrice[0]==1 && matrice[4]==1 && matrice[8]==1){
        console.log("x player won");
        drawLine1("l5");
        drawLine1("l6");
        drawLine1("l7");
        textWin();
    }
    else if(matrice[2]==1 && matrice[4]==1 && matrice[6]==1){
        console.log("x player won");
        drawLine1("l55");
        drawLine1("l66");
        drawLine1("l77");
        textWin();
    }
    else 
    if(matrice[0]==2 && matrice[3]==2 && matrice[6]==2 ){
        console.log("0 player won");
        drawLine("l1");
    }
    else if(matrice[1]==2 && matrice[4]==2 && matrice[7]==2){
        console.log("0 player won");
        drawLine("l2");
    }
    else if(matrice[2]==2 && matrice[5]==2 && matrice[8]==2){
        console.log("0 player won");
        drawLine("l3");
    }
    else if(matrice[0]==2 && matrice[1]==2 && matrice[2]==2){
        console.log("0 player won");
        c=0;
        a=1;
        drawLine("l4");
    }
    else if(matrice[3]==2 && matrice[4]==2 && matrice[5]==2){
        console.log("0 player won");
        c=1;
        a=2;
        drawLine("l4");
    }
    else if(matrice[6]==2 && matrice[7]==2 && matrice[8]==2){
        console.log("0 player won");
        c=2;
        a=3;
        drawLine("l4");
    }
    else if(matrice[0]==2 && matrice[4]==2 && matrice[8]==2){
        console.log("0 player won");
        drawLine1("l5");
        drawLine1("l6");
        drawLine1("l7");
        textWin();
       
    }
    else if(matrice[2]==2 && matrice[4]==2 && matrice[6]==2){
        console.log("0 player won");
        drawLine1("l55");
        drawLine1("l66");
        drawLine1("l77");
        textWin();
    }
    else{
        if(contor==9){
            console.log("draw");
            document.getElementById("winner").style.fontSize="30px";
            document.getElementById("winner").innerHTML="DRAW";
            document.getElementById("butonRestart").style.animationDuration="1.3s";
        }
    }
  

}


function drawLine(id){
    
let element=document.getElementsByClassName(id);
for(c;c<a;c++){
element[c].style.display="block";
}
textWin();
}

function drawLine1(id1){
    
    let element=document.getElementsByClassName(id1);
    element[0].style.display="block";

    }


function textWin(){
    document.getElementById("winner").style.fontSize="30px";
    if(contor%2==1){
        document.getElementById("winner").append(" Player1(x)");
        }
        else{
            document.getElementById("winner").append(" Player2(0)");  
        }

        for(let g=0; g<9; g++){
        document.getElementById(g).style.pointerEvents = "none";
        }

        document.getElementById("butonRestart").style.animationDuration="1.3s";

    }


function restart(){
    document.getElementById("butonRestart").style.animationDuration="0s";
    contor=0;
    for(let g=0; g<9; g++){
        document.getElementById(g).style.pointerEvents = "auto";  
        matrice[g]=0;
        parent=document.getElementById(g);
        children=parent.children[0];
        children.src="";
    }

    document.getElementById("winner").style.fontSize="";
    document.getElementById("winner").innerHTML="The winner is:";
     
 
     document.getElementById("player1").style.backgroundColor="#dc3848";
     document.getElementById("player2").style.backgroundColor="";
     aya=document.querySelectorAll(".abc");
     for (let ig = 0; ig < aya.length; ig++) {
            aya[ig].style.display = "none";
          }

     c=0;
     a=3;
}