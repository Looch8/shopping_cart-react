// Display list of available products
import { useState } from "react";
import ProductItem from "./ProductItem";

function ProductList() {
	const [listOfProducts, setListOfProducts] = useState([]);

	// Add productItem to ProductList
	const addProductToList = (item) => {
		setListOfProducts([...listOfProducts, item]);
	};

	return (
		<div>
			<h1>List of Products:</h1>
			<ul>
				{listOfProducts.map((item, index) => {
					<li key={index}>{item}</li>;
				})}
			</ul>
		</div>
	);
}

export default ProductList;
