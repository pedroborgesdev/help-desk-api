# API de Gerenciamento de Chamados

Esta API permite gerenciar chamados de suporte técnico, incluindo autenticação de usuários, criação, edição, consulta e remoção de chamados.

## Base URL
```
domain/api
```

## Autenticação

### Login
**Endpoint:** `POST /auth/enter`

**Descrição:** Autentica um usuário no sistema, verificando suas credenciais e permitindo acesso às funcionalidades protegidas da API.

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

**Descrição:** Registra um novo usuário no sistema, permitindo que ele crie uma conta para acessar a plataforma.

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

## Usuários

### Obter Informações do Usuário
**Endpoint:** `GET /user/fetch`

**Descrição:** Recupera informações detalhadas de um usuário específico, incluindo nome, email, senha (mascarada) e data de criação da conta.

**Query Parameters:**
- `email`: Email do usuário (exemplo: `email=johndoe@example.com`)

**Respostas:**
- Sucesso (200):
```json
{
    "username": "John Doe",
    "email": "johndoe@example.com",
    "password": "********",
    "created_at": "2023-07-15T14:30:45Z",
    "status": true
}
```
- Usuário não encontrado (404):
```json
{
    "message": "User not found",
    "status": false
}
```

### Listar Todos os Usuários
**Endpoint:** `GET /user/fetchall`

**Descrição:** Recupera uma lista de todos os usuários cadastrados no sistema, mostrando apenas informações básicas (nome e email) de cada um.

**Respostas:**
- Sucesso (200):
```json
{
    "users": [
        {
            "username": "John Doe",
            "email": "johndoe@example.com"
        },
        {
            "username": "Jane Smith",
            "email": "janesmith@example.com"
        }
    ],
    "status": true
}
```

### Deletar Usuário
**Endpoint:** `POST /user/delete`

**Descrição:** Remove um usuário do sistema com base no seu email, excluindo permanentemente sua conta e dados associados.

**Request Body:**
```json
{
    "email": "johndoe@example.com"
}
```

**Respostas:**
- Sucesso (200):
```json
{
    "message": "User has been deleted",
    "status": true
}
```
- Usuário não encontrado (404):
```json
{
    "message": "User not found",
    "status": false
}
```

### Criar Usuário
**Endpoint:** `POST /user/create`

**Descrição:** Cria um novo usuário no sistema (funciona de forma similar ao endpoint `/auth/register`), mas é destinado para uso administrativo.

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
    "message": "User has been created",
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

## Chamados

### Criar Chamado
**Endpoint:** `POST /called/create`

**Descrição:** Cria um novo chamado de suporte técnico no sistema, registrando informações como autor, nome, localização, equipamento e descrição do problema.

**Request Body:**
```json
{
    "author_email": "johndoe@example.com",
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

**Descrição:** Atualiza informações de um chamado existente, permitindo principalmente a alteração do status do chamado (pendente, em andamento, concluído).

**Request Body:**
```json
{
    "call_id": "call_987654321",
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

**Descrição:** Recupera uma lista de chamados associados a um autor específico, com opção de filtrar por status (todos, pendentes, em andamento, concluídos).

**Query Parameters:**
- `author`: Email do autor dos chamados (exemplo: `author=johndoe@example.com`)
- `status`: Filtro por status (valores possíveis: `all`, `pending`, `doing`, `conclued`)

**Exemplos:**
- Listar todos os chamados: `/called/fetch?author=johndoe@example.com&status=all`
- Listar chamados pendentes: `/called/fetch?author=johndoe@example.com&status=pending`

**Respostas:**
- Sucesso (200):
```json
{
    "calls": [
        {
            "call_id": "call_987654321",
            "call_name": "Broken computer",
            "call_status": "doing"
        },
        {
            "call_id": "call_987654322",
            "call_name": "Printer not working",
            "call_status": "pending"
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

**Descrição:** Recupera informações detalhadas de um chamado específico, incluindo seu histórico completo de atualizações e status atual.

**Query Parameters:**
- `call_id`: ID do chamado (exemplo: `call_id=call_987654321`)

**Respostas:**
- Sucesso (200):
```json
{
    "call_id": "call_987654321",
    "call_name": "Broken computer",
    "call_status": "doing",
    "call_explain": "Computer fell from the desk, screen is cracked and won't turn on",
    "history": [
        {
            "call_return": "Purchasing routers",
            "call_date": "2023-07-15T14:30:45Z"
        },
        {
            "call_return": "Configuring notebook",
            "call_date": "2023-07-16T09:15:22Z"
        },
        {
            "call_return": "Clean screen",
            "call_date": "2023-07-17T11:45:30Z"
        }
    ],
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

**Descrição:** Remove permanentemente um chamado do sistema, verificando se o autor que solicita a remoção é o mesmo que criou o chamado.

**Request Body:**
```json
{
    "author_email": "johndoe@example.com",
    "call_id": "call_987654321"
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
