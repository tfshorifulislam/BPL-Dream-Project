import React from 'react';
import Logo from '../../assets/logo-footer.png'
import NewsLetter from '../NewsLetter/NewsLetter';
const Footer = () => {
    return (
        <div className='relative'>

            <NewsLetter />

            <footer className='sm:footer-horizontal bg-[#06091A]'>
                <div className="pt-60 pb-18 px-35 ">
                    <div className='flex justify-center items-center mb-16'>
                        <img src={Logo} alt="Footer Logo" />
                    </div>
                    <div className='flex justify-between gap-7'>
                        <div>
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
                            <p className='text-white leading-9 opacity-50 font-normal'>Subscribe to our newsletter for the latest updates.</p>
                            <fieldset className="w-80">
                                <label>Enter your email address</label>
                                <div className="join">
                                    <input
                                        type="text"
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
                    <h3 className='text-white leading-9 opacity-50 font-normal'>@2024 Your Company All Rights Reserved.</h3>
                </div>
            </footer>
        </div>
    );
};

export default Footer;