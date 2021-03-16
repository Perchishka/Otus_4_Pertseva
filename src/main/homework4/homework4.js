function kolobok(name) {
    let characterName;
    switch (name) {
        case "бабушка":
            characterName = "бабушки";
            break;
        case "дедушка":
            characterName = "дедушки";
            break;
        case "волк":
            characterName = "волка";
            break;
        case "лиса":
            return "уупс не вышло";
        default:
            throw new Error(`Неизвестный персонаж ${name}`);
    }
    return `Я от ${characterName} ушел`;
}

function newYear(heroName) {
    switch(heroName){
        case"Снегурочка":
        case "Дед Мороз":
            return `${heroName}! ${heroName}! ${heroName}!`
        default:
            return "Неизвестный персонаж: "+heroName;

    }


}

module.exports.kolobok = kolobok;
module.exports.newYear = newYear;