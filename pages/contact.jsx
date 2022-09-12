import React from 'react';
import Hero from '../components/Hero';
import Contact from '../components/Contact';

const contact = () => {
    return ( 
        <div>
            <Hero heading='Contacts' message='Submit the form below for more work and qotes.'/>
            <Contact />
        </div>
     );
}
 
export default contact;