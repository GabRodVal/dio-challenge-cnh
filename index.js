var hero = "Fulano"
var heroName = document.getElementById('heroname');
heroName.innerHTML = hero;

var heroName2 = document.getElementById('heroname2')
heroName2.innerHTML = hero

function changeName(){
    do{
        var hero = window.prompt("Qual o nome do heroi?");
    }while(hero == "" || hero == null)
    heroName.innerHTML = hero;
    heroName2.innerHTML = hero;
}

var screenwidth = document.body.clientWidth

function spawnGoblin() {
    let newGoblin =  document.createElement('img')
    newGoblin.src = "img/goblin.png";
    newGoblin.style.position = "absolute";
    newGoblin.style.width = "20%";
    newGoblin.style.transform = "translateY(-50%)";
    newGoblin.style.left = screenwidth + "px";
    newGoblin.style.cursor = "pointer";
    newGoblin.addEventListener('click', (e) => {
        e.stopPropagation();
        smashGoblin(newGoblin);
    });
    newGoblin.isPuffed = false;
    newGoblin.doomCount = 0;
    document.getElementById("goblins").appendChild(newGoblin);

    return newGoblin
}

function smashGoblin(gob){
    gob.src = "img/goblin_death.png";

    if (gob.isPuffed == false){
        experience += 200;
        progressBar(level(experience));
        gob.isPuffed = true;
    }
    if (heroLevel.innerHTML != level(experience)){
        heroLevel.innerHTML = level(experience)
        levelDecor(level(experience))
    }
}

function goblinStride() {
    let goblinCamp = [];

    function summonGoblin(){
        if (goblinCamp.length <= 5 && document.hasFocus()){
            goblinCamp.push(spawnGoblin());
        }
    }

    summonGoblin();

    function killGoblin(gob){
        document.getElementById("goblins").removeChild(gob);
        goblinCamp.splice(goblinCamp.indexOf(gob),1);
    }

    function goblinAnimation() {
        if (goblinCamp.length > 0){
            for (f = 0; f<goblinCamp.length; f++){
                let gPosition = parseInt(goblinCamp[f].style.left.slice(0, -2));
                if(gPosition <= -goblinCamp[f].width || goblinCamp[f].doomCount>= 15){
                    killGoblin(goblinCamp[f])
                } else if(goblinCamp[f].isPuffed == true){
                    goblinCamp[f].doomCount +=1;
                } else {
                    if (document.hasFocus()){
                        goblinCamp[f].style.left = (gPosition - 7) + "px"
                    }
                }
            }
        }
    }

    setInterval(goblinAnimation, 10);
    setInterval(summonGoblin, 1500);
}

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

var experience = 0;
var heroLevel = document.getElementById('herolevel');
heroLevel.innerHTML = level(experience);
var pBar = document.getElementById('progress-bar');
var pBorder = document.getElementById('progress-border');
levelDecor(level(experience));

function progressBar(curLevel){
    let pMin, pMax;
    if (curLevel == "Ferro"){
        pMin = 0;
        pMax = 1000;
    }else if(curLevel == "Bronze"){
        pMin = 1000;
        pMax = 2000;
    }else if(curLevel == "Prata"){
        pMin = 2000;
        pMax = 5000;
    }else if(curLevel == "Ouro"){
        pMin = 5000;
        pMax = 7000;
    }else if(curLevel == "Platina"){
        pMin = 7000;
        pMax = 8000;
    }else if(curLevel == "Ascendente"){
        pMin = 8000;
        pMax = 9000;
    }else if(curLevel == "Imortal"){
        pMin = 9000;
        pMax = 10000;
    }

    if(experience<10000){
        pBar.style.width = (((experience - pMin)/(pMax - pMin)) * 100) + "%"
    }else{
        pBar.style.width = "100%";
    }
}

function levelDecor(curLevel){
    let c1, c2, c3;
    if (curLevel == "Ferro"){
        c1 = "rgb(51,51,51)"
        c2 = "rgb(0,0,0)"
        c3 = "rgb(204,204,204)"
    }else if(curLevel == "Bronze"){
        c1 = "rgb(153,51,0)"
        c2 = "rgb(51,0,0)"
        c3 = "rgb(255,153,102)"
    }else if(curLevel == "Prata"){
        c1 = "rgb(204,204,204)"
        c2 = "rgb(153,153,153)"
        c3 = "rgb(255,255,255)"
    }else if(curLevel == "Ouro"){
        c1 = "rgb(255,255,51)"
        c2 = "rgb(153,153,51)"
        c3 = "rgb(255,255,153)"
    }else if(curLevel == "Platina"){
        c1 = "rgb(255,255,255)"
        c2 = "rgb(153,255,255)"
        c3 = "rgb(204,255,255)"
    }else if(curLevel == "Ascendente"){
        c1 = "rgb(204,0,0)"
        c2 = "rgb(102,0,0)"
        c3 = "rgb(255,153,153)"
    }else if(curLevel == "Imortal"){
        c1 = "rgb(153,0,255)"
        c2 = "rgb(102,0,153)"
        c3 = "rgb(204,102,255)"
    }else{
        c1 = "rgb(51,51,255)"
        c2 = "rgb(0,0,102)"
        c3 = "rgb(204,204,255)"
    }

    heroLevel.style.color = c1;
    heroLevel.style['-webkit-text-stroke-color']= c2;
    pBar.style.background = "radial-gradient(circle,"+ c1 +"0%,"+c3+"100%)"
    pBorder.style.borderColor = c2;


     

}

goblinStride()