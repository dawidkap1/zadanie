# Task Manager - Aplikacja do zarządzania zadaniami

Ta aplikacja to prosty menedżer zadań, który umożliwia dodawanie, edycję, usuwanie i aktualizowanie stanu zadań. Zadania są przechowywane w bazie danych MySQL.

## Pliki

- `App.js` - Główny plik aplikacji React, który definiuje routing i renderuje komponenty.
- `Menu.js` - Komponent menu nawigacyjnego, wykorzystany w głównym układzie strony.
- `AddTask.js` - Komponent formularza do dodawania nowych zadań.
- `TaskList.js` - Komponent wyświetlający listę zadań oraz umożliwiający usuwanie i aktualizację stanu zadań.

## Instalacja i uruchomienie

1. Sklonuj repozytorium na swój lokalny komputer.
2. Zainstaluj zależności przy pomocy komendy `npm install`.
3. Uruchom serwer MySQL przy użyciu narzędzia XAMPP.
4. Skonfiguruj połączenie z bazą danych MySQL w pliku `serwer.js`.
5. Zaimportuj przykładową bazę danych `tasks.sql` do swojej instancji MySQL w XAMPP.
6. Uruchom aplikację przy pomocy komendy `npm start`.
7. Uruchom serwer aplikacji przy pomocy komendy `node serwer.js`.

**Uwaga:** Upewnij się, że Twój XAMPP jest uruchomiony i działa poprawnie przed uruchomieniem aplikacji. Należy również upewnić się, że konfiguracja połączenia z bazą danych w pliku `serwer.js` jest zgodna z ustawieniami Twojego XAMPPa.

## Endpointy API

- `GET /tasks` - Pobiera wszystkie zadania z bazy danych.
- `POST /addtask` - Dodaje nowe zadanie do bazy danych.
- `PUT /tasks/:id` - Aktualizuje stan zadania o podanym identyfikatorze.
- `DELETE /tasks/:id` - Usuwa zadanie o podanym identyfikatorze.

## Technologie

- React - biblioteka do budowania interfejsów użytkownika.
- React Router - biblioteka do obsługi routingu w aplikacji React.
- React Bootstrap - zestaw gotowych komponentów interfejsu użytkownika.
- Express - framework do tworzenia serwerów aplikacji w Node.js.
- MySQL - system zarządzania relacyjnymi bazami danych.

## Autor

Ta aplikacja została stworzona przez Dawid Kapela.
