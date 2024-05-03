// Navbar.jsx
import React from 'react';
import insta from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import git from '../assets/git.png'

const Navbar = () => {
  return (
      <div className="container mx-auto md:flex-row md:justify-around bg-slate-800 text-white flex items-center flex-col py-2">
        <span className="navbar-brand font-bold">My React Project</span>
        <div className="navbar-info">
          <span>Developed by: Saqib Ismail Bhat</span>
        </div>
        
        <div className='flex gap-5 mt-2 bg-slate-950 px-4 py-2 rounded-md'>
        <div className='hover:scale-125 duration-300'>
        <a href="https://www.instagram.com/saqii.48/" target='_main'><img src={insta} width={20} /></a>
        </div>
        <div className='hover:scale-125 duration-300'>
        <a href="https://www.linkedin.com/in/saqib-ismail-bhat-00942b254/" target='_main'><img src={linkedin} alt='LinkedIn' width={20} className='bg-white rounded-sm'/></a>
        </div>
        <div className='hover:scale-125 duration-300'>
        <a href="https://github.com/saqibbhat48" target='_main'><img src={git} alt='Github' width={20} className='bg-white rounded-sm'/></a>
        </div>
        <div className='hover:scale-125 duration-300'>
            <a href="http://myportfolio-bysaqib.netlify.app/" target='_main'>Portfolio</a>
        </div>
      </div>
      </div>
  );
};

export default Navbar;
