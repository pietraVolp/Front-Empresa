import NavBarLayout from "@/components/layout/NavBarLayout";
import Image from "next/image"; // Ajuste o caminho conforme necessário


export default function Consultas() {

    



    return (
        <div className="flex flex-col">
            <NavBarLayout>

                <div className="flex-1 p-4">



                    <div className="flex">
                    <h1 className="text-4xl font-bold text-[--font] p-10">CONSULTAS</h1>

                    <div className="relative">
                    <input type="text" placeholder="Pesquisar..."className="bg-[--navempresa] ml-[500px] pl-3 pr-10 py-2 mt-[50px] rounded-full w-96 h-14 border focus:border-blue-900 focus:bg-blue-5 transition-all" 
                    />
                   
                    </div>

                    </div>



                    {/* Div para o botao cadastrar*/}

                 <div>
                    <button className="bg-[--font] w-[25vh] h-[5vh] rounded-full ml-[130vh] mt-[10vh]">
                        <h1 className="text-white font-bold" >CADASTRAR CONSULTA +</h1>
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