import express from "express";
const app = express();

import swaggerJsDoc from "swagger-jsdoc";

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Users API',
        version: '0.0.1',
      },
    },
    apis: ['./routers/*.js'], 
};
  
const openapiSpecification = swaggerJsDoc(options);

import swaggerUI from "swagger-ui-express";

app.use('/docs', swaggerUI.serve, swaggerUI.setup(openapiSpecification));

import userRouter from "./routers/users.js";
app.use(userRouter);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port`, PORT);
});
