const GET_EMAIL = 'GET_EMAIL';
const GET_WALLET = 'GET_WALLET';
const GET_INPUTS = 'GET_INPUTS';
const REMOVE_COIN = 'REMOVE_COIN';

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

const rmCoin = (payload) => ({
  type: REMOVE_COIN,
  payload,
});

export { GET_EMAIL,
  GET_WALLET,
  GET_INPUTS,
  REMOVE_COIN,
  getInp,
  getEmail,
  getWallet,
  rmCoin };
