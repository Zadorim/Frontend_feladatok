import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';

export function TermekDelPage(props) {
    const params = useParams();
    const id = params.termekId;
    const navigate = useNavigate();
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
                            <h5 className="card-title">Törlendő elem: {termek.nev}</h5>
                            <div className="lead">Termék ára: {termek.ar}</div>
                            <div className="lead">Termék leírása: {termek.leiras}</div>
                            <div className="lead">Termék kategóriák: {termek.ketagoriak}</div>
                                <img alt={termek.nev}
                                className="img-fluid rounded"
                                style={{maxHeight: "500px"}}
                                src={termek.kepneve ? termek.kepneve : 
                                "https://via.placeholder.com/400x800"} 
                                />
                              </div>
                              <form onSubmit={(event) => {                
            event.persist();
            event.preventDefault();
            fetch(`https://localhost:5130/Termek/${id}`, {
                method: "DELETE",                                
            })            
            .then(() =>
            {
                navigate("/");
            })
            .catch(console.log);
            }}>
                              <div>
<NavLink to={"/"}><button className="bi bi-backspace">&nbsp;Mégsem</button></NavLink>
&nbsp;&nbsp;
<button className="bi bi-trash3">&nbsp;Törlés</button></div></form>   
                        </div>
                    
                )}
            </div>
        );
}

export default TermekDelPage;
