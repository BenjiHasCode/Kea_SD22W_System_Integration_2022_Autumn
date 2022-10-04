import express from 'express';
import timeRouter from "./routers/time.js";
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

const app = express();

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Time API',
        version: '0.0.1',
      },
    },
    apis: ['./routers/*.js'], 
};
  
const openapiSpecification = swaggerJsDoc(options);


app.use('/docs', swaggerUI.serve, swaggerUI.setup(openapiSpecification));
app.use(timeRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port`, PORT);
});


















