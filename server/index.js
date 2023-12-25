import express from 'express'
import mongoo from 'mongoose'
import bookRoutes from './routes/book.routes.js'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()
const port = process.env.PORT

const app = express();

app.use(express.json());
app.use(cors());

// connect to Mongoo
mongoo.connect(process.env.MONGOO_URL)
.then(()=>{
    console.log("DB connected")

    app.listen(port, ()=>console.log(`Listening to http://localhost:${port}`))
})
.catch(err => console.log(err))

app.use('/api/book', bookRoutes)

// Error handler middlewares
app.use((err, req, res, next)=>{
    const status = err.status || 500;
    const message = err.message || "Internal Server error";
    return res.status(status).json({
        success: false,
        status,
        message
    })
})

