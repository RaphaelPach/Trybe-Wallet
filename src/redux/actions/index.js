const GET_EMAIL = 'GET_EMAIL';
const GET_WALLET = 'GET_WALLET';
const GET_INPUTS = 'GET_INPUTS';

const getEmail = (payload) => ({
  type: GET_EMAIL,
  payload,
});

const getWallet = (payload) => ({
  type: GET_WALLET,
  payload,
});
const getInp = (payload) => ({
  type: GET_INPUTS,
  payload,
});

export { GET_EMAIL, GET_WALLET, GET_INPUTS, getInp, getEmail, getWallet };
