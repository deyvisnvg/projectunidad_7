# PROYECTO UNIDAD 7

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)

## Integrantes 🚀

- Deyvis Neyser Valdez Gavilan
- Hermez Jaramillo
- Bill Toño Gutierrez Vega

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

  > Method: POST

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

  > Method: POST

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

  > Method: GET

  > http://localhost:3001/api/v1/users/

  _Condiciones:_

  - El usuario debe iniciar sesión para generar la authentification.

  - Para **listar usuarios**, enviar la siguiente authentification en el header del Postman. Ej.

    ```bash
    Authorization: Bearer $token_generado
    ```

- **Buscar usuario por id**

  > Method: GET

  > http://localhost:3001/api/v1/users/id

  _Condiciones:_

  - Para **buscar un usuario**, enviar la siguiente authentification en el header del Postman. Ej.

    ```bash
    Authorization: Bearer $token_generado
    ```

### Componente song

- **Crear song**
  > Method: POST

  > http://localhost:3001/api/v1/songs/add

  _Condiciones:_

  - Para **crear un song**, enviar la siguiente authentification en el header del Postman(el token se obtine cuando haces el login). Ej.

    ```bash
    Authorization: Bearer $token_generado
    ```

  - Para **crear un song**, enviar el siguiente **json** en el body del Postman. Ej.

    ```bash
    {
        "name": "A puro dolor",
        "artist": "Sin bandera",
        "album": "Album 1",
        "year": 2015,
        "genero": "Baladas",
        "duration": 120,
        "estado": "privado"
    }
    ```

- **Obtener lista de songs sin estar autenticados(públicas)**

  > Method: GET

  > http://localhost:3001/api/v1/songs/public

  _Condiciones:_

  - El usuario no debe estar autenticado necesariamente.

- **Obtener lista de songs estando autenticados(privadas y públicas)**

  > Method: GET

  > http://localhost:3001/api/v1/songs

  _Condiciones:_

  - Para obtener **songs** privadas y públicas lo primero es enviar la siguiente authentification en el header del Postman(el token se obtine cuando haces el login). Ej.

    ```bash
    Authorization: Bearer $token_generado
    ```

  - Despues hacer una peticion get a la ruta proporcionada.

- **Buscar song por id**
  > Method: GET

  > http://localhost:3001/api/v1/songs/id

  _Condiciones:_

  - Para **buscar un song por id**, enviar la siguiente authentification en el header del Postman(el token se obtine cuando haces el login). Ej.

    ```bash
    Authorization: Bearer $token_generado
    ```

  - En la ruta se reemplaza **id** por la id de la song que se quiere mostrar y se realiza una peticion GET.

### Componente Playlist

- **Crear playlist**

  > method: POST
  > http://localhost:3001/api/v1/playlist

  _Condiciones:_

  - Recuerda para crear la playlist debes estar loqueado.
  - Para **crear una playlist**
  - Enviar el siguiente **json** en el body del Postman. Ej.

  ```bash
   {
      "name": "Playlist 1",  #nombre de la playlist
      "user_id": 2,    # ID de la playlist
   }
  ```

  - Response

  ```bash
      "message": "Playlist creada exitosamente",
      "data": {
          "id": 1,
          "name": "playlist 1",
          "user_id": 2
      }
  ```

  - **Agregar una canción**
    > method: POST
    > http://localhost:3001/api/v1/playlist/addSong

  _Condiciones:_

  - Recuerda para crear la canción debes estar loqueado.
  - Para **crear una canción**
  - Enviar el siguiente **json** en el body del Postman. Ej.

  ```bash
      {
          "name": "You're So High",
          "artist": "Eli & Fur",
          "album": "Album 1",
          "year": 2020,
          "genero": "DeepHouse",
          "duration": 120,
          "estado": "publico"
      }
  ```

- Response

  ```bash
          {
          "ok": true,
          "message": "Canción creada correctamente"
          }
  ```

  - **Buscar Playlist por id**
    > method: GET
    > http://localhost:3001/api/v1/playlist/1

  _Condiciones:_

  - Para **que el usuario busque por el ID playlist**, enviar
    **ID POR PARAMETRO** sigue el ejm de la URL, siguiente authentification en el header del Postman. Ej.

  - recuerda todo este procedimiento se realiza [**CREAR PLAYLIST Y ADICIONAR LA CANCIÓN EN LA PLAYLIST**] en el header de
    postman agregando un nuevo campo **[key : Authorization/ value seria el bearer + el Token]**

    ```bash
    Authorization:  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwibmFtZSI6ImdpbGxpYW4iLCJlbWFpbCI6ImdpbGxpYW5AZ21haWwuY29tIiwiaWF0IjoxNjc0MzY2ODM2LCJleHAiOjE2NzQzNjY4ODZ9.OUa1KqBxHi1v0_sILVbQCHLTAUj70XQCO9p8Q81cBbg
    ```

    ```bash
        "data": {
            "id": 1,
            "name": "playlist 1",
            "user_id": 2,
            "songs": [
                {
                    "id": 1,
                    "name": "You're So High",
                    "artist": "Eli & Fur",
                    "album": "Album 1",
                    "year": 2020,
                    "genero": "DeepHouse",
                    "duration": 120,
                    "estado": "publico",
                    "updated_at": "2023-01-24T02:35:11.416Z"
                },
                {
                    "id": 2,
                    "name": "Devil Eyes",
                    "artist": "Hippie Sabotage ",
                    "album": "Album 1",
                    "year": 2020,
                    "genero": "DeepHouse",
                    "duration": 120,
                    "estado": "publico",
                    "updated_at": "2023-01-24T03:05:23.308Z"
                }
            ]
        }


    ```
