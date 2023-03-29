import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Navbarr from "./Navbarr";
import Button from "react-bootstrap/Button";
import Ticketform from "./Ticketform";

function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [showTicketForm, setShowTicketForm] = useState(false);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  const handleShowTicketForm = () => {
    setShowTicketForm(true);
  };

  const handleCloseTicketForm = () => {
    setShowTicketForm(false);
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbarr />
      <div style={{ display: "flex" }}>
        <div
          className="left"
          style={{ width: "40%", height: "21rem" }}
        >
          <Card.Img
            style={{ width: "18rem", height: "24rem", margin: "32px 91px" }}
            variant="top"
            src={movie ? movie.image?.original : ""}
          />
        </div>
        <div
          className="right"
          style={{ width: "60%", height: "21rem", margin: "42px" }}
        >
          <Card.Body>
            <Card.Title style={{ justifyContent: "center" }}>
              {movie?.name}
            </Card.Title>
            <Card.Text>
              {movie?.summary.replace(/<\/?p>|<\/?b>/g, "")}
            </Card.Text>
            <Card.Text> Runtime : {movie?.runtime} Min</Card.Text>
            <Card.Text>
              {" "}
              Ratings : {movie?.rating?.average} /10
            </Card.Text>
            <Card.Text> Language : {movie?.language} </Card.Text>
            <Card.Text>
              {" "}
              Genre : {movie?.genres[0]} , {movie?.genres[1]}{" "}
            </Card.Text>
            <Card.Text>
              {" "}
              Schedule : {movie?.schedule?.days[0]} ,{" "}
              {movie?.schedule?.time}{" "}
            </Card.Text>
            <Card.Text> Status : {movie?.status} </Card.Text>
            <Button variant="primary" onClick={handleShowTicketForm}>
              Book Ticket
            </Button>
          </Card.Body>
        </div>
      </div>
      <br />
      {showTicketForm && (
        <Ticketform
          movieId={movie.id}
          handleClose={handleCloseTicketForm}
        />
      )}
    </>
  );
}

export default Details;

