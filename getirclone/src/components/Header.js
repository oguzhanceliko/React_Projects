import React from 'react';
import {BiGlobe} from 'react-icons/bi'
import {RiUserFill,RiUserAddFill} from 'react-icons/ri'

const Header = () => {
  return <div className=" bg-brandColor">
     <div className='container flex items-center justify-between mx-auto h-11'>
          <a href='#'>
            getir
          </a>

          <nav className='flex font-semibold gap-x-5'>
            <a href='' className='flex items-center text-white transition-all gap-x-1 text-opacity-80 hover:text-opacity-100' >
              <BiGlobe size={20}/>
              Türkçe (TR)
            </a>
            <a href='' className='flex items-center text-white transition-all gap-x-1 text-opacity-80 hover:text-opacity-100' >
            <RiUserFill size={20}/>
              Giriş Yap
            </a>
            <a href='' className='flex items-center text-white transition-all gap-x-1 text-opacity-80 hover:text-opacity-100' >
            <RiUserAddFill size={20}/>
              Kayıt Ol
            </a>
          </nav>
          
     </div>
  </div>;
};

export default Header;
