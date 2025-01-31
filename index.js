import 'dotenv/config' 
import express from "express";

const app=express()
const port = process.env.PORT||3001
app.use(express.json())

let nameData=[]
let nextId =1
//add a new tea
app.post('/names',(req,res)=>{
    const {name,price} =req.body
    const newName = {id:nextId++,name,price}
    nameData.push(newName)
    res.status(201).send(newName)
})
//get all names
app.get('/names',(req,res)=>{
    res.status(200).send(nameData)
})
//get names with specific id 
app.get('/names/:id',(req,res)=>{
const name= nameData.find(n=>n.id===parseInt(req.params.id))
if(!name){
    return res.status(404).send('name not found')
}
res.status(200).send(tea)
})

//update names
app.put('/names/:id',(req,res)=>{
const names = res.nameData.find(t=>t.id===parseInt(res.params.id))
if(!name){
    res.status(404).send("name not found")
}
const {name,price}=req.body
names.name=name
names.price=price
req.send(200).send(names)
})

//delete names
app.delete('/names/:id',(req,res)=>{
    const index = nameData.findIndex(n=>n.id===parseInt(req.params.id))
    if(index===-1){
        return res.status(404).send("not found")
    }
    nameData.splice(index,1)
    return res.status(204).send('deleted ')

})
app.listen(port,()=>{
    console.log(`Server is running at port :${port}....`)
})

