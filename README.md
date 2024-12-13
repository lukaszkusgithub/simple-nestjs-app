
# NestJS Product API

This is a simple NestJS application that uses SQLite as a database and provides endpoints to create, retrieve, update, and delete products. Each product has an `id`, `title`, and `price`.

## Features

- **Create a Product**: Allows you to create a new product with a `title` and `price`.
- **Retrieve Products**: Fetch all products or a single product by `id`.
- **Update a Product**: Modify the details of an existing product.
- **Delete a Product**: Remove a product by its `id`.

## Project Setup

### Install dependencies

First, you need to install the necessary dependencies:

```bash
$ npm install
```

### Database setup

This application uses SQLite as the database. The database is stored in the `db.sqlite` file.

## Compile and Run the Project

### Development Mode

To run the project in development mode, use:

```bash
$ npm run start:dev
```

### Production Mode

For production, use:

```bash
$ npm run start:prod
```

## Available Endpoints

### 1. Create a Product

**POST /products**

Request body:
```json
{
  "title": "Product Name",
  "price": 100
}
```

Response:
```json
{
  "id": 1,
  "title": "Product Name",
  "price": 100
}
```

### 2. Get All Products

**GET /products**

Response:
```json
[
  {
    "id": 1,
    "title": "Product 1",
    "price": 50
  },
  {
    "id": 2,
    "title": "Product 2",
    "price": 150
  }
]
```

### 3. Get a Single Product by ID

**GET /products/:id**

Example:
```bash
GET /products/1
```

Response:
```json
{
  "id": 1,
  "title": "Product 1",
  "price": 50
}
```

### 4. Update a Product

**PUT /products/:id**

Request body:
```json
{
  "title": "Updated Product",
  "price": 120
}
```

Response:
```json
{
  "id": 1,
  "title": "Updated Product",
  "price": 120
}
```

### 5. Delete a Product

**DELETE /products/:id**

Example:
```bash
DELETE /products/1
```

Response:
```json
{
  "message": "Product deleted successfully"
}
```

## Run Tests

### Unit Tests

```bash
$ npm run test
```

### End-to-End Tests

```bash
$ npm run test:e2e
```

### Test Coverage

```bash
$ npm run test:cov
```

## Deployment

For deployment to production, follow the [NestJS deployment guide](https://docs.nestjs.com/deployment).

To deploy using our official platform, Mau, use the following commands:

```bash
$ npm install -g mau
$ mau deploy
```

## Resources

- [NestJS Documentation](https://docs.nestjs.com)
- [NestJS Discord Channel](https://discord.gg/G7Qnnhy)
- [NestJS Courses](https://courses.nestjs.com/)
- [NestJS Jobs Board](https://jobs.nestjs.com)

## License

This project is licensed under the MIT License.
