export const goToLogin = (navigate)=>{
    navigate("/login")
    
}

export const goToSingUp = (navigate)=> {
    navigate("/cadastro")
}

export const goAddRecipes = (navigate)=>{
    navigate(`/adicionar-receita`)
    
}

export const goToRecipesDetail = (navigate, id)=>{
    navigate(`/detalhes/${id}`)
    
}

export const goToRecipesList = (navigate)=>{
    navigate(`/`)
    
}

