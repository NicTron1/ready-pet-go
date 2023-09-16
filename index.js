const petFinder = require('./petFinder')
const auth = require('./auth')

async function main() {
    let userData = await auth.getUserData('google-oauth2|111903263393647349855')
    console.log(userData)
    let userAuth = await petFinder.getAuth()
    let animals = await petFinder.getPets(userAuth, userData.user_metadata)
    console.log(animals)
    
}

main()