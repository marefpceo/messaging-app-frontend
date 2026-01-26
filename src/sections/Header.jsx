import logoNameVertical from '../assets/mchat-logo-small.png';

function Header() {
  return (
    <header className='m-4'>
      <img src={logoNameVertical} alt='mChat logo' width={160} />
    </header>
  );
}

export default Header;
