import React from 'react'
import './CardTask.css';
import { CardWorkLoad } from './CardWorkLoad';
export const CardTask = () => {
  return (
    <div className='main'>
    <div className='commonTodayTask'>
         <div className='todayTask'>Today task</div>
         <div className='commonCardTask'>

                <div className='all'>
                    <div className='textLast'>All</div>
                    <div className='ten'>10</div>
                </div>
                
                <div className='important'>
                    <div className='textLast'>Important</div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="86" height="2" viewBox="0 0 86 2" fill="none">
        <path d="M0 1H86" stroke="#2B5CE6" strokeWidth="2"/>
                        </svg>
                    </div>
                </div>


                <div className='all'>
                    <div className='textLast'>Notes</div>
                    <div className='ten'>05</div>
                </div>
                <div className='all'>
                    <div className='textLast'>Links</div>
                    <div className='ten'>10</div>
                </div>

         </div>


         <div className='baseline'>
         <svg xmlns="http://www.w3.org/2000/svg" width="654" height="2" viewBox="0 0 654 2" fill="none">
  <path d="M0 1H654" stroke="black" strokeOpacity="0.1"/>
         </svg>
         </div>



         <div className='content'>
            <div className='group'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="9" fill="#E65F2B"/>
        <path d="M6 9L8 11L12 7" stroke="white" strokeLinecap="round"/>
                </svg>

                <div>Create a user flow of social application design</div>
            </div>

            <div className='Approved'>Approved</div>
         </div>

         <div className='content'>
            <div className='group'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="9" fill="#E65F2B"/>
        <path d="M6 9L8 11L12 7" stroke="white" strokeLinecap="round"/>
                </svg>
                <div>Create a user flow of social application design</div>
            </div>
            <div className='review'>In review</div>
         </div>

         <div className='content'>
            <div className='group'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="9" fill="#E65F2B"/>
        <path d="M6 9L8 11L12 7" stroke="white" strokeLinecap="round"/>
                </svg>
                <div>Landing page design for Fintech project of singapore</div>
            </div>
            <div className='review '>In review</div>
         </div>

         <div className='content'>
            <div className='group'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="9" stroke="#060606" strokeOpacity="0.64"/>
                    </svg>
                    <div>Interactive prototype for app screens of deltamine project</div>
            </div>
            <div className='onGoing'>On going</div>
         </div>
         

         <div className='content'>
            <div className='group'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="9" fill="#E65F2B"/>
        <path d="M6 9L8 11L12 7" stroke="white" strokeLinecap="round"/>
                </svg>

                <div>Interactive prototype for app screens of deltamine project</div>
            </div>
            <div className='Approved'>Approved</div>
         </div>
         

    </div>

    
    <div><CardWorkLoad></CardWorkLoad></div>
   </div>
  )
}
