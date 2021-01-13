# Signup

Este endpoint tiene la funcion de crear un usuario.

- URL: `/api/auth/signup`
- Method: `POST`
- Autenticacion requerida: No

**Datos requeridos**

- Body:

```json
{
  "email": "[email: String]",
  "password": "[password: String]",
  "firstName": "[first name: String]",
  "lastName": "[last name: String]"
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
  },
  "token": "[String]"
}
```
