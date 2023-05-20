import React from "react";
import CardProduto from "./CardProduto";

export default function ListProdutos({produtos}) {
    return (
        <section class="w3-row w3-container w3-margin-top">
        {  produtos.map( prod => 
                <CardProduto key={prod.id} produto={prod}></CardProduto>
            )}
        </section>
    )
}