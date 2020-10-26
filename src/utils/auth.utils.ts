import Cookies from 'js-cookie';
const TOKEN = 'token';
// const REFRESH_TOKEN = 'refreshToken';
const UID = 'uid';

export const createUserInformation = (
  token: string,
  // reToken: string,
  uid: string,
) => {
  Cookies.set(TOKEN, token, {expires: 1 / 24});
  // Cookies.set(REFRESH_TOKEN, reToken);
  Cookies.set(UID, uid);
};

export const deleteUserInformation = () => {
  Cookies.remove(TOKEN);
  // Cookies.remove(REFRESH_TOKEN);
  Cookies.remove(UID);
};
