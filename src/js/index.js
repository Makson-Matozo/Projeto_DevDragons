/* ---------------------- Seleção de Elementos ---------------------- */
const listaSelecaodragondevs = document.querySelectorAll(".dragondev");

/* ---------------------- Eventos ---------------------- */
listaSelecaodragondevs.forEach(dragondev => {
	dragondev.addEventListener("click", () => {
		esconderCartaodragondev();

		const iddragondevSelecionado = mostrarCartaodragondevSelecionado(dragondev);

		desativardragondevNaListagem();
		ativardragondevSelecionadoNaListagem(iddragondevSelecionado);
	});
});

/* ---------------------- Funções de Exibição ---------------------- */
function ativardragondevSelecionadoNaListagem(iddragondevSelecionado) {
	const dragondevSelecionadoNaListagem = document.getElementById(iddragondevSelecionado);
	dragondevSelecionadoNaListagem.classList.add("ativo");
}

function desativardragondevNaListagem() {
	const dragondevAtivoNaListagem = document.querySelector(".ativo");
	if (dragondevAtivoNaListagem) {
		dragondevAtivoNaListagem.classList.remove("ativo");
	}
}

function mostrarCartaodragondevSelecionado(dragondev) {
	const iddragondevSelecionado = dragondev.attributes.id.value;
	const idDoCartaodragondevParaAbrir = "cartao-" + iddragondevSelecionado;
	const cartaodragondevParaAbrir = document.getElementById(idDoCartaodragondevParaAbrir);
	cartaodragondevParaAbrir.classList.add("aberto", "fade-in"); // Adiciona animação de fade-in
	return iddragondevSelecionado;
}

function esconderCartaodragondev() {
	const cartaodragondevAberto = document.querySelector(".aberto");
	if (cartaodragondevAberto) {
		cartaodragondevAberto.classList.remove("aberto");
	}
}

/* ---------------------- Animação da Logo ---------------------- */
document.addEventListener("DOMContentLoaded", function () {
	const logo = document.querySelector('.logo');

	// Adiciona o evento de mouseover na logo
	logo.addEventListener('mouseover', () => {
		logo.classList.add('bounce-animation'); // Adiciona a animação

		// Remove a animação após 0.5s (tempo da animação)
		setTimeout(() => {
			logo.classList.remove('bounce-animation'); // Remove a animação
		}, 500);
	});
});

/* ---------------------- Animação das cartão ---------------------- */
document.addEventListener("DOMContentLoaded", function () {
	const cartoes = document.querySelectorAll('.cartao-dragondev');
	const listaDeDev = document.querySelectorAll('.dragondev');

	// Função para mostrar o cartão correspondente ao item da lista
	function mostrarCartao(cartaoId) {
		// Primeiro, ocultar todos os cartões
		cartoes.forEach(cartao => {
			cartao.classList.remove('aberto', 'zoom');
			cartao.style.display = 'none'; // Garantir que todos os cartões estão ocultos
		});

		// Mostrar o cartão correspondente
		const cartaoSelecionado = document.getElementById(cartaoId);
		if (cartaoSelecionado) {
			cartaoSelecionado.style.display = 'block'; // Exibir o cartão
			cartaoSelecionado.classList.add('zoom'); // Adicionar animação
			setTimeout(() => {
				cartaoSelecionado.classList.remove('zoom'); // Remover animação após exibir
			}, 500); // Tempo da animação
		}
	}

	// Adiciona evento de clique para cada item da lista
	listaDeDev.forEach(item => {
		item.addEventListener('click', () => {
			const cartaoId = `cartao-${item.id}`; // Adiciona 'cartao-' ao ID do item clicado
			mostrarCartao(cartaoId);

			// Remove a classe 'ativo' de todos os itens da lista e adiciona ao item clicado
			listaDeDev.forEach(li => li.classList.remove('ativo'));
			item.classList.add('ativo');
		});
	});
});

