const BASE_URL = "https://app-preproject-hom.azurewebsites.net";

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
export const cadastrarVeterinario = async (data?: any) => {
    return await fetch(`${BASE_URL}/ProfissionalVeterinario/cadastrarProfissionalVeterinario`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
}

export const setUserToken = (accessToken: any) => {
    access_token =  accessToken
}

export const filtrarTrabalhos = async (jobFilters: any, experienceFilters: any) => {
    const queryString = new URLSearchParams({
        veterinario: jobFilters.veterinario,
        auxiliar: jobFilters.auxiliar,
        anestesista: jobFilters.anestesista,
        cirurgiao: jobFilters.cirurgiao,
        under1year: experienceFilters.under1year,
        between1to2years: experienceFilters.between1to2years,
        between2to6years: experienceFilters.between2to6years,
        moreThan6years: experienceFilters.moreThan6years
    }).toString()

    // url está correta?
    const response = await fetch(`${BASE_URL}/buscarTrabalhos?${queryString}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    if(!response.ok){
        throw new Error("Falha ao buscar trabalhos")
    }

    return response.json()
}