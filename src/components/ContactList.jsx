import Avatar from '@mui/material/Avatar';

function ContactList({ list, currentView }) {
  const listview = 'flex gap-8 items-center';
  const iconview = 'flex flex-col gap-3 items-center';

  function displayContact(e) {
    const value = e.currentTarget.id;
    console.log('Clicked ' + value);
  }

  return (
    <>
      <div
        className={`contact-list mt-8 ${currentView === 'list' ? 'ml-2' : 'grid grid-cols-2 gap-4'}`}
      >
        {list &&
          list.map((contact) => (
            <div
              key={contact.id}
              className={`my-4 mx-2 ${currentView === 'list' ? listview : iconview}`}
              onClick={displayContact}
              id={contact.id}
            >
              <Avatar sx={{ width: 65, height: 65 }} />
              <p>
                {contact.firstname} {contact.lastname}
              </p>
            </div>
          ))}
      </div>
    </>
  );
}

export default ContactList;
