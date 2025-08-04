import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import HomeNav from '../../components/HomeNav';
import InterfaceHeader from '../../components/InterfaceHeader';
import ContactTabPanel from '../../components/ContactTabPanel';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CircularProgress from '@mui/material/CircularProgress';

const apiHeader = {
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
};

function Contacts() {
  const { user } = useContext(AuthContext);
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [contactList, setContactList] = useState([]);
  const [userContacts, setUserContacts] = useState([]);

  useEffect(() => {
    async function getContacts() {
      try {
        const [fullList, userList] = await Promise.all([
          fetch(`${import.meta.env.VITE_API_BASE_URL}/contact`, apiHeader),
          fetch(
            `${import.meta.env.VITE_API_BASE_URL}/contact/${user.id}/contact_list`,
            apiHeader,
          ),
        ]);

        const fullListData = await fullList.json();
        const userListData = await userList.json();

        if (fullList.ok && userList.ok) {
          setContactList(fullListData);
          setUserContacts(userListData);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    getContacts();
  }, [user.id]);

  function handleChange(e, newValue) {
    setValue(newValue);
  }

  return (
    <>
      {isLoading ? (
        <div className='flex flex-col flex-1 justify-center items-center'>
          <CircularProgress />
          <p>Loading</p>
        </div>
      ) : (
        <section
          className={`flex flex-1 flex-col p-2 ${user.settings.background} ${user.settings.color} ${user.settings.font}`}
        >
          <InterfaceHeader title={'Contacts'} user={user} />

          <div className='contact-tabs mt-4 flex justify-center'>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label='contact tabs'
            >
              <Tab label='My Contacts' />
              <Tab label='All' />
            </Tabs>
          </div>

          <ContactTabPanel value={value} index={0}>
            List of my contacts
          </ContactTabPanel>

          <ContactTabPanel value={value} index={1}>
            List of ALL contacts
          </ContactTabPanel>
        </section>
      )}
      <HomeNav />
    </>
  );
}

export default Contacts;
