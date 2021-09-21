import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Form, FormGroup, Input, Label, Button } from "reactstrap";
import {base_url} from "./../api/bootapi";
import { toast } from "react-toastify";

const AddCourse = () => {
  useEffect(() => {
    document.title = "Ajouter un cours || Apprendre le code Zoheeb";
  }, []);

  const [course, setcourse] = useState({});
  const handleForm = (e) => {
    console.log(course);
    postDataToServer(course);
    e.preventDefault();
  };

  //creating function to post data on server
  const postDataToServer=(data)=>{
   axios.post(`${base_url}/api/courses`,data).then(
      (res)=>{
        console.log(res);
        console.log("succes");
        toast.success("cours ajoutés",{
          position:"bottom-center"
        });
        setcourse({id:"",title:"",description:""})
        

      },
      (err)=>{
          console.log(err);
          console.log("error");
          toast.error("ERROR",{
            position:"bottom-center"
          })
      }
    )
  }

  return (
    <div>
      <h1 className="text-center my-3">Remplir les détails du cours</h1>
      <Form onSubmit={handleForm}>
        <FormGroup className="text-left">
          <Label for="userID">ID Cour</Label>
          <Input
            type="text"
            placeholder="Id "
            name="userId"
            id="userId"
            onChange={(e) => {
              setcourse({ ...course, id: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup className="text-left">
          <Label for="title">Titre</Label>
          <Input
            type="text"
            placeholder="Titre"
            id="title"
            onChange={(e) => {
              setcourse({ ...course, title: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup className="text-left">
          <Label for="exampleText">Description</Label>
          <Input
            type="textarea"
            placeholder="Description"
            id="description"
            style={{ height: 150 }}
            onChange={(e) => {
              setcourse({ ...course, description: e.target.value });
            }}
          />
        </FormGroup>
        <Container className="text-center">
          <Button  color="success">Ajouter</Button>
          <Button type="reset"  color="warning ml-2" onClick={()=>{setcourse({id:"",title:"",description:""});}}>Supprimer</Button>
        </Container>
      </Form>
    </div>
  );
};

export default AddCourse;
