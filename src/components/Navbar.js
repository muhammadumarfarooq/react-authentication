import React from "react";

const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
      <a className='navbar-brand' href='#'>
        <img
          src='https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/logo_white.png'
          width='30'
          height='30'
          alt='logo'
        />
        React Authentication
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbar-list-2'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbar-list-2'>
        <ul className='navbar-nav'>
          <li className='nav-item active'>
            <a className='nav-link' href='#'>
              Home <span className='sr-only'>(current)</span>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              About Us
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Blog
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
