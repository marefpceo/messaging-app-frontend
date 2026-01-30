import logoNameVertical from '../assets/mchat-logo-small.webp';

function Header() {
  return (
    <header className='m-4'>
      <img
        fetchPriority='high'
        src={logoNameVertical}
        alt='mChat logo'
        width={160}
      />
    </header>
  );
}

export default Header;
