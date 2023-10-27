import React from "react";
import Header from '../components/Header';
import ActionBar from '../components/ActionBar'
import ProductTable from '../components/ProductTable'

export default function Main(){
    return(
        <>
            <Header/>
            <ActionBar/>
            <ProductTable/>
        </>
    )
}