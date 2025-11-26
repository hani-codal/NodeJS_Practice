const http = require("http");
const express = require("express");
const adminRoute = require('./routers/route');
const shopRoute = require('./routers/shop');
const path = require('path');

const app = express();

app.use('/admin',adminRoute);
app.use(shopRoute);
app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

const server = http.createServer(app);

server.listen(3000);
