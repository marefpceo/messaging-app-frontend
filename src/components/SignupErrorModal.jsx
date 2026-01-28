function SignupErrorModal({
  isErrorModalOpen,
  setIsErrorModalOpen,
  formErrors,
}) {
  function handleClose() {
    setIsErrorModalOpen(false);
  }

  console.log(formErrors);
  return <>modal</>;
}

export default SignupErrorModal;
