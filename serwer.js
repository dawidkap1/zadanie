const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 4000;

app.use((req, res, next) => {
 res.setHeader("Access-Control-Allow-Origin", "*");
 res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, UPDATE, DELETE");
 res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
 next();
});

app.use(express.json());

// Konfiguracja połączenia z bazą danych
// Baza danych Xampp
const connection = mysql.createConnection({
 host: "localhost", // Adres hosta bazy danych
 user: "root", // Nazwa użytkownika bazy danych
 password: "", // Hasło użytkownika bazy danych
 database: "tasks", // Nazwa bazy danych
});

// Nawiązanie połączenia
connection.connect((err) => {
 if (err) {
  console.error("Błąd podczas nawiązywania połączenia z bazą danych:", err);
 } else {
  console.log("Połączenie z bazą danych MySQL zostało nawiązane");
 }
});

// Pobieranie zadań
app.get("/tasks", (req, res) => {
 const sql = "SELECT * FROM task";

 connection.query(sql, (err, results) => {
  if (err) {
   console.error("Błąd podczas pobierania zadań z bazy danych:", err);
   res.sendStatus(500);
  } else {
   res.json(results);
  }
 });
});

// Dodawania zadania
app.post("/addtask", (req, res) => {
 const { nazwa, stan } = req.body;

 const sql = "INSERT INTO task (nazwa, stan) VALUES (?, ?)";
 connection.query(sql, [nazwa, stan], (error, result) => {
  if (error) {
   console.error("Błąd podczas dodawania zadania:", error);
   res.status(500).json({ error: "Błąd podczas dodawania zadania" });
  } else {
   const newTaskId = result.insertId;
   res.status(201).json({ id: newTaskId, nazwa, stan });
  }
 });
});

// Aktualizacja stanu zadania
app.put("/tasks/:id", (req, res) => {
 const taskId = req.params.id;
 const newState = req.body.stan;

 const sql = "UPDATE task SET stan = ? WHERE sid = ?";
 connection.query(sql, [newState, taskId], (error, result) => {
  if (error) {
   console.error("Błąd podczas aktualizacji stanu zadania:", error);
   res.status(500).json({ error: "Błąd podczas aktualizacji stanu zadania" });
  } else {
   res.status(200).json({ message: "Stan zadania został zaktualizowany" });
  }
 });
});

// Usuwanie zadania
app.delete("/tasks/:id", (req, res) => {
 const taskId = req.params.id;

 const sql = "DELETE FROM task WHERE sid = ?";
 connection.query(sql, [taskId], (error, result) => {
  if (error) {
   console.error("Błąd podczas usuwania zadania:", error);
   res.status(500).json({ error: "Błąd podczas usuwania zadania" });
  } else {
   res.status(200).json({ message: "Zadanie zostało usunięte" });
  }
 });
});

app.listen(port, () => {
 console.log(`Serwer nasłuchuje na porcie ${port}`);
});
