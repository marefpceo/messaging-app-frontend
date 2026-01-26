import userSolidFull from '../../assets/userSolidFull.png';

function Avatar() {
  return (
    <div className='flex justify-center p-3 w-12 h-12 rounded-full bg-gray-400'>
      <img src={userSolidFull} alt='Contact avatar' />
    </div>
  );
}

export default Avatar;
