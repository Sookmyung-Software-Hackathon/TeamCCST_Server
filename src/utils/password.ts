import bcrypt from 'bcrypt';

export const saveEncryptedPassword = async (password: string) => {
  const SALT_PARAM = 5;

  try {
    if (!password) return password;

    const hashedPasswd = await bcrypt.hash(password, SALT_PARAM);
    if (!hashedPasswd) throw new Error('Password');

    return hashedPasswd;
  } catch (e) {
    throw e;
  }
};

export const comparePassword = async (
  passwordInput: string,
  password: string
) => {
  const isCorrect = await bcrypt.compare(passwordInput, password);

  return isCorrect;
};
