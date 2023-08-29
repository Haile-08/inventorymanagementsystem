import React from "react";
import "../../App.css";
import deleteLogo from "../../assets/delete.png";
import editLogo from "../../assets/edit.png";

function Product({
  handleProductModal,
  productlist,
  handleDelete,
  handleProductId,
}) {
  return (
    <div>
      <div className="newproduct">
        <button onClick={handleProductModal}>Add Product</button>
      </div>
      <div className="productPage">
        <div className="list">
          <div className="productList">Product</div>
          <div className="price">Price</div>
          <div className="quantity">quantity</div>
          <div className="store">store</div>
          <div className="availability">Availability</div>
          <div className="action"></div>
        </div>
        <div className="productlistscroll">
          {productlist?.map((item) => {
            return (
              <div className="list">
                <div className="productList">{item.product}</div>
                <div className="price">{item.price}</div>
                <div className="quantity">{item.quantity}</div>
                <div className="store">{item.store}</div>
                {item.Availability == true ? (
                  <div className="availableIcon">
                    <p>available</p>
                  </div>
                ) : (
                  <div className="unavailableIcon">
                    <p>unavailable</p>
                  </div>
                )}
                <div className="action">
                  <button
                    className="delete"
                    onClick={() => handleDelete(item._id)}
                  >
                    <img src={deleteLogo} alt="delete" />
                  </button>
                  <button
                    className="edit"
                    onClick={() => handleProductId(item._id)}
                  >
                    <img src={editLogo} alt="edit" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Product;
