
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import Testimonial from './components/Testimonial.jsx'
import './App.css';

function App() {
  return (
    < div tw=" flex flex-col pb-5 gap-8 sm:flex-row m-auto place-content-center" >
    <Testimonial />
    <Testimonial />
    <Testimonial />
    </div>
  );
}

export default App;
