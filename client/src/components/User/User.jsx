import React from "react";
import deleteLogo from "../../assets/delete.png";
import editLogo from "../../assets/edit.png";

function User({
  handleProductModal,
  productlist,
  handleDelete,
  handleProductId,
}) {
  return (
    <div>
      <div className="newproduct">
        <button onClick={handleProductModal}>Add Customer</button>
      </div>
      <div className="productPage">
        <div className="list">
          <div className="order-name">Customer Name</div>
          <div className="order-product-name">Address</div>
          <div className="order-product-quantity">Phone</div>
          <div className="action"></div>
        </div>
        <div className="productlistscroll">
          {productlist?.map((item) => {
            return (
              <div className="list">
                <div className="order-name">{item.customerName}</div>
                <div className="order-product-name">{item.Address}</div>
                <div className="order-product-quantity">{item.Phone}</div>
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

export default User;
