import Navbar from "../components/navbar"
import {Link} from "react-router-dom"

const NosotrosPage = () => {
    return (
        <div className="flex flex-col">
            <Navbar/>
            <div className="flex flex-col h-[calc(100vh-100px)]">
                <div className="w-full flex justify-center mt-5">
                    <h1 className="text-3xl text-bold">NOSOTROS</h1>
                </div>
                <div className="flex flex-col mt-5">
                    {/* <div className="flex justify-center">
                        <h2>NOS PRESENTAMOS</h2>
                    </div> */}
                    <div className="flex gap-x-2 ">
                        <div className="flex flex-col w-1/5 p-5 border border-b-2 rounded-md items-center justify-center">
                            <img src="./img/nosotros1.jpg" alt="" className="w-[200px]"/>
                            <p className="text-xl text-bold text-white">Carlos</p>
                            <p className="text-white">Hola soy Carlos y administro el sitio web.</p>
                        </div>
                        <div className="flex flex-col w-1/5 p-5 border border-b-2 rounded-md items-center justify-center">
                            <img src="./img/nosotros2.jpg" alt="" className="w-[200px]"/>
                            <p className="text-xl text-bold text-white">Maria</p>
                            <p className="text-white">Hola soy Maria y estoy encargada de las consultas.</p>
                        </div>
                        <div className="flex flex-col w-1/5 p-5 border border-b-2 rounded-md items-center justify-center">
                            <img src="./img/nosotros3.jpg" alt="" className="w-[200px]"/>
                            <p className="text-xl text-bold text-white">Pedro</p>
                            <p className="text-white">Hola soy Pedro, el contador de la empresa.</p>
                        </div>
                        <div className="flex flex-col w-1/5 p-5 border border-b-2 rounded-md items-center justify-center">
                            <img src="./img/nosotros4.jpg" alt="" className="w-[200px]"/>
                            <p className="text-xl text-bold text-white">Patricia</p>
                            <p className="text-white">Hola soy Patricia y estoy encargada de los envíos.</p>
                        </div>
                        <div className="flex flex-col w-1/5 p-5 border border-b-2 rounded-md items-center justify-center">
                            <img src="./img/nosotros5.jpg" alt="" className="w-[200px]"/>
                            <p className="text-xl text-bold text-white">Marcelo</p>
                            <p className="text-white">Hola soy Marcelo estoy ah cargo del marketing.</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-around mt-5">
                    <div className="flex text-white gap-x-2">
                        <div className="flex flex-col items-center justify-center border border-b-2 p-2 rounded-md">
                            <h2 className="text-2xl text-bold">Envíos aereos</h2>
                            <img src="./img/aereo.jpg" alt="" />
                        </div>
                        <div className="flex flex-col items-center justify-center border border-b-2 p-2 rounded-md">
                            <h2 className="text-2xl text-bold">Envíos terrestres</h2>
                            <img src="./img/terrestre.jpg" alt="" />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl text-bold text-white">REALIZAMOS ENVÍOS A TODO EL MUNDO</h2>
                        <h2 className="text-2xl text-bold text-white">ENVIANOS TUS CONSULTAS <Link to='/contacto' className="text-bold text-blue-500 mr-2">AQUÍ</Link></h2>
                    </div>
                    <div className="flex text-white gap-x-2">
                        <div className="flex flex-col items-center justify-center border border-b-2 p-2 rounded-md">
                            <h2 className="text-2xl text-bold">Envíos terrestres</h2>
                            <img src="./img/ferroviario.jpg" alt="" />
                        </div>
                        <div className="flex flex-col items-center justify-center border border-b-2 p-2 rounded-md">
                            <h2 className="text-2xl text-bold">Envíos terrestres</h2>
                            <img src="./img/maritimo.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NosotrosPage