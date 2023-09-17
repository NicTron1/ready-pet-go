import axios from 'axios'
import { terminal } from 'virtual:terminal'

// export async function getAuth() {
//     let finalData
//     await axios.get('http://localhost:3000/auth').then(function (resp) {
//         finalData = resp.data
//     })
//     return finalData
// }
//Function will intake auth and pet params and return a pet
export async function getPets(userID) {
    const response = await fetch(`http://localhost:3000/search?id=${userID}`);
    const data = await response;
  
    const searchResultsResponse = await fetch("/searchResults.json");
    const searchResults = await searchResultsResponse.json();
  
    const finalData = [];
  
    for (let i = 0; i < searchResults.animals.length; i++) {
        const animal = searchResults.animals[i];

        if (animal.photos && animal.photos.length) {
          finalData.push({
            name: animal.name,
            url: animal.photos[0].full,
          });
    }
    }
  
    return finalData;
}


