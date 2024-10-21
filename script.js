function navigateTo(section) {
    window.location.href = section + ".html";
}
// Quando o vídeo termina, escondemos o vídeo e mostramos o conteúdo da página
document.getElementById('intro-video').addEventListener('ended', function() {
    document.querySelector('.video-overlay').style.display = 'none';
    document.querySelector('.overlay-content').style.display = 'block';
});


// Função para pular o vídeo e mostrar o conteúdo imediatamente
document.getElementById('skip-video').addEventListener('click', function() {
    document.querySelector('.video-overlay').style.display = 'none';
    document.querySelector('.overlay-content').style.display = 'block';
   document.getElementById('intro-video').pause(); // Pausa o vídeo
});