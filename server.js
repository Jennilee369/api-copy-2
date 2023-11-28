// const { response } = require('express')
// const { response } = require('express')
// import express from 'express'
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8002

app.use(cors())

const rappers = {
    '21 savage':{
    'age': 29,
    'birthName': 'sheyaa Bin',
    'birthLocation': 'London, England'
    },
    'Chance the Rapper':{
    'age': 29,
    'birthName': 'Chicago, Illinois',
    'birthLocation': 'London, England'
    },
     'dylan':{
    'age': 29,
    'birthName': 'dylan',
    'birthLocation': 'dylan'
    }
        
}
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request,response)=>{
   const rapperNames = request.params.name.toLowerCase()
    if(rappers[rapperNames]){
        response.json(rappers[rapperNames])
    }else{
        response.json(rappers['Dylan'])
    }
    
})
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}
    ! you better catch it`)
})