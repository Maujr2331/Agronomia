const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./meu_banco.db');

function adicionarUsuario(nome, idade) {
  db.get('SELECT id FROM usuarios WHERE nome = ?', [nome], (err, row) => {
    if (err) {
      console.error(err);
    } else if (row) {
      console.log(`Usuário ${nome} já existe no banco de dados.`);
    } else {
      let stmt = db.prepare('INSERT INTO usuarios (nome, idade) VALUES (?, ?)');
      stmt.run(nome, idade, (err) => {
        if (err) {
          console.error('Erro ao adicionar usuário:', err);
        } else {
          console.log(`Usuário ${nome} adicionado com sucesso!`);
        }
      });
      stmt.finalize();
    }
  });
}

function consultarUsuarios() {
  db.each('SELECT id, nome, idade FROM usuarios', (err, row) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`ID: ${row.id}, Nome: ${row.nome}, Idade: ${row.idade}`);
    }
  });
}

adicionarUsuario('Ana', 27);
adicionarUsuario('João', 30);

consultarUsuarios();

db.close();
