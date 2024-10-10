'use strict'

document.addEventListener('DOMContentLoaded', () => {
  // Obtém os elementos do DOM
  const medico = document.getElementById('medico')
  const especialidade = document.getElementById('especialidade')
  const detalhes = document.getElementById('detalhes')
  const data = document.getElementById('date')
  const horario = document.getElementById('horario')
  const cadastro = document.getElementById('cadastro')
 

  // Verifica se o botão foi encontrado
  if (cadastro) {
    cadastro.addEventListener('click', async () => {
      const userData = {
        p_nome_medico:        medico.value,
        p_nome_especialidade: especialidade.value,
        p_detalhes_consulta:  detalhes.value,
        p_dias_consulta:      data.value,
        p_horas_consulta:     horario.value,
       
       
      }

      try {
        const response = await fetch('http://localhost:8080/v1/vital/consulta', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
          redirect: 'manual'  // Evita seguir redirecionamentos automaticamente
        })

        // Verifica o código de status da resposta
        if (response.ok) {
          const result = await response.json()
          alert('Consulta cadastrado com sucesso!')
          console.log(result)
          window.location.href = '../app/consultas/page.jsx'
        } else {
          const result = await response.json()
          alert(`Erro: ${result.message}`)
        }
      } catch (error) {
        console.error('Erro ao cadastrar usuário:', error)
        alert('Erro ao cadastrar usuário. Tente novamente.')
      }
    })
  } else {
    console.error('O botão de cadastro não foi encontrado no DOM')
  }
})


