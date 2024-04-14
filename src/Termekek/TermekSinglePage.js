import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';

export function TermekSinglePage(props) {

    const params = useParams();
    const id = params.termek.Id;
    const[termek,setTermek] = useState([]);
    const[isPending, setPending] = useState(false);
    useEffect(() => {
        setPending(true);        
        (async () => {
            try {                
        const res= await fetch(`http://localhost:5130/Termek/${id}`)
            const termek = await res.json();
            setTermek(termek);
        }
        catch(error) {
            console.log(error);
        }
        finally {
            setPending(false);
        }
    })
    ();
 }, [id]); 
    return (
        <div className="p-5 m-auto text-center content bg-lavender">
            {isPending || !termek.id ? (
                <div className="spinner-border"></div>
            ) : (
                            <div className="card p-3">
                                <div className="card-body">
                                <h5 className="card-title">Termék neve: {termek.nev}</h5>
                                <div className="lead">Termék ára: {termek.ar}</div>
                                <div className="lead">Termék leírása: {termek.leiras}</div>
                                <div className="lead">Termék kategóriák: {termek.kategoriak}</div>                                
                                    <img alt={termek.nev}
                                    className="img-fluid rounded"
                                    style={{maxHeight: "500px"}}
                                    src={termek.kepneve ? termek.kepneve : 
                                    "https://via.placeholder.com/400x800"} 
                                    />
                                  </div>
                                  <div><NavLink to="/"><i class="bi bi-backspace"></i></NavLink> &nbsp;&nbsp;&nbsp;
<NavLink key="y" to={"/mod-ital/" + termek.id}><i class="bi bi-pencil"></i></NavLink></div>   
                            </div>                        
                    )}
                </div>
            );
}
export default TermekSinglePage;