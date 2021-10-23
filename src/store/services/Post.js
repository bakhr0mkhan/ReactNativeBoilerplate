import Api from '../../config/Api';

export const fetchAll = async payload => {
  return Api.get(`/api/posts/findAll`).catch(err => err.response);
};

export const fetchLast = async payload => {
  return Api.get(`/api/posts/findLast`).catch(err => err.response);
};
