# 📖 Proyecto Silence: Plataforma de Gestión Web (Ejemplo)

## 🌟 Descripción General

Este proyecto es una aplicación web de ejemplo completa, construida sobre el **Silence Framework** (Python), que ilustra una arquitectura de servicio web con **autenticación de usuarios** y funcionalidad **CRUD** (Creación, Lectura, Actualización y Eliminación) sobre un catálogo de datos (referenciados como "libros" en los *endpoints*).

El objetivo principal es servir como una demostración de mis habilidades en el desarrollo *full-stack*, abarcando desde la **configuración segura de la base de datos** hasta la exposición de una **API RESTful funcional**.

---

## 🚀 Habilidades Demostradas

| Componente | Tecnología Clave | Habilidad Demostrada |
| :--- | :--- | :--- |
| **Backend/API** | **Silence Framework** (v2.2.0) | Despliegue de una **API RESTful** (`/api/v1`) en un servidor integrado (`http://127.0.0.1:8081`). |
| **Base de Datos** | **MySQL/MariaDB** | Configuración de la conexión y gestión de la inicialización (ejecución de *scripts* SQL) mediante comandos de *framework*. |
| **Seguridad/Auth** | Implementación de **Login** y **Registro** con contraseñas y gestión de sesiones. |
| **CRUD** | Endpoints de **`/books`** y **`/users`** | Dominio de operaciones **CRUD** completas para gestionar recursos (esencial para la gestión de archivos y edición). |
| **Arquitectura** | Configuración unificada | Gestión de variables críticas de configuración (puerto, prefijo API, `SECRET_KEY`). |

---

## ⚙️ Configuración y Ejecución Local

### 1. Requisitos

Asegúrate de tener instalados:
* Python 3.x
* Una instancia de **MySQL** o **MariaDB**
* El framework **`silence`**.

### 2. Configuración de Conexión

El proyecto utiliza las siguientes credenciales para conectarse a la base de datos:

| Configuración | Valor |
| :--- | :--- |
| **Base de Datos** | `users` |
| **Host** | `127.0.0.1` |
| **Puerto** | `3306` |
| **Usuario** | `root` |
| **Contraseña** | `root` |

### 3. Inicialización de la Base de Datos

Para crear la base de datos y las tablas necesarias (`Users` y `Books`) a partir de los *scripts* definidos (`createdb.sql`, `books.sql`), utiliza el comando de inicialización del *framework*:

```bash
# Este comando crea la BD 'users' y ejecuta los scripts SQL.
silence createdb
```

> Nota: La tabla Users se precarga con 5 usuarios, todos con la contraseña: `iissi`.

### 4. Inicio del Servidor

Una vez inicializada la base de datos, puedes levantar el servidor de la aplicación:

```bash
# Inicia la API y el servidor web.
silence run
```

La aplicación estará disponible en: [http://127.0.0.1:8081/](http://127.0.0.1:8081/)

---

## 🌐 Endpoints de la API (v1)

Todos los servicios de la API están disponibles bajo el prefijo: `/api/v1`

| Recurso | Método(s) | Descripción |
| :--- | :--- | :--- |
| `/api/v1/login` | POST | Autenticación y creación de sesión de usuario. |
| `/api/v1/register` | POST | Registro de un nuevo usuario en la tabla Users. |
| `/api/v1/users` | GET, POST | Listar todos los usuarios o crear un nuevo usuario. |
| `/api/v1/users/<userId>` | GET, PUT, DELETE | Gestionar un usuario específico. |
| `/api/v1/books` | GET, POST | Listar todos los modelos/libros o subir un nuevo registro. |
| `/api/v1/books/<bookId>` | GET, PUT, DELETE | Gestionar un modelo/libro específico (p.ej., editar o eliminar un registro). |
