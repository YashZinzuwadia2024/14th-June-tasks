import Navbar from "./Navbar";
import "./ProductList.css";

const ProductList = () => {
    const products = [
        {
            id: 10001,
            name: "Basics to Advanced In Node.js",
            price: 30,
            in_stock: true
        },
        {
            id: 10002,
            name: "Basics to Advanced In React.js",
            price: 35,
            in_stock: true
        },
        {
            id: 10003,
            name: "Basics to Advanced In Angular.js",
            price: 25,
            in_stock: false
        },
        {
            id: 10005,
            name: "Basics to Advanced In MERN Stack",
            price: 45,
            in_stock: true
        },
        {
            id: 10004,
            name: "Basics to Advanced In Java",
            price: 40,
            in_stock: false
        }
    ];
    return (
        <div className="ProductList">
            <Navbar />
            <div className="products">
                <h2>Products</h2>
                {
                    products.map(product => (
                        <div key={product.id} className="product-card">
                            <p className="id">{product.id}</p>
                            <p>{product.name}</p>
                            <div className="info">
                                <span>${product.price}</span>
                                <span className={product.in_stock ? "inStock" : "unavailable"}>{product.in_stock ? "In Stock" : "Unavailable"}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductList;
