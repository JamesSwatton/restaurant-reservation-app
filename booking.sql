DROP TABLE customers;

CREATE TABLE customers (
    id SERIAL8,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    phone VARCHAR(255)
);

INSERT INTO customers (first_name, last_name, phone) VALUES ('james', 'swatton', '0823642');
INSERT INTO customers (first_name, last_name, phone) VALUES ('rachael', 'davis', '0872967');
INSERT INTO customers (first_name, last_name, phone) VALUES ('frank', 'pancake', '0237892');
INSERT INTO customers (first_name, last_name, phone) VALUES ('ralph', 'apples', '0782903');

SELECT * FROM customers;
