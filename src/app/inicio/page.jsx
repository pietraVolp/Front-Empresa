import NavBarLayout from "@/components/layout/NavBarLayout";
import Image from "next/image"; // Ajuste o caminho conforme necessário

export default function Inicio() {
    return (
        <div className="flex flex-col">
            <NavBarLayout>
            
                <div className="flex-1 p-4">
                    {/* <h1>Estou na Home</h1> */}



                    {/* Div para o inupt e img  */}
                    <div className="fixed  right-4">
                <div className="relative">
                    <input 
                        type="text" 
                        placeholder="Pesquisar..."
                        className="bg-[--navempresa] rounded-lg pl-3 pr-10 py-2 border focus:border-blue-500 focus:bg-blue-50 transition-all" 
                    />
                    <Image 
                        src="/img/lupa.png" // Substitua pelo caminho correto da sua imagem
                        alt="Lupa"
                        width={20} // Ajuste conforme necessário
                        height={20} // Ajuste conforme necessário
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    />
                </div>
            </div>


            {/* Div para exibir o geral de consultas disponíveis */}
            <div>
                <h1>Consultas</h1>
            </div>

            {/* Div para exibir a galeria de vídeo */}
            <div>
                <h1>Galeria</h1>
            </div>


                    {/* Aqui você pode adicionar mais conteúdo */}
                </div>
            </NavBarLayout>
        </div>
    );
}