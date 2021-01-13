# Get User

Este endpoint sirve para obtener toda la informacion del usuario menos la constraseña.

- URL: `/api/user`
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
  }
}
```
