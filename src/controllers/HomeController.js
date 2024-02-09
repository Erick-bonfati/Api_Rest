// Aqui estamos criando um novo aluno, por padrão de uma api rest nós
// devemos já ter o retorno do nosso recurso criado, agora todo conteudo que
// criarmos aqui vai ser adicionado dentro do nosso db
// Para fazer a adição no programa, seguimos essas etapas...
// INSOMNIA: SEND, e depois no MYSQL: EXECUTAR A QUERY

class HomeController {
  async index(req, res) {
    res.json('Index');
  }
}

export default new HomeController();
