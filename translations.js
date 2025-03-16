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
        'login-desc': 'Authenticates a user in the system, verifying their credentials and allowing access to protected API functionalities.',
        'register-desc': 'Registers a new user in the system, allowing them to create an account to access the platform.',
        'user-fetch-desc': 'Retrieves detailed information about a specific user, including name, email, password (masked) and account creation date.',
        'user-fetchall-desc': 'Retrieves a list of all users registered in the system, showing only basic information (name and email) for each one.',
        'user-delete-desc': 'Removes a user from the system based on their email, permanently deleting their account and associated data.',
        'user-create-desc': 'Creates a new user in the system (works similarly to the /auth/register endpoint), but is intended for administrative use.',
        'ticket-create-desc': 'Creates a new technical support ticket in the system, recording information such as author, name, location, equipment, and problem description.',
        'ticket-update-desc': 'Updates information for an existing ticket, primarily allowing changes to the ticket status (pending, in progress, completed).',
        'ticket-fetch-desc': 'Retrieves a list of tickets based on specified filters, allowing users to view tickets by author and status.',
        'ticket-info-desc': 'Retrieves detailed information about a specific ticket, including its status, description, and history of updates.',
        'ticket-delete-desc': 'Removes a ticket from the system based on its ID and the author\'s email, permanently deleting the ticket and its history.',
        
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
        'login-desc': 'Autentica um usuário no sistema, verificando suas credenciais e permitindo acesso às funcionalidades protegidas da API.',
        'register-desc': 'Registra um novo usuário no sistema, permitindo que ele crie uma conta para acessar a plataforma.',
        'user-fetch-desc': 'Recupera informações detalhadas de um usuário específico, incluindo nome, email, senha (mascarada) e data de criação da conta.',
        'user-fetchall-desc': 'Recupera uma lista de todos os usuários cadastrados no sistema, mostrando apenas informações básicas (nome e email) de cada um.',
        'user-delete-desc': 'Remove um usuário do sistema com base no seu email, excluindo permanentemente sua conta e dados associados.',
        'user-create-desc': 'Cria um novo usuário no sistema (funciona de forma similar ao endpoint <code>/auth/register</code>), mas é destinado para uso administrativo.',
        'ticket-create-desc': 'Cria um novo chamado de suporte técnico no sistema, registrando informações como autor, nome, localização, equipamento e descrição do problema.',
        'ticket-update-desc': 'Atualiza informações de um chamado existente, permitindo principalmente a alteração do status do chamado (pendente, em andamento, concluído).',
        'ticket-fetch-desc': 'Recupera uma lista de chamados com base em filtros especificados, permitindo aos usuários visualizar chamados por autor e status.',
        'ticket-info-desc': 'Recupera informações detalhadas sobre um chamado específico, incluindo seu status, descrição e histórico de atualizações.',
        'ticket-delete-desc': 'Remove um chamado do sistema com base no seu ID e no email do autor, excluindo permanentemente o chamado e seu histórico.',
        
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