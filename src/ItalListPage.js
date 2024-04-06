import React, {useState,useEffect} from "react";
import { NavLink } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

import function ItalListPage() {
    
    const [italok,setItalok] = useState([]);
    const [isFetchPending, setFetchPending] = useState(false);

    useEffect(() => {
        setFetchPending(true);
        fetch ("https: //localhost:5130=Itallap")
        .then((response) =>response.json())
        .then((italok) => setItalok(italok))
        .catch(console.log)
        .finally(() => {
            setFetchPending(false);
        });
    }, []);
    return(

    );  
}
export default ItalListPage;