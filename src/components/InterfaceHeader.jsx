function InterfaceHeader({ title, message, user }) {
  return (
    <div className='inteface-header flex justify-between items-end'>
      <h2 className='text-2xl font'>{title}</h2>
      <p>
        <i>
          {message}
          <b>{user?.username}</b>
        </i>
      </p>
    </div>
  );
}

export default InterfaceHeader;
