import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString(); // Altere para camelCase: updatedAt

  response.status(200).json({ updatedAt }); // Consistência na chave retornada
}

export default status;
