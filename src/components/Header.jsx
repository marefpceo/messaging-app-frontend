import logoWithName from '../assets/mchat_logo_with_name.png';

function Header() {
  return (
    <header className='mx-4'>
      <img src={logoWithName} alt='mChat logo with name' className='w-auto' />
    </header>
  );
}

export default Header;
