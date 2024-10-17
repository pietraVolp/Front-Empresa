import { useEffect } from 'react';

const CadastroDoutor = () => {
  useEffect(() => {
    const cadastroMedico = document.getElementById('cadastro');

    if (cadastroMedico) {
      cadastroMedico.addEventListener('click', async () => {
        // Obtém os elementos do DOM apenas se o evento for disparado
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        const crm = document.getElementById('crm').value;
        const telefone = document.getElementById('telefone').value;
        const dataNascimento = document.getElementById('dataNascimento').value;
        const especialidades = document.getElementById('options').value;

        const userData = {
          nome,
          email,
          senha,
          crm,
          telefone,
          data_nascimento: dataNascimento,
          especialidades,
        };

        try {
          const response = await fetch('http://localhost:8080/v1/vital/medico', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
            redirect: 'manual',
          });

          if (response.ok) {
            const result = await response.json();
            alert('Médico cadastrado com sucesso!');
            console.log(result);
            window.location.href = '/doutores';
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
        cadastroMedico.removeEventListener('click', () => {});
      };
    } else {
      console.error('O botão de cadastro não foi encontrado no DOM');
    }
  }, []); // Executa apenas uma vez na montagem

  return null; // Este componente serve apenas para adicionar o listener
};

export default CadastroDoutor;
