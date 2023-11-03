import express, { Request, Response, json, NextFunction } from 'express'


const app = express();

app.use(json())


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.json({
      message: err.message,
    });
  });

app.listen(4500, ()=>{
    console.log('Server running on port 4500');
})