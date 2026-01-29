import closeIcon from '../assets/closeIcon.png';

function SignupErrorModal({
  isErrorModalOpen,
  setIsErrorModalOpen,
  formErrors,
}) {
  function handleClose() {
    setIsErrorModalOpen(false);
  }

  return (
    <div
      className={`h-full w-full absolute z-50 bg-gray-100/95 ${!isErrorModalOpen ? 'hidden' : 'block'}`}
    >
      <div className='absolute top-2/12 py-4 bg-white w-full min-h-1/6 rounded-lg'>
        <img
          src={closeIcon}
          alt='Close error window'
          width={24}
          className='absolute p-1 -top-1/4 right-5'
          onClick={handleClose}
        />
        <ul className='pl-4 pt-2 *:text-red-500 *:list-disc *:list-inside *:text-sm *:leading-relaxed'>
          {Object.entries(formErrors).map(([key, value]) => (
            <li key={key}>{value.msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SignupErrorModal;
