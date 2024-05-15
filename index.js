var hero = "Fulano"
var heroName = document.getElementById('heroname');
heroName.innerHTML = hero;

var heroName2 = document.getElementById('heroname2')
heroName2.innerHTML = hero

function changeName(){
    do{
        var hero = window.prompt("Qual o nome do heroi?");
        console.log(hero)
    }while(hero == "")
    heroName.innerHTML = hero;
}

//const goblinImg = new Image();
//goblinImg.style.position = "absolute";
//goblinImg.src = "img/goblin.png"
//goblinImg.style.width = "20%"
//goblinImg.style.transform = "translateY(-50%)";

var screenwidth = document.body.clientWidth
//goblinImg.style.left = screenwidth - 100 + "px";

function spawnGoblin() {
    let newGoblin =  document.createElement('img')
    newGoblin.src = "img/goblin.png";
    newGoblin.style.position = "absolute";
    newGoblin.style.width = "20%";
    newGoblin.style.transform = "translateY(-50%)";
    newGoblin.style.left = screenwidth + "px";
    document.getElementById("goblins").appendChild(newGoblin);

    return newGoblin
}

function goblinStride() {
    let goblinCamp = [];

    function summonGoblin(){
        if (goblinCamp.length <= 5 && document.hasFocus()){
            goblinCamp.push(spawnGoblin());
        }
    }

    summonGoblin();

    function goblinAnimation() {
        if (goblinCamp.length > 0){
            for (f = 0; f<goblinCamp.length; f++){
                let gPosition = parseInt(goblinCamp[f].style.left.slice(0, -2));
                if(gPosition <= -goblinCamp[f].width){
                    document.getElementById("goblins").removeChild(goblinCamp[f]);
                    goblinCamp.shift();
                } else {
                    if (document.hasFocus()){
                        goblinCamp[f].style.left = (gPosition - 5) + "px"
                    }
                }
            }
        }
        //let gPosition = parseInt(goblinImg.style.left.slice(0, -2))
        //if (gPosition <= -goblinImg.width){
        //    document.getElementById("goblins").removeChild(goblinImg);
        //    goblinCamp.shift();
        //} else {
        //    goblinImg.style.left = (gPosition - 5) + "px"
        //}
        //console.log(gPosition)
    }

    setInterval(goblinAnimation, 10);
    setInterval(summonGoblin, 2000);
}




var experience = 0;
var heroLevel = document.getElementById('herolevel');
heroLevel.innerHTML = level(experience)

function level(xp){
    if (xp <= 1000){
        return "Ferro"
    }else if(xp > 1000 && xp <=2000){
        return "Bronze"
    }else if(xp > 2000 && xp <=5000){
        return "Prata"
    }else if(xp > 5000 && xp <=7000){
        return "Ouro"
    }else if(xp > 7000 && xp <=8000){
        return "Platina"
    }else if(xp > 8000 && xp <=9000){
        return "Ascendente"
    }else if(xp > 9000 && xp <=10000){
        return "Imortal"
    }else if(xp > 10000){
        return "Radiante"
    }
}


goblinStride()

console.log("O herói "+hero+" possui "+ experience + " e está no nível "+level(experience)+"!");