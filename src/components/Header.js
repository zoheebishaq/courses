import React from "react";
import { Card, CardBody } from "reactstrap";

const Header = ({ name, title }) => {
  return (
    <div>
      <Card className="my-2 bg-warning">
        <CardBody>
          <h1 className="text-center my-3">Bienvenue dans Cours</h1>
        </CardBody>
      </Card>
    </div>
  );
};

export default Header;
