import React from "react";
import "../../App.css";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { BsBarChart } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { useSelector } from "react-redux";

function Dash({
  setShowDashBoard,
  setShowProduct,
  setShowUser,
  setShowOrder,
  setShowStores,
  setShowReport,
}) {
  const product = useSelector((state) => state.auth.product);
  const order = useSelector((state) => state.auth.order);
  const customer = useSelector((state) => state.auth.customer);
  const store = useSelector((state) => state.auth.storeData);
  const handleProduct = () => {
    setShowProduct(true);
    setShowDashBoard(false);
    setShowUser(false);
    setShowOrder(false);
    setShowStores(false);
    setShowReport(false);
  };
  const handleUser = () => {
    setShowUser(true);
    setShowDashBoard(false);
    setShowProduct(false);
    setShowOrder(false);
    setShowStores(false);
    setShowReport(false);
  };

  const handleOrders = () => {
    setShowOrder(true);
    setShowDashBoard(false);
    setShowProduct(false);
    setShowUser(false);
    setShowStores(false);
    setShowReport(false);
  };
  const handleStore = () => {
    setShowStores(true);
    setShowDashBoard(false);
    setShowProduct(false);
    setShowUser(false);
    setShowOrder(false);
    setShowReport(false);
  };
  const handleReport = () => {
    setShowReport(true);
    setShowDashBoard(false);
    setShowProduct(false);
    setShowUser(false);
    setShowOrder(false);
    setShowStores(false);
  };

  return (
    <div className="dash">
      <div className="dash-nav-title">
        <p>Dashboard</p>
        <h5>Control panel</h5>
      </div>
      <div className="dash-nav">
        <div className="dash-product" onClick={handleProduct}>
          <div className="dash-text">
            <div className="dash-number">
              <p>{product?.length}</p>
            </div>
            <div className="dash-info">
              <p>Total Product</p>
            </div>
          </div>
          <div className="dash-logo">
            <PiShoppingCartSimpleThin />
          </div>
        </div>
        <div className="dash-order" onClick={handleOrders}>
          <div className="dash-text">
            <div className="dash-number">
              <p>{order?.length}</p>
            </div>
            <div className="dash-info">
              <p>Total Order</p>
            </div>
          </div>
          <div className="dash-logo">
            <BsBarChart />
          </div>
        </div>
        <div className="dash-user" onClick={handleUser}>
          <div className="dash-text">
            <div className="dash-number">
              <p>{customer?.length}</p>
            </div>
            <div className="dash-info">
              <p>Total Users</p>
            </div>
          </div>
          <div className="dash-logo">
            <BiUser />
          </div>
        </div>
        <div className="dash-store" onClick={handleStore}>
          <div className="dash-text">
            <div className="dash-number">
              <p>{store?.length}</p>
            </div>
            <div className="dash-info">
              <p>Total Strore</p>
            </div>
          </div>
          <div className="dash-logo">
            <AiOutlineHome />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dash;
