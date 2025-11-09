export async function loginService(emailInput, passwordInput) {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/login`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailInput,
        password: passwordInput,
      }),
    });
    return response;
  } catch (error) {
    console.error('Error fetching login', error);
    throw error;
  }
}

export async function signupService({ userSignUp }) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/signup`,
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname: userSignUp.firstname,
          lastname: userSignUp.lastname,
          email: userSignUp.email,
          date_of_birth: userSignUp.date_of_birth,
          username: userSignUp.username,
          password: userSignUp.password,
          confirmPassword: userSignUp.confirmPassword,
        }),
      },
    );
    return response;
  } catch (error) {
    console.error('Error signing up', error);
    throw error;
  }
}

export default { loginService, signupService };
