import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Footer() {
    return (
        <footer className='bg-gray-400 text-white'>

        <div className='flex sm:flex-row flex-col sm:gap-4 gap-8 justify-between items-center px-10 py-10'>
            <div className='flex flex-col text-center max-w-xl gap-2 '>
                <h1>Ajay Kumar Shrestha
                </h1>
                <p className='text-justify'>I design highly scalable and responsive web applications using MongoDB , Express , React and Nodejs.I have 2 years of experience of working as a Full Stack Developer and instructor in Clouds Web Nepal Pvt. Ltd.</p>
            </div>
            <div className='flex gap-8 text-xl items-center'>
                <a href=""><FaFacebook/></a>
                <a href=""><FaGithub/></a>
                <a href=""><FaLinkedin/></a>
                <a href=""><FaTwitter/></a>

            </div>
            <div>
                <p>@ All Rights Reserved.</p>
            </div>
        </div>
        </footer>

    )
}

export default Footer