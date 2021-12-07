    window.alert(`Boas vindas ao jogo de Blackjack!`)
    if(confirm("Quer iniciar uma nova rodada?"))
    {
       true
       console.log(`Vamos jogar! =)`)

        let carta1Usuario = comprarCarta()
        let carta2Usuario = comprarCarta()
            
        let totalUsuario = carta1Usuario.valor + carta2Usuario.valor
            console.log(`Usuário - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto}  - pontuação ${totalUsuario}`)

        let carta1Computador = comprarCarta()
        let carta2Computador = comprarCarta()

        let totalComputador = carta1Computador.valor + carta2Computador.valor
            console.log(`Computador - cartas: ${carta1Computador.texto} ${carta2Computador.texto}  - pontuação ${totalComputador}`)
        
    if (totalUsuario > totalComputador)
    {
         console.log("Parabéns você ganhou!");
    }
    else if (totalComputador > totalUsuario) 
    {
         console.log("Sinto muito! Você perdeu, tente novamente ;)");
    }
    else 
    {
         console.log("Empate!")
    }
    }
    else
    {
       false
       console.log(`O jogo acabou =/`)
    }

    
       
  
      
   
      
   

   