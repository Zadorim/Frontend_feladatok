import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';

export function TermekDelPage(props) {
    const params = useParams();
    const id = params.italId;
    const navigate = useNavigate();
    const[ital,setItal] = useState([]);
    const[isPending, setPending] = useState(false);
    useEffect(() => {
        setPending(true);
        (async () => {
            try {
        const res= await fetch(`https://localhost:5130/Ital/${id}`)
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
                            <h5 className="card-title">Törlendő elem: {ital.nev}</h5>
                            <div className="lead">Kiadás éve: {ital.kiadasEve}</div>
                            <div className="lead">Értékelés: {ital.ertekeles}</div>
                                <img alt={ital.nev}
                                className="img-fluid rounded"
                                style={{maxHeight: "500px"}}
                                src={ital.kepneve ? ital.kepneve : 
                                "https://via.placeholder.com/400x800"} 
                                />
                              </div>
                              <form onSubmit={(event) => {                
            event.persist();
            event.preventDefault();
            fetch(`https://localhost:5130/Ital/${id}`, {
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
