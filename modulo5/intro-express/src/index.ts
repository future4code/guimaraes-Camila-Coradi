import express from "express";
import cors from "cors";
import { Request, Response } from "express";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express");
});

type usuario = {
  id: number | string;
  name: string;
  phone: number;
  email: string;
  website: string;
};

const usuarios: usuario[] = [
  {
    id: 10,
    name: "Catarina",
    phone: 11998495587,
    email: "catarina@email.com",
    website: "www.catarina10.com.br",
  },

  {
    id: 20,
    name: "Claudia",
    phone: 11995251478,
    email: "claudia@email.com",
    website: "www.pudim.com.br",
  },
];

app.get("/usuarios", (req: Request, res: Response) => {
  try {
    const getUsers = usuarios.map((u) => {
      return u;
    });
    res.status(200).send(getUsers);
  } catch (error) {
    res.status(400).end("usuário não encontrado");
  }
});

type post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

const posts: post[] = [
  {
    userId: 1,
    id: 1,
    title: "id labore ex et quam laborum",
    body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
  },
  {
    userId: 1,
    id: 2,
    title: "quo vero reiciendis velit similique earum",
    body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
  },
  {
    userId: 1,
    id: 3,
    title: "odio adipisci rerum aut animi",
    body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione",
  },
  {
    userId: 1,
    id: 4,
    title: "alias odio sit",
    body: "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati",
  },
  {
    userId: 1,
    id: 5,
    title: "vero eaque aliquid doloribus et culpa",
    body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et",
  },
];

app.get("/posts", (req: Request, res: Response) => {
    try {
      const getPosts = posts.map((p) => {
        return p;
      });
      res.status(200).send(getPosts);
    } catch (error) {
      res.status(400).end("post não encontrado");
    }
  });

app.get("/posts/:id", (req:Request, res: Response)=>{
    try{
        const id =Number(req.params.id)
        const postFilter=posts.filter((p)=>{
            if(id === p.id)
            return p
        })
        res.status(200).send(postFilter);


    }catch(error){
        res.status(400).end("post não encontrado");
    }

})  

app.listen(3003, () => {
  console.log("servidor de pé");
});
