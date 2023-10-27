import React, { useEffect, useState }  from "react";
import Header from '../components/Header';
import ActionBar from '../components/ActionBar'
import ProductTable from '../components/ProductTable'
import ModalConfirmation from '../components/ModalConfirmation'

export default function Main(){
    const [showModalDelete, setShowModalDelete] = useState(false);

    return(
        <>
            
            <Header/>
            <ActionBar/>
            <ProductTable openModalDelete={() => setShowModalDelete(true)}/>
            <ModalConfirmation show={showModalDelete} onHide={() => setShowModalDelete(false)}/>
            
        </>
    )
}