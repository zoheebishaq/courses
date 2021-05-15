import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Form, FormGroup, Input, Label, Button } from "reactstrap";
import {base_url} from "./../api/bootapi";
import { toast } from "react-toastify";

const AddCourse = () => {
  useEffect(() => {
    document.title = "Add Course || Learncode Zoheeb";
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
        toast.success("courses has benn added",{
          position:"bottom-center"
        });
        setcourse({id:"",title:"",description:""})
        

      },
      (err)=>{
          console.log(err);
          console.log("error");
          toast.error("someting went wrong",{
            position:"bottom-center"
          })
      }
    )
  }

  return (
    <div>
      <h1 className="text-center my-3">Fill Course Detail</h1>
      <Form onSubmit={handleForm}>
        <FormGroup className="text-left">
          <Label for="userID">Course ID</Label>
          <Input
            type="text"
            placeholder="Id here"
            name="userId"
            id="userId"
            onChange={(e) => {
              setcourse({ ...course, id: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup className="text-left">
          <Label for="title">Course Title</Label>
          <Input
            type="text"
            placeholder="Title here"
            id="title"
            onChange={(e) => {
              setcourse({ ...course, title: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup className="text-left">
          <Label for="exampleText">Course Description</Label>
          <Input
            type="textarea"
            placeholder="Description here"
            id="description"
            style={{ height: 150 }}
            onChange={(e) => {
              setcourse({ ...course, description: e.target.value });
            }}
          />
        </FormGroup>
        <Container className="text-center">
          <Button  color="success">Add Course</Button>
          <Button type="reset"  color="warning ml-2" onClick={()=>{setcourse({id:"",title:"",description:""});}}>Clear</Button>
        </Container>
      </Form>
    </div>
  );
};

export default AddCourse;
