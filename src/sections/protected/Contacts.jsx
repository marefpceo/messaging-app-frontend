import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import {
  fullListService,
  userListService,
} from '../../api/apiContactServices/contactServices';
import HomeNav from '../../components/global_components/HomeNav';
import InterfaceHeader from '../../components/global_components/InterfaceHeader';
import ContactList from '../../components/contacts_components/ContactList';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '../../components/global_components/Button';

function Contacts() {
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [fullList, setFullList] = useState([]);
  const [userContacts, setUserContacts] = useState({});
  const [shouldReload, setShouldReload] = useState(false);
  const [isListTypeFull, setIsListTypeFull] = useState(false);

  useEffect(() => {
    if (shouldReload === true) {
      if (userContacts.length > 0) {
        const filteredFullWithUserList = fullList.filter(
          (fullFiltered) =>
            !userContacts.some(
              (userObjects) => userObjects.id === fullFiltered.id,
            ),
        );
        setFullList(filteredFullWithUserList);
      }
      setShouldReload(false);
    } else {
      return;
    }
  }, [shouldReload]);

  // Get list of user contacts
  useEffect(() => {
    async function getUserContacts() {
      try {
        const userList = await userListService(user.username);

        const userListData = await userList.json();

        if (userList.ok) {
          setUserContacts(userListData);
          console.log(userContacts);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    getUserContacts();
  }, [user.id, shouldReload]);

  // Toggles list view from user list to global list
  function handleClick() {
    if (isListTypeFull === true) {
      setIsListTypeFull(false);
    } else {
      setIsListTypeFull(true);
      // Contact list is only fetched if fullList is empty
      if (fullList.length === 0) {
        getGlobalContactList();
      }
    }
    setShouldReload(true);
  }

  // Return global contact list
  async function getGlobalContactList() {
    try {
      const fullList = await fullListService();

      if (fullList.ok) {
        const fullListData = await fullList.json();

        // Removes the current user from the list
        const filteredFullList = fullListData.filter(
          (item) => item['id'] !== user.id,
        );
        console.log(fullListData);
        // Removes contacts that are already on the user's contact list
        if (userContacts.length > 0) {
          const filteredFullWithUserList = filteredFullList.filter(
            (fullFiltered) =>
              !userContacts.some(
                (userObjects) => userObjects.id === fullFiltered.id,
              ),
          );
          setFullList(filteredFullWithUserList);
        } else {
          setFullList(filteredFullList);
        }
      }
    } catch (error) {
      console.error(error);
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
          <Button
            settings={`mt-2 p-1 w-1/3 rounded self-center bg-${isListTypeFull === true ? 'lime-500' : 'gray-300'}`}
            onClick={handleClick}
          >
            {isListTypeFull === true ? 'My Contacts' : 'Add Contacts'}
          </Button>
          <div className={`${isListTypeFull === true ? 'hidden' : ''}`}>
            {userContacts.length === 0 ? (
              <div className='mt-44 flex justify-center'>
                <p>Add contacts to start chatting</p>
              </div>
            ) : (
              <ContactList
                list={userContacts}
                currentView={'list'}
                isListTypeFull={false}
                setShouldReload={setShouldReload}
                key={shouldReload}
              />
            )}
          </div>
          <div className={`${isListTypeFull === true ? '' : 'hidden'}`}>
            <ContactList
              list={fullList}
              currentView={'list'}
              isListTypeFull={true}
              setShouldReload={setShouldReload}
              key={shouldReload}
            />
          </div>
        </section>
      )}
      <HomeNav />
    </>
  );
}

export default Contacts;
