function atualizarRelogio() {
  const agora = new Date();
  let horas = agora.getHours().toString().padStart(2, '0');
  let minutos = agora.getMinutes().toString().padStart(2, '0');
  let segundos = agora.getSeconds().toString().padStart(2, '0');

  const horario = `${horas}:${minutos}:${segundos}`;
  document.getElementById('clock').textContent = horario;
}

// Alternar tema
const botaoTema = document.getElementById('toggle-tema');
const body = document.body;

// Verifica tema salvo
if (localStorage.getItem('tema') === 'escuro') {
  body.classList.add('tema-escuro');
  botaoTema.textContent = '☀️ Modo Claro';
}

// Troca de tema ao clicar
botaoTema.addEventListener('click', () => {
  body.classList.toggle('tema-escuro');
  const modoEscuroAtivo = body.classList.contains('tema-escuro');

  botaoTema.textContent = modoEscuroAtivo ? '☀️ Modo Claro' : '🌙 Modo Escuro';
  localStorage.setItem('tema', modoEscuroAtivo ? 'escuro' : 'claro');
});

setInterval(atualizarRelogio, 1000);
atualizarRelogio();
