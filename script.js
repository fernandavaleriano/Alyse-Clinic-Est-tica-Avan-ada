// Configuração Única do ScrollReveal
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 1200,
    delay: 200,
    reset: false 
});

// Animações do Corpo do Site
sr.reveal('.logo-clinica', { delay: 100, origin: 'left' });
sr.reveal('.borboleta-area', { delay: 300, scale: 0.8 });
sr.reveal('.texto-area', { delay: 500, origin: 'left' });
sr.reveal('.botao-area', { delay: 700, origin: 'bottom' });
sr.reveal('.descricao-area', { delay: 900 });


sr.reveal('.sobre-titulo', { delay: 200 });
sr.reveal('.sobre-subtitulo', { delay: 400 });
sr.reveal('.sobre-texto', { delay: 600 });
sr.reveal('.stat-item', { delay: 800, interval: 200 });

sr.reveal('.procedimentos-container', { delay: 200, origin: 'bottom' });

sr.reveal('.servico-card', { interval: 200, delay: 300 });
sr.reveal('.outros-servicos', { delay: 500 }); 

// Faz o título e subtítulo surgirem primeiro
sr.reveal('.fluxo-titulo', { delay: 200, origin: 'top' });
sr.reveal('.fluxo-subtitulo', { delay: 400, origin: 'top' });

// Faz os 4 itens (Avaliação, Planejamento, etc) surgirem em sequência
sr.reveal('.fluxo-item', { 
    interval: 200, // Tempo entre o surgimento de cada um
    delay: 500, 
    origin: 'bottom',
    distance: '50px' 
});

sr.reveal('.depoimento-card', { interval: 200, origin: 'bottom', distance: '30px' });

// Faz a seção de agendamento (CTA) subir suavemente
sr.reveal('.contato-container', { 
    delay: 200, 
    origin: 'bottom',
    distance: '30px'
});

// Faz o botão de WhatsApp aparecer com um efeito de escala (crescendo)
sr.reveal('.btn-whatsapp', { 
    delay: 400, 
    scale: 0.8,
    duration: 1000 
});

// Faz as colunas do rodapé aparecerem uma por uma
sr.reveal('.footer-col', { 
    interval: 200, 
    origin: 'top',
    distance: '20px',
    delay: 500
});

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.nav-links');

    if (btn && menu) {
        btn.onclick = function() {
            menu.classList.toggle('active');
            btn.classList.toggle('open');
        };

        const links = document.querySelectorAll('.nav-links a');

        links.forEach(link => {
            link.onclick = function(e) {
                e.preventDefault();

                menu.classList.remove('active');
                btn.classList.remove('open');

                const targetId = this.getAttribute('href');

                setTimeout(() => {
                    if (targetId.startsWith('#')) {
                        const targetElement = document.querySelector(targetId);
                        if (targetElement) {
                            targetElement.scrollIntoView({ behavior: 'smooth' });
                        }
                    }
                }, 300);
            };
        });
    }
});