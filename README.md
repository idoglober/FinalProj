# Pokemon API - Node.js Final Project

Ido Globerman - 330608407

## Project Overview
This project is a modular Node.js backend application built as a final project. It utilizes Express.js and integrates with the external [PokeAPI](https://pokeapi.co/) to fetch, filter, and serve Pokemon data (such as name, weight, height, and types). The project is built using modern JavaScript (ES Modules) and follows a strict layered architecture.

## Architecture & Folder Structure
The project adheres to a modular design pattern to ensure clean code, scalability, and separation of concerns:

* **`routes/`**: Handles routing and directs HTTP requests to the appropriate controllers.
* **`controllers/`**: Manages incoming requests, extracts parameters/body, and returns HTTP responses.
* **`services/`**: Contains the core business logic. This is where data fetched from external APIs or databases is processed and filtered.
* **`dal/`**: Data Access Layer. Manages interactions with local mock data (memory arrays) or external databases.
* **`utils/`**: Helper functions, error handling utilities, and custom loggers.

## Features
* **External API Integration:** Fetches data from PokeAPI.
* **Data Processing:** Filters raw API data to return specific, lightweight JSON responses (Name, Weight, Height, Types).
* **Modular Architecture:** Clean separation between Routes, Controllers, Services, and DAL.
* **ES Modules:** Built using standard modern JS (`"type": "module"`).
* **Custom Logging:** Includes customized console logging for incoming requests and errors.

## Prerequisites
* [Node.js](https://nodejs.org/) (v18 or higher recommended for native `fetch` support)
* npm (Node Package Manager)

## Installation & Setup

1. **Extract the project archive:**
   Unzip the submitted project file into your desired directory.

2. **Install dependencies:**
   Open your terminal in the project's root folder and run:
   ```bash
   npm install