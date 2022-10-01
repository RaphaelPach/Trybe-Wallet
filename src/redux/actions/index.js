const GET_EMAIL = 'GET_EMAIL';
const GET_WALLET = 'GET_WALLET';

const getEmail = (payload) => ({
  type: GET_EMAIL,
  payload,
});

const getWallet = (payload) => ({
  type: GET_WALLET,
  payload,
});

export { GET_EMAIL, GET_WALLET, getEmail, getWallet };
