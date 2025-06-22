import logoNameVertical from '../assets/mchat-name-vertical-160.png';

function Header() {
  return (
    <header className='m-4'>
      <img
        src={logoNameVertical}
        alt='mChat logo with name'
        className='w-auto'
      />
    </header>
  );
}

export default Header;
