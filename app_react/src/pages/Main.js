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
    
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null); 
    const [showModalForm, setShowModalForm] = useState(false);
    const [cont, setCont] = useState(0);

    const addProduct = (product) =>{
        setProducts([...products, {...product, "id": cont}]);
        setCont(cont + 1);
    };

    const seeDeletingProduct = (product) => {
        setSelectedProduct(product);
        setShowModalDelete(true);
    };

    const seeUpdatingProduct = (product) => {
        setSelectedProduct(product);
        setShowModalForm(true);
    };

    const deleteProduct = () => {
        setProducts(products.filter(product => product.id !== selectedProduct.id));
        setShowModalDelete(false);
        setSelectedProduct(null);
    };

    return(
        <>
            <Header/>
            <ActionBar openModalForm={()=>setShowModalForm(true)}/>
            <ProductTable products={products} openModalDelete={seeDeletingProduct} openModalUpdate={seeUpdatingProduct}/>
            <ModalConfirmation show={showModalDelete} onHide={() => {setShowModalDelete(false); setSelectedProduct(null);}} onConfirmation={deleteProduct}/>
            <ModalForm show={showModalForm} onHide={() => {setShowModalForm(false);setSelectedProduct(null);}} onSubmit={addProduct} productSelected={selectedProduct}/>
        </>
    )
    
    
}