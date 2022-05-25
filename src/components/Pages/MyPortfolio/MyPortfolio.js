import React from 'react';
import my_image from '../../../images/robin.jpg';
import Typewriter from "typewriter-effect";
import Portfolio from '../../Pages/Portfolio/Portfolio'
const MyPortfolio = () => {
    return (
        <div>
            <h1 className='p-5 text-center font-[poppins] text-3xl font-bold'>About Me</h1>
            <div className='flex justify-around bg-zinc-800'>
                <div className='p-5 w-1/3 mt-24'>
                    <img className='rounded border-8 border-blue-300 hover:opacity-80 hover:scale-105 duration-300' width='300px' src={my_image} alt="" />
                </div>
                <div className='p-5 mt-5 mb-5 text-white about-text w-1/2'>
                    <div className='anim text-center mt-5 mb-5'>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("Hi, I am a web developer")
                                    .pauseFor(1000)
                                    .deleteAll(50)
                                    .typeString("Welcome to my page")
                                    .start();
                            }}
                        />
                    </div>
                    <h1 className='font-bold text-xl hover-text text-center mb-3'>Name: Md. Rakibul Hassan Robin</h1>
                    <h1 className='font-bold text-xl hover-text text-center mb-3'>Email: robinrakibulhassan@gmail.com</h1>
                    <h1 className='font-bold text-xl hover-text text-center mb-3'>Educational background:</h1>
                    <table>
                        <table border="1" className='border-2 border-white' cellpadding="10px" align="center">
                            <thead>
                                <tr>
                                    <th>Exam</th>
                                    <th>Board</th>
                                    <th>Passing Year</th>
                                    <th>Institution</th>
                                    <th>GPA</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Secondary School Certificate (SSC)</td>
                                    <td>Dhaka</td>
                                    <td>2014</td>
                                    <td>Mirpur Bangla School And College</td>
                                    <td>5.00</td>
                                </tr>
                                <tr>
                                    <td>Higher Secondary Certificate (HSC)</td>
                                    <td>Dhaka</td>
                                    <td>2016</td>
                                    <td>Ideal College, Dhanmondi</td>
                                    <td>4.75</td>
                                </tr>
                                <tr>
                                    <td>Bachelor of Science (BSC)</td>
                                    <td>Dhaka</td>
                                    <td>2021</td>
                                    <td>East West University</td>
                                    <td>2.77</td>
                                </tr>
                            </tbody>
                        </table>
                    </table>
                    <div>
                    
                    </div>
                </div>
            </div>
            <br />
            <Portfolio></Portfolio>
        </div>
    );
};

export default MyPortfolio;