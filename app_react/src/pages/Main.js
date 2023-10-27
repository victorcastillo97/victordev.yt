import React, { useEffect, useState }  from "react";
import Header from '../components/Header';
import ActionBar from '../components/ActionBar'
import ProductTable from '../components/ProductTable'
import ModalConfirmation from '../components/ModalConfirmation'
import ModalForm from '../components/ModalForm'

export default function Main(){
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [showModalForm, setShowModalForm] = useState(false);

    return(
        <>
            <Header/>
            <ActionBar openModalForm={()=>setShowModalForm(true)}/>
            <ProductTable openModalDelete={() => setShowModalDelete(true)}/>
            <ModalConfirmation show={showModalDelete} onHide={() => setShowModalDelete(false)}/>
            <ModalForm show={showModalForm} onHide={() => setShowModalForm(false)}/>
        </>
    )
}