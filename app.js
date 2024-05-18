

const express = require('express')
const cors = require('cors')

// Create an Express app
const app = express()
const PORT = 3000 

app.use(cors())
app.get('/characters', async (req, res) => {

    try {

        const apiRes = await fetch('https://rickandmortyapi.com/api/character?fields=name,image,status')

        if(!apiRes.ok){
            throw new Error(`HTTP Error Status: ${apiRes.status}`)
        }
        const data = await apiRes.json()

        res.json(data)
    } catch (error) {
        console.error('Fetch error:', error);
        res.status(500).send('internal server error')         
    }
    
})

app.listen(PORT, ()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})