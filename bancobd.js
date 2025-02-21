const sqlite3 = require('sqlite3').verbose();

// Cria ou abre um banco de dados chamado "meu_banco.db"
let db = new sqlite3.Database('./meu_banco.db');

// Cria uma tabela se não existir
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    idade INTEGER
  )`);
});

// Fecha o banco de dados
db.close();
