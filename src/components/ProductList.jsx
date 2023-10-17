// Display list of available products
import { useState } from "react";
import ProductItem from "./ProductItem";

function ProductList() {
	const [listOfProducts, setListOfProducts] = useState([]);

	return <h1>List of Products: {listOfProducts}</h1>;
}

export default ProductList;
