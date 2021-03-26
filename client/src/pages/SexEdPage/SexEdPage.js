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
import Image4b from '../../assets/images/image-4b.png';
import Icon4e from '../../assets/icons/icon-4e.png';
import Icon4f from '../../assets/icons/icon-4f.png';
import Image5a from '../../assets/images/image-5a.png';
import Image5b from '../../assets/images/image-5b.png';
import Image5c from '../../assets/images/image-5c.png';
import Image5d from '../../assets/images/image-5d.png';

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
        <div className='page'>
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
            <main className='main'>
                <hero className='hero'>
                    <div className='hero__top'>
                        <h1 className='hero__heading'>Courses in progress</h1>
                        <p className='hero__subheading'>View all</p>
                    </div>
                    <article className='hero__card'>
                        <img src={Image4b} alt='Illustration' className='hero__image'/>
                        <div className='hero__top'>
                        <img src={Icon4e} alt='icon4e' className='hero__icon'/>
                        <h1 className='hero__title'>Relationships</h1>
                        <img src={Icon4f} alt='icon4f' className='hero__icon'/>
                        </div>
                        <div className='hero__wrapper'>
                            <div className='hero__bar-1'></div>
                            <div className='hero__bar-2'>87% complete</div>
                        </div>
                    </article>
                </hero>
                <div className='modules'>
                    <div className='modules__top'>
                        <h3 className='modules__heading'>Class Modules</h3>
                        <p className='modules__subheading'>View All</p>
                    </div>
                    <div className='modules__cards'>
                        <article className='modules__card'>
                            <header className='modules__header'>
                                <p className='modules__text-1'>Let's talk about relationships</p>
                            </header>
                            <footer className='modules__footer'>
                                <p className='modules__text-2'>25 minutes</p>
                                <p className='modules__text-3'>Learn more</p>
                            </footer>
                        </article>
                        <article className='modules__card'>
                            <header className='modules__header'>
                                <p className='modules__text-1'>Let's talk about relationships</p>
                            </header>
                            <footer className='modules__footer'>
                                <p className='modules__text-2'>25 minutes</p>
                                <p className='modules__text-3'>Learn more</p>
                            </footer>
                        </article>
                        <article className='modules__card'>
                            <header className='modules__header'>
                                <p className='modules__text-1'>Let's talk about relationships</p>
                            </header>
                            <footer className='modules__footer'>
                                <p className='modules__text-2'>25 minutes</p>
                                <p className='modules__text-3'>Learn more</p>
                            </footer>
                        </article>
                    </div>
                </div>
                <div className='modules'>
                    <div className='modules__top'>
                        <h3 className='modules__heading'>Related Videos</h3>
                        <p className='modules__subheading'>View All</p>
                    </div>
                    <div className='modules__cards'>
                        <article className='videos__card'>
                            <header className='videos__header'>
                                <img src={Image5a} alt='image' className='videos__image'/>
                            </header>
                            <footer className='videos__footer'>
                                <p className='videos__text-2'>Sex and Pleasure</p>
                                <p className='videos__text-3'>5:17</p>
                            </footer>
                        </article>
                        <article className='videos__card'>
                            <header className='videos__header'>
                                <img src={Image5b} alt='image' className='videos__image'/>
                            </header>
                            <footer className='videos__footer'>
                                <p className='videos__text-2'>Condom 101</p>
                                <p className='videos__text-3'>2:12</p>
                            </footer>
                        </article>
                        <article className='videos__card'>
                            <header className='videos__header'>
                                <img src={Image5c} alt='image' className='videos__image'/>
                            </header>
                            <footer className='videos__footer'>
                                <p className='videos__text-2'>Sexual Orientation</p>
                                <p className='videos__text-3'>4:13</p>
                            </footer>
                        </article>
                        <article className='videos__card'>
                            <header className='videos__header'>
                                <img src={Image5d} alt='image' className='videos__image'/>
                            </header>
                            <footer className='videos__footer'>
                                <p className='videos__text-2'>Birth Control Guide</p>
                                <p className='videos__text-3'>7:45</p>
                            </footer>
                        </article>
                    </div>
                </div>
            </main>
        </div>
    </>
    );
};

export default SexEdPage;