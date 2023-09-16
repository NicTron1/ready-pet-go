import React, {useState} from 'react'
import "./PetCards.css"
import TinderCard from "react-tinder-card"
import { getUserData } from "./auth"
import { getAuth, getPets } from './petFinder'
import { terminal } from 'virtual:terminal'


async function PetCards() {
    let userId = 'google-oauth2|111903263393647349855'
    let userData = await getUserData(userId)
    let petFinderAuth  =  await getAuth()
    let petList = await getPets(petFinderAuth, userData.user_metadata)
    //terminal.log(petList)
    const [people, setPeople] = useState([
        {
            name: "Charles",
            url: "https://hips.hearstapps.com/hmg-prod/images/little-cute-maltipoo-puppy-royalty-free-image-1652926025.jpg?crop=0.444xw:1.00xh;0.129xw,0&resize=980:*"
        },
        {
            name: "Fredrick",
            url: "https://hips.hearstapps.com/hmg-prod/images/chow-chow-portrait-royalty-free-image-1652926953.jpg?crop=0.44455xw:1xh;center,top&resize=980:*"
        },
        {
            name: "Bueford",
            url: "https://hips.hearstapps.com/hmg-prod/images/shih-tzu-little-dog-royalty-free-image-1652927214.jpg?crop=0.447xw:1.00xh;0.248xw,0&resize=980:*"
        },
        {
            name: "Nathan B. Hall",
            url: "https://hips.hearstapps.com/hmg-prod/images/happy-dog-outdoors-royalty-free-image-1652927740.jpg?crop=0.447xw:1.00xh;0.187xw,0&resize=980:*"
        }
    ]);

    const swiped = (direction, nameToDelete) => {
        //setLastDirrection(direction);
        console.log("removing: " + nameToDelete);
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen");
    }


  return (
    <div className='petCards'>
        <div className="petCards_cardContainer">
            {people.map(person => (
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={["up", "down"]}
                onSwipe={(dir) => swiped(dir, person.name)}
                swipeRequirementType="position"
                swipeThreshold="200"
                onCardLeftScreen={() => outOfFrame(person.name)}>
                    <div style={{ backgroundImage: `url(${person.url})`}} className='card'>
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
    </div>
  )
}

export default PetCards