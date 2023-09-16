const fetch = require('node-fetch');
const qs = require('qs');

//Function has predefined auth and no params, returns bearer
async function getAuth() {
    let finalData
    let key = 'XkuOloGSdjIsBR7dR0D8nK8IXtCUrniiiZxHHlcANkynZRYzq8'
    let secret = 'ilkTpZvCTBhbu6yVCqszRPhqrwhzN5iUZkv1r1W0'
    await fetch('https://api.petfinder.com/v2/oauth2/token', {
        method: 'POST',
        body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(function(resp) {
        return resp.json();
    }).then(function(data) {
        // Store token data
        let expires = new Date().getTime() + (data.expires_in * 1000);
        finalData = data
    })
    .catch(function(err) {
        console.log(err)
    })
    return finalData
}

//Function will intake auth and pet params and return a list of pet objects
async function getPets(auth, params) {
    let expires = new Date().getTime() + (auth.expires_in * 1000);
    let finalData
    await fetch('https://api.petfinder.com/v2/animals?'+qs.stringify(params), {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer '+ auth.access_token, 
            'Content-Type': 'application/x-www-form-urlencoded'
        }, 
    }).then(function(resp) {
        return resp.json()
    }).then(function(data) {
        finalData = data
    })
    .catch(function(err) {
        console.log(err)
    })

    return finalData
}

module.exports.getPets = getPets
module.exports.getAuth = getAuth
