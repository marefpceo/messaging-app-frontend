// Returns list of all active users
export async function fullListService() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/contact`,
      {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return response;
  } catch (error) {
    console.error('Error fetching full contact list.', error);
    throw error;
  }
}

// Returns list of contacts that the user has added to their 'My Contacts' list
export async function userListService(username) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/contact/${username}/contact-list`,
      {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return response;
  } catch (error) {
    console.error('Error fetching user contact list', error);
    throw error;
  }
}

// Returns the current user's profile info
export async function profileInfoService(userId) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/user/${userId}/edit-profile`,
      {
        credentials: 'include',
      },
    );
    return response;
  } catch (error) {
    console.error(`Error fetching user's profile information`, error);
    throw error;
  }
}

// API call to add a contact to the current user's list
export async function addContactService(currentUserInput, addUserInput) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/contact/add`,
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          currentUser: currentUserInput,
          addUser: addUserInput,
        }),
      },
    );
    return response;
  } catch (error) {
    console.error('Error adding new contact', error);
    throw error;
  }
}

// API call to remove a contact from the current user's list
export async function removeContactService(username, contactInput) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/contact/${username}/delete`,
      {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contactToRemove: contactInput,
        }),
      },
    );
    return response;
  } catch (error) {
    console.error('Error removing contact', error);
    throw error;
  }
}

export default {
  fullListService,
  userListService,
  profileInfoService,
  addContactService,
  removeContactService,
};
