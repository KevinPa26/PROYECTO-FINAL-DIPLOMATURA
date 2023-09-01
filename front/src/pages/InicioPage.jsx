import Navbar from "../components/navbar"

const InicioPage = () => {
    return (
        <div className="flex flex-col">
            <Navbar/>
            <div className="flex flex-col h-[calc(100vh-100px)] items-center">
                <div className="w-full flex justify-center mt-5">
                    <h1 className="text-3xl text-bold">BIENVENIDOS A CARPINTERIA KEVIN</h1>
                </div>
                {/* <h1 className="text-3xl text-bold">BIENVENIDOS A CARPINTERIA KEVIN</h1> */}
                <div className="flex justify-between w-full mt-2">
                    <div className="flex w-1/2 mt-2 border border-b-2 p-5 rounded-md">
                        <img src="./img/madera1.jpg" alt="" className="w-[400px]" />
                        <div>
                            <h2 className="text-2xl  text-bold ml-2">NUEVA ADQUISICIÓN</h2>
                            <p className="text-white text-bold bg-zinc-700  h-[200px] ml-2 rounded-md p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores suscipit, delectus aliquid repellat eum cumque labore, fugit omnis magni, incidunt consequatur debitis molestiae numquam! Error, autem voluptates. Adipisci, quasi commodi!</p>
                        </div>
                    </div>
                    <div className="w-1/2 flex items-center justify-center">
                        <h2 className="text-2xl text-bold">ESTO FUE</h2>
                    </div>
                </div>
                <div className="flex justify-between w-full mt-2">
                    <div className="w-1/2 flex items-center justify-center">
                        <h2 className="text-2xl text-bold">CREADO POR</h2>
                    </div>
                    <div className="flex w-1/2 mt-2 border border-b-2 p-5 rounded-md">
                        <img src="./img/madera2.jpg" alt="" className="w-[400px]" />
                        <div>
                            <h2 className="text-2xl  text-bold ml-2">VIEJOS</h2>
                            <p className="text-white text-bold bg-zinc-700  h-[200px] ml-2 rounded-md p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores suscipit, delectus aliquid repellat eum cumque labore, fugit omnis magni, incidunt consequatur debitis molestiae numquam! Error, autem voluptates. Adipisci, quasi commodi!</p>
                        </div>
                    </div>
                    
                </div>
                <div className="flex justify-betweenw-full mt-2">
                    <div className="flex w-1/2 mt-2 border border-b-2 p-5 rounded-md">
                        <img src="./img/madera3.jpg" alt="" className="w-[400px]" />
                        <div>
                            <h2 className="text-2xl  text-bold ml-2">SIMPLES</h2>
                            <p className="text-white text-bold bg-zinc-700  h-[200px] ml-2 rounded-md p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores suscipit, delectus aliquid repellat eum cumque labore, fugit omnis magni, incidunt consequatur debitis molestiae numquam! Error, autem voluptates. Adipisci, quasi commodi!</p>
                        </div>
                    </div>
                    <div className="w-1/2 flex items-center justify-center">
                        <h2 className="text-2xl text-bold">KEVIN PAREDES</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InicioPage

