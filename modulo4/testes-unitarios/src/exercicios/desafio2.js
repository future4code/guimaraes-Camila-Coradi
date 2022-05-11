export function minhaFrase (frase){
    return frase.map((frases)=>{
      return frases[0].toUpperCase() + frases.substring(1).join("");
      
    })
    
    }

    