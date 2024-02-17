import app from "./src/app.js";
import dotenv from 'dotenv'
dotenv.config()
import connectDb from "./src/database/db_connection.js";
connectDb()

const PORT = process.env.PORT ?? 8000


app.listen(PORT, () => {
    console.log(`Server listen on PORT:${PORT}`);
})