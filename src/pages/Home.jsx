import React from 'react';
import CollectionItem from '../components/CollectionItem';

function Home() {
  return (
    <div className='home'>
      <div id='create-plan'>
        <h2>Great coffee made simple.</h2>
        <p>
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <button>Create your plan</button>
      </div>
      <div id='collection'>
        <h1>our collection</h1>
        <CollectionItem
          title='Gran Espresso'
          text='Light and flavorful blend with cocoa and black pepper for an intense experience'
        />
      </div>
    </div>
  );
}

export default Home;
