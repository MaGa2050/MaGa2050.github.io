
CREATE TABLE integrantes(
id INT(11) PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(40) NOT NULL, 
apellido VARCHAR(40) NOT NULL,
edad TINYINT NOT NULL,
fecha TIMESTAMP NOT NULL,
provincia VARCHAR(30) NOT NULL);

INSERT INTO integrantes(nombre,apellido,edad,fecha,provincia)VALUES('CARLOS','LOPEZ',34,'1988-06-02','CABA');
INSERT INTO integrantes(nombre,apellido,edad,fecha,provincia)VALUES('ALEJANDRO','BALCARCE','34','1987-07-08','BUENOS AIRES');
INSERT INTO integrantes(nombre,apellido,edad,fecha,provincia)VALUES('JOSE','PEREZ','36','1985-05-05','BUENOS AIRES');
INSERT INTO integrantes(nombre,apellido,edad,fecha,provincia)VALUES('VERONICA','MICUCCI','33','1990-03-17','CHACO');
INSERT INTO integrantes(nombre,apellido,edad,fecha,provincia)VALUES('MICAELA','VALENTE','22','2000-02-08','CORDOBA');