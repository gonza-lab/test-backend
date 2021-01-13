# Update User

Este endpoint sirve para actualizar cualquier informacion del usuario, excluyendo campos como `_id` y `email`. Se deben enviar los campos que se quieren actualizar en el body.

- URL: `/api/user`
- Method: `PUT`
- Autenticacion requerida: Si

**Datos requeridos**

- Header: `x-token: [token]`
- Body

```json
{
  "firstName": "[first name: String]",
  "lastName": "[last name: String]",
  "password": "[password: String]"
}
```

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
