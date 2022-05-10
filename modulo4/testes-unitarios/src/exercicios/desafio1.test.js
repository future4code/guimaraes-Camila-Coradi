import { functionCrescente } from "./desafio1";

describe ("Ordena array de números em ordem crescente" , () =>{
    test("Retorna números em ordem crescente", () =>{
        const data = functionCrescente (-4, -1, 0, 6, 20)
        expect(data).toEqual([-4, -1, 0, 6, 20])
    })

})