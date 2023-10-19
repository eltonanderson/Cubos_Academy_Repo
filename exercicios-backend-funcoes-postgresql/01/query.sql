SELECT SUM(estoque) FROM farmacia;

SELECT MIN(idade) FROM usuarios;

SELECT MAX(idade) FROM usuarios;

SELECT AVG(idade) FROM usuarios WHERE idade >= 18;

SELECT SUM(estoque) FROM farmacia WHERE categoria = 'blue' OR categoria = 'black';

SELECT categoria, COUNT(id), SUM(estoque) FROM farmacia GROUP BY categoria;

SELECT SUM(estoque) FROM farmacia WHERE categoria IS NULL;

SELECT CONCAT(medicamento, ' (', categoria, ')') AS "Medicamento - Categoria" FROM farmacia;

SELECT CONCAT(id, ' - ', medicamento, ' (', COALESCE(categoria, 'sem categoria'), ')') AS "ID - Medicamento - Categoria" FROM farmacia;

SELECT nome, idade, CAST(cadastro as date) FROM usuarios;

SELECT nome, idade, email, AGE(CAST(cadastro AS timestamp)) FROM usuarios WHERE idade < 18;

SELECT nome, idade, email, AGE(CAST(cadastro AS timestamp)) FROM usuarios WHERE idade >= 60;

SELECT categoria, SUM(estoque) FROM farmacia WHERE categoria IS NOT NULL GROUP BY categoria;

SELECT idade, COUNT(id) FROM usuarios WHERE idade >= 18 GROUP BY idade;

SELECT categoria, SUM(estoque) FROM farmacia GROUP BY categoria LIMIT 3;