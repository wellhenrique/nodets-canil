import express from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";
import mainRoutes from "./routes/index";

dotenv.config();
//definindo o servidor
const server = express();
//configurando a view engine como mustache
server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());
//Configurando o diretorio principal
server.use(express.static(path.join(__dirname, "../public")));

//Rotas Principais
server.use(mainRoutes);

//Caso a rota procurada não exista
server.use((req, res) => {
  res.render('./pages/404')
});
//servidor
server.listen(process.env.PORT);
