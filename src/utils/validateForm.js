export const isEmpty = (value) => {
  return !value || value.trim() === '';
};

export const isEmailValid = (email) => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
};

export const isPhoneNumberValid = (phone) => {
  return /^\d{10}$/.test(phone); // Only 10-digit numbers
};
