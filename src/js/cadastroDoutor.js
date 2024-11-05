import { useRef } from 'react';

const CadastroDoutor = () => {
  const cadastroMedicoRef = useRef(null);

  const handleCadastroClick = async () => {
    // Obtém os valores diretamente
    const nome = document.getElementById('nome')?.value || '';
    const email = document.getElementById('email')?.value || '';
    const senha = document.getElementById('senha')?.value || '';
    const crm = document.getElementById('crm')?.value || '';
    const telefone = document.getElementById('telefone')?.value || '';
    const dataNascimento = document.getElementById('dataNascimento')?.value || '';

    let especialidades = [];
    const optionsElement = document.getElementById('options');
    if (optionsElement) {
      // Verifica se o select permite múltiplas escolhas e se possui opções selecionadas
      if (optionsElement.multiple && optionsElement.selectedOptions) {
        especialidades = Array.from(optionsElement.selectedOptions).map(option => option.value);
      } else if (!optionsElement.multiple) {
        especialidades = optionsElement.value ? [optionsElement.value] : [];
      }
    } else {
      console.error('Elemento options não encontrado');
    }

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
      console.log(userData);
      const response = await fetch('http://vital-umqy.onrender.com/v2/vital/medico', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
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
  };

  return (
    <button
      id="cadastro"
      ref={cadastroMedicoRef}
      onClick={handleCadastroClick}
      className="bg-[--font] w-[25vh] h-[5vh] rounded-full ml-[130vh] mt-[10vh]"
    >
      <h1 className="text-white font-bold">CADASTRAR DOUTORES +</h1>
    </button>
  );
};

export default CadastroDoutor;
