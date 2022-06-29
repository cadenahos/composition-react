import React from 'react';
import { withStorageListener } from './withStorageListener';

function ChangeAlert({show, toggleShow}){
    if(show){
        return (
            <div onClick={()=> toggleShow(false)}>
                <p>Hubo Cambios</p>;
                <button>Volver a refrescar la informaciòn</button>
            </div>
        );
    }else{
        return null;
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);
export  {ChangeAlertWithStorageListener};