const express = require ('express')
const path = require ('path')
const app = express()

// middleware (staic folder)
const checkpointExpree = (req,res,next) => {
    let date = new Date()
    let hours = date.getHours()
    let day = date.getDay()
    if(day === 0 || day === 6){
        res.send('we are not working')
    }
    if(hours === 9 || hours === 17){
        res.send('we are working')
    }
    next()
}

app.get('/',checkpointExpree,(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
})



app.use(express.static(path.join(__dirname,'public')))
app.listen(5000, (err) => {
    if(err){
        throw err
    }else{
        console.log('SERVER IS RUNNING...')
    }


})