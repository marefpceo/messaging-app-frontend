import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import HomeNav from '../../components/HomeNav';
import InterfaceHeader from '../../components/InterfaceHeader';
import ContactTabPanel from '../../components/ContactTabPanel';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function Contacts() {
  const { user } = useContext(AuthContext);
  const [value, setValue] = useState(0);

  function handleChange(e, newValue) {
    setValue(newValue);
  }

  return (
    <>
      <section
        className={`flex flex-1 flex-col p-2 ${user.settings.background} ${user.settings.color} ${user.settings.font}`}
      >
        <InterfaceHeader title={'Contacts'} user={user} />

        <div className='contact-tabs mt-4 flex justify-center'>
          <Tabs value={value} onChange={handleChange} aria-label='contact tabs'>
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
      <HomeNav />
    </>
  );
}

export default Contacts;
