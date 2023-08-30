import {requestFactory}  from "./requester";

const baseUrl = "http://localhost:3030/data/comments";

export const commentServiceFactory=(token)=>{

  const request=requestFactory(token);

 const create = async (data) => {
    const result = await request.post( baseUrl, data);
    const games=Object.values(result);
    return games;
  };

   const getAll = async (gameId) => {
    const query= encodeURIComponent(`gameId="${gameId}"`);
    const result = await request.get( `${baseUrl}?${query}`);
    const comments=Object.values(result);
    return comments;
  };

return{
  create,
  getAll,
};

};
