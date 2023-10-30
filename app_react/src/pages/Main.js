import React, { useState }  from "react";
import Header from '../components/Header';
import ActionBar from '../components/ActionBar'
import ProductTable from '../components/ProductTable'
import ModalConfirmation from '../components/ModalConfirmation'
import ModalForm from '../components/ModalForm'

export default function Main(){
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [showModalAddProduct, setShowModalAddProduct] = useState(false);
    const [showModalUpdateProduct, setShowModalUpdateProduct] = useState(false);
    
    const [showModalForm, setShowModalForm] = useState(false);
    const [products, setProducts] = useState([]);

    const addProdut = (product) =>{
        setProducts([...products, product]);
    };

    return(
        <>
            <Header/>
            <ActionBar openModalForm={()=>setShowModalForm(true)}/>
            <ProductTable openModalUpdateProduct={()=>setShowModalUpdateProduct(true)} openModalDelete={() => setShowModalDelete(true)}/>
            <ModalConfirmation show={showModalDelete} onHide={() => setShowModalDelete(false)}/>
            <ModalForm show={showModalForm} onHide={() => setShowModalForm(false)} onSubmit={addProdut}/>
        </>
    )
    
    //<ModalForm show={showModalAddProduct} onHide={() => setShowModalAddProduct(false)}/>
    //<ModalForm show={showModalUpdateProduct} onHide={() => setShowModalUpdateProduct(false)}/>
}