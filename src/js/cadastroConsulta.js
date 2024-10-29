import { useEffect } from 'react';
import { getEspecialidade, getMedico } from '@/js/info.js';

const CadastroConsultaButton = document.getElementById('cadastro');
const especialidadeSelect = document.getElementById('especialidade');
const medicoSelect = document.getElementById('medico');
console.log(especialidadeSelect);

  // Preencher especialidades
  const listaEspecialidade = await getEspecialidade();
  console.log(listaEspecialidade);
  
  listaEspecialidade.forEach((especialidades) => {
    const option = document.createElement('option');
    option.value = especialidades.id_especialidade;
    option.textContent = especialidades.nome;
     
    
  });

  // Preencher médicos
  const listaMedico = await getMedico();
  listaMedico.forEach((medicos) => {
    const option = document.createElement('option');
    option.value = medicos.id_medico;
    option.textContent = medicos.nome;
  });


const CadastroConsulta = () => {
  useEffect(() => {
   
    

    if (CadastroConsultaButton && especialidadeSelect && medicoSelect) {
      
      CadastroConsultaButton.addEventListener('click', async () => {
        const p_nome_medico = medicoSelect.value;
        const p_nome_especialidade = especialidadeSelect.value;
        const p_detalhes_consulta = document.getElementById('detalhes').value;
        const p_dias_consulta = document.getElementById('date').value;
        const p_horas_consulta = document.getElementById('horario').value;

        const userData = {
          p_nome_medico,
          p_nome_especialidade,
          p_detalhes_consulta,
          p_dias_consulta,
          p_horas_consulta,
        };

        try {
        

          // Cadastrar consulta
          const response = await fetch('http://localhost:8080/v1/vital/consulta', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
            redirect: 'manual',
          });

          if (response.ok) {
            alert('Consulta cadastrada com sucesso!');
            window.location.href = '/consultas';
          } else {
            const result = await response.json();
            alert(`Erro: ${result.message}`);
          }
        } catch (error) {
          console.error('Erro ao cadastrar consulta:', error);
          alert('Erro ao cadastrar consulta. Tente novamente.');
        }
      });

      // Cleanup: remover o listener para evitar memory leaks
      return () => {
        CadastroConsultaButton.removeEventListener('click', () => {});
      };
    } else {
      console.error('Algum elemento não foi encontrado no DOM.');
    }
  }, []); // Executa apenas uma vez na montagem do componente

  return null;
};

export default CadastroConsulta;


