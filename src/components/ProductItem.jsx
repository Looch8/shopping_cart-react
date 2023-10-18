import { useState } from "react";

function ProductItem() {
	const [product, setProduct] = useState("");

	const handleProductChange = (e) => {
		setProduct(e.target.value);
	};

	const handleAddToProductList = () => {
		if (product) {
			// Call the function passed from ProductList to add the product
			addProductToList(product);
			setProduct(""); // Clear the input field
		}
	};

	return (
		<div>
			<label>
				Please enter your Product:
				<input
					type="text"
					value={product}
					onChange={handleProductChange}
				/>
				<button onClick={handleAddToProductList}>Add to Cart</button>
			</label>
		</div>
	);
}

export default ProductItem;
