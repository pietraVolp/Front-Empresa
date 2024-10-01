import NavBarLayout from "@/components/layout/NavBarLayout";
import Image from "next/image"; // Ajuste o caminho conforme necessário

export default function Inicio() {
    return (
        <div className="flex flex-col">
            <NavBarLayout>

                <div className="flex-1 p-4">
                    {/* <h1>Estou na Home</h1> */}



                    {/* Div para o botao cadastrar*/}

                 <div>
                    <button className="bg-[--navempresa] w-[40vh] h-[8vh] rounded-full">
                        <h1 className="text-[--font] font-bold" >CADASTRAR MÉDICO +</h1>
                    </button>
                 </div>



                    <div>
                        <h1>Doutores</h1>
                    </div>



                    {/* Aqui você pode adicionar mais conteúdo */}
                </div>
            </NavBarLayout>
        </div>
    );
}