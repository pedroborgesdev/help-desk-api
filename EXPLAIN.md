# API de Gerenciamento de Chamados

Esta API permite gerenciar chamados de suporte técnico, incluindo autenticação de usuários, criação, edição, consulta e remoção de chamados.

## Base URL
```
domain/api
```

## Autenticação

### Login
**Endpoint:** `POST /auth/enter`

**Request Body:**
```json
{
    "username": "John Doe",
    "email": "johndoe@example.com",
    "password": "Password123"
}
```

**Respostas:**
- Sucesso (200):
```json
{
    "message": "User has been loged in",
    "status": true
}
```
- Email não registrado (400):
```json
{
    "message": "Email aren't registered",
    "status": false
}
```
- Senha incorreta (400):
```json
{
    "message": "Password is incorrect",
    "status": false
}
```

### Registro
**Endpoint:** `POST /auth/register`

**Request Body:**
```json
{
    "username": "John Doe",
    "email": "johndoe@example.com",
    "password": "Password123"
}
```

**Respostas:**
- Sucesso (200):
```json
{
    "message": "User has been registered",
    "status": true
}
```
- Email já existe (400):
```json
{
    "message": "Email already exists",
    "status": false
}
```
- Senha inválida (400):
```json
{
    "message": "Password is invalid",
    "status": false
}
```

## Chamados

### Criar Chamado
**Endpoint:** `POST /called/create`

**Request Body:**
```json
{
    "author_id": "<author_id>",
    "call_name": "Broken computer",
    "callL_label": "Room 19",
    "call_equipment": "Computer 97",
    "call_explain": "Computer has downed of the table"
}
```

**Respostas:**
- Sucesso (200):
```json
{
    "message": "Called has been created",
    "status": true
}
```

### Editar Chamado
**Endpoint:** `POST /called/edit`

**Request Body:**
```json
{
    "call_id": "<called_id>",
    "call_status": "doing"
}
```

**Respostas:**
- Sucesso (200):
```json
{
    "message": "Called has been edited",
    "status": true
}
```
- Chamado não encontrado (404):
```json
{
    "message": "Called hasn't found",
    "status": false
}
```

### Listar Chamados
**Endpoint:** `GET /called/fetch`

**Query Parameters:**
- `author`: ID do autor dos chamados

**Respostas:**
- Sucesso (200):
```json
{
    "calls": [
        {
            "call_id": "<call_id>",
            "call_name": "<call_name>",
            "call_status": "<call_status>"
        }
    ],
    "status": true
}
```
- Sem chamados (404):
```json
{
    "message": "Author don't have calls",
    "status": false
}
```

### Detalhes do Chamado
**Endpoint:** `GET /called/info`

**Query Parameters:**
- `call_id`: ID do chamado

**Respostas:**
- Sucesso (200):
```json
{
    "call_response": "<call_response>",
    "call_explain": "<call_explain>",
    "status": true
}
```
- Chamado não encontrado (404):
```json
{
    "message": "Call hasn't found",
    "status": false
}
```

### Remover Chamado
**Endpoint:** `POST /called/remove`

**Request Body:**
```json
{
    "author_id": "<author_id>",
    "call_id": "<called_id>"
}
```

**Respostas:**
- Sucesso (200):
```json
{
    "message": "Called has been edited",
    "status": true
}
```

## Observações
- Todos os endpoints podem retornar um erro genérico da API no formato:
```json
{
    "message": "api error {e}",
    "status": false
}
```
- Todos os endpoints que requerem autenticação devem incluir o token de autenticação no header da requisição.
- Os status codes HTTP apropriados são retornados junto com as respostas JSON. 
