import React, { useState } from 'react';
import { CoffeeDetailItem } from './CoffeeDetailItem';

export const SubscriptionItem = ({
  question,
  coffeeDetails,
  pickedOption,
  setPickedOption,
}) => {
  const [options, setOptions] = useState(true);

  const toggleOptions = () => {
    setOptions(!options);
  };

  //when an item is clicked, add to picked options
  const coffeeValue = (e) => {
    console.log(e);
    //If value is selected, delete old value, add new value
    setPickedOption({
      option1: e,
      option2: '',
      option3: '',
      option4: '',
      option5: '',
    });
  };

  return (
    <div>
      <div className='subscribe-question' onClick={toggleOptions}>
        <h3>{question}</h3>
        <img src='./assets/plan/desktop/icon-arrow.svg' alt='' />
      </div>
      <div className={options ? 'subscription' : 'subscription-disabled'}>
        <CoffeeDetailItem
          coffeeValue={coffeeValue}
          coffeeDetails={coffeeDetails.option1}
        />
        <CoffeeDetailItem
          coffeeValue={coffeeValue}
          coffeeDetails={coffeeDetails.option2}
        />
        <CoffeeDetailItem
          coffeeValue={coffeeValue}
          coffeeDetails={coffeeDetails.option3}
        />
      </div>
    </div>
  );
};
