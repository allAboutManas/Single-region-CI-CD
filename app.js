import express from "express";


const app = express();

app.use(express.json());

app.get("/", (req,res)=>{
    res.json("Backend is running Successully")
})

app.get("/health", (req,res)=>{

    res.status(200).json({
   status: 'healthy',
    uptime: process.uptime()
    })
})


app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Tony' },
    { id: 2, name: 'Steve' }
  ]);
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(8002, () => {
    console.log(`Server running on port 8002`);
  });
}

export default app;


