import { useState } from 'react';
import { SubscriptionItem } from '../components/SubscriptionItem';
import coffeeDetails from '../components/coffeeDetails.json';

export const Subscribe = () => {
  const [pickedOption, setPickedOption] = useState({
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    option5: '',
  });

  return (
    <div>
      <div id='subscribe-landing'>
        <h2>Create a plan</h2>
        <p>
          Build a subscription plan that best fits your needs. We offer an
          assortment of the best artisan coffees from around the globe delivered
          fresh to your door.
        </p>
      </div>
      <div id='subscribe-flow'>
        <div className='subscribe-how-to-plan'>
          <h3>01</h3>
          <h2>Pick your coffee</h2>
          <p>
            Select from our evolving range of artisan coffees. Our beans are
            ethically sourced and we pay fair prices for them. There are new
            coffees in all profiles every month for you to try out.
          </p>
        </div>
        <div className='subscribe-how-to-plan'>
          <h3>02</h3>
          <h2>Choose the frequency</h2>
          <p>
            Customize your order frequency, quantity, even your roast style and
            grind type. Pause, skip or cancel your subscription with no
            commitment through our online portal.
          </p>
        </div>
        <div className='subscribe-how-to-plan'>
          <h3>03</h3>
          <h2>Receive and enjoy!</h2>
          <p>
            We ship your package within 48 hours, freshly roasted. Sit back and
            enjoy award-winning world-class coffees curated to provide a
            distinct tasting experience.
          </p>
        </div>
      </div>
      <div id='subscribe-pick'>
        <SubscriptionItem
          question='How do you drink your coffee?'
          coffeeDetails={coffeeDetails.how}
          pickedOption={pickedOption}
          setPickedOption={setPickedOption}
        />
        <SubscriptionItem
          question='What type of coffee?'
          coffeeDetails={coffeeDetails.type}
          pickedOption={pickedOption}
          setPickedOption={setPickedOption}
        />
      </div>
    </div>
  );
};
