import './SexEdPage.scss';
import Logo2 from '../../assets/logo/logo-2.png';
import Account from '../../assets/icons/account.png';
import Notifications from '../../assets/icons/notifications.png';
import Favorites from '../../assets/icons/favorites.png';
import Icon1 from '../../assets/icons/icon-4a.png';
import Icon2 from '../../assets/icons/icon-4b.png';
import Icon3 from '../../assets/icons/icon-4c.png';
import Icon4 from '../../assets/icons/icon-4d.png';
import Image4a from '../../assets/images/image-4a.png';

function SexEdPage () {
    return (
        <>
        <header className='header-2'>
            <div className='header-2__left'>
                <img src={Logo2} alt='Google Health Logo' className='header-2__logo'/>
                <p className='header-2__text-1'>Health</p>
                <p className='header-2__text-2'>Sex Ed</p>
                <input className='header-2__search' placeholder='Search' type='search' name='search'/>
            </div>
            <div className='header-2__right'>
                <img src={Favorites} alt='heart icon' className='header-2__icon'/>
                <img src={Notifications} alt='bell icon' className='header-2__icon'/>
                <img src={Account} alt='account icon' className='header-2__icon'/>
            </div>
        </header>
        <main className='main'>
            <aside className='sidebar'>
                <div className='sidebar__top'>
                    <article className='sidebar__nav'>
                        <img src={Icon1} alt='icon1' className='sidebar__icon'/>
                        <p className='sidebar__link'>Dashboard</p>
                    </article>
                    <article className='sidebar__nav'>
                        <img src={Icon2} alt='icon2' className='sidebar__icon'/>
                        <p className='sidebar__link'>My Class</p>
                    </article>
                    <article className='sidebar__nav sidebar__nav--active'>
                        <img src={Icon3} alt='icon3' className='sidebar__icon'/>
                        <p className='sidebar__link'>Courses</p>
                    </article>
                    <article className='sidebar__nav'>
                        <img src={Icon4} alt='icon4' className='sidebar__icon'/>
                        <p className='sidebar__link'>Settings</p>
                    </article>
                </div>
                <img src={Image4a} alt='Illustration' className='sidebar__image'/>
            </aside>
        </main>
    </>
    );
};

export default SexEdPage;