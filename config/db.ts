import mongoose from "mongoose";
import config from "config";
import Logger from "./logger";

async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {
    mongoose.connect(dbUri);
    Logger.info("Banco de dados conetado com sucesso");
  } catch (e) {
    Logger.error("não foi possivel se conectar");
    Logger.error("Erro: " + e);
    process.exit(1);
  }
}

export default connect;
