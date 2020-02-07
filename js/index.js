var grille=[
 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
 [0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0],
 [0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
 [0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
 [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
 [0,2,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,2,0],
 [0,2,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0],
 [0,0,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,0,0],
 [0,2,2,0,2,0,2,2,2,2,2,2,2,0,2,0,2,2,0],
 [0,0,0,0,2,0,2,0,0,2,0,0,2,0,2,0,0,0,0],
 [2,2,2,2,2,2,2,0,2,2,2,0,2,2,2,2,2,2,2],
 [0,0,0,0,2,0,2,0,0,2,0,0,2,0,2,0,0,0,0],
 [0,2,2,0,2,0,2,2,2,2,2,2,2,0,2,0,2,2,0],
 [0,0,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,0,0],
 [0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0],
 [0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
 [0,2,2,0,2,2,2,2,2,2,2,2,2,2,2,0,2,2,0],
 [0,0,2,0,2,0,2,0,0,0,0,0,2,0,2,0,2,0,0],
 [0,2,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0],
 [0,2,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,2,0],
 [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];

var pacMan=
{
x:5,
y:2,
direction:0,
}
var viderGrille =document.getElementById("grille");
function initGrille()
{

    viderGrille.innerHTML="";
    /*dimention dynamique de la grille
    viderGrille.style.gridTemplateColumns='repeat('+grille[0].length+', 40px)'; 
    viderGrille.style.gridTemplateRows='repeat('+grille.length+', 40px)';*/
    viderGrille.style.gridTemplateColumns="repeat(19, 40px)"; 
    viderGrille.style.gridTemplateRows="repeat(22, 40px)";
   // console.log(grille);

    for(let i=0;i<grille.length;i++){
    //    console.log(i);
        for (let j=0;j<grille[i].length;j++){
    //        console.log(j);
          let monElem = document.createElement('div');  
          if (grille[i][j]== 0)
          {
          monElem.classList.add('mur');
          }
          else if (grille[i][j]==1)
          {
            monElem.classList.add('sol');    
          }
          else {
            monElem.classList.add('bonbon');  
          }
          monElem.style.gridColumn=(+j)+1
          monElem.style.gridRow=(+i)+1
          viderGrille.appendChild(monElem);

                     
        }   
    }

}  
//initGrille();

function deplacementPacMan()
{
 if (pacMan.direction ==0)
 {
     pacMan.y ++
 }
 else if (pacMan.direction ==1)
 {
    pacMan.y -- 
 }
 else if (pacMan.direction ==2)
 {
     pacMan.x --
 }
 else if (pacMan.direction ==3)
 {
     pacMan.x++
 }
 var PacManElem= document.createElement('div');
     PacManElem.classList.add('pacMan');
     PacManElem.style.gridColumn=pacMan.x
     PacManElem.style.gridRow=pacMan.y
     viderGrille.appendChild(PacManElem);
}   

function appuiTouche (event)
{
    console.log(event.key);
    switch(event.key)
    {
        case "e":
        case "E":
        pacMan.direction=1
        break;
        case "s":
        case "S":
        pacMan.direction=2
        break;
        case "f":
        case "F":
        pacMan.direction=3
        break;
        case "d":        
        case "D":
        pacMan.direction=0
        break;                  

    }

}

function boucleRefresh()
{
initGrille();
deplacementPacMan();
setTimeout(boucleRefresh,1000);

}
boucleRefresh();

document.onkeypress=appuiTouche;









    



