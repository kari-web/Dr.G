import './LandingPage.scss';
import Image1 from '../../assets/images/image-1.png';
import { NavLink } from 'react-router-dom';

function LandingPage () {
    return (
        <main className='landing-page'> 
            <div className='landing-page__top'>
                <div className='landing-page__left'>
                    <h1 className='landing-page__heading'>Google Health Education</h1>
                    <p className='landing-page__subheading'>An online friendly platform for all health topics.</p>
                </div>
                <div className='landing-page__right'>
                    <img src={Image1} alt='Illustration-1' className='landing-page__image'/>
                </div>
            </div>
            <div className='landing-page__bottom'>
                <h1 className='landing-page__title'>I am a...</h1>
                <div className='landing-page__categories'>
                    <NavLink to='/student/signin' className='landing-page__category-1'>
                        <p className='landing-page__text'>Student</p>
                    </NavLink>
                    <article className='landing-page__category-2'>
                        <p className='landing-page__text'>Youth</p>
                    </article>
                    <article className='landing-page__category-3'>
                        <p className='landing-page__text'>Parent</p>
                    </article>
                    <article className='landing-page__category-4'>
                        <p className='landing-page__text'>Educator</p>
                    </article>
                </div>
            </div>
        </main>
    );
};

export default LandingPage;