import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      <Link to="/customer/login">Customer Home</Link>
      <br/>
      <Link to="/shop/home">Shop Home</Link>
      <br/>
      {/* <Link to="Rider/RiderHomeScreen">Rider Home</Link> */}
      {/* <Link to="Rider/RiderHomeScreen">Rider Home</Link> */}
      <Link to='Rider'>Rider Home</Link>
    </div>
  )
}
