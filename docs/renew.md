# Renew

Este endpoint tiene la funcion de renovar el token de un usuario.

- URL: `/api/auth/renew`
- Method: `GET`
- Autenticacion requerida: Si

**Datos requeridos**

- Header: `x-token: [token]`

**Respuesta correcta**

```json
{
  "ok": true,
  "user": {
    "_id": "[String]",
    "firstName": "[String]",
    "lastName": "[String]",
    "email": "[String]"
  },
  "token": "[String]"
}
```
