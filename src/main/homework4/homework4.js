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
  return `${heroName}! ${heroName}! ${heroName}!`

}

module.exports.kolobok = kolobok;
module.exports.newYear = newYear;