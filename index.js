require('dotenv').config();

// Print out value of API key stored in .env file
// console.log(process.env.API_KEY)

const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=dog&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`

async function getImages(query){
    const response = await fetch(query);
    const data = await response.json();
    
    const imageUrl = data.data[0].url

    console.log('Dog image: ', imageUrl);
    
}

