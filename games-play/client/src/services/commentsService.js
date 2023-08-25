import * as request  from "./requester";

const baseUrl = "http://localhost:3030/jsonstore/comments";

export const create = async (data) => {
    const result = await request.post( baseUrl, data);
    const games=Object.values(result);
    return games;
  };

  export const getAll = async (gameId) => {
    const query= encodeURIComponent(`gameId="${gameId}"`);
    const result = await request.get( `${baseUrl}?${query}`);
    const comments=Object.values(result);
    return comments;
  };