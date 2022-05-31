import  express  from "express";
import cors from "cors";
import { Request, Response } from "express";

const app =express()
app.use(express.json())
app.use(cors())

app.get("/", (req: Request, res: Response) => {          
    res.send("Hello from Express")
})

type usuario={
    id:number|string,
    name:string,
    phone: number,
    email:string,
    website:string
}

const usuarios:usuario[]=[
    {
        id:10,
        name:'Catarina',
        phone:11998495587,
        email: 'catarina@email.com',
        website:'www.catarina10.com.br'
    },

    {
        id:20,
        name:'Claudia',
        phone:11995251478,
        email:'claudia@email.com',
        website:'www.pudim.com.br'

    }
]
app.get("/usuarios", (req: Request, res: Response) => {          
   try{       
       res.status(200).send(usuarios)

   }
   catch(error){
       if(!usuarios.length){
        res.status(400).end('usuário não encontrado')
       }
   }
})

app.listen(3003,()=>{
    console.log('servidor de pé')
})


