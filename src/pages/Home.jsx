import React from 'react';
import BenefitItem from '../components/BenefitItem';
import CollectionItem from '../components/CollectionItem';
import { PlanItem } from '../components/PlanItem';

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
          img='./assets/home/desktop/image-gran-espresso.png'
        />
        <CollectionItem
          title='Planalto'
          text='Brazilian dark roast with rich and velvety body, and hints of fruits and nuts'
          img='./assets/home/desktop/image-planalto.png'
        />
        <CollectionItem
          title='Piccollo'
          text='Mild and smooth blend featuring notes of toasted almond and dried cherry'
          img='./assets/home/desktop/image-piccollo.png'
        />
        <CollectionItem
          title='Danche'
          text='Ethiopian hand-harvested blend densely packed with vibrant fruit notes'
          img='./assets/home/desktop/image-danche.png'
        />
      </div>
      <div id='why-choose-us'>
        <div id='why-copy'>
          <h3>Why choose us?</h3>
          <p>
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </div>
        <div id='benefit'>
          <BenefitItem
            img='./assets/home/desktop/icon-coffee-bean.svg'
            title='Best quality'
            text='Discover an endless variety of the world’s best artisan coffee from each of our roasters.'
          />
          <BenefitItem
            img='./assets/home/desktop/icon-gift.svg'
            title='Exclusive benefits'
            text='Special offers and swag when you subscribe, including 30% off your first shipment.'
          />
          <BenefitItem
            img='./assets/home/desktop/icon-truck.svg'
            title='Free shipping'
            text='We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.'
          />
        </div>
      </div>
      <div id='how-it-works'>
        <h4>How it works</h4>
        <PlanItem
          number='01'
          title='Pick your coffee'
          text='Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.'
        />
        <PlanItem
          number='02'
          title='Choose the frequency'
          text='Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.'
        />
        <PlanItem
          number='03'
          title='Receive and enjoy!'
          text='We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning 
          world-class coffees curated to provide a distinct tasting experience.'
        />
        <button>Create your plan</button>
      </div>
    </div>
  );
}

export default Home;
