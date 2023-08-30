import { requestFactory } from "./requester";

const baseUrl = "http://localhost:3030/data/comments";

export const commentServiceFactory = (token) => {
  const request = requestFactory(token);

  const create = async (data) => {
    const result = await request.post(baseUrl, data);
    const comment = Object.values(result);
    console.log(comment);
    return comment;
  };

  const getAll = async (gameId) => {
    //const query = encodeURIComponent(`?where=gameId%3D%22${gameId}%22`);
    const query = `?where=gameId%3D%22${gameId}%22`;
    console.log({gameId});
    const result = await request.get(`${baseUrl}${query}`);
    const comments = Object.values(result);
    console.log(comments);
    return comments;
  };

  return {
    create,
    getAll,
  };
};
