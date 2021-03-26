import './SignIn.scss';
import Image2a from '../../assets/images/image-2a.png';
import Image2b from '../../assets/images/image-2b.png';
import Image2c from '../../assets/images/image-2c.png';
import { NavLink } from 'react-router-dom';

function SignInPage () {
    return (
        <main className='sign-in'>
            <form className='sign-in__form'>
                <h3 className='sign-in__title'>Sign in</h3>
                <h3 className='sign-in__subtitle'>Use your Google Account</h3>
                <div className='sign-in__wrapper'>
                    <label className='sign-in__label' htmlFor='email'>Email</label>
                    <input className='sign-in__input' placeholder='user@gmail.com' htmlFor='email' type='text' name='email'/>
                </div>
                <div className='sign-in__wrapper'>
                    <label className='sign-in__label' htmlFor='password'>Password</label>
                    <input className='sign-in__input' placeholder='********c' htmlFor='password' type='text' name='password'/>
                </div>
                <p className='sign-in__text-1'>Forgot Password?</p>
                <div className='sign-in__wrapper-2'>
                    <NavLink to='/student/learning' className='sign-in__button'>Next</NavLink>
                </div>
                <p className='sign-in__text-2'>Not a member yet? Sign up for a free profile</p>
                <p className='sign-in__text-1'>Create Account</p>
            </form>
            <div className='sign-in__container'>
                <img src={Image2a} alt='Illustration-1' className='sign-in__image'/>
                <img src={Image2b} alt='Illustration-2' className='sign-in__image'/>
                <img src={Image2c} alt='Illustration-3' className='sign-in__image'/>
            </div>
        </main>
    );
};

export default SignInPage;