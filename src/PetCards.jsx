import React, { useState, useEffect } from 'react';
import './PetCards.css';
import TinderCard from 'react-tinder-card';
import { getPets } from './petFinder';
import { terminal } from 'virtual:terminal';

function PetCards() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPets() {
      const userId = 'google-oauth2|111903263393647349855';
      const pets = await getPets(userId);
      setPeople(pets);
      setLoading(false);
    }

    fetchPets();
  }, []);

  const swiped = (direction, nameToDelete) => {
    //setLastDirrection(direction);
    console.log('removing: ' + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + ' left the screen');
  };

  return (
    <div className='petCards'>
      <div className="petCards_cardContainer">
        {loading ? (
          <div>Loading...</div>
        ) : (
          people.map((person) => (
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={['up', 'down']}
              onSwipe={(dir) => swiped(dir, person.name)}
              swipeRequirementType="position"
              swipeThreshold="200"
              onCardLeftScreen={() => outOfFrame(person.name)}
            >
              <div
                style={{ backgroundImage: `url(${person.url})` }}
                className='card'
              >
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
          ))
        )}
      </div>
    </div>
  );
}

export default PetCards;
