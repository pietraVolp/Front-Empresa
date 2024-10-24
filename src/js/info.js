export async function getEspecialidade(){
    const url = `http://localhost:8080/v1/vital/especialidade`
    const response = await fetch(url)
    const data = await response.json()
    return data.especialidades
}


export async function getMedico(){
    const url = `http://localhost:8080/v1/vital/medico`
    const response = await fetch(url)
    const data = await response.json()
    return data.medicos
}