import React from "react";
import Pic from './pic.jpg';
import {TypeAnimation} from "react-type-animation";
import {FaLinkedin} from "react-icons/fa";

const Main = () => {
    return (
        <div id="main">
            <img className="w-full h-screen object-cover object-left" src={Pic} alt="backgroundimg" ></img>
            <div className="w-full h-screen absolute top-0 left-0 ">
                <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start item-center">
                <h1 className="sm:text-5xl text-4xl font-bold text-green-800">Lily Liu</h1>
                <h2 className="flex sm:text-3xl text 2xl pt-4 text-pink-500">
                <TypeAnimation
                    sequence={[
                        'Developer',
                        2000, 
                        'Coder',
                        2000,
                        'Tech and Fitness Enthusiast',
                        2000,
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '1em', padding: '5px' }}
                    />
                </h2>
                <div className="flex justify-between pl-16 pt-6 max-w-[200px] w-full">
                    <a href="https://www.linkedin.com/in/lily-liu-323568b2/"><FaLinkedin className="cursor-pointer" size={20} /></a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Main;