import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className=' orange'>
            <div className='nav-wrapper'>
                <Link to='/' className='brand-logo'>
                    Recepts
                </Link>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <a
                        className=' grey-text text-lighten-4 right'
                        href='#!'
                        target='_blank'
                        rel='noreferrer'
                    >
                        Repo
                    </a>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
