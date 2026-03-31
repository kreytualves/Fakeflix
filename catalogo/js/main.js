import { categories } from './data.js';
import { createCarousel } from './components/Carousel.js';

console.log('main.js carregado');
console.log('categories:', categories);

async function initializeCatalog() {
    try {
        console.log('initializeCatalog iniciado');
        
        const nomePerfil = localStorage.getItem('perfilAtivoNome');
        const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

        console.log('Perfil:', nomePerfil, imagemPerfil);

        if (nomePerfil && imagemPerfil) {
            const kidsLink = document.querySelector('.kids-link');
            const profileIcon = document.querySelector('.profile-icon');
            
            if (kidsLink) {
                kidsLink.textContent = nomePerfil;
                console.log('Nome do perfil atualizado');
            }
            if (profileIcon) {
                profileIcon.src = imagemPerfil;
                console.log('Imagem do perfil atualizada');
            }
        }

        const container = document.getElementById('main-content');
        console.log('Container encontrado:', !!container);
        
        if (container) {
            console.log('Criando carrosséis...');
            console.log('Número de categorias:', categories.length);
            
            categories.forEach((category, index) => {
                console.log(`Criando carrossel ${index + 1} para:`, category.title, 'com', category.items.length, 'itens');
                const carousel = createCarousel(category);
                console.log('Carrossel criado:', carousel);
                container.appendChild(carousel);
            });
            console.log('Carrosséis criados com sucesso');
        } else {
            console.error('Container #main-content não encontrado!');
        }
    } catch (error) {
        console.error('Erro ao inicializar o catálogo:', error);
    }
}

// Aguardar o DOM estar pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCatalog);
} else {
    // DOM já está pronto
    initializeCatalog();
}
