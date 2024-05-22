const BASE_URL = "https://ecovet-api-a70660ac3f23.herokuapp.com";

let access_token = ''

export const get = async (url: string) => {
    return await fetch(`${BASE_URL}/${url}`,{
        method: "GET",
        headers: {
            'Authorization' : `Bearer ${access_token}`            
        },
    })
    .then(response => response.json())
}

export const post = async (url: string, data?: any) => {
    return await fetch(`${BASE_URL}/${url}`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Authorization' : `Bearer ${access_token}`            
        },
        body: JSON.stringify(data)
    })
}
export const put = async (url: string, data?: any) => {
    return await fetch(`${BASE_URL}/${url}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            'Authorization' : `Bearer ${access_token}`            
        },
        body: JSON.stringify(data)
    })
}
export const cadastrarVeterinario = async (data?: any) => {
    return await fetch(`${BASE_URL}/ProfissionalVeterinario/cadastrarProfissionalVeterinario`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
}
export const login = async (data?: any) => {
    return await fetch(`${BASE_URL}/Auth/login`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
}

export const setUserToken = (accessToken: any) => {
    console.log("set token")
    console.log(accessToken)
    access_token =  accessToken
}

export const getAllUserJobs = async () => {
    const response = await fetch(`${BASE_URL}/jobs`);
    if (!response.ok) {
      throw new Error("Erro ao buscar vagas");
    }
  
    const data = await response.json();
  
    return data;
  };