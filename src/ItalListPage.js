import React, {useState,useEffect} from "react";
import { NavLink } from "react-router-dom";


export function TermekListPage() {

    
    const [termekek,setTermekek] = useState([]);
    const [isFetchPending, setFetchPending] = useState(false);

    useEffect(() => {
        setFetchPending(true);
        fetch("http://localhost:5130/Termek")
        .then((response) =>response.json())
        .then((termekek) => setItalok(termekek))
        .catch(console.log)
        .finally(() => {
            setFetchPending(false);
        });
    }, []);
    return (
        <div className="p-5 m-auto text-center content bg-ivory">
            {isFetchPending ? (
                <div className="spinner-border"></div>
            ) : (
                <div>
                    <h2>Termékek</h2>
                    {termekek.map((termek) => (

                        <div className="card col-sm-3 d-inline-block m-1 p-2">
                            <p className="text-dark">Termék neve: {termek.nev}</p>
                            <p className="text-danger">Termék ára: {termek.ar}</p>
                            <p className="text-danger">Termék leírása: {termek.leiras}</p> 
                            <p className="text-danger">Termék kategóriák: {termek.kategoriak}</p>                           
                            <div className="card-body">
                                <NavLink key={termek.id} to={"/termek/" + termek.id}>
                                    <img alt={termek.nev}
                                        className="img-fluid"
                                        style={{ maxHeight: 200 }}
                                        src={termek.kepneve ? termek.kepneve :
                                            "https://via.placeholder.com/400x800"} /></NavLink>
                                <br />
                                <NavLink key="y" to={"/mod-termek/" + termek.id}>
                                    <i className="bi bi-pencil"></i></NavLink> &nbsp;&nbsp;
                                    <NavLink key="x" to={"/del-termek/" + termek.id}><i className="bi bi-trash3"></i></NavLink>
                            </div>
                        </div>


                    ))}
                </div>
            )}
        </div>
    );
}
export default TermekListPage;