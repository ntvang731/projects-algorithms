// type 'rafce' for creating boilerplate; requires ES7+ React/Redux/React-Native snippets extension
import React, {useState} from 'react';
import nuAperture from '../assets/nuAperture.png';
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from 'react-scroll';

const Navbar = () => {

    // useState setter and getter for navbar
    const [nav, setNav] = useState(false)

    // no {} needed after arrow because only one operation
    // set nav to the current opposite state (i.e. false -> true or true -> false)
    const clickHandler = () => setNav(!nav)

    return (
        // use [] to denote specific value in px or %; works for color as well
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 
        bg-[#0a192f] text-gray-300'>
            <div>
                {/* display my logo */}
                <img className='logo' src={nuAperture} alt='Logo Image'/>
            </div>
            
            {/* menu */}
            <div>
                {/* elements will be hidden if UNDER breakpoint medium (768 px?) */}
                <ul className='hidden md:flex'>
                    <li>
                        {/* to="home" points to name="home" in Home.js */}
                        <Link to="home" smooth={true} duration={500}>Home</Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={500}>About</Link>
                    </li>
                    <li>
                        <Link to="portfolio" smooth={true} duration={500}>Portfolio</Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500}>Contact</Link>
                    </li>
                </ul>
            </div>
            
            {/* hamburger */}
            {/* elements will be hidden if OVER breakpoint medium*/}
            {/* z-index specifies stack order on an element; elements can be placed in
            front of other elements by giving them the higher value of the z-index */}
            <div onClick={clickHandler} className='md:hidden z-10'>
                {/* ternary operator: if nav state is true (i.e. nav bar is showing), then show FaBars */}
                {!nav ? <FaBars/> : <FaTimes/>}
            </div>
            
            {/* Mobile menu */}
            {/* Setting top: 0; left: 0; bottom: 0; right: 0; gives the browser a new bounding
            box for the block. At this point the block will fill all available space in its
            offset parent, which is the body or position: relative; container */}
            {/* ternary operator: if nav state is true (i.e. nav bar is showing), then hide mobile menu elements */}
            <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <ul>
                    {/* py-6 -> 1.5 rem padding on y-axis both direction */}
                    {/* The rem values are relative to the root HTML element. If the root element’s
                    font-size: 16px, 1rem = 16px for all elements. If the font-size isn’t defined
                    explicitly in the root element, 1rem will be equal to the default font-size
                    which is provided by the browser. */}
                    <li className='py-6 text-4xl'><Link onClick={clickHandler} to="home" smooth={true} duration={500}>Home</Link></li>
                    <li className='py-6 text-4xl'><Link onClick={clickHandler} to="about" smooth={true} duration={500}>About</Link></li>
                    <li className='py-6 text-4xl'><Link onClick={clickHandler} to="portfolio" smooth={true} duration={500}>Portfolio</Link></li>
                    <li className='py-6 text-4xl'><Link onClick={clickHandler} to="contact" smooth={true} duration={500}>Contact</Link></li>
                </ul>
            </div>

            {/* Social icons */}
            <div className='hidden'>

            </div>
        </div>
    )
}

export default Navbar