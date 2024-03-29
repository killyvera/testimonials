
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import Testimonial from './components/Testimonial/Testimonial.jsx'
import React from 'react';

function App  () {

  return (
    < div tw="flex justify-center items-center sm:flex-row " >
    <Testimonial
    image="01.JPG"
    name ="Jhon doe"
    position= "Full Stack Developer"
    testimonial="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    />

    <Testimonial
        image="02.JPG"
        name ="Jhon doe"
        position= "Full Stack Developer"
        testimonial="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    />
    
    <Testimonial
        image="03.JPG"
        name ="Jhon doe"
        position= "Full Stack Developer"
        testimonial="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    />

    </div>
  );
}

export default App;
