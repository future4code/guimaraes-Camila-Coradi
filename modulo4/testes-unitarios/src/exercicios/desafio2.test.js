import { minhaFrase } from "./desafio2";


describe ("Retorna todas as palavras que a compõe com sua primeira letra maiúscula" , () =>{
    test("ola", () =>{
        const resolt = minhaFrase ("ola")
        expect(resolt).toEqual("Ola")
    })

    test("ola", () =>{
        const resolt = minhaFrase ("ola, mundo")
        expect(resolt).toEqual("Ola, Mundo")
    })

 

})