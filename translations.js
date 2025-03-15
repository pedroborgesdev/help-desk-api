// Translations for the API documentation
const translations = {
    'en-us': {
        // Navigation
        'api-docs': 'API Docs',
        'introduction': 'Introduction',
        'what-is-this': 'What is this API?',
        'base-url': 'Base URL',
        'authentication': 'Authentication',
        'login': 'Login',
        'register': 'Register',
        'users': 'Users',
        'user-fetch': 'Fetch User Information',
        'user-fetchall': 'List All Users',
        'user-create': 'Create User',
        'user-update': 'Update User',
        'user-delete': 'Delete User',
        'tickets': 'Tickets',
        'ticket-create': 'Create Ticket',
        'ticket-fetch': 'Fetch Tickets',
        'ticket-update': 'Update Ticket',
        'ticket-info': 'Ticket Details',
        'ticket-delete': 'Delete Ticket',
        'ticket-assign': 'Assign Ticket',
        'ticket-close': 'Close Ticket',
        'ticket-reopen': 'Reopen Ticket',
        
        // Content
        'api-title': 'Ticket Management API Documentation',
        'api-description': 'This API provides endpoints for managing support tickets and user accounts.',
        'api-features': 'Features:',
        'api-feature-1': 'User authentication and management',
        'api-feature-2': 'Ticket creation and tracking',
        'api-feature-3': 'Assignment and status updates',
        'api-feature-4': 'Secure communication with JWT',
        
        // Common
        'description': 'Description:',
        'request-body': 'Request Body:',
        'responses': 'Responses:',
        'success': 'Success',
        'error': 'Error',
        'query-params': 'Query Parameters:',
        'path-params': 'Path Parameters:',
        'headers': 'Headers:',
        'examples': 'Examples:',
        
        // Descriptions
        'user-fetch-desc': 'Fetches information about a specific user.',
        'user-fetchall-desc': 'Fetches all users from the system.',
        'user-delete-desc': 'Deletes a user based on their email.',
        'user-create-desc': 'Creates a user (works similarly to the /auth/register endpoint).',
        
        // Parameter descriptions
        'email-param-desc': 'User email (example: <code>email=johndoe@example.com</code>)',
        'author-param-desc': 'Email of the ticket author (example: <code>author=johndoe@example.com</code>)',
        'status-param-desc': 'Status filter (possible values: <code>all</code>, <code>pending</code>, <code>doing</code>, <code>conclued</code>)',
        'call-id-param-desc': 'Ticket ID (example: <code>call_id=call_987654321</code>)',
        
        // Examples
        'example-all-tickets': 'List all tickets:',
        'example-pending-tickets': 'List pending tickets:',
        
        // Messages
        'user-not-found': 'User not found',
        'ticket-not-found': 'Ticket not found',
        'no-tickets': 'No tickets',
        'email-exists': 'Email already exists',
        'invalid-password': 'Password is invalid',
        'user-registered': 'User has been registered',
        'user-logged-in': 'User has been logged in',
        'email-not-registered': 'Email is not registered',
        'incorrect-password': 'Password is incorrect'
    },
    'pt-br': {
        // Navegação
        'api-docs': 'Documentação da API',
        'introduction': 'Introdução',
        'what-is-this': 'O que é esta API?',
        'base-url': 'URL Base',
        'authentication': 'Autenticação',
        'login': 'Login',
        'register': 'Registro',
        'users': 'Usuários',
        'user-fetch': 'Obter Informações do Usuário',
        'user-fetchall': 'Listar Todos os Usuários',
        'user-create': 'Criar Usuário',
        'user-update': 'Atualizar Usuário',
        'user-delete': 'Excluir Usuário',
        'tickets': 'Chamados',
        'ticket-create': 'Criar Chamado',
        'ticket-fetch': 'Obter Chamados',
        'ticket-update': 'Atualizar Chamado',
        'ticket-info': 'Detalhes do Chamado',
        'ticket-delete': 'Excluir Chamado',
        'ticket-assign': 'Atribuir Chamado',
        'ticket-close': 'Fechar Chamado',
        'ticket-reopen': 'Reabrir Chamado',
        
        // Conteúdo
        'api-title': 'Documentação da API de Gerenciamento de Chamados',
        'api-description': 'Esta API fornece endpoints para gerenciar chamados de suporte e contas de usuários.',
        'api-features': 'Recursos:',
        'api-feature-1': 'Autenticação e gerenciamento de usuários',
        'api-feature-2': 'Criação e acompanhamento de chamados',
        'api-feature-3': 'Atribuição e atualizações de status',
        'api-feature-4': 'Comunicação segura com JWT',
        
        // Comum
        'description': 'Descrição:',
        'request-body': 'Corpo da Requisição:',
        'responses': 'Respostas:',
        'success': 'Sucesso',
        'error': 'Erro',
        'query-params': 'Parâmetros de Consulta:',
        'path-params': 'Parâmetros de Caminho:',
        'headers': 'Cabeçalhos:',
        'examples': 'Exemplos:',
        
        // Descrições
        'user-fetch-desc': 'Puxa informações de um usuário específico.',
        'user-fetchall-desc': 'Puxa todos os usuários do sistema.',
        'user-delete-desc': 'Deleta um usuário com base no email.',
        'user-create-desc': 'Cria um usuário (funciona de forma similar ao endpoint <code>/auth/register</code>).',
        
        // Descrições de parâmetros
        'email-param-desc': 'Email do usuário (exemplo: <code>email=johndoe@example.com</code>)',
        'author-param-desc': 'Email do autor dos chamados (exemplo: <code>author=johndoe@example.com</code>)',
        'status-param-desc': 'Filtro por status (valores possíveis: <code>all</code>, <code>pending</code>, <code>doing</code>, <code>conclued</code>)',
        'call-id-param-desc': 'ID do chamado (exemplo: <code>call_id=call_987654321</code>)',
        
        // Exemplos
        'example-all-tickets': 'Listar todos os chamados:',
        'example-pending-tickets': 'Listar chamados pendentes:',
        
        // Mensagens
        'user-not-found': 'Usuário não encontrado',
        'ticket-not-found': 'Chamado não encontrado',
        'no-tickets': 'Sem chamados',
        'email-exists': 'Email já existe',
        'invalid-password': 'Senha inválida',
        'user-registered': 'Usuário foi registrado',
        'user-logged-in': 'Usuário foi autenticado',
        'email-not-registered': 'Email não está registrado',
        'incorrect-password': 'Senha incorreta'
    }
}; 