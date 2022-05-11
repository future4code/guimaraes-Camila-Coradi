import { functionCrescente } from "./desafio1";

describe ("Ordena array de números em ordem crescente" , () =>{
    test("caso1", () =>{
        const data = functionCrescente ([20, -1, -4, 0, 6])
        expect(data).toEqual([-4, -1, 0, 6, 20])
    })

    test("caso2 array de 4 elementos", () =>{
        const data = functionCrescente ([4, 7, 1, 3])
        expect(data).toEqual([1, 3, 4, 7])
    })


})
