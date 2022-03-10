import React from 'react';
import { Headquarters } from '../components/Headquarters';

export const AboutUs = () => {
  return (
    <div>
      <div id='landing-about'>
        <h4>About Us</h4>
        <p>
          Coffeeroasters began its journey of exotic discovery in 1999,
          highlighting stories of coffee from around the world. We have since
          been dedicated to bring the perfect cup - from bean to brew - in every
          shipment.
        </p>
      </div>
      <div id='commitment-about'>
        <div></div>
        <h3>Our commitment</h3>
        <p>
          We’re built on a simple mission and a commitment to doing good along
          the way. We want to make it easy for you to discover and brew the
          world’s best coffee at home. It all starts at the source. To locate
          the specific lots we want to purchase, we travel nearly 60 days a year
          trying to understand the challenges and opportunities in each of these
          places. We collaborate with exceptional coffee growers and empower a
          global community of farmers through with well above fair-trade
          benchmarks. We also offer training, support farm community
          initiatives, and invest in coffee plant science. Curating only the
          finest blends, we roast each lot to highlight tasting profiles
          distinctive to their native growing region.
        </p>
      </div>
      <div id='uncompromising'>
        <img src='./assets/about/mobile/image-quality.jpg' alt='' />
        <h3>Uncompromising Quality</h3>
        <p>
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number. Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable.
        </p>
      </div>
      <div id='headquarters-about'>
        <h4>Our headquarters</h4>
        <Headquarters
          src='./assets/about/desktop/illustration-uk.svg'
          country='United Kingdom'
          address='68 Asfordby Rd'
          city='Alcaston'
          area='SY6 1YA'
          number='+44 1241 918425'
        />
        <Headquarters
          src='./assets/about/desktop/illustration-canada.svg'
          country='Canada'
          address='1528 Eglinton Avenue'
          city='Toronto'
          area='Ontario M4P 1A6'
          number='+1 416 485 2997'
        />
        <Headquarters
          src='./assets/about/desktop/illustration-australia.svg'
          country='Australia'
          address='36 Swanston Street'
          city='Kewell'
          area='Victoria'
          number='+614 9928 3629'
        />
      </div>
    </div>
  );
};
