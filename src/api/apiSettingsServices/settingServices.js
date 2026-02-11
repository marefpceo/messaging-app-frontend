// API to update user profile and settings
export async function updateProfileService(
  userId,
  currentBio,
  selectedColor,
  selectedFontSize,
  selectedFontColor,
) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/user/${userId}/edit-profile`,
      {
        credentials: 'include',
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bio: currentBio,
          background: selectedColor,
          font: selectedFontSize,
          color: selectedFontColor,
        }),
      },
    );
    return response;
  } catch (error) {
    console.error('Error updating user profile', error);
    throw error;
  }
}

export default updateProfileService;
