import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";

import Modal from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  setCustomer,
  setLogout,
  setOrders,
  setProducts,
  setStoreData,
  setUser,
} from "../../slice/authSlice";

import Product from "../Product/Product";
import Dash from "../Dash/Dash";
import User from "../User/User";
import Order from "../Order/Order";
import Stores from "../Store/Stores";
import Report from "../Report/Report";
import Profile from "../Profile/Profile";

//icons
import {
  AiOutlineDashboard,
  AiOutlineDollarCircle,
  AiOutlineLogout,
} from "react-icons/ai";
import { BsBarChart, BsBoxSeam } from "react-icons/bs";
import { PiUserCircleDuotone, PiUsersThree } from "react-icons/pi";
import { BiStore, BiUserCircle } from "react-icons/bi";

function DashBoard() {
  //product
  const [showProductAddModal, setShowProductAddModal] = useState(false);
  const [showProductEditModal, setShowProductEditModal] = useState(false);
  const [productId, setProductId] = useState(null);
  //order
  const [showOrderAddModal, setShowOrderAddModal] = useState(false);
  const [showOrderEditModal, setShowOrderEditModal] = useState(false);
  const [orderId, setOrderId] = useState(null);
  //customer
  const [showCustomerAddModal, setShowCustomerAddModal] = useState(false);
  const [showCustomerEditModal, setShowCustomerEditModal] = useState(false);
  const [customerId, setCustomerId] = useState(null);
  //store
  const [showStoreAddModal, setShowStoreAddModal] = useState(false);
  const [showStoreEditModal, setShowStoreEditModal] = useState(false);
  const [storeId, setStoreId] = useState(null);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const productlist = useSelector((state) => state.auth.product);
  const orderlist = useSelector((state) => state.auth.order);
  const customerlist = useSelector((state) => state.auth.customer);
  const storelist = useSelector((state) => state.auth.storeData);
  //product
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [store, setStore] = useState("");
  const [availability, setAvailability] = useState("");

  //order
  const [customerName, setCustomerName] = useState("");
  const [productName, setProductName] = useState("");
  const [productQuantity, setProductQuantity] = useState("");

  //customer
  const [customerName2, setCustomerName2] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  // Store
  const [storeName, setStoreName] = useState("");
  const [status, setStatus] = useState("");

  //show elements
  const [showDashboard, setShowDashBoard] = useState(true);
  const [showProduct, setShowProduct] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [showStores, setShowStores] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

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
        console.log(resData?.data.products);
        dispatch(
          setProducts({
            product: resData?.data.products,
          })
        );
      })
      .catch(function (err) {
        console.log(err);
      });
    axios
      .post("http://localhost:4566/order/get", {
        userid: user?._id,
        token: token,
      })
      .then(function (res) {
        return res;
      })
      .then(function (resData) {
        dispatch(
          setOrders({
            order: resData?.data.orders,
          })
        );
      })
      .catch(function (err) {
        console.log(err);
      });
    axios
      .post("http://localhost:4566/user/get", {
        userid: user?._id,
        token: token,
      })
      .then(function (res) {
        return res;
      })
      .then(function (resData) {
        console.log(customerlist);
        dispatch(
          setCustomer({
            customer: resData?.data.customers,
          })
        );
      })
      .catch(function (err) {
        console.log(err);
      });
    axios
      .post("http://localhost:4566/store/get", {
        userid: user?._id,
        token: token,
      })
      .then(function (res) {
        return res;
      })
      .then(function (resData) {
        console.log(resData?.data.stores);
        dispatch(
          setStoreData({
            storeData: resData?.data.stores,
          })
        );
      })
      .catch(function (err) {
        console.log(err);
      });
  }, [
    showDashboard,
    showProduct,
    showUser,
    showOrder,
    showStores,
    showReport,
    showProfile,
    user,
  ]);

  const handleProductAddSubmit = (e) => {
    axios
      .post("http://localhost:4566/product/add", {
        userid: user?._id,
        product: product,
        price: price,
        quantity: quantity,
        store: store,
        Availability: availability,
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
    setProduct("");
    setPrice("");
    setQuantity("");
    setStore("");
    setAvailability("");
    setShowProductAddModal(false);
  };

  const handleOrderAddSubmit = (e) => {
    axios
      .post("http://localhost:4566/order/add", {
        userid: user?._id,
        productid: "64eba49492b09d1fa67d4bbd",
        customerid: "haie",
        customerName: customerName,
        ProductName: productName,
        ProductQuantity: productQuantity,
        token: token,
      })
      .then(function (res) {
        return res;
      })
      .then(function (resData) {
        console.log(resData?.data);
        dispatch(
          setOrders({
            order: resData?.data.orders,
          })
        );
      })
      .catch(function (err) {
        console.log(err);
      });
    setCustomerName("");
    setProductName("");
    setProductQuantity("");
    setShowOrderAddModal(false);
  };

  const handleCustomerAddSubmit = () => {
    axios
      .post("http://localhost:4566/user/add", {
        userid: user?._id,
        customerName: customerName2,
        Address: address,
        Phone: phone,
        token: token,
      })
      .then(function (res) {
        return res;
      })
      .then(function (resData) {
        console.log(resData?.data);
        dispatch(
          setCustomer({
            customer: resData?.data.customers,
          })
        );
      })
      .catch(function (err) {
        console.log(err);
      });
    setCustomerName2("");
    setAddress("");
    setPhone("");
    setShowCustomerAddModal(false);
  };

  const handleStoreAddSubmit = () => {
    axios
      .post("http://localhost:4566/store/add", {
        userid: user?._id,
        storeName: storeName,
        status: status,
        token: token,
      })
      .then(function (res) {
        return res;
      })
      .then(function (resData) {
        console.log(resData?.data);
        dispatch(
          setStore({
            storeData: resData?.data.stores,
          })
        );
      })
      .catch(function (err) {
        console.log(err);
      });
    setStoreName("");
    setStatus("");
    setShowStoreAddModal(false);
  };
  const handleProductModal = () => {
    setShowProductAddModal(true);
  };
  const handleOrderModal = () => {
    setShowOrderAddModal(true);
  };
  const handleCustomerModal = () => {
    setShowCustomerAddModal(true);
  };
  const handleStoreModal = () => {
    setShowStoreAddModal(true);
  };
  const handleProductId = (id) => {
    setProductId(id);
    setShowProductEditModal(true);
  };
  const handleOrderId = (id) => {
    setOrderId(id);
    setShowOrderEditModal(true);
  };
  const handleCustomerId = (id) => {
    setCustomerId(id);
    setShowCustomerEditModal(true);
  };
  const handleStoreId = (id) => {
    setStoreId(id);
    setShowStoreEditModal(true);
  };
  const handleLogout = () => {
    dispatch(setLogout());
  };

  const handleProductDelete = (id) => {
    axios
      .post("http://localhost:4566/product/delete", {
        userid: user?._id,
        id: id,
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
  };
  const handleOrderDelete = (id) => {
    axios
      .post("http://localhost:4566/order/delete", {
        userid: user?._id,
        id: id,
        token: token,
      })
      .then(function (res) {
        return res;
      })
      .then(function (resData) {
        console.log(resData?.data);
        dispatch(
          setOrders({
            order: resData?.data.orders,
          })
        );
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  const handleCustomerDelete = (id) => {
    axios
      .post("http://localhost:4566/user/delete", {
        userid: user?._id,
        id: id,
        token: token,
      })
      .then(function (res) {
        return res;
      })
      .then(function (resData) {
        console.log(resData?.data);
        dispatch(
          setCustomer({
            customer: resData?.data.customers,
          })
        );
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  const handleStoreDelete = (id) => {
    axios
      .post("http://localhost:4566/store/delete", {
        userid: user?._id,
        id: id,
        token: token,
      })
      .then(function (res) {
        return res;
      })
      .then(function (resData) {
        console.log(resData?.data);
        dispatch(
          setStore({
            storeData: resData?.data.stores,
          })
        );
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  const handleEditSubmit = () => {
    axios
      .post("http://localhost:4566/product/edit", {
        id: productId,
        userid: user?._id,
        product: product,
        store: store,
        Availability: availability,
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
    setProduct("");
    setPrice("");
    setQuantity("");
    setStore("");
    setAvailability("");
    setShowProductEditModal(false);
  };

  const handleOrderEditSubmit = () => {
    axios
      .post("http://localhost:4566/order/edit", {
        id: orderId,
        userid: user?._id,
        customerName: customerName,
        ProductName: productName,
        ProductQuantity: productQuantity,
        token: token,
      })
      .then(function (res) {
        return res;
      })
      .then(function (resData) {
        console.log(resData?.data);
        dispatch(
          setOrders({
            order: resData?.data.orders,
          })
        );
      })
      .catch(function (err) {
        console.log(err);
      });
    setCustomerName("");
    setProductName("");
    setProductQuantity("");
    setShowOrderEditModal(false);
  };

  const handleCustomerEditSubmit = () => {
    axios
      .post("http://localhost:4566/user/edit", {
        id: customerId,
        userid: user?._id,
        customerName: customerName2,
        Address: address,
        Phone: phone,
        token: token,
      })
      .then(function (res) {
        return res;
      })
      .then(function (resData) {
        console.log(resData?.data);
        dispatch(
          setCustomer({
            customer: resData?.data.customers,
          })
        );
      })
      .catch(function (err) {
        console.log(err);
      });
    setCustomerName2("");
    setAddress("");
    setPhone("");
    setShowCustomerEditModal(false);
  };

  const handleStoreEditSubmit = () => {
    axios
      .post("http://localhost:4566/store/edit", {
        id: storeId,
        userid: user?._id,
        storeName: storeName,
        status: status,
        token: token,
      })
      .then(function (res) {
        return res;
      })
      .then(function (resData) {
        console.log(resData?.data);
        dispatch(
          setStore({
            storeData: resData?.data.stores,
          })
        );
      })
      .catch(function (err) {
        console.log(err);
      });
    setStoreName("");
    setStatus("");
    setShowStoreEditModal(false);
  };

  // handle the elements
  const handleDashboard = () => {
    setShowDashBoard(!showDashboard);
    setShowProduct(false);
    setShowUser(false);
    setShowOrder(false);
    setShowStores(false);
    setShowReport(false);
    setShowProfile(false);
  };
  const handleProduct = () => {
    setShowProduct(!showProduct);
    setShowDashBoard(false);
    setShowUser(false);
    setShowOrder(false);
    setShowStores(false);
    setShowReport(false);
    setShowProfile(false);
  };
  const handleUser = () => {
    setShowUser(!showUser);
    setShowDashBoard(false);
    setShowProduct(false);
    setShowOrder(false);
    setShowStores(false);
    setShowReport(false);
    setShowProfile(false);
  };

  const handleOrders = () => {
    setShowOrder(!showOrder);
    setShowDashBoard(false);
    setShowProduct(false);
    setShowUser(false);
    setShowStores(false);
    setShowReport(false);
    setShowProfile(false);
  };
  const handleStore = () => {
    setShowStores(!showStores);
    setShowDashBoard(false);
    setShowProduct(false);
    setShowUser(false);
    setShowOrder(false);
    setShowReport(false);
    setShowProfile(false);
  };
  const handleReport = () => {
    setShowReport(!showReport);
    setShowDashBoard(false);
    setShowProduct(false);
    setShowUser(false);
    setShowOrder(false);
    setShowStores(false);
    setShowProfile(false);
  };
  const handleProfile = () => {
    setShowProfile(!showProfile);
    setShowDashBoard(false);
    setShowProduct(false);
    setShowUser(false);
    setShowOrder(false);
    setShowStores(false);
    setShowReport(false);
  };

  return (
    <div className="dashboardBody">
      <Modal
        shouldShow={showProductAddModal}
        onRequestClose={() => {
          setShowProductAddModal((prev) => !prev);
        }}
      >
        <div className="login">
          <form onSubmit={handleProductAddSubmit}>
            <p>Add Product</p>
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
            <select
              name="store"
              className="drop"
              placeholder="Store"
              onChange={(e) => setStore(e.target.value)}
            >
              <option value="No store"> No store</option>
              {storelist?.map((item) => (
                <option key={item.storeName} value={item.storeName}>
                  {item.storeName} Store
                </option>
              ))}
            </select>
            <select
              name="availability"
              className="drop"
              onChange={(e) => setAvailability(e.target.value)}
            >
              <option value="true">Available</option>
              <option value="false">Unavailable</option>
            </select>
            <button type="submit">Save</button>
          </form>
        </div>
      </Modal>
      <Modal
        shouldShow={showOrderAddModal}
        onRequestClose={() => {
          setShowOrderAddModal((prev) => !prev);
        }}
      >
        <div className="login">
          <form onSubmit={handleOrderAddSubmit}>
            <p>Add Order</p>
            <select
              name="order"
              className="drop"
              onChange={(e) => setCustomerName(e.target.value)}
            >
              <option value="none">No Customer Name</option>
              {customerlist?.map((item) => (
                <option key={item.customerName} value={item.customerName}>
                  {item.customerName}
                </option>
              ))}
            </select>
            <select
              name="order"
              className="drop"
              onChange={(e) => setProductName(e.target.value)}
            >
              <option value="none">No Product</option>
              {productlist?.map((item) => (
                <option key={item.product} value={item.product}>
                  {item.product}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="quantity"
              placeholder="Product Quantity"
              onChange={(e) => setProductQuantity(e.target.value)}
            />
            <button type="submit">Save</button>
          </form>
        </div>
      </Modal>
      <Modal
        shouldShow={showCustomerAddModal}
        onRequestClose={() => {
          setShowCustomerAddModal((prev) => !prev);
        }}
      >
        <div className="login">
          <form onSubmit={handleCustomerAddSubmit}>
            <p>Add Customer</p>
            <input
              type="text"
              name="product"
              placeholder="customer Name"
              onChange={(e) => setCustomerName2(e.target.value)}
            />
            <input
              type="text"
              name="price"
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              type="text"
              name="quantity"
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
            />
            <button type="submit">Save</button>
          </form>
        </div>
      </Modal>
      <Modal
        shouldShow={showStoreAddModal}
        onRequestClose={() => {
          setShowStoreAddModal((prev) => !prev);
        }}
      >
        <div className="login">
          <form onSubmit={handleStoreAddSubmit}>
            <p>Add Store</p>
            <input
              type="text"
              name="product"
              placeholder="Store Name"
              onChange={(e) => setStoreName(e.target.value)}
            />
            <select
              name="store"
              className="drop"
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="true">active</option>
              <option value="false">inactive</option>
            </select>
            <button type="submit">Save</button>
          </form>
        </div>
      </Modal>
      <Modal
        shouldShow={showProductEditModal}
        onRequestClose={(e) => {
          e.preventDefault();
          setShowProductEditModal((prev) => !prev);
          setProductId(null);
        }}
      >
        <div className="login">
          <form onSubmit={handleEditSubmit}>
            <p>Edit Product</p>
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
            <select
              name="store"
              className="drop"
              placeholder="Store"
              onChange={(e) => setStore(e.target.value)}
            >
              <option value="No store"> No store</option>
              {storelist?.map((item) => (
                <option key={item.storeName} value={item.storeName}>
                  {item.storeName} Store
                </option>
              ))}
            </select>
            <select
              name="availability"
              className="drop"
              onChange={(e) => setAvailability(e.target.value)}
            >
              <option value="true">Available</option>
              <option value="false">Unavailable</option>
            </select>
            <button type="submit">Edit</button>
          </form>
        </div>
      </Modal>
      <Modal
        shouldShow={showOrderEditModal}
        onRequestClose={() => {
          setShowOrderEditModal((prev) => !prev);
        }}
      >
        <div className="login">
          <form onSubmit={handleOrderEditSubmit}>
            <p>Edit Order</p>
            <select
              name="order"
              className="drop"
              onChange={(e) => setCustomerName(e.target.value)}
            >
              <option value="none">No Customer Name</option>
              {customerlist?.map((item) => (
                <option key={item.customerName} value={item.customerName}>
                  {item.customerName}
                </option>
              ))}
            </select>
            <select
              name="order"
              className="drop"
              onChange={(e) => setProductName(e.target.value)}
            >
              <option value="none">No Product</option>
              {productlist?.map((item) => (
                <option key={item.product} value={item.product}>
                  {item.product}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="quantity"
              placeholder="Product Quantity"
              onChange={(e) => setProductQuantity(e.target.value)}
            />
            <button type="submit">Edit</button>
          </form>
        </div>
      </Modal>
      <Modal
        shouldShow={showCustomerEditModal}
        onRequestClose={() => {
          setShowCustomerEditModal((prev) => !prev);
        }}
      >
        <div className="login">
          <form onSubmit={handleCustomerEditSubmit}>
            <p>Edit Customer</p>
            <input
              type="text"
              name="product"
              placeholder="Customer Name"
              onChange={(e) => setCustomerName2(e.target.value)}
            />
            <input
              type="text"
              name="price"
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              type="text"
              name="quantity"
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
            />
            <button type="submit">Edit</button>
          </form>
        </div>
      </Modal>
      <Modal
        shouldShow={showStoreEditModal}
        onRequestClose={() => {
          setShowStoreEditModal((prev) => !prev);
        }}
      >
        <div className="login">
          <form onSubmit={handleStoreEditSubmit}>
            <p>Edit Store</p>
            <input
              type="text"
              name="product"
              placeholder="Store Name"
              onChange={(e) => setStoreName(e.target.value)}
            />
            <select
              name="store"
              className="drop"
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="true">active</option>
              <option value="false">inactive</option>
            </select>
            <button type="submit">Edit</button>
          </form>
        </div>
      </Modal>
      <div className="dashboardMenu">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        {showDashboard ? (
          <div className="show">
            <div className="name-icon">
              <AiOutlineDashboard />
            </div>
            <p>Dashboard</p>
          </div>
        ) : (
          <div className="close" onClick={handleDashboard}>
            <div className="name-icon">
              <AiOutlineDashboard />
            </div>
            <p>Dashboard</p>
          </div>
        )}

        {showProduct ? (
          <div className="show">
            <div className="name-icon">
              <BsBoxSeam />
            </div>
            <p>Product</p>
          </div>
        ) : (
          <div className="close" onClick={handleProduct}>
            <div className="name-icon">
              <BsBoxSeam />
            </div>
            <p>Product</p>
          </div>
        )}
        {showUser ? (
          <div className="show">
            <div className="name-icon">
              <PiUsersThree />
            </div>
            <p>Customer</p>
          </div>
        ) : (
          <div className="close" onClick={handleUser}>
            <div className="name-icon">
              <PiUsersThree />
            </div>
            <p>Customer</p>
          </div>
        )}
        {showOrder ? (
          <div className="show">
            <div className="name-icon">
              <AiOutlineDollarCircle />
            </div>
            <p>Orders</p>
          </div>
        ) : (
          <div className="close" onClick={handleOrders}>
            <div className="name-icon">
              <AiOutlineDollarCircle />
            </div>
            <p>Orders</p>
          </div>
        )}

        {showStores ? (
          <div className="show">
            <div className="name-icon">
              <BiStore />
            </div>
            <p>Stores</p>
          </div>
        ) : (
          <div className="close" onClick={handleStore}>
            <div className="name-icon">
              <BiStore />
            </div>
            <p>Stores</p>
          </div>
        )}
        {showReport ? (
          <div className="show">
            <div className="name-icon">
              <BsBarChart />
            </div>
            <p>Report</p>
          </div>
        ) : (
          <div className="close" onClick={handleReport}>
            <div className="name-icon">
              <BsBarChart />
            </div>
            <p>Report</p>
          </div>
        )}
        {showProfile ? (
          <div className="show">
            <div className="name-icon">
              <BiUserCircle />
            </div>
            <p>Profile</p>
          </div>
        ) : (
          <div className="close" onClick={handleProfile}>
            <div className="name-icon">
              <BiUserCircle />
            </div>
            <p>Profile</p>
          </div>
        )}

        <div className="logout">
          <div className="name-icon">
            <AiOutlineLogout />
          </div>
          <p onClick={handleLogout}>Logout</p>
        </div>
      </div>
      <div className="dashboard">
        <div className="dashboardNav">
          <div className="name-icon">
            <PiUserCircleDuotone />
          </div>
          <p>{user?.firstName}</p>
        </div>
        {showDashboard && (
          <Dash
            setShowDashBoard={setShowDashBoard}
            setShowProduct={setShowProduct}
            setShowUser={setShowUser}
            setShowOrder={setShowOrder}
            setShowStores={setShowStores}
            setShowReport={setShowReport}
          />
        )}
        {showProduct && (
          <Product
            user={user}
            productlist={productlist}
            handleProductModal={handleProductModal}
            handleProductId={handleProductId}
            handleDelete={handleProductDelete}
          />
        )}
        {showOrder && (
          <Order
            orderlist={orderlist}
            handleProductModal={handleOrderModal}
            handleProductId={handleOrderId}
            handleDelete={handleOrderDelete}
          />
        )}
        {showUser && (
          <User
            productlist={customerlist}
            handleProductModal={handleCustomerModal}
            handleProductId={handleCustomerId}
            handleDelete={handleCustomerDelete}
          />
        )}
        {showStores && (
          <Stores
            orderlist={storelist}
            handleProductModal={handleStoreModal}
            handleProductId={handleStoreId}
            handleDelete={handleStoreDelete}
          />
        )}
        {showReport && <Report />}
        {showProfile && <Profile />}
      </div>
    </div>
  );
}

export default DashBoard;
