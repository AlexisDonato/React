import {React, useState} from 'react';

const App = (props) => {

    const [nom, setNom] = useState("");

    const handleChangeNom = (evt) => {
        setNom(evt.target.value);
    }

    return (
        <div>
            <div>
                Bonjour
                &nbsp;
                <span className='bolder'>
                    {nom}
                </span>
            </div>
            <input type="text" value={nom} onChange={handleChangeNom}/>
        </div>
    );
}

export { App };