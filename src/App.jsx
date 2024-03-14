import './App.css'
import { useState, useEffect } from 'react';

function App() {

  const [reservations, setReservations] = useState([]);

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTAzNzg5NDQsImV4cCI6MTcxMDM4MjU0NH0.XCz4NpuEA8K2OOIadlPsPdg9CTmR31BfKcKnoFiC5fs";

  useEffect(() => {

  fetch('http://localhost:3000/api/reservations', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
  }})
  .then(response => response.json())
  .then(data => {
    console.log(data)
    setReservations(data);
  })
}, []);

  return (
    <>
      <p className="paragrah">Front Booking App</p>
      <ul className='reservationContainer'>
  {reservations.map((reservation, index) => (
    <li className='reservation' key={index}>
      <p>Nombre de Clients : {reservation.number_of_customers}</p>
      <p>Nom : {reservation.reservation_name}</p>
      <p>Note : {reservation.reservation_note}</p>
    </li>
  ))}
</ul>
    </>
  )
}

export default App
