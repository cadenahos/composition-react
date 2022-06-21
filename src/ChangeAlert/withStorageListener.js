import React from 'react';
function withStorageListener(WrappedComponent){
return function WrappedComponentWithStorageListener(props){

    const [storageChange, setStorageChange] = React.useState(false);
    window.addEventListener('storage', change =>{
        console.log('blue');
        if(change.key === 'TODOS_V1') {
            console.log('Cambios en TODOS_V1');
            setStorageChange(true);
        }
    });
    return (
    <WrappedComponent 
    show={storageChange}
    toggleShow={setStorageChange}
    />
    );
}
}
export {withStorageListener};