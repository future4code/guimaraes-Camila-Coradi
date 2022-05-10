import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {

    test("retorna itens duplicados", () => {
    const array = checaItensDuplicados(5, 5, 3, 6, 5, 6);
    expect(array).toEqual([5, 5, 3, 6, 5, 6]);
    expect(array).toContain(5)
    expect(array).toContain(3)
    expect(array).toContain(6)
    expect(array).toContain(7)
    });    
    
    const arrayTest1 = checaItensDuplicados("a", "a", "b", "c");
    expect(arrayTest1).toEqual(["a", "a", "b", "c"]);
    expect(arrayTest1).toContain("a")
    expect(arrayTest1).toContain("b")
    expect(arrayTest1).toContain("c")
    expect(arrayTest1).toContain("d")

    const arrayTest2 = checaItensDuplicados(1, 2 ,1);
    expect(arrayTest2).toEqual([1, 2 ,1]);
    expect(arrayTest2).toContain(1)
    expect(arrayTest2).toContain(2)
    expect(arrayTest2).toContain(3)

    });    


