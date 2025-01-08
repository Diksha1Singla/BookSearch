const express = require("express")
const app = express()
const cors = require("cors")
const port = process.env.port || 5000
const router = require("./router/auth_router")
// const errormiddleware = require("./errorMiddleWare/errorMiddleWare.js")

require("./utils/db.js")
const corsOptions = {
    origin:"http://localhost:3000",
    methods:"GET,POST,DELETE,PUT,PATCH,HEAD"
}

app.use(cors(corsOptions))
app.use(express.json());
// app.use(errormiddleware)
app.use(router)

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})