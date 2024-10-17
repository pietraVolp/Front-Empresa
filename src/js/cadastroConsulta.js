import { useEffect } from 'react';

const CadastroConsulta = () => {
  useEffect(() => {
    const CadastroConsulta = document.getElementById('cadastro');

    if (CadastroConsulta) {
            // Obtém os elementos do DOM apenas se o evento for disparado
      CadastroConsulta.addEventListener('click', async () => {
        const p_nome_medico = document.getElementById('medico').value;
        const p_nome_especialidade = document.getElementById('especialidade').value;
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
          const response = await fetch('http://localhost:8080/v1/vital/consulta', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
            redirect: 'manual',
          });

          if (response.ok) {
            const result = await response.json();
            alert('Consulta cadastrada com sucesso!');
            console.log(result);
            window.location.href = '/consultas';
          } else {
            const result = await response.json();
            alert(`Erro: ${result.message}`);
          }
        } catch (error) {
          console.error('Erro ao cadastrar usuário:', error);
          alert('Erro ao cadastrar usuário. Tente novamente.');
        }
      });

      // Cleanup para evitar memory leaks
      return () => {
        CadastroConsulta.removeEventListener('click', () => {});
      };
    } else {
      console.error('O botão de cadastro não foi encontrado no DOM');
    }
  }, []); // Executa apenas uma vez na montagem

  return null; // Este componente serve apenas para adicionar o listener
};

export default CadastroConsulta;


