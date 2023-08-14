import React, { useState } from 'react'
import logo from "../../assets/logo.png"
import deleteLogo from "../../assets/delete.png"
import editLogo from "../../assets/edit.png"
import Modal from '../Modal/Modal'

function DashBoard() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("naem")
  }
  const handleModal = () => {
    setShowAddModal(true)
  }

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
        <input type="text" name="product" placeholder='product' onChange={(e) => setProduct(e.target.value)}/>
        <input type="text" name="price" placeholder='price'  onChange={(e) => setPrice(e.target.value)} />
        <input type="text" name="quantity" placeholder='quantity'  onChange={(e) => setQuantity(e.target.value)} />
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
          <p>Marta hbahntatjl</p>
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
          <div className="list">
            <div className="productList">tomato</div>
            <div className="price">10 birr</div>
            <div className="quantity">100</div>
            <div className="action">
              <button className='delete'>
                <img src={deleteLogo} alt="delete" />
              </button>
              <button className='edit'>
                <img src={editLogo} alt="edit" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashBoard