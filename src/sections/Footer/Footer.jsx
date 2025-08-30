import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='max-w-[1440px] mx-auto py-[50px] px-[100px] flex flex-col gap-2 text-center md:flex-row items-center justify-between'>
      <div className='flex gap-[20px] justify-center items-center'>
        <div className='w-[48px] h-[48px] hover:bg-white hover:bg-opacity-15 border-2 border-black rounded-lg flex items-center justify-center'>
          <FaInstagram className='text-[24px]' />
        </div>
        <div className='w-[48px] h-[48px] hover:bg-white hover:bg-opacity-15 border-2 border-black rounded-lg flex items-center justify-center'>
          <FaFacebook className='text-[24px]' />
        </div>
        <div className='w-[48px] h-[48px] hover:bg-white hover:bg-opacity-15 border-2 border-black rounded-lg flex items-center justify-center'>
          <FaGithub className='text-[24px]' />
        </div>
        <div className='w-[48px] h-[48px] hover:bg-white hover:bg-opacity-15 border-2 border-black rounded-lg flex items-center justify-center'>
          <FaLinkedin className='text-[24px]' />
        </div>
      </div>
      <div><h1>© 2015 Md. Samin Israk. All rights reserved.</h1></div>
    </div>
  );
};

export default Footer;