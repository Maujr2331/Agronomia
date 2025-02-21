const sqlite3 = require('sqlite3').verbose();

// Cria ou abre o banco de dados
let db = new sqlite3.Database('./meu_banco.db');

// Função para adicionar usuário
function adicionarUsuario(nome, idade) {
  let stmt = db.prepare('INSERT INTO usuarios (nome, idade) VALUES (?, ?)');
  stmt.run(nome, idade);
  stmt.finalize(); // Finaliza a instrução
  console.log(`Usuário ${nome} adicionado com sucesso!`);
}

// Função para consultar todos os usuários
function consultarUsuarios() {
  db.each('SELECT id, nome, idade FROM usuarios', (err, row) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`ID: ${row.id}, Nome: ${row.nome}, Idade: ${row.idade}`);
    }
  });
}

// Chamada para adicionar usuários

adicionarUsuario('Ana', 27);
adicionarUsuario('João', 30);


// Chamada para consultar usuários
consultarUsuarios();

// Fecha o banco de dados
db.close();
