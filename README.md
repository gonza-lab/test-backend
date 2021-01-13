# API Docs

# Endpoints Publicos 

Los endpoints abiertos no requieren token.

* [Login](./docs/login.md): `POST /api/auth/login`
* [Signup](): `POST /api/auth/signup`

# Endpoint Privados

Los endpoints privados requieren token. El token se envia por medio de `Headers` dentro del campo `x-token`. 

* [Renew token](): `POST /api/auth/token`
* [Get user](): `GET /api/user`
* [Update user](): `PUT /api/user`