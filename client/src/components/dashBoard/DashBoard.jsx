import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import deleteLogo from "../../assets/delete.png";
import editLogo from "../../assets/edit.png";
import Modal from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProducts } from "../../slice/authSlice";

function DashBoard() {
  const [showAddModal, setShowAddModal] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const productlist = useSelector((state) => state.auth.product);
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  console.log(productlist);

  useEffect(() => {
    axios
      .post("http://localhost:4566/product/get", {
        userid: user?._id,
        token: token,
      })
      .then(function (res) {
        return res;
      })
      .then(function (resData) {
        dispatch(
          setProducts({
            product: resData?.data.products,
          })
        );
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4566/product/add", {
        userid: user?._id,
        product: product,
        price: price,
        quantity: quantity,
        token: token,
      })
      .then(function (res) {
        return res;
      })
      .then(function (resData) {
        console.log(resData?.data);
        dispatch(
          setProducts({
            product: resData?.data.products,
          })
        );
      })
      .catch(function (err) {
        console.log(err);
      });
    setShowAddModal(false);
  };
  const handleModal = () => {
    setShowAddModal(true);
  };

  return (
    <div className="dashboardBody">
      <Modal
        shouldShow={showAddModal}
        onRequestClose={() => {
          setShowAddModal((prev) => !prev);
        }}
      >
        <div className="login">
          <form onSubmit={handleSubmit}>
            <p>Add Produt</p>
            <input
              type="text"
              name="product"
              placeholder="product"
              onChange={(e) => setProduct(e.target.value)}
            />
            <input
              type="text"
              name="price"
              placeholder="price"
              onChange={(e) => setPrice(e.target.value)}
            />
            <input
              type="text"
              name="quantity"
              placeholder="quantity"
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button type="submit">Save</button>
          </form>
        </div>
      </Modal>
      <div className="dashboardMenu">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="products">
          <p>Product</p>
        </div>
      </div>
      <div className="dashboard">
        <div className="dashboardNav">
          <p>{user?.firstName + " " + user?.lastName}</p>
        </div>
        <div className="newproduct">
          <button onClick={handleModal}>+</button>
        </div>
        <div className="productPage">
          <div className="list">
            <div className="productList">Product</div>
            <div className="price">Price</div>
            <div className="quantity">quantity</div>
            <div className="action"></div>
          </div>
          <div className="productlistscroll">
            {productlist?.map((item) => {
              return (
                <div className="list">
                  <div className="productList">{item.product}</div>
                  <div className="price">{item.price}</div>
                  <div className="quantity">{item.quantity}</div>
                  <div className="action">
                    <button className="delete">
                      <img src={deleteLogo} alt="delete" />
                    </button>
                    <button className="edit">
                      <img src={editLogo} alt="edit" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
