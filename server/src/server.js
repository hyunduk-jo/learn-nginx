import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

const port = 4000;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.listen(port, () => console.log(`✅Server running at http://localhost:${port}✅`))

app.get('/', (req, res) => {
  res.json({ msg: "✅Server running✅" })
})

app.get('/todos', (req, res) => {
  const todos = [
    {
      id: 1,
      text: "1st todo"
    },
    {
      id: 2,
      text: "Learn nginx"
    },
    {
      id: 3,
      text: "Learn AWS EC2"
    },
    {
      id: 4,
      text: "Learn Block Chain"
    }
  ]
  res.json({ todos })
})