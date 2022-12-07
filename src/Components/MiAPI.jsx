import React, { useState, useEffect } from 'react';

function MiApp() {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        consultarInformacion();
    }, [])

    const consultarInformacion = async () => {
        const url = 'https://api.victorsanmartin.com/feriados/en.json';
        const response = await fetch(url)
        const data = await response.json()
        setInfo(data.data)

    }
      const [buscadorFeriados, setBuscadorFeriados] = useState("");

  const buscadorFeriado = (e) => {
    setBuscadorFeriados(e.target.value)
  }

    return (


        <div>
            <div>

                <div className='buscador'><h2>Buscador de Feriados por nombre</h2><input onChange={buscadorFeriado} className="form-control my-2"></input><br></br><br></br></div>
                <ul className="list-group">
                    {info.filter((fecha) => {
            return (
              fecha.title.toLowerCase().includes(buscadorFeriados.toLocaleLowerCase()))
          }).sort().map((feriado) => 
                        

                            <div className='form-control my-2' > <li key={feriado.type} className="list-group-item active" aria-current="true"><div>Fecha: {feriado.date} </div><div>Nombre: {feriado.title} </div> <div> Tipo: {feriado.extra}</div></li></div>)
                    }

                </ul></div >
        </div >
    )
}

export default MiApp;