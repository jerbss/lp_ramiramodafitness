document.addEventListener('DOMContentLoaded', function() {
    // Seu código JavaScript iniciará aqui quando o DOM estiver carregado
    console.log('Site da Ramira Moda Fitness carregado!');
    
    // Função para animar elementos quando eles entram na viewport
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    };
    
    // Evento de scroll para ativar animações
    window.addEventListener('scroll', animateOnScroll);
    
    // Executar uma vez no carregamento inicial
    animateOnScroll();
});

// Este arquivo será substituído ou atualizado com o JS gerado pelo plugin Figma to Code, se necessário