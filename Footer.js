import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    THANK YOU FOR VISITING OUR HOTEL
                </p>
                <p className='footer-subscription-text'>
                    YOU CAN BOOK ROOMS EVERYWHERE THROUGHOUT THE WORLD
                </p>

                <div className='input-areas'>
                    <form>
                        <input
                            className='footer-input'
                            name='email'
                            type='email'
                            placeholder='Your FirstName'
                        />
                        <Button buttonStyle='btn--outline'> SUBMMIT</Button>
                    </form>
                    <form>
                    <input
                        className='footer-input'
                        name='email'
                        type='email'
                        placeholder='Your LastName'
                    />
                    <Button buttonStyle='btn--outline'> SUBMMIT</Button>
                </form>
                <form>
                <input
                    className='footer-input'
                    name='email'
                    type='email'
                    placeholder='Your Contact_#'
                />
                <Button buttonStyle='btn--outline'> SUBMMIT</Button>
            </form>


                    <form>
                    <input
                        className='footer-input'
                        name='email'
                        type='email'
                        placeholder='Your Email'
                    />
                    <Button buttonStyle='btn--outline'> SUBMMIT</Button>
                </form>
                </div>

            </section>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                              <h2>About Us</h2>
                        <Link to='/sign-up'></Link>
                        <Link to='/'></Link>
                        <Link to='/'>CONDITIONS</Link>
                        <Link to='/'>CUSTOMERS</Link>
                        <Link to='/'>TERMS OF SERVICE</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>TELEPHONE_NO</Link>
                        <Link to='/'>SEND_EMAIL</Link>
                        <Link to='/'>WRITE A LETTER</Link>
                        <Link to='/'>USE_WHATSAPP</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                            THE BEST HOTEL
                            <i className="fa-solid fa-book-open-reader"/>
                        </Link>
                    </div>
                    <small class='website-rights'>WHY NOT CHOOSING US</small>
                    <div class='social-icons'>
                        <Link
                            class='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i class='fab fa-facebook-f' />
                        </Link>
                        <Link
                            class='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i class='fab fa-instagram' />
                        </Link>
                        <Link
                            class='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i class='fab fa-youtube' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i class='fab fa-twitter' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i class='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;