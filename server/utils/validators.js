export function validateRegister({ username, email, password, repeatPassword }) {
  if (!username || !email || !password || !repeatPassword) {
    return 'All fields are required';
  }
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return 'Invalid email format';
  }
  if (password.length < 6) {
    return 'Password must be at least 6 characters';
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
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return 'Invalid email format';
  }
  if (password.length < 6) {
    return 'Password must be at least 6 characters';
  }
  return null;
}
