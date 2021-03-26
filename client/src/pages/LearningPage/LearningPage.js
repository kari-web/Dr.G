import './LearningPage.scss';
import Image3a from '../../assets/images/image-3a.png';
import Image3b from '../../assets/images/image-3b.png';
import Image3c from '../../assets/images/image-3c.png';
import { NavLink } from 'react-router-dom';

function LearningPage () {
    return (
        <main className='learning'>
            <input className='learning__search' placeholder='Search' type='search' name='search'/>
            <h1 className='learning__heading'>What do you want to learn about today?</h1>
            <div className='learning__wrapper'>
                <article className='learning__card-1'>
                    <p className='learning__text'>Nutrition</p>
                    <img src={Image3a} alt='Illustration' className='learning__image'/>
                </article>
                <NavLink to='/student/learning/sexed' className='learning__card-2 learning-card-2--text'>
                    <p className='learning__text'>Sex Ed</p>
                </NavLink>
                <article className='learning__card-1'>
                    <p className='learning__text'>Mental Health</p>
                    <img src={Image3b} alt='Illustration' className='learning__image'/>
                </article>
                <article className='learning__card-3'>
                    <p className='learning__text'>Physical Health</p>
                </article>
                <article className='learning__card-1'>
                    <p className='learning__text'>Relationships</p>
                    <img src={Image3c} alt='Illustration' className='learning__image'/>
                </article>
                <article className='learning__card-4'>
                    <p className='learning__text'>Identity</p>
                </article>
            </div>
        </main>
    );
};

export default LearningPage;