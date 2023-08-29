import React from "react";
import ExportProductToExcel from "../../util/ExportProductToExcel";
import ExportOrderToExcel from "../../util/ExportOrderToExcel";
import ExportCustomerToExcel from "../../util/ExportCustomerToExcel";
import ExportStoreToExcel from "../../util/ExportStoreToExcel";
import { useSelector } from "react-redux";

function Report() {
  const productlist = useSelector((state) => state.auth.product);
  const orderlist = useSelector((state) => state.auth.order);
  const customerlist = useSelector((state) => state.auth.customer);
  const storelist = useSelector((state) => state.auth.storeData);
  return (
    <div className="report">
      <div className="report-product">
        <div className="report-text">
          {productlist.length === 0 ? (
            <p>Zero products</p>
          ) : (
            <p>Export Products</p>
          )}
        </div>
        <div className="report-btn">
          <ExportProductToExcel />
        </div>
      </div>
      <div className="report-product">
        <div className="report-text">
          {customerlist.length === 0 ? (
            <p>Zero Customer</p>
          ) : (
            <p>Export Customer</p>
          )}
        </div>
        <div className="report-btn">
          <ExportCustomerToExcel />
        </div>
      </div>
      <div className="report-product">
        <div className="report-text">
          {orderlist.length === 0 ? <p>Zero Order</p> : <p>Export Order</p>}
        </div>
        <div className="report-btn">
          <ExportOrderToExcel />
        </div>
      </div>
      <div className="report-product">
        <div className="report-text">
          {storelist.length === 0 ? <p>Zero Stores</p> : <p>Export Stores</p>}
        </div>
        <div className="report-btn">
          <ExportStoreToExcel />
        </div>
      </div>
    </div>
  );
}

export default Report;
