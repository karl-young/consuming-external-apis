import  express  from "express";
import router from "./welcome.ts";
// we would set this up if we needed to use a key 

// router.get("/", async (req, res) => {
//   try{
//     const affirmations = await getAffirmations()
//     res.json(affirmations)

//   }catch (err) {
//     if (err instanceof Error) {
//       res.status(500).send((err as Error).message)
//     } else {
//       res.status(500).send('Something went wrong')
//     }
//   }
// })


export default router