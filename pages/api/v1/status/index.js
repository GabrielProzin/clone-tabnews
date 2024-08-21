function status(request, response) {
  response.status(200).json({ chave: "alunos são acima a da média" });
}

export default status;
