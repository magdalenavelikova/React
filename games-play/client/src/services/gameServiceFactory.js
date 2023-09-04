import { requestFactory } from "./requester";

const baseUrl = "http://localhost:3030/data/games";

export const gameServiceFactory = (token) => {
  const request = requestFactory();
  const getAll = async () => {
    const result = await request.get(baseUrl);
    const games = Object.values(result);
    return games;
  };

  const getLatest = async () => {
    const query = encodeURIComponent('_createdOn desc');
    ///data/games?sortBy=_createdOn%20desc&distinct=category
    const result = await request.get(`${baseUrl}?sortBy=${query}&distinct=category`);
    const latestGames = Object.values(result);
    return latestGames;
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
   getLatest,
    remove,
    edit,
  };
};
