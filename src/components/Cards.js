import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import BlackMonologues1 from '../Images/BlackMonologues1.JPG';
import BlackMonologues2 from '../Images/BlackMonologues2.JPG';
import RoofTopStill from '../Images/RoofTopStill.png';
import Headshot from '../Images/Headshot.JPG';


function Cards() {
    return (
      <div className='cards'>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
             <CardItem
               src={BlackMonologues1}
               text='"Blank Monologues" at UVA'
               path='/services'
             />
             <CardItem
              src={BlackMonologues2}

               text='"Blank Monologues" at UVA'
               path='/services'
             />
           </ul>
           <ul className='cards__items'>
             <CardItem
               src={RoofTopStill}
               text='Still image from unreleased short film,fdafjhdsfjhdakfjhds'
               path='/services'
             />
             <CardItem
               src={Headshot}
               text='Experience Football on Top of the Himilayan Mountains'
               label='Adventure'
               path='/products'
             />
           </ul>
              </div>
            </div>
        </div>
    )
}

export default Cards
