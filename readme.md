# API REST de Usuarios, Motos y Servicios

## ¿Qué hace esta API?
Esta API permite gestionar usuarios, motos y servicios de mantenimiento para motos. Los usuarios pueden registrarse, iniciar sesión y, una vez autenticados, pueden crear, consultar, actualizar y eliminar motos y servicios asociados a sus motos.

## Recursos principales
- **Usuarios**: Registro y autenticación de usuarios.
- **Motos**: Gestión de motos (crear, ver, actualizar, eliminar).
- **Servicios**: Registro de servicios de mantenimiento o reparación realizados a una moto.

## Relaciones entre colecciones
- Cada **servicio** está asociado a una **moto** (campo `motoId`) y al **usuario** que lo creó (campo `userId`).
- Un **usuario** puede tener varias motos y varios servicios asociados a sus motos.
- Una **moto** puede tener varios servicios registrados.

## Ejemplos de uso de rutas principales

### Usuarios
- Registro: `POST /api/v1/users/register`
  ```json
  {
    "username": "ejemplo",
    "password": "123456"
  }
  ```
- Login: `POST /api/v1/users/login`
  ```json
  {
    "username": "ejemplo",
    "password": "123456"
  }
  ```

### Motos
- Listar motos: `GET /api/v1/motos`
- Crear moto (requiere token): `POST /api/v1/motos`
  ```json
  {
    "marca": "Honda",
    "modelo": "CBR600RR",
    "anio": 2023,
    "color": "rojo",
    "precio": 12000
  }
  ```

### Servicios
- Listar servicios: `GET /api/v1/servicios`
- Crear servicio (requiere token): `POST /api/v1/servicios`
  ```json
  {
    "motoId": "<id_de_moto>",
    "descripcion": "Cambio de aceite",
    "fecha": "2025-06-29",
    "costo": 150
  }
  ```

> **Nota:** Para las rutas protegidas, se debe enviar el token JWT en el header `Authorization: Bearer <token>`.



