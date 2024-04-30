# Simple_CRUD_API
- Simple CRUD API using Express and MongoDB
## Install dependencies
- npm init -y
- npm install nodemon
- npm install express
- npm install mongoose

## Start the application
npm run dev

## API Endpoints
- POST: http://localhost:3000/resource
- GET: http://localhost:3000/resource{for all resources} / http://localhost:3000/resource/[ime] {for a specific resource}
- PUT: http://localhost:3000/resource/[ime]
- DELETE: http://localhost:3000/resource/[ime]
- For reference, you can view the collection in the folders above
##  DataBase Attributes
- ime: Unique identifier for the product.
- model: Name or model of the product.
- brand: Brand or manufacturer of the product.
- color: Color of the product.
- ram: RAM (Random Access Memory) specification of the product.
- storage: Storage capacity of the product.
- price: Price of the product.

## Importing Collections from GitHub to Insomnia:
To import collections from GitHub to Insomnia, follow these steps:
1. Navigate to the desired collection on GitHub.
2. Click on the "Raw" button to view the raw content of the JSON file.
3. Copy the URL of the raw JSON file.
4. In Insomnia, click on "Import/Export" > "Import Data" > "From URL".
5. Paste the copied URL and click "Import" to import the collection.

## Using Collections in Insomnia:
- Once imported, you can use the collections in Insomnia to test your API endpoints. 
- Simply click on the imported collection to view all the requests and associated endpoints.
