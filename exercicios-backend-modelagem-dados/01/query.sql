CREATE DATABASE ecommerce;

CREATE TABLE categorias (
  id serial PRIMARY KEY,
  nome varchar(50)
);

INSERT INTO categorias (nome)
VALUES
('frutas'),
('verduras'),
('massas'),
('bebidas'),
('utilidades');

CREATE TABLE produtos (
  id serial PRIMARY KEY,
  nome varchar(100),
  descricao text,
  preco integer,
  quantidade_em_estoque integer,
  categoria_id integer REFERENCES categorias(id)
);

INSERT INTO produtos
(nome, descricao, preco, quantidade_em_estoque, categoria_id)
VALUES
('Mamão',	'Rico em vitamina A, potássio e vitamina C'	,300,	123,	1),
('Maça',	'Fonte de potássio e fibras.', 90, 	34, 1),
('Cebola', 'Rico em quercetina, antocianinas, vitaminas do complexo B, C.',	50,	76,	2),
('Abacate',	'NÃO CONTÉM GLÚTEN.',	150,	64,	1),
('Tomate',	'Rico em vitaminas A, B e C.',	125,	88,	2),
('Acelga',	'NÃO CONTÉM GLÚTEN.',	235,	13,	2),
('Macarrão parafuso',	'Sêmola de trigo enriquecida com ferro e ácido fólico, ovos e corantes naturais',	690,	5,	3),
('Massa para lasanha',	'Uma reunião de família precisa ter comida boa e muita alegria.',	875,	19,	3),
('Refrigerante coca cola lata',	'Sabor original',	350,	189,	4),
('Refrigerante Pepsi 2l',	'NÃO CONTÉM GLÚTEN. NÃO ALCOÓLICO.',	700,	12,	4),
('Cerveja Heineken 600ml',	'Heineken é uma cerveja lager Puro Malte, refrescante e de cor amarelo-dourado',	1200,	500,	4),
('Agua mineral sem gás',	'Smartwater é água adicionado de sais mineirais (cálcio, potássio e magnésio) livre de sódio e com pH neutro.',	130,	478,	4),
('Vassoura',	'Pigmento, matéria sintética e metal.',	2350,	30,	5),
('Saco para lixo',	'Reforçado para garantir mais segurança',	1340,	90,	5),
('Escova dental',	'Faça uma limpeza profunda com a tecnologia inovadora',	1000,	44, 5),
('Balde para lixo 50l',	'Possui tampa e fabricado com material reciclado',	2290,	55,	5),
('Manga',	'Rico em Vitamina A, potássio e vitamina C',	198,	176,	1),
('Uva', 	'NÃO CONTÉM GLÚTEN.',	420,	90,	1);

CREATE TABLE clientes (
  cpf char(11) UNIQUE,
  nome varchar(150)
);

CREATE TABLE vendedores (
  cpf char(11) UNIQUE,
  nome varchar(150)
);

INSERT INTO clientes
(cpf, nome)
VALUES
('80371350042',	'José Augusto Silva'),
('67642869061',	'Antonio Oliveira'),
('63193310034',	'Ana Rodrigues'),
('75670505018',	'Maria da Conceição');

INSERT INTO vendedores
(cpf, nome)
VALUES
('82539841031',	'Rodrigo Sampaio'),
('23262546003',	'Beatriz Souza Santos'),
('28007155023',	'Carlos Eduardo');

CREATE TABLE pedidos (
  id serial PRIMARY KEY,
  valor integer,
  cliente_cpf char(11) REFERENCES clientes(cpf),
  vendedor_cpf char(11) REFERENCES vendedores(cpf)
);

CREATE TABLE itens_do_pedido (
  id serial PRIMARY KEY,
  pedido_id integer REFERENCES pedidos(id),
  quantidade integer,
  produto_id integer REFERENCES produtos(id)
);

--a) José Algusto comprou os seguintes itens com o vendedor Carlos Eduardo:
INSERT INTO pedidos
(valor, cliente_cpf, vendedor_cpf)
VALUES
(9650, 80371350042, 28007155023);

INSERT INTO itens_do_pedido
(pedido_id, quantidade, produto_id)
VALUES
(1, 1, 1),
(1, 1, 10),
(1, 6, 11),
(1, 1, 15),
(1, 5, 2);

UPDATE produtos SET quantidade_em_estoque = 
(SELECT quantidade_em_estoque FROM produtos WHERE id = 1) - 
(SELECT quantidade FROM itens_do_pedido WHERE pedido_id = 1 AND produto_id = 1) 
WHERE id = 1;
UPDATE produtos SET quantidade_em_estoque = 
(SELECT quantidade_em_estoque FROM produtos WHERE id = 10) - 
(SELECT quantidade FROM itens_do_pedido WHERE pedido_id = 1 AND produto_id = 10) 
WHERE id = 10;
UPDATE produtos SET quantidade_em_estoque = 
(SELECT quantidade_em_estoque FROM produtos WHERE id = 11) - 
(SELECT quantidade FROM itens_do_pedido WHERE pedido_id = 1 AND produto_id = 11) 
WHERE id = 11;
UPDATE produtos SET quantidade_em_estoque = 
(SELECT quantidade_em_estoque FROM produtos WHERE id = 15) - 
(SELECT quantidade FROM itens_do_pedido WHERE pedido_id = 1 AND produto_id = 15) 
WHERE id = 15;
UPDATE produtos SET quantidade_em_estoque = 
(SELECT quantidade_em_estoque FROM produtos WHERE id = 2) - 
(SELECT quantidade FROM itens_do_pedido WHERE pedido_id = 1 AND produto_id = 2) 
WHERE id = 2;

--b) Ana Rodrigues comprou os seguintes itens com a vendedora Beatriz Souza Santos:
INSERT INTO pedidos
(valor, cliente_cpf, vendedor_cpf)
VALUES
((10*198)+(3*420)+(5*300)+(10*125)+(2*235), 63193310034, 23262546003);

INSERT INTO itens_do_pedido
(pedido_id, quantidade, produto_id)
VALUES
(2, 10, 17),
(2, 3, 18),
(2, 5, 1),
(2, 10, 5),
(2, 2, 6);

UPDATE produtos SET quantidade_em_estoque = 
(SELECT quantidade_em_estoque FROM produtos WHERE id = 17) - 
(SELECT quantidade FROM itens_do_pedido WHERE pedido_id = 2 AND produto_id = 17) 
WHERE id = 17;
UPDATE produtos SET quantidade_em_estoque = 
(SELECT quantidade_em_estoque FROM produtos WHERE id = 18) - 
(SELECT quantidade FROM itens_do_pedido WHERE pedido_id = 2 AND produto_id = 18) 
WHERE id = 18;
UPDATE produtos SET quantidade_em_estoque = 
(SELECT quantidade_em_estoque FROM produtos WHERE id = 1) - 
(SELECT quantidade FROM itens_do_pedido WHERE pedido_id = 2 AND produto_id = 1) 
WHERE id = 1;
UPDATE produtos SET quantidade_em_estoque = 
(SELECT quantidade_em_estoque FROM produtos WHERE id = 5) - 
(SELECT quantidade FROM itens_do_pedido WHERE pedido_id = 2 AND produto_id = 5) 
WHERE id = 5;
UPDATE produtos SET quantidade_em_estoque = 
(SELECT quantidade_em_estoque FROM produtos WHERE id = 6) - 
(SELECT quantidade FROM itens_do_pedido WHERE pedido_id = 2 AND produto_id = 6) 
WHERE id = 6;

--c) Maria da Conceição comprou os seguintes itens com a vendedora Beatriz Souza Santos:
INSERT INTO pedidos
(valor, cliente_cpf, vendedor_cpf)
VALUES
((1*2350)+(6*130)+(5*198), 75670505018, 23262546003);

INSERT INTO itens_do_pedido
(pedido_id, quantidade, produto_id)
VALUES
(3, 1, 13),
(3, 6, 12),
(3, 5, 17);

UPDATE produtos SET quantidade_em_estoque = 
(SELECT quantidade_em_estoque FROM produtos WHERE id = 13) - 
(SELECT quantidade FROM itens_do_pedido WHERE pedido_id = 3 AND produto_id = 13) 
WHERE id = 13;
UPDATE produtos SET quantidade_em_estoque = 
(SELECT quantidade_em_estoque FROM produtos WHERE id = 12) - 
(SELECT quantidade FROM itens_do_pedido WHERE pedido_id = 3 AND produto_id = 12) 
WHERE id = 12;
UPDATE produtos SET quantidade_em_estoque = 
(SELECT quantidade_em_estoque FROM produtos WHERE id = 17) - 
(SELECT quantidade FROM itens_do_pedido WHERE pedido_id = 3 AND produto_id = 17) 
WHERE id = 17;

--d) Maria da Conceição comprou os seguintes itens com o vendedor Rodrigo Sampaio:
INSERT INTO pedidos
(valor, cliente_cpf, vendedor_cpf)
VALUES
((1*2290)+(6*420)+(1*690)+(3*300)+(20*125)+(2*235), 75670505018, 82539841031);

INSERT INTO itens_do_pedido
(pedido_id, quantidade, produto_id)
VALUES
(4, 1, 16),
(4, 6, 18),
(4, 1, 7),
(4, 3, 1),
(4, 20, 5),
(4, 2, 6);

UPDATE produtos SET quantidade_em_estoque = 
(SELECT quantidade_em_estoque FROM produtos WHERE id = 16) - 
(SELECT quantidade FROM itens_do_pedido WHERE pedido_id = 4 AND produto_id = 16) 
WHERE id = 16;
UPDATE produtos SET quantidade_em_estoque = 
(SELECT quantidade_em_estoque FROM produtos WHERE id = 18) - 
(SELECT quantidade FROM itens_do_pedido WHERE pedido_id = 4 AND produto_id = 18) 
WHERE id = 18;
UPDATE produtos SET quantidade_em_estoque = 
(SELECT quantidade_em_estoque FROM produtos WHERE id = 7) - 
(SELECT quantidade FROM itens_do_pedido WHERE pedido_id = 4 AND produto_id = 7) 
WHERE id = 7;
UPDATE produtos SET quantidade_em_estoque = 
(SELECT quantidade_em_estoque FROM produtos WHERE id = 1) - 
(SELECT quantidade FROM itens_do_pedido WHERE pedido_id = 4 AND produto_id = 1) 
WHERE id = 1;
UPDATE produtos SET quantidade_em_estoque = 
(SELECT quantidade_em_estoque FROM produtos WHERE id = 5) - 
(SELECT quantidade FROM itens_do_pedido WHERE pedido_id = 4 AND produto_id = 5) 
WHERE id = 5;
UPDATE produtos SET quantidade_em_estoque = 
(SELECT quantidade_em_estoque FROM produtos WHERE id = 6) - 
(SELECT quantidade FROM itens_do_pedido WHERE pedido_id = 4 AND produto_id = 6) 
WHERE id = 6;

--e) Antonio Oliveira comprou os seguintes itens com o vendedor Rodrigo Sampaio:
INSERT INTO pedidos
(valor, cliente_cpf, vendedor_cpf)
VALUES
((8*420)+(1*875)+(3*198)+(8*125)+(2*1200), 67642869061, 82539841031);

INSERT INTO itens_do_pedido
(pedido_id, quantidade, produto_id)
VALUES
(5, 8, 18),
(5, 1, 8),
(5, 3, 17),
(5, 8, 5),
(5, 2, 11);

UPDATE produtos SET quantidade_em_estoque = 
(SELECT quantidade_em_estoque FROM produtos WHERE id = 18) - 
(SELECT quantidade FROM itens_do_pedido WHERE pedido_id = 5 AND produto_id = 18) 
WHERE id = 18;
UPDATE produtos SET quantidade_em_estoque = 
(SELECT quantidade_em_estoque FROM produtos WHERE id = 8) - 
(SELECT quantidade FROM itens_do_pedido WHERE pedido_id = 5 AND produto_id = 8) 
WHERE id = 8;
UPDATE produtos SET quantidade_em_estoque = 
(SELECT quantidade_em_estoque FROM produtos WHERE id = 17) - 
(SELECT quantidade FROM itens_do_pedido WHERE pedido_id = 5 AND produto_id = 17) 
WHERE id = 17;
UPDATE produtos SET quantidade_em_estoque = 
(SELECT quantidade_em_estoque FROM produtos WHERE id = 5) - 
(SELECT quantidade FROM itens_do_pedido WHERE pedido_id = 5 AND produto_id = 5) 
WHERE id = 5;
UPDATE produtos SET quantidade_em_estoque = 
(SELECT quantidade_em_estoque FROM produtos WHERE id = 11) - 
(SELECT quantidade FROM itens_do_pedido WHERE pedido_id = 5 AND produto_id = 11) 
WHERE id = 11;
