

const baseUrl = 'http://localhost:3005/api/users';

export const getAll=async()=>{
    const response= await fetch(baseUrl);
    const result= await response.json();
  

    return result.users;

};

export const getById = async(userId)=>{
    const response= await fetch(`${baseUrl}/${userId}`);
    const result= await response.json();
   
    return result.user;
};

export const create =async(userData)=>{
    const json_=JSON.stringify(userData);
    console.log(json_);
    const response=await fetch(baseUrl,{
        method:'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(userData),

    } );
    const result= await response.json();
    
       return result.user;
   
};
export const remove = async(userId)=>{
   
    const response=await fetch(`${baseUrl}/${userId}`,{
        method:'DELETE',   

    } );
    const result= await response.json();
    console.log(result);
       return result;
 
};
export const editUser =async(userData)=>{

    const response=await fetch(`${baseUrl}/${userData._id}`,{
        method:'PUT',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(userData),

    } );
    const result= await response.json();
    
       return result.user;
   
};