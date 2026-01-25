function NavIconButton({ icon, text, handleClick }) {
  return (
    <div
      className='flex flex-col items-center p-4 border rounded-2xl w-1/4 bg-gray-200 shadow-lg'
      onClick={handleClick}
    >
      <div>{icon}</div>
      <div className='text-center'>{text}</div>
    </div>
  );
}

export default NavIconButton;
