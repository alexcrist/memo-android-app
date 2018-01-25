import axios from 'axios';

const apiBaseUrl = 'http://green-room-api.herokuapp.com/memo';

function getMemosByUser(userId) {
  const url = `${apiBaseUrl}/user/${userId}`;
  return axios.get(url);
}

function createMemo(userId, title, description) {
  const url = `${apiBaseUrl}`;
  const memo = { userId, title, description };
  return axios.post(url, memo);
}

function deleteMemo(memoId) {
  const url = `${apiBaseUrl}/${memoId}`;
  return axios.delete(url);
}

export default {
  getMemosByUser,
  createMemo,
  deleteMemo
};