import React from 'react';
import '../index.css';
import './SocialLinks.css';
import {
  FaInstagramSquare,
  FaFacebook,
  FaYoutube,
  FaTwitterSquare,
  FaTiktok,
} from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className='socialLinks d-flex justify-content-center h4 py-3 m-0 fixed-bottom  '>
      <FaFacebook className='icon mx-3' />
      <FaYoutube className='icon mx-3' />
      <FaTwitterSquare className='icon mx-3' />
      <FaTiktok className='icon mx-3' />
      <FaInstagramSquare className='icon mx-3' />
    </div>
  );
};

export default SocialLinks;
