<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Description

This project is built with NestJS and includes endpoints for managing holidays and retrieving country data. It integrates services like a holiday calendar and country-specific information.

## Setup and Installation

### Prerequisites

- Node.js (version 14 or higher)
- Docker (if you want to use docker-compose for quick deployment)

### Installation

1. Clone the repository:

    ```bash
    git clone <repository_url>
    cd <project_directory>
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. (Optional) Set up Docker for quick deployment of the database:

    If you want to use `docker-compose` to deploy the database, add the following command in the root of the project:

    ```bash
    docker-compose up
    ```

4. Create an `.env` file for environment variables (if required):

    Example `.env` file:
    ```env
    DB_HOST=localhost
    DB_PORT=5432
    DB_USER=your_user
    DB_PASSWORD=your_password
    DB_NAME=your_database
    ```

## Running the Application

1. Start the application:

    ```bash
    npm run start
    ```

2. The application will be running on `http://localhost:3000`.

## Endpoints

### User Controller

#### Add Holidays to Calendar

- **Endpoint:** `POST /users/:userId/calendar/holidays`
- **Description:** Adds holidays to a user's calendar.
- **Parameters:**
    - `userId` (string) - The user ID.
    - Request Body: `HolidayRequestDto` containing holiday data.

    Example request body:

    ```json
    {
        "holidayName": "Christmas",
        "holidayDate": "2025-12-25"
    }
    ```

    Example response:

    ```json
    {
        "status": "success",
        "message": "Holiday added to calendar."
    }
    ```

### Country Controller

#### Get All Countries

- **Endpoint:** `GET /country`
- **Description:** Retrieves a list of all countries.
- **Response Example:**

    ```json
    [
        { "countryCode": "US", "countryName": "United States" },
        { "countryCode": "UA", "countryName": "Ukraine" }
    ]
    ```

#### Get Country Data

- **Endpoint:** `GET /country/:countryCode`
- **Description:** Retrieves data for a specific country by its code.
- **Parameters:**
    - `countryCode` (string) - The 2-letter country code (e.g., `US`, `UA`).

    Example response:

    ```json
    {
        "countryCode": "US",
        "countryName": "United States",
        "population": "331000000",
        "capital": "Washington D.C."
    }
    ```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
