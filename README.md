# API Docs

# Entorno de prueba

Para poner a funcionar el servidor se debe tener un archivo .env con los siguientes campos: 

-  **PORT**: Indicando el puerto donde correra el servidor.
- **DB_CNN**: El URI para conectarse a la base de datos. Ejemplo de URI: `mongodb+srv://MERN_USER:<password>@cluster0.o8yj6.mongodb.net/<dbname>?retryWrites=true&w=majority`
- **JWT_PRIVATE_KEY**: Clave secreta para encriptar los tokens. Puede ser aleatoria.

Una vez preparado el .env, para ejecturalo con nodemon `npm run dev`.

# Endpoints Publicos

Los endpoints abiertos no requieren token.

- [Login](./docs/login.md): `POST /api/auth/login`
- [Signup](./docs/signup.md): `POST /api/auth/signup`

# Endpoint Privados

Los endpoints privados requieren token. El token se envia por medio de `Headers` dentro del campo `x-token`.

- [Renew token](./docs/renew.md): `POST /api/auth/token`
- [Get user](./docs/get-user.md): `GET /api/user`
- [Update user](./docs/update-user.md): `PUT /api/user`
