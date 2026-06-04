import axios from 'axios'
import { Header } from '../../components/Header'
import { useState, useEffect } from 'react'

import './OrderPage.css'
import { OrdersGrid } from './OrdersGrid'

export function OrderPage({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/orders?expand=products')
      .then((response) => {
        setOrders(response.data);
      })
  }, []);
  return (
    <>
      <title>ordersPage</title>
      <Header cart={cart} />
      <link rel="icon" type="image/svg+xml" href="orders-favicon.png" />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrdersGrid orders={orders} />

      </div>
    </>
  )
}