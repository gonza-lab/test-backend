# Delete User

Este endpoint sirve para eliminar su propio usuario.

- URL: `/api/user`
- Method: `DELETE`
- Autenticacion requerida: Si

**Datos requeridos**

- Header: `x-token: [token]`

**Respuesta correcta**

```json
{
  "ok": true,
  "user": {}
}
```
