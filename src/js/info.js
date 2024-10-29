export async function getEspecialidade(){
    const url = `https://vital-umqy.onrender.com/v1/vital/especialidade`
    const response = await fetch(url)
    const data = await response.json()
    return data.especialidades
}


export async function getMedico(){
    const url = `https://vital-umqy.onrender.com/v1/vital/medico`
    const response = await fetch(url)
    const data = await response.json()
    return data.medicos
}

export async function getConsultas(){
    const url = `https://vital-umqy.onrender.com/v1/vital/consulta`
    const response = await fetch(url)
    const data = await response.json()
    return data.consultas
}

export async function getConsulta (id) {
    const url = `http://vital-umqy.onrender.com/v1/vital/consulta/${id}`
    const response = await fetch(url)
    const data = await response.json()
    return data.consulta[0]
 }