// TaskList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import CloseButton from "react-bootstrap/CloseButton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const TaskList = () => {
 // Stan przechowujący listę zadań
 const [tasks, setTasks] = useState([]);

 useEffect(() => {
  fetchData();
 }, []);

 // Pobieranie danych z serwera
 const fetchData = async () => {
  try {
   const response = await axios.get("http://localhost:4000/tasks");
   setTasks(response.data);
  } catch (error) {
   console.error("Błąd podczas pobierania danych:", error);
  }
 };

 // Obsługa zmiany stanu zadania
 const handleTaskStateChange = async (taskId, newState) => {
  try {
   await axios.put(`http://localhost:4000/tasks/${taskId}`, { stan: newState });
   fetchData();
  } catch (error) {
   console.error("Błąd podczas aktualizacji stanu zadania:", error);
  }
 };

 // Obsługa usuwania zadania
 const handleTaskDelete = async (taskId) => {
  try {
   await axios.delete(`http://localhost:4000/tasks/${taskId}`);
   fetchData();
  } catch (error) {
   console.error("Błąd podczas usuwania zadania:", error);
  }
 };

 return (
  <>
   <Container>
    <Row>
     <Col sm={12}>
      <h2 className="text-center mt-4">Lista zadań:</h2>
     </Col>
     {tasks.map((task) => (
      <Col sm={3} className="mt-4" key={task.sid}>
       <Card>
        <Card.Header className="d-flex justify-content-end">
         {/* Przycisk do usuwania zadania */}
         <CloseButton className="tasks__close" onClick={() => handleTaskDelete(task.sid)} />
        </Card.Header>
        <Card.Body>
         <Card.Title className="text-center">{task.nazwa}</Card.Title>
         <Form className="tasks">
          {/* Przełącznik do zmiany stanu zadania */}
          <Form.Switch checked={!task.stan ? "" : "checked"} onChange={() => handleTaskStateChange(task.sid, task.stan === 0 ? 1 : 0)} />
         </Form>
        </Card.Body>
       </Card>
      </Col>
     ))}
    </Row>
   </Container>
  </>
 );
};

export default TaskList;
