import React from "react";
import "./Product.css"; // Importing CSS for styling

const Product = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      {/* ✅ Handle image (from Django media) */}
      {product?.image ? (
        <img
  src={product.image.startsWith('http') ? product.image : `http://127.0.0.1:8000${product.image}`}
  alt={product?.name ?? "Product"}
  className="product-image"
/>

      ) : (
        <div className="no-image">No Image Available</div>
      )}

      {/* ✅ Product name */}
      <h3 className="product-name">{product?.name ?? "Unnamed Product"}</h3>

      {/* ✅ Product description */}
      <p className="product-description">
        {product?.description ?? "No description available."}
      </p>

      {/* ✅ Product price (₹ symbol) */}
      <p className="product-price">
        {product?.price ? `₹${product.price}` : "Price not available"}
      </p>

      {/* ✅ Add-to-cart button (only shows if handler passed) */}
      {onAddToCart && (
        <button
          className="add-to-cart-button"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default Product;
