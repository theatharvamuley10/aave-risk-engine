import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

async function exampleAsyncTask(): Promise<string> {
  // simulate async I/O
  await new Promise((res) => setTimeout(res, 200));
  return "async result";
}

app.get("/", async (req, res) => {
  const result = await exampleAsyncTask();
  res.json({ ok: true, result });
});

const PORT = process.env.PORT ?? 3000;
app.listen(Number(PORT), () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
