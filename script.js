// Função para aplicar o tema
function applyTheme(theme) {
    document.body.className = theme;
    const button = document.getElementById('themeToggle');
    button.textContent = theme === 'light' ? 'Trocar para Modo Escuro' : 'Trocar para Modo Claro';
}

// Checar se há uma preferência de tema salva
const savedTheme = localStorage.getItem('theme');
const currentTheme = savedTheme ? savedTheme : 'light';
applyTheme(currentTheme);

// Alternar tema ao clicar no botão
document.getElementById('themeToggle').addEventListener('click', function() {
    const newTheme = document.body.className === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
});