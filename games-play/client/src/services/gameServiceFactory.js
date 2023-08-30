import { requestFactory } from "./requester";

const baseUrl = "http://localhost:3030/data/games";

export const gameServiceFactory = (token) => {
  const request = requestFactory(token);
  const getAll = async () => {
    const result = await request.get(baseUrl);
    const games = Object.values(result);
    return games;
  };

  const create = async (gameData) => {
    const result = await request.post(baseUrl, gameData);
    return result;
  };

  const getById = async (id) => {
    const result = await request.get(`${baseUrl}/${id}`);
    return result;
  };

  /*const addComment = async (gameId, data) => {
    const result = await request.post(`${baseUrl}/${gameId}/comments/`, data);
    return result;
  };*/

  const remove = (gameId) => {
    request.remove(`${baseUrl}/${gameId}`);
  };

  const edit =  (gameId, data) => {
  const result =  request.put(`${baseUrl}/${gameId}`, data);
  return result;
  };

  return {
    getAll,
    create,
    getById,
   
    remove,
    edit,
  };
};
