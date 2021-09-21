import React, { useEffect } from "react";
import { Jumbotron,Container,Button } from "reactstrap";
const Home = () => {

    useEffect(() => {
      document.title = "Home || Apprendre le code Zoheeb";
    }, []);
  
  return (
    <div>
      <Jumbotron className="text-center" >
        <h1 className="display-3">Apprendre le code avec Zoheeb</h1>
        <p>Ceci est développé par Fullstreak Guscode à des fins d'apprentissage</p>
        <Container>
            <Button color="primary" outline>Commencer à utiliser</Button>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Home;
