import React from "react";

import ProductorRoutes from "./ProductorRoutes";
import MelhoresProdutores from "../screens/MelhoresProdutores";

export default function BestProductorsRoutes() {
    return <ProductorRoutes ComponentePrincipal={MelhoresProdutores}/>
}