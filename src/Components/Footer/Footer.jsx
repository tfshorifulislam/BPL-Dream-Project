import React from 'react';
import Logo from '../../assets/logo-footer.png'
import NewsLetter from '../NewsLetter/NewsLetter';
const Footer = () => {
    return (
        <div className='relative '>

            <footer className='sm:footer-horizontal bg-[#06091A]'>

                <div className="pt-10 pb-10 px-10 md:pb-18 md:px-35 ">

                    <div className='flex justify-center items-center mb-16'>
                        <img src={Logo} alt="Footer Logo" />
                    </div>

                    <div className=' lg:flex lg:justify-between gap-7'>

                        <div className='mb-3'>
                            <h2 className='font-semibold text-xl text-white mb-4'>About Us</h2>
                            <p className='text-white leading-7 opacity-70 font-normal'>
                                We are a passionate team
                                <br />dedicated to providing the best
                                <br /> services to our customers.</p>
                        </div>

                        <div>
                            <h2 className='font-semibold text-xl text-white mb-4'>Quick Links</h2>
                            <ol className='text-white leading-9 opacity-50 font-normal'>
                                <li>Home</li>
                                <li>Services</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ol>
                        </div>

                        <div>
                            <h2 className='font-semibold text-xl text-white mb-4'>Subscribe</h2>
                            <p className='text-white leading-9 opacity-50 font-normal mb-3'>Subscribe to our newsletter for the latest updates.</p>
                            <fieldset className="w-full">
                                <div className="flex flex-col md:flex-row space-y-3 gap-4">
                                    <input
                                        type="email"
                                        placeholder="username@site.com"
                                        className="input input-bordered join-item" />
                                    <button className="btn btn-primary join-item">Subscribe</button>
                                </div>
                            </fieldset>
                        </div>

                    </div>

                </div>
                <div className="pb-8 border-t-2 border-white opacity-20"></div>

                <div className='flex justify-center items-center pb-8'>
                    <h3 className='text-white leading-9 opacity-50 font-normal text-center'>@2026 Your Company All Rights <br /> Reserved.</h3>
                </div>
            </footer>
        </div>
    );
};

export default Footer;