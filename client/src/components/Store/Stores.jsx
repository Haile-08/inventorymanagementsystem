import React from "react";
import deleteLogo from "../../assets/delete.png";
import editLogo from "../../assets/edit.png";

function Stores({
  handleProductModal,
  orderlist,
  handleDelete,
  handleProductId,
}) {
  return (
    <div>
      <div className="newproduct">
        <button onClick={handleProductModal}>Add Store</button>
      </div>
      <div className="productPage">
        <div className="list">
          <div className="order-name">Store Name</div>
          <div className="order-product-name">Status</div>
          <div className="order-product-quantity"></div>
          <div className="action"></div>
        </div>
        <div className="productlistscroll">
          {orderlist?.map((item) => {
            return (
              <div className="list">
                <div className="order-name">{item.storeName}</div>
                {item.status == true ? (
                  <div className="availableIcon">
                    <p>active</p>
                  </div>
                ) : (
                  <div className="unavailableIcon">
                    <p>inactive</p>
                  </div>
                )}
                <div className="order-product-quantity"></div>
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
export default Stores;
