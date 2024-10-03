import NavBarLayout from "@/components/layout/NavBarLayout";
import Image from "next/image"; // Ajuste o caminho conforme necessário

export default function Consultas() {



    return (
        <div className="flex flex-col">
            <NavBarLayout>

                <div className="flex-1 p-4">



                    <div className="flex">
                    <h1 className="text-4xl font-bold text-blue-900 p-10">CONSULTAS</h1>

                    <div className="relative">
                    <input type="text" placeholder="Pesquisar..."className="bg-[--navempresa] rounded-lg w-96 h-14 border focus:border-blue-900 focus:bg-blue-5 transition-all" 
                    />
                   
                    </div>

                    </div>



                    {/* Div para o botao cadastrar*/}

                 <div>
                    <button className="bg-[--navempresa] w-[40vh] h-[8vh] rounded-full">
                        <h1 className="text-[--font] font-bold" >CADASTRAR CONSULTA +</h1>
                    </button>
                 </div>



                    <div>
                        <h1>Consultas</h1>
                    </div>



                    {/* Aqui você pode adicionar mais conteúdo */}
                </div>
            </NavBarLayout>
        </div>
    );
}