require('dotenv').config();

// Print out value of API key stored in .env file
// console.log(process.env.API_KEY)


async function getImages(query){
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}`;
    const response = await fetch(endpoint);
    const data = await response.json(); 

    const randomIndex = Math.floor(Math.random() * data.data.length);
    
    return data.data[randomIndex].url

    // return data.data[0].url;  
}

getImages("cats").then((url) => {
    console.log(url)
});

getImages("dogs").then((url) => {
    console.log(url)
});