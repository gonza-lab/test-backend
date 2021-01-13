# Login

Este endpoint tiene la funcion de autenticar el mail y la contraseña de un usuario.

* URL: ``
* Method: `
* Autenticacion requerida: 

**Datos requeridos**
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