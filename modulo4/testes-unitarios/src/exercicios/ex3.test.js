import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {

    test("retorna itens duplicados array", () => {

    const array = checaItensDuplicados([5, 5, 3, 6, 5, 6]);
    expect(array).toEqual(true);

    });    
    test("retorna itens duplicados arrayTest1",() =>{
        const arrayTest1 = checaItensDuplicados(["a", "a", "b", "c"]);
        expect(arrayTest1).toEqual(true);
    });
    
    test("retorna itens duplicados arrayTest2",() =>{
        const arrayTest2 = checaItensDuplicados([1, 2 ,1]);
        expect(arrayTest2).toEqual(true);
    });

   
})