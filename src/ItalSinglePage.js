import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';

export function ItalSinglePage(props) {

    const params = useParams();
    const id = params.italId;
    const[ital,setItal] = useState([]);
    const[isPending, setPending] = useState(false);
    useEffect(() => {
        setPending(true);        
        (async () => {
            try {                
        const res= await fetch(`https://localhost:3000/Ital/${id}`)
            const ital = await res.json();
            setItal(ital);
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
            {isPending || !ital.id ? (
                <div className="spinner-border"></div>
            ) : (
                            <div className="card p-3">
                                <div className="card-body">
                                <h5 className="card-title">Ital neve: {ital.nev}</h5>
                                <div className="lead">Kiadás éve: {ital.kiadasEve}</div>
                                <div className="lead">Értékelés: {ital.ertekeles}</div>
                                    <img alt={ital.nev}
                                    className="img-fluid rounded"
                                    style={{maxHeight: "500px"}}
                                    src={ital.kepneve ? ital.kepneve : 
                                    "https://via.placeholder.com/400x800"} 
                                    />
                                  </div>
                                  <div><NavLink to="/"><i class="bi bi-backspace"></i></NavLink> &nbsp;&nbsp;&nbsp;
<NavLink key="y" to={"/mod-ital/" + ital.id}><i class="bi bi-pencil"></i></NavLink></div>   
                            </div>
                        
                    )}
                </div>
            );
}
export default ItalSinglePage;