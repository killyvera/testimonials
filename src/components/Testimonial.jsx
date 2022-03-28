/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import gitIcon from '../svg/icon-github.svg';
import linkedinIcon from '../svg/icon-linkedin.svg';
import twitterIcon from '../svg/icon-twitter.svg';

function Testimonial(){
    return (
        <div tw=' shadow-md mt-5 w-[18rem] h-auto p-5 bg-[#ffd543] rounded-sm '>
            <div tw='' >
                <a tw='' >
                <img tw='mx-auto object-cover rounded-full h-32 w-32 shadow-lg ' src= {require('../images/01.JPG')} />
                </a>
                <div tw='flex gap-1 justify-center' >
                <img src= {gitIcon} />
                <img src= {linkedinIcon} />
                <img src= {twitterIcon} />
                </div>
            </div>
            <div tw='text-center' >
                <p tw='text-2xl text-gray-700 pt-1' > Jhon Doe </p>
                <p tw='text-xl text-gray-500 font-normal ' > Full Stack Developer </p>
                <p tw='text-lg text-gray-500 font-light pt-2 '> "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." </p>
            </div>

        </div>
    )

}

export default Testimonial;