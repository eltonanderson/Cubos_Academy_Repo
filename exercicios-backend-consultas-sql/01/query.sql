SELECT compositor, id FROM musicas;

SELECT composicao, tempo FROM musicas WHERE tempo > 4*60;

SELECT compositor FROM musicas WHERE id BETWEEN 47 AND 123;

SELECT * FROM musicas WHERE compositor IS NOT NULL AND tempo > 5*60 and compositor <> 'Bach';

SELECT composicao, tempo FROM musicas WHERE tempo > 5*60 and compositor = 'Mozart' OR compositor = 'Bach';

SELECT * FROM musicas ORDER BY id DESC;

SELECT * FROM musicas ORDER BY tempo DESC;

SELECT * FROM musicas ORDER BY tempo ASC LIMIT 5;

SELECT * FROM musicas ORDER BY tempo DESC LIMIT 10;

SELECT * FROM musicas ORDER BY tempo ASC LIMIT 10 OFFSET 5;

SELECT * FROM musicas LIMIT 10 OFFSET 30;

SELECT * FROM musicas LIMIT 12 OFFSET 50;

SELECT DISTINCT compositor FROM musicas WHERE compositor IS NOT NULL;

SELECT DISTINCT compositor, composicao FROM musicas;

SELECT * FROM musicas WHERE compositor LIKE 'Bra%';

SELECT * FROM musicas WHERE ritmo LIKE '%troppo';

SELECT * FROM musicas WHERE composicao ILIKE '%quartet%';

SELECT * FROM musicas WHERE composicao NOT ILIKE '%quintet%';
