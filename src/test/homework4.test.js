const homework = require('../main/homework4/homework4');


describe("kolobok test suite", () => {
    test("case Дедушка", () => {
        expect(homework.kolobok("дедушка")).toBe("Я от дедушки ушел");
    });
    test("case Бабушка", () => {
        expect(homework.kolobok("бабушка")).toBe("Я от бабушки ушел");
    });
    test("case Волк", () => {
        expect(homework.kolobok("волк")).toBe("Я от волка ушел");
    });
    test("case Лиса", () => {
        expect(homework.kolobok("лиса")).toBe("уупс не вышло");
    });
    test("case дед мороз", () => {
        expect(() => homework.kolobok("дед мороз").toThrow());
    });
    test("case 123", () => {
        expect(()=>homework.kolobok(123)).toThrow("Неизвестный персонаж 123");
    });

});

describe("newYear test suite", () => {
    test("case Снегурочка", () => {
        expect(homework.newYear("Снегурочка")).toBe("Снегурочка! Снегурочка! Снегурочка!");
    });
    test("case Дед Мороз", () => {
        expect(homework.newYear("Дед Мороз")).toBe("Дед Мороз! Дед Мороз! Дед Мороз!");
    });
    test("case Baba Yaga", () => {
        expect(homework.newYear("Baba Yaga")).toBe("Неизвестный персонаж: Baba Yaga");
    });
    test("case 123", () => {
        expect(homework.newYear(123)).not.toBe(String);
    });
});