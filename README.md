# API Docs

# Endpoints Publicos

Los endpoints abiertos no requieren token.

- [Login](./docs/login.md): `POST /api/auth/login`
- [Signup](./docs/signup.md): `POST /api/auth/signup`

# Endpoint Privados

Los endpoints privados requieren token. El token se envia por medio de `Headers` dentro del campo `x-token`.

- [Renew token](./docs/renew.md): `POST /api/auth/token`
- [Get user](./docs/get-user.md): `GET /api/user`
- [Update user](./docs/update-user.md): `PUT /api/user`
