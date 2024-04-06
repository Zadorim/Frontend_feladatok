import React, {useState,useEffect} from "react";
import { NavLink } from "react-router-dom";


const ItalListPage = () => {

    
    const [italok,setItalok] = useState([]);
    const [isFetchPending, setFetchPending] = useState(false);

    useEffect(() => {
        setFetchPending(true);
        fetch("https://localhost:3000/italok")
        .then((response) =>response.json())
        .then((italok) => setItalok(italok))
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
                    <h2>Italok</h2>
                    {italok.map((ital) => (

                        <div className="card col-sm-3 d-inline-block m-1 p-2">
                            <p className="text-dark">Ital neve: {ital.nev}</p>
                            <p className="text-danger">Kiadás éve: {ital.kiadasEve}</p>
                            <p className="text-danger">Értékelés: {ital.ertekeles}</p>                            
                            <div className="card-body">
                                <NavLink key={ital.id} to={"/ital/" + ital.id}>
                                    <img alt={ital.nev}
                                        className="img-fluid"
                                        style={{ maxHeight: 200 }}
                                        src={ital.kepneve ? ital.kepneve :
                                            "https://via.placeholder.com/400x800"} /></NavLink>
                                <br />
                                <NavLink key="y" to={"/mod-ital/" + ital.id}>
                                    <i className="bi bi-pencil"></i></NavLink> &nbsp;&nbsp;
                                    <NavLink key="x" to={"/del-ital/" + ital.id}><i className="bi bi-trash3"></i></NavLink>
                            </div>
                        </div>


                    ))}
                </div>
            )}
        </div>
    );
}
export default ItalListPage;