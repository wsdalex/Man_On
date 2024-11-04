import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
