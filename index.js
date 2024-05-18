

document.getElementById('fetchBtn').addEventListener('click', async() => {

    try {
        const response = await fetch ('http://localhost:3000/characters')
        
        if(!response.ok){
            throw new Error (`HTTP error status: ${response.status}`)
        }
    
        const data = await response.json()

        const characters = data.results;

        console.log(`characters:${characters}`)
    
        const names = characters.map(character => character.name).join('\n')
        const images = characters.map(character => character.image).join('\n')
        const statuses = characters.map(character => character.status).join('\n')
    
        const arrNames = names.split('\n')
        const arrImages = images.split('\n')
        const arrStatuses = statuses.split('\n')
    
        const arrCharacters = []
    
        for(let i = 0; i < arrNames.length; i++) {

            arrCharacters.push(new CharacterClass(arrNames[i],arrImages[i],arrStatuses[i]))  
        }
    
        arrCharacters.forEach( url => {
            const cardContainer = document.createElement('div')
            cardContainer.classList.add('card')    
    
            const imgElement = document.createElement('img')
    
            imgElement.src = url.image
            imgElement.alt = 'SVG image'
            imgElement.width = 150
            imgElement.height = 150
    
    
            const titleName = document.createElement('h3')
            titleName.innerText = 'Name: ' + url.name
    
            const titleStatus = document.createElement('h4')
            titleStatus.innerText = 'Status: ' + url.status
    
            cardContainer.appendChild(imgElement)
            cardContainer.appendChild(titleName)
            cardContainer.appendChild(titleStatus)
    
            document.getElementById('svgContainer').appendChild(cardContainer)
    
        })
    } catch (error) {
        console.error('Fetch error:', error);     
    }
})
