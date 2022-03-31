import React from 'react'
import {Table} from 'react-bootstrap'
import { NavbarDefault } from '../../assets/components/navbar/NavbarDefault'
import { Strip } from '../../assets/img/Rectangle 9.png'

export const Dashboard = () => {
  return (
    <div>

    <NavbarDefault/>
    
    <p>List Order</p>
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>No</th>
      <th>User Email</th>
      <th>Car</th>
      <th>Start Rent</th>
      <th>Finish Rent</th>
      <th>Price</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Username Email</td>
      <td>Car</td>
      <td>Start Rent</td>
      <td>Finish Rent</td>
      <td>Price</td>
      <td>Status</td>
    </tr>
    <tr>
      <td>1</td>
      <td>Username Email</td>
      <td>Car</td>
      <td>Start Rent</td>
      <td>Finish Rent</td>
      <td>Price</td>
      <td>Status</td>
    </tr>
    <tr>
      <td>1</td>
      <td>Username Email</td>
      <td>Car</td>
      <td>Start Rent</td>
      <td>Finish Rent</td>
      <td>Price</td>
      <td>Status</td>
    </tr>
    <tr>
      <td>1</td>
      <td>Username Email</td>
      <td>Car</td>
      <td>Start Rent</td>
      <td>Finish Rent</td>
      <td>Price</td>
      <td>Status</td>
    </tr>
  </tbody>
</Table>

<p>List Car</p>
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>No</th>
      <th>User Email</th>
      <th>Car</th>
      <th>Start Rent</th>
      <th>Finish Rent</th>
      <th>Price</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Username Email</td>
      <td>Car</td>
      <td>Start Rent</td>
      <td>Finish Rent</td>
      <td>Price</td>
      <td>Status</td>
    </tr>
    <tr>
      <td>1</td>
      <td>Username Email</td>
      <td>Car</td>
      <td>Start Rent</td>
      <td>Finish Rent</td>
      <td>Price</td>
      <td>Status</td>
    </tr>
    <tr>
      <td>1</td>
      <td>Username Email</td>
      <td>Car</td>
      <td>Start Rent</td>
      <td>Finish Rent</td>
      <td>Price</td>
      <td>Status</td>
    </tr>
    <tr>
      <td>1</td>
      <td>Username Email</td>
      <td>Car</td>
      <td>Start Rent</td>
      <td>Finish Rent</td>
      <td>Price</td>
      <td>Status</td>
    </tr>
  </tbody>
</Table>
    </div>
  )
}
