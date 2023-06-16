import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AddTask = () => {
 // Stan przechowujący nazwę zadania
 const [taskName, setTaskName] = useState("");
 // Stan wskazujący, czy formularz został zwalidowany
 const [validated, setValidated] = useState(false);

 // Obsługa przesłania formularza
 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
   const response = await axios.post("http://localhost:4000/addtask", {
    nazwa: taskName,
    stan: 0,
   });

   console.log("Dodano nowe zadanie:", response.data);
  } catch (error) {
   console.error("Błąd podczas dodawania zadania:", error);
  }

  setTaskName("");
  setValidated(true);
 };

 return (
  <>
   <Container className="mt-4">
    <Row className="justify-content-center">
     <Col xs="12" md="8" lg="6">
      <h1>Dodaj zadanie</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
       <InputGroup hasValidation>
        {/* Pole tekstowe do wprowadzenia nazwy zadania */}
        <Form.Control placeholder="Dodaj zadanie" value={taskName} onChange={(e) => setTaskName(e.target.value)} required />
        {/* Przycisk do dodawania zadania */}
        <Button type="submit" variant="outline-success" id="submit">
         Dodaj
        </Button>
        {/* Komunikat walidacyjny */}
        <Form.Control.Feedback type="invalid">Wypełnij pole</Form.Control.Feedback>
       </InputGroup>
      </Form>
     </Col>
    </Row>
   </Container>
  </>
 );
};

export default AddTask;
