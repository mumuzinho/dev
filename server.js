const mongoose = require('mongoose'); 
const express = require("express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const bodyParser = require('body-parser');
const app = express()
const router = require("./routes/api");

//config
const swaggerOptions = {
    swaggerDefinition:{
      info:{
        title: "Projeto Crud",
        description: "AP2",
        contact:{
          name: "Danilo Lourenco",
        },
        servers:["http://localhost:3059"]
      }
    },
    apis: ["./routes/api.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://root:root@bdcrud-rogul.mongodb.net/test?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false
    }
  )
  .then(() =>
    console.log("--> Connection to BDCRUD MongoDb Atlas successful!")
  )
  .catch(err => console.error(err));

  app.use("/api", router);

  app.listen(3059, () => {
    console.log("Ouvindo na porta 3059")
  })

