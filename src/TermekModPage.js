import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export function TermekModPage(props) {
    const params = useParams();
    const id = params.termekId;
    const navigate = useNavigate();
    const [termek,setTermek] = useState([]);
    const[modnev,setModnev] = useState('');
    const[modar,setModAr] = useState('');
    const[modleiras,setModLeiras] = useState('');
    const[modkategoriak,setModKategoriak] = useState('');
    const[modkepneve,setModKepneve] = useState('');

    useEffect(() => {
        (async () => {

            try {
                const res = await fetch(`http://localhost:5130/Termek/${id}`)
                const termek = await res.json();
                setTermek(termek);
                setModnev(termek.nev);
                console.log(modnev);
                setModAr(termek.modar);
                console.log(modar);
                setModLeiras(termek.modleiras);
                console.log(modleiras);
                setModKategoriak(termek.modkategoriak);
                console.log(modkategoriak);
                setModKepneve(termek.modkepneve);
                console.log(modkepneve);
            }
            catch(error) {
                console.log(error);
            }
        })
        (); 
    }, [id,modnev,modar,modleiras,modkategoriak,modkepneve,termek]);
   
    const modNev = event => {
        setModnev(event.target.value);
    }
    const modAr = event => {
        setModAr(event.target.value);
    }
    const modLeiras = event => {
        setModLeiras(event.target.value);
    }
    const modKategoriak = event => {
        setModKategoriak(event.target.value);
    }
    const modKepneve = event => {
        setModKepneve(event.target.value);
    }

    return (
        <div className="p-5 content bg-whitesmoke text-center">
            <h2>Termék keresése</h2>
            <form
            onSubmit={(event) => {
                event.persist();
                event.preventDefault();
                fetch(`http://localhost:5130/Termek/${id}`, {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: event.target.elements.id.value,
                        nev: event.target.elements.nev.value,
                        ar: event.target.elements.ar.value,
                        leiras: event.target.elements.leiras.value,
                        kategoriak: event.target.elements.kategoriak.value,
                        kepneve: event.target.elements.kepneve.value,
                    }),
                })
                .then(() => {
                    navigate("/");
                })
                .catch(console.log);
            }}>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Termék ID:</label>
                    <div className="col-sm-9">
                        <input type="number" name="id" className="form-control" value={termek.id}/>
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Termék név:</label>
                    <div className="col-sm-9">
                        <input type="text" name="nev" className="form-control" defaultValue={termek.nev} onChange={modNev}/>
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Termékek ára:</label>
                    <div className="col-sm-9">
                        <input type="text" name="ar" className="form-control" defaultValue={termek.ar} onChange={modAr}/>
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Termék leírása:</label>
                    <div className="col-sm-9">
                        <input type="text" name="leiras" className="form-control" defaultValue={termek.leiras} onChange={modLeiras}/>
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Termék kategóriák:</label>
                    <div className="col-sm-9">
                        <input type="text" name="kategoriak" className="form-control" defaultValue={termek.kategoriak} onChange={modKategoriak}/>
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Kép URL-je:</label>
                    <div className="col-sm-9">
                        <input type="text" name="kepneve" className="form-control" defaultValue={termek.kepneve} onChange={modKepneve}/>
                    <img src={process.env.PUBLIC_URL + '/' + termek.kepneve} height="200px" alt={termek.nev}/>
                    </div>
                </div>
                <button type="submit" className="btn btn-success">Küldés</button>
            </form>
        </div>
    );
}
export default TermekModPage;
