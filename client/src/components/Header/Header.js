import './Header.scss';
import Logo from '../../assets/logo/logo-google-health.png';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className='header'>
            <img src={Logo} alt='Logo-Google Health' className='header__logo'/>
            <ul className='header--right'>
                <li className='header__link'>Overview</li>
                <li className='header__link'>For everyone</li>
                <li className='header__link'>For clinicians</li>
                <NavLink to='/education' className='header__link--active' activeClassName='header__link--active'>Education</NavLink>
                <li className='header__link'>Research</li>
                <li className='header__link'>Partners</li>
            </ul>
        </header>
    );
};

export default Header;