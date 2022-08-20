import mongoose from "mongoose";
import config from "config";

async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {
    mongoose.connect(dbUri);
    console.log("Banco de dados conetado com sucesso");
  } catch (e) {
    console.log("não foi possivel se conectar");
    console.log("Erro: " + e);
  }
}

export default connect;
