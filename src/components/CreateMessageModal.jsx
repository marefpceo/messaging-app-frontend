import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

function CreateMessageModal() {
  const { user } = useContext(AuthContext);

  console.log(user);

  return <>New Message Modal</>;
}

export default CreateMessageModal;
