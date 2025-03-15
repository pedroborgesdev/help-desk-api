document.addEventListener('DOMContentLoaded', function() {
    // Expandir/colapsar seções da barra lateral
    const sectionHeaders = document.querySelectorAll('.section-header');
    
    // Ativar a primeira seção por padrão
    const firstSection = document.querySelector('.nav-section');
    if (firstSection) {
        firstSection.classList.add('active');
    }
    
    sectionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const section = this.parentElement;
            section.classList.toggle('active');
        });
    });
    
    // Funcionalidade do botão de menu mobile
    const mobileToggle = document.getElementById('mobile-toggle');
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
    }
    
    // Fechar o menu ao clicar no conteúdo em dispositivos móveis
    if (content) {
        content.addEventListener('click', function() {
            if (window.innerWidth <= 768 && sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
            }
        });
    }
    
    // Funcionalidade de alternância de tema
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const themeIcon = themeToggle.querySelector('i');
    
    // Verificar se há uma preferência de tema salva
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        if (savedTheme === 'light') {
            htmlElement.classList.remove('dark-theme');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            htmlElement.classList.add('dark-theme');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    }
    
    // Alternar entre temas claro e escuro
    themeToggle.addEventListener('click', function() {
        if (htmlElement.classList.contains('dark-theme')) {
            // Mudar para tema claro
            htmlElement.classList.remove('dark-theme');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        } else {
            // Mudar para tema escuro
            htmlElement.classList.add('dark-theme');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        }
        
        // Recarregar o Prism.js para atualizar a coloração de sintaxe
        if (typeof Prism !== 'undefined') {
            Prism.highlightAll();
        }
    });
    
    // Funcionalidade de troca de idioma
    const languageSelect = document.getElementById('language-select');
    
    // Verificar se há uma preferência de idioma salva
    const savedLanguage = localStorage.getItem('language') || 'en-us';
    htmlElement.setAttribute('lang', savedLanguage);
    
    // Definir o valor do select para o idioma salvo
    if (languageSelect) {
        languageSelect.value = savedLanguage;
        
        // Aplicar as traduções iniciais
        applyTranslations(savedLanguage);
        
        // Adicionar evento de mudança de idioma
        languageSelect.addEventListener('change', function() {
            const selectedLanguage = this.value;
            htmlElement.setAttribute('lang', selectedLanguage);
            localStorage.setItem('language', selectedLanguage);
            
            // Aplicar as traduções para o idioma selecionado
            applyTranslations(selectedLanguage);
        });
    }
    
    // Função para aplicar as traduções
    function applyTranslations(language) {
        const elements = document.querySelectorAll('[data-lang-key]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[language] && translations[language][key]) {
                // Usar innerHTML em vez de textContent para permitir tags HTML
                element.innerHTML = translations[language][key];
            }
        });
        
        // Atualizar o título da página
        if (translations[language] && translations[language]['api-title']) {
            document.title = translations[language]['api-title'];
        }
        
        // Atualizar os tooltips
        const themeButton = document.getElementById('theme-toggle');
        if (themeButton) {
            themeButton.title = language === 'en-us' ? 'Toggle theme' : 'Alternar tema';
        }
        
        const languageSelector = document.getElementById('language-select');
        if (languageSelector) {
            languageSelector.title = language === 'en-us' ? 'Select language' : 'Selecionar idioma';
        }
    }
    
    // Destacar item ativo na navegação com base na rolagem
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('.subsection a');
    
    function highlightNavOnScroll() {
        let scrollPosition = window.scrollY;
        
        // Adicionar um pequeno offset para melhorar a detecção
        scrollPosition += 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remover classe ativa de todos os links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Adicionar classe ativa ao link correspondente
                const activeLink = document.querySelector(`.subsection a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                    
                    // Expandir a seção pai se necessário
                    const parentSection = activeLink.closest('.nav-section');
                    if (parentSection && !parentSection.classList.contains('active')) {
                        parentSection.classList.add('active');
                    }
                }
            }
        });
    }
    
    // Adicionar evento de rolagem para destacar navegação
    window.addEventListener('scroll', highlightNavOnScroll);
    
    // Rolagem para links de âncora (sem animação)
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Rolagem instantânea sem comportamento suave
                window.scrollTo(0, targetElement.offsetTop - 20);
                
                // Fechar o menu em dispositivos móveis após clicar
                if (window.innerWidth <= 768 && sidebar.classList.contains('active')) {
                    sidebar.classList.remove('active');
                }
                
                // Atualizar a URL com o hash
                history.pushState(null, null, `#${targetId}`);
            }
        });
    });
    
    // Verificar se há um hash na URL ao carregar a página
    if (window.location.hash) {
        const targetId = window.location.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            // Rolagem instantânea sem atraso
            window.scrollTo(0, targetElement.offsetTop - 20);
            
            // Expandir a seção correspondente
            const activeLink = document.querySelector(`.subsection a[href="#${targetId}"]`);
            if (activeLink) {
                const parentSection = activeLink.closest('.nav-section');
                if (parentSection) {
                    parentSection.classList.add('active');
                }
            }
        }
    }

    // Funcionalidade para expandir/colapsar seções de resposta
    function setupResponseSections() {
        // Encontrar todos os elementos h3 com texto "Respostas:" ou "Responses:"
        const responseHeaders = document.querySelectorAll('h3');
        
        responseHeaders.forEach(header => {
            if (header.textContent.trim() === 'Respostas:' || header.textContent.trim() === 'Responses:') {
                // Adicionar atributo data-lang-key
                header.setAttribute('data-lang-key', 'responses');
                
                // Criar a seção de resposta
                const responseSection = document.createElement('div');
                responseSection.className = 'response-section';
                
                // Criar o cabeçalho clicável
                const responseHeaderDiv = document.createElement('div');
                responseHeaderDiv.className = 'response-header';
                
                // Mover o h3 para dentro do cabeçalho
                header.parentNode.insertBefore(responseSection, header);
                responseHeaderDiv.appendChild(header);
                
                // Adicionar o ícone de seta
                const toggleIcon = document.createElement('i');
                toggleIcon.className = 'fas fa-chevron-down response-toggle';
                responseHeaderDiv.appendChild(toggleIcon);
                
                responseSection.appendChild(responseHeaderDiv);
                
                // Criar o contêiner para o conteúdo
                const responseContent = document.createElement('div');
                responseContent.className = 'response-content';
                
                // Mover todo o conteúdo relacionado à resposta para dentro do contêiner
                let nextElement = responseSection.nextSibling;
                
                while (nextElement && 
                      (nextElement.nodeName !== 'H3' || 
                       (nextElement.nodeName === 'H3' && !nextElement.textContent.includes('Respostas:') && !nextElement.textContent.includes('Responses:')))) {
                    
                    // Se encontrarmos outro h3 ou uma nova seção, paramos
                    if ((nextElement.nodeName === 'H3' && nextElement.textContent !== 'Respostas:' && nextElement.textContent !== 'Responses:') || 
                        nextElement.nodeName === 'SECTION') {
                        break;
                    }
                    
                    const elementToMove = nextElement;
                    nextElement = nextElement.nextSibling;
                    responseContent.appendChild(elementToMove);
                }
                
                responseSection.appendChild(responseContent);
                
                // Adicionar evento de clique para expandir/colapsar
                responseHeaderDiv.addEventListener('click', function() {
                    responseSection.classList.toggle('active');
                });
            }
        });
    }
    
    // Executar a configuração das seções de resposta
    setupResponseSections();
}); 