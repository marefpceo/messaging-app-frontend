function NavIconButton({ icon, text, handleClick }) {
  return (
    <div
      className='p-8 border rounded-2xl max-w-2/3 bg-gray-200 shadow-lg'
      onClick={handleClick}
    >
      <div>{icon}</div>
      <div className='text-center'>{text}</div>
    </div>
  );
}

export default NavIconButton;
