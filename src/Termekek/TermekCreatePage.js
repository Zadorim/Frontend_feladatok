import { useNavigate } from "react-router-dom";

export function TermekCreatePage(){
    const navigate = useNavigate();
    return (
        <div className="p-5 content bg-whitesmoke text-center">
            <h2>Új termék</h2>
            <form
            onSubmit={(event) => {                
            event.persist();
            event.preventDefault();
            fetch(`http://localhost:5130/Termek`, {
                method: "POST",                
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
            
            .then(() =>
            {
                navigate("/");
            })
            .catch(console.log);
            }}>
            <div className="form-group row pb-3">
                <label className="col-sm-3 col-form-label">Termék neve:</label>
                <div className="col-sm-9">
                <input type="text" name="nev" className="form-control" />
                </div>
            </div>
            <div className="form-group row pb-3">
                <label className="col-sm-3 col-form-label">Termék ára</label>
                <div className="col-sm-9">
                <input type="number" name="ar" className="form-control" />
                </div>
            </div>
            <div className="form-group row pb-3">
                <label className="col-sm-3 col-form-label">Termék leírása</label>
                <div className="col-sm-9">
                <input type="text" name="leiras" className="form-control" />
                </div>
            </div>
            <div className="form-group row pb-3">
                <label className="col-sm-3 col-form-label">Termék kategóriák:</label>
                <div className="col-sm-9">
                <input type="text" name="kategoriak" className="form-control" />
                </div>
            </div>
            <div className="form-group row pb-3">
                <label className="col-sm-3 col-form-label">Kép URL-je:</label>
                <div className="col-sm-9">
                <input type="text" name="kepneve" className="form-control" />
                </div>
            </div>
            <button type="submit" className="btn btn-success">
                Küldés
            </button>
            </form>
        </div>
    );
}
export default TermekCreatePage;
