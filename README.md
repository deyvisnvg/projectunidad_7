# PROYECTO UNIDAD 7

Creación de playlist

## Empezando

1. Instalar paquetes

   ```bash
   npm i
   ```

2. Es necesario crear tu archivo .env:

   ```bash
   # Tomar como referencia el archivo .env.example
   ```

3. Realizar migración:

   ```bash
   npx prisma migrate dev
   ```

4. Ejecute el servidor de desarrollo:

   ```bash
   npm run dev
   # or
   npx ts-node ./src/index.ts
   ```

## Funcionalidades de la Aplicación

### Componente User

- **Crear usuarios**

  > http://localhost:3001/api/v1/users/add

  _Condiciones:_

  - Para **crear un usuario**, enviar el siguiente **json** en el body del Postman. Ej.

    ```bash
    {
        "name": "daniela",
        "email": "daniela@gmail.com",
        "password": "1234",
        "date_born": "1994-10-22"
    }
    ```

- **Login usuario**

  > http://localhost:3002/api/v1/users/login

  _Condiciones:_

  - Para el **login**, enviar el siguiente **json** en el body del Postman. Ej.

    ```bash
    {
        "email": "daniela@gmail.com",
        "password": "1234"
    }
    ```

  - Response

    ```bash
    {
        "message": "successfully logged in",
        "user": {
            "name": "daniela",
            "email": "daniela@gmail.com",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImRhbmllbGEiLCJlbWFpbCI6ImRhbmllbGFAZ21haWwuY29tIiwiaWF0IjoxNjc0NTE5ODUyLCJleHAiOjE2NzQ1MTk5MzJ9.Hk50X3GCZ-hfk6CiNDgKJGSzRDXsxFSdXNIvTD8fODU"
        }
    }
    ```

- **Obtener lista de usuarios**

  > http://localhost:3001/api/v1/users/

  _Condiciones:_

  - El usuario debe iniciar sesión para generar la authentification.

  - Para **listar usuarios**, enviar la siguiente authentification en el header del Postman. Ej.

    ```bash
    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwibmFtZSI6ImdpbGxpYW4iLCJlbWFpbCI6ImdpbGxpYW5AZ21haWwuY29tIiwiaWF0IjoxNjc0MzY2ODM2LCJleHAiOjE2NzQzNjY4ODZ9.OUa1KqBxHi1v0_sILVbQCHLTAUj70XQCO9p8Q81cBbg
    ```

- **Buscar usuario por id**

  > http://localhost:3001/api/v1/users/id

  _Condiciones:_

  - Para **buscar un usuario**, enviar la siguiente authentification en el header del Postman. Ej.

    ```bash
    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwibmFtZSI6ImdpbGxpYW4iLCJlbWFpbCI6ImdpbGxpYW5AZ21haWwuY29tIiwiaWF0IjoxNjc0MzY2ODM2LCJleHAiOjE2NzQzNjY4ODZ9.OUa1KqBxHi1v0_sILVbQCHLTAUj70XQCO9p8Q81cBbg
    ```

## Usando las siguientes técnologias 🚀

- NodeJs y Express
- Prisma
- Typescript
- SQLite

## Integrantes 🚀

- Deyvis Neyser Valdez Gavilan
- Hermez Jaramillo
- Bill Toño Gutierrez Vega
