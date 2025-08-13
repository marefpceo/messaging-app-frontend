import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import HomeNav from '../../components/HomeNav';
import InterfaceHeader from '../../components/InterfaceHeader';
import ContactTabPanel from '../../components/ContactTabPanel';
import ContactList from '../../components/ContactList';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CircularProgress from '@mui/material/CircularProgress';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import ViewListIcon from '@mui/icons-material/ViewList';
import GridView from '@mui/icons-material/GridView';

const apiHeader = {
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
};

function Contacts() {
  const { user } = useContext(AuthContext);
  const [value, setValue] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [fullList, setFullList] = useState([]);
  const [userContacts, setUserContacts] = useState();
  const [currentView, setCurrentView] = useState('list');
  const [shouldReload, setShouldReload] = useState(false);

  useEffect(() => {
    async function getContacts() {
      try {
        const [fullList, userList] = await Promise.all([
          fetch(`${import.meta.env.VITE_API_BASE_URL}/contact`, apiHeader),
          fetch(
            `${import.meta.env.VITE_API_BASE_URL}/contact/${user.username}/contact_list`,
            apiHeader,
          ),
        ]);

        const fullListData = await fullList.json();
        const userListData = await userList.json();

        if (fullList.ok && userList.ok) {
          // Removes current user from All contacts list
          const filteredFullList = fullListData.filter(
            (item) => item['id'] !== user.id,
          );

          // Removes contacts of the current user
          if (userListData.length > 0) {
            const filteredFullWithUserList = filteredFullList.filter(
              (fullFiltered) =>
                !userListData.some(
                  (userObjects) => userObjects.id === fullFiltered.id,
                ),
            );
            setFullList(filteredFullWithUserList);
            setValue(0);
          } else {
            setFullList(filteredFullList);
          }
          setUserContacts(userListData);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
        setShouldReload(false);
      }
    }
    getContacts();
  }, [user.id, shouldReload]);

  function handleChange(e, newValue) {
    setValue(newValue);
  }

  function handleView(e, newView) {
    if (newView !== null) {
      setCurrentView(newView);
    }
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
          className={`flex flex-1 flex-col p-2 ${user.settings.background} ${user.settings.color} 
            ${user.settings.font}`}
        >
          <InterfaceHeader title={'Contacts'} user={user} />

          <ToggleButtonGroup
            value={currentView}
            exclusive
            onChange={handleView}
            aria-label='contact list view'
            className='mt-2'
          >
            <ToggleButton value={'list'} aria-label='list view'>
              <ViewListIcon />
            </ToggleButton>
            <ToggleButton value={'icon'} aria-label='icon view'>
              <GridView />
            </ToggleButton>
          </ToggleButtonGroup>

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
            {typeof userContacts !== 'object' ? (
              <div className='flex justify-center'>
                <p className='mt-24'>No saved contacts</p>
              </div>
            ) : (
              <ContactList
                list={userContacts}
                currentView={currentView}
                isListTypeFull={false}
                setShouldReload={setShouldReload}
              />
            )}
          </ContactTabPanel>

          <ContactTabPanel value={value} index={1}>
            <ContactList
              list={fullList}
              currentView={currentView}
              isListTypeFull={true}
              setShouldReload={setShouldReload}
            />
          </ContactTabPanel>
        </section>
      )}
      <HomeNav />
    </>
  );
}

export default Contacts;
