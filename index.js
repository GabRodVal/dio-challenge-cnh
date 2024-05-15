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



var hero = window.prompt("Qual o nome do heroi?", "Fulano");
var experience = 0;
console.log("O herói "+hero+" possui "+ exp + " e está no nível "+level(experience)+"!");