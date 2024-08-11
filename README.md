# Dockerized-Full-Stack-Item-List-App


## Features
- **Frontend**: A simple static site served by Nginx that fetches and displays data from the backend.
- **Backend**: A Flask API that connects to a MySQL database and provides data to the frontend.
- **Database**: A MySQL database that stores a list of items.
- **Containerization**: All components (frontend, backend, and database) are containerized using Docker, and managed via Docker Compose.

## Prerequisites
To run this project, you'll need to have Docker and Docker Compose installed on your machine.

- [Docker Installation Guide](https://docs.docker.com/get-docker/)
- [Docker Compose Installation Guide](https://docs.docker.com/compose/install/)

## Getting Started
Follow these steps to get the application up and running:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/dockerized-fullstack-itemlist.git
   cd dockerized-fullstack-itemlist


Project Components
Frontend
Technology: HTML, CSS, JavaScript
Server: Nginx
Description: The frontend is a simple static site that makes an API call to the backend to retrieve and display a list of items.
Backend
Technology: Python, Flask
Description: The backend is a Flask application that exposes an API endpoint to fetch items from the MySQL database.
Database
Technology: MySQL
Description: A MySQL database that stores the list of items. The database is initialized with sample data via the init.sql script.
Docker Setup
Docker Compose
This project uses Docker Compose to manage multiple services (frontend, backend, and database) as defined in the docker-compose.yml file.

Environment Variables
The MySQL database is configured with a root password example, as defined in the Docker Compose file. You can change this value in the docker-compose.yml if needed.
Volumes
The MySQL data is persisted using a Docker volume named db_data.
The frontend files are mounted as a volume in the Nginx container for easy development.
How It Works
The frontend makes an HTTP GET request to the backend's API at /api/items.
The backend connects to the MySQL database, retrieves the list of items, and returns them as JSON.
The frontend receives the JSON data and dynamically generates an HTML list to display the items.
Future Enhancements
Add user authentication to the backend.
Implement additional CRUD operations (Create, Update, Delete) for the items.
Add a Dockerfile for the frontend for better scalability in production.
License
This project is licensed under the MIT License. See the LICENSE file for details.
