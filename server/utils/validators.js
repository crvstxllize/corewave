export function validateRegister({ username, email, password, repeatPassword }) {
  if (!username || !email || !password || !repeatPassword) {
    return 'All fields are required';
  }
  if (password !== repeatPassword) {
    return 'Passwords do not match';
  }
  return null;
}

export function validateLogin({ email, password }) {
  if (!email || !password) {
    return 'Email and password are required';
  }
  return null;
}
