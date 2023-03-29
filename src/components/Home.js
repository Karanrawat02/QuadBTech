import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Navbarr from './Navbarr';

function Home() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then(res => res.json())
      .then(data => setMovies(data))
  }, []);

  return (
    <>
    <Navbarr />
    <div className="row" style={{justifyContent:"center"}}>
      {movies.map(movie => (
        <Card key={movie.show.id} style={{ width: '18rem', margin: "12px",border:"1px grey solid" }} className="col-md-4">
          <Card.Img variant="top" src={movie?movie.show.image?.medium:""} />
          <Card.Body>
            <Card.Title>{movie.show.name}</Card.Title>
            <Card.Text>{movie.show.summary.replace(/<\/?p>|<\/?b>/g, '').split(" ").slice(0,18).join(" ")}...</Card.Text>
            <Card.Text> Runtime : {movie.show.runtime} Min</Card.Text>
            <Card.Text> Ratings : {movie.show.rating?.average} /10</Card.Text>
            <Link to={`/details/${movie.show.id}`}>
              <Button variant="primary">View Details</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
    </>
  );
}

export default Home;
