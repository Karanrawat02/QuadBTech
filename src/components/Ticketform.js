import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function Ticketform() {
const [movieName, setMovieName] = useState('');
const [people, setPeople] = useState('');
const [dateTime, setDateTime] = useState('');
const [seatNumber, setSeatNumber] = useState('');

const handleSubmit = (event) => {
event.preventDefault();
console.log('Movie Name:', movieName);
console.log('Number of People:', people);
console.log('Date & Time:', dateTime);
console.log('Seat Number:', seatNumber);
};

return (
<div className="ticket-form" style={{width:"50%",margin:"auto",marginTop:"88px",padding:"20px",border:"1px solid #ccc",borderRadius:"10px",backgroundColor:"#f5f5f5",boxShadow:"0 2px 4px rgba(0,0,0,0.3"}}>
<h3 style={{textAlign:"center",marginBottom:"20px"}}>Book Movie Ticket</h3>
<Form onSubmit={handleSubmit}>
<Form.Group controlId="movieName">
<Form.Label>Movie Name:</Form.Label>
<Form.Control type="text" placeholder="Enter movie name" value={movieName} onChange={(e) => setMovieName(e.target.value)} required />
</Form.Group>
    <Form.Group controlId="people">
      <Form.Label>Number Of person:</Form.Label>
      <Form.Control type="number" placeholder="Number Of person" value={people} onChange={(e) => setPeople(e.target.value)} required />
    </Form.Group>

    <Form.Group controlId="dateTime">
      <Form.Label>Date & Time:</Form.Label>
      <Form.Control type="datetime-local" value={dateTime} onChange={(e) => setDateTime(e.target.value)} required />
    </Form.Group>

    <Form.Group controlId="seatNumber">
      <Form.Label>Seat Number:</Form.Label>
      <Form.Control type="number" min="1" max="100" value={seatNumber} onChange={(e) => setSeatNumber(e.target.value)} required />
    </Form.Group>

    <Button variant="primary" type="submit">
      Book Now
    </Button>
  </Form>
</div>
);
}

export default Ticketform;
