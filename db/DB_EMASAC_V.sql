CREATE DATABASE EMASAC_V;
USE EMASAC_V;

--TABLA CONTACTO
CREATE TABLE contacto(
	id_contacto INT IDENTITY(1,1) NOT NULL,
	nombre VARCHAR(50) NOT NULL,
	apellido VARCHAR(50) NOT NULL,
	correo VARCHAR(50) NOT NULL,
	telefono VARCHAR(50) NOT NULL,
	tipo_cont VARCHAR(50) NOT NULL,
	mensaje VARCHAR(50) NOT NULL,

	PRIMARY KEY(id_contacto)
);
--TABLA ORIGEN
CREATE TABLE origen(
	id_origen INT IDENTITY(1,1) NOT NULL,
	depa_origen VARCHAR(100) NOT NULL,
	distri_origen VARCHAR(100) NOT NULL,
	estado VARCHAR(50) NOT NULL,
	direc_origen VARCHAR(250),

	PRIMARY KEY(id_origen)
);

--TABLA DESTINO
CREATE TABLE destino(
	id_destino INT IDENTITY(1,1) NOT NULL,
	depa_destino VARCHAR(100) NOT NULL,
	distri_destino VARCHAR(100) NOT NULL,
	direc_destino VARCHAR(200) NOT NULL,

	PRIMARY KEY(id_destino)
);

--TABLA CARGA
CREATE TABLE carga(
	id_carga INT IDENTITY(1,1) NOT NULL,
	alto FLOAT NOT NULL,
	ancho FLOAT NOT NULL,
	largo FLOAT NOT NULL,
	peso_cargo FLOAT NOT NULL,
	tipo_mercaderia VARCHAR(100),

	PRIMARY KEY(id_carga)
);

--TABLA USUARIO (LISTO)
CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(45) DEFAULT NULL,
    password VARCHAR(150) DEFAULT NULL,
    PRIMARY KEY(id)
);

--TABLA CLIENTE
CREATE TABLE cliente(
	id_clientes INT IDENTITY(1,1) NOT NULL,
	nombre VARCHAR(150) NOT NULL,
	apellidos VARCHAR(150) NOT NULL,
	correo VARCHAR(200) NOT NULL,
	celular VARCHAR(9),
	id_usuario INT NOT NULL,
	dni VARCHAR(8),

	PRIMARY KEY(id_cliente),
	FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);


--TABLE RESERVA
CREATE TABLE reserva(
	id_reserva INT IDENTITY(1,1) NOT NULL,
	tipo_transporte VARCHAR(100) NOT NULL,
	precio DECIMAL(2,0),
	estado VARCHAR(15),
	fecha_re DATE,
	id_origen INT NOT NULL,
	id_destino INT NOT NULL,
	id_usuario INT NOT NULL,
	id_carga INT NOT NULL,

	FOREIGN KEY(id_origen) REFERENCES origen(id_origen),
	FOREIGN KEY(id_destino) REFERENCES destino(id_destino),
	FOREIGN KEY(id_usuario) REFERENCES usuario(id_usuario),
	FOREIGN KEY(id_carga) REFERENCES carga(id_carga)
);