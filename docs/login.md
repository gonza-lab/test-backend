# Login

Este endpoint tiene la funcion de autenticar el mail y la contraseña de un usuario.

* URL: `/api/auth/login`
* Method: `POST`
* Autenticacion requerida: No 

**Datos requeridos**
* Body 
```json
{
  "email": "[email: String]",
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
    "email": "[String]",
  },
  "token": "[String]"
}
```