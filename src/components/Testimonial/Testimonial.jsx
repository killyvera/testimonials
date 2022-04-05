/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import gitIcon from './svg/icon-github.svg';
import linkedinIcon from './svg/icon-linkedin.svg';
import twitterIcon from './svg/icon-twitter.svg';

function Testimonial(props){
    return (
        <div tw='shadow-lg w-[18rem] h-auto pt-7 pb-7 bg-[#ffd543] rounded-sm'>
            <div tw='' >
                <a tw='' >
                <img tw='mx-auto object-cover rounded-full h-32 w-32 shadow-lg ' src= {require(`./images/${props.image}`)} />
                </a>
                <div tw='flex gap-2 justify-center mt-4' >
                <img src= {gitIcon} />
                <img src= {linkedinIcon} />
                <img src= {twitterIcon} />
                </div>
            </div>
            <div tw='text-center' >
                <p tw='text-2xl text-gray-700 pt-1'>{props.name}</p>
                <p tw='text-xl text-gray-500 font-normal'>{props.position}</p>
                <p tw='text-lg text-gray-500 font-light pt-2 pl-4 pr-4 '>{props.testimonial}</p>
            </div>
        </div>
    )

}

export default Testimonial;