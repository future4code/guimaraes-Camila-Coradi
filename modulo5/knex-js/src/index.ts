import connection from "./connection";
import app from "./app";
import { Request, Response } from "express";

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});

// Exercício 1

const searchActor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `);
  return result;
};

const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
  const count = result[0][0].count;
  return count;
};

// countActors("male")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

const updateActor = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};

// const deleteActor = async (id: string): Promise<void> => {
//     await connection("Actor")
//       .delete()
//       .where("id", id);
//   }; 

// const avgSalary = async (gender: string): Promise<any> => {
//     const result = await connection("Actor")
//       .avg("salary as average")
//       .where({ gender });
  
//     return result[0].average;
//   };

//   app.get("/actor/:id", async (req: Request, res: Response) => {
//     try {
//       const id = req.params.id;
//       const actor = await getActorById(id);
  
//       res.status(200).send(actor)
//     } catch (err) {
//       res.status(400).send({
//         message: err.message,
//       });
//     }
//   });

//   app.get("/actor", async (req: Request, res: Response) => {
//     try {
//       const count = await countActors(req.query.gender as string);
//       res.status(200).send({
//         quantity: count,
//       });
//     } catch (err) {
//       res.status(400).send({
//         message: err.message,
//       });
//     }
//   });

//   app.post("/actor", async (req: Request, res: Response) => {
//     try {
//       await createActor(
//         req.body.id,
//         req.body.name,
//         req.body.salary,
//         new Date(req.body.dateOfBirth),
//         req.body.salary
//       );
  
//       res.status(200).send();
//     } catch (err) {
//       res.status(400).send({
//         message: err.message,
//       });
//     }
//   });
  
//   app.put("/actor", async (req: Request, res: Response) => {
//     try {
//       await updateSalary(req.body.id, req.body.salary);
//       res.status(200).send({
//         message: "Success",
//       });
//     } catch (err) {
//       res.status(400).send({
//         message: err.message,
//       });
//     }
//   });

//   app.delete("/actor/:id", async (req: Request, res: Response) => {
//     try {
//       await deleteActor(req.params.id);
//     } catch (err) {
//       res.status(400).send({
//         message: err.message,
//       });
//     }
//   });
  
