import logoNameVertical from '../assets/mchat-logo-small.webp';

function Header() {
  return (
    <>
      <meta
        name='description'
        content={`Login to mChat Messenger to access your account and start
        chatting with friends!`}
      />

      <header className='m-4'>
        <img
          fetchPriority='high'
          src={logoNameVertical}
          alt='mChat logo'
          width={160}
          height={60}
        />
      </header>
    </>
  );
}

export default Header;
