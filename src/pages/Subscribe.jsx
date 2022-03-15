import { useState } from 'react';
import { SubscriptionItem } from '../components/SubscriptionItem';
import coffeeDetails from '../components/coffeeDetails.json';

export const Subscribe = () => {
  const [pickedOption, setPickedOption] = useState({
    option1: 'Filter',
    option2: 'Decaf',
    option3: '250g',
    option4: 'Cafetiére',
    option5: 'Every week',
  });

  const [checkout, setCheckout] = useState(false);

  const toggleCheckout = () => {
    setCheckout(!checkout);
  };

  return (
    <div className={checkout ? 'constant' : ''}>
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
          option='option1'
          question='How do you drink your coffee?'
          coffeeDetails={coffeeDetails.how}
          pickedOption={pickedOption}
          setPickedOption={setPickedOption}
        />
        <SubscriptionItem
          option='option2'
          question='What type of coffee?'
          coffeeDetails={coffeeDetails.type}
          pickedOption={pickedOption}
          setPickedOption={setPickedOption}
        />
        <SubscriptionItem
          option='option3'
          question='How much would you like?'
          coffeeDetails={coffeeDetails.quantity}
          pickedOption={pickedOption}
          setPickedOption={setPickedOption}
        />
        <SubscriptionItem
          option='option4'
          question='Want us to grind them?'
          coffeeDetails={coffeeDetails.grind}
          pickedOption={pickedOption}
          setPickedOption={setPickedOption}
        />
        <SubscriptionItem
          option='option5'
          question='How often should we deliver?'
          coffeeDetails={coffeeDetails.deliver}
          pickedOption={pickedOption}
          setPickedOption={setPickedOption}
        />
      </div>
      <div id='order-summary'>
        <h4>ORDER SUMMARY</h4>
        <h3>
          "I drink my coffee as <span>{pickedOption.option1}</span>, with a{' '}
          <span>{pickedOption.option2}</span> type of bean.{' '}
          <span>{pickedOption.option3}</span> ground ala{' '}
          <span>{pickedOption.option4}</span>, sent to me{' '}
          <span>{pickedOption.option5}</span>."
        </h3>
      </div>
      <div id='order-button'>
        <button onClick={toggleCheckout}>Create my plan!</button>
      </div>
      <div className={checkout ? 'checkout' : 'checkout-none'}>
        <div>
          <h2>Order Summary</h2>
          <h3>
            "I drink my coffee as <span>{pickedOption.option1}</span>, with a{' '}
            <span>{pickedOption.option2}</span> type of bean.{' '}
            <span>{pickedOption.option3}</span> ground ala{' '}
            <span>{pickedOption.option4}</span>, sent to me{' '}
            <span>{pickedOption.option5}</span>."
          </h3>
          <p>
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.{' '}
          </p>
          <button onClick={toggleCheckout}>Checkout - $14.00/mo</button>
        </div>
      </div>
    </div>
  );
};
