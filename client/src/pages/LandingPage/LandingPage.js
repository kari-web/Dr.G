import './LandingPage.scss';
import Image1 from '../../assets/images/image-1.png';

function LandingPage () {
    return(
        <main className='sign-in'> 
            <div className='sign-in__top'>
                <div className='sign-in__left'>
                    <h1 className='sign-in__heading'>Google Health Education</h1>
                    <p className='sign-in__subheading'>An online friendly platform for all health topics.</p>
                </div>
                <div className='sign-in__right'>
                    <img src={Image1} alt='Illustration-1' className='sign-in__image'/>
                </div>
            </div>
            <div className='sign-in__bottom'>
                <h1 className='sign-in__title'>Choose your category</h1>
                <div className='sign-in__categories'>
                    <article className='sign-in__category-1'>
                        <p className='sign-in__text'>Student</p>
                    </article>
                    <article className='sign-in__category-2'>
                        <p className='sign-in__text'>Youth</p>
                    </article>
                    <article className='sign-in__category-3'>
                        <p className='sign-in__text'>Parent</p>
                    </article>
                    <article className='sign-in__category-4'>
                        <p className='sign-in__text'>Educator</p>
                    </article>
                </div>
            </div>
        </main>
    );
};

export default LandingPage;