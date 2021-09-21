import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menu = () => {
  return (
    <div>
      <ListGroup>
        <Link className="list-group-item list-group-item-action" tag="a" to="/" action>Home</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/add-course" action>Ajouter un cours</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/view-courses" action>Voir les cours</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="#" action>À propos </Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="#" action>Contact </Link>
      </ListGroup>
    </div>
  );
};

export default Menu;
