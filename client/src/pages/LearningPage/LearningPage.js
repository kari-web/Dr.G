import './LearningPage.scss';
import Image3a from '../../assets/images/image-3a.png';
import Image3b from '../../assets/images/image-3b.png';
import Image3c from '../../assets/images/image-3c.png';
import Image3d from '../../assets/images/image-3d.png';
import Image3e from '../../assets/images/image-3e.png';
import Image3f from '../../assets/images/image-3f.png';
import { NavLink } from 'react-router-dom';
import Header from '../../components/Header/Header';

function LearningPage () {
    return (
        <>
        <Header />
        <main className='learning'>
            <h1 className='learning__heading'>What do you want to learn about today?</h1>
            <input className='learning__search' placeholder='Search' type='search' name='search'/>
            <div className='learning__wrapper'>
                <article className='learning__card-1'>
                    <p className='learning__text'>Identity</p>
                    <img src={Image3e} alt='Illustration' className='learning__image'/>
                </article>
                <NavLink to='/student/learning/sexed' className='learning__card-1 learning-card-1--text'>
                    <p className='learning__text'>Sex Ed</p>
                    <img src={Image3d} alt='Illustration' className='learning__image'/>
                </NavLink>
                <article className='learning__card-1'>
                    <p className='learning__text'>Mental Health</p>
                    <img src={Image3b} alt='Illustration' className='learning__image'/>
                </article>
                <article className='learning__card-1'>
                    <p className='learning__text'>Physical Health</p>
                    <img src={Image3a} alt='Illustration' className='learning__image'/>
                </article>
                <article className='learning__card-1'>
                    <p className='learning__text'>Relationships</p>
                    <img src={Image3c} alt='Illustration' className='learning__image'/>
                </article>
                <article className='learning__card-1'>
                    <p className='learning__text'>Identity</p>
                    <img src={Image3f} alt='Illustration' className='learning__image'/>
                </article>
            </div>
        </main>
        </>
    );
};

export default LearningPage;