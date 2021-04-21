let contador = 1
let menu_bar = document.querySelector('.menu_bar')
let nav = document.getElementById('nav')
menu_bar.addEventListener("click", (e) => {
	console.log(contador)
	let mostrado = nav.classList.contains("mostrar")
	let ocultado = nav.classList.contains("ocultar")
	if (contador == 1) {
		if (ocultado) {
			nav.classList.remove("ocultar")
		}
		
		nav.classList.add("mostrar")
		contador = 0
	}else {
		if (mostrado) {
			nav.classList.remove("mostrar")
		}
		contador = 1
		nav.classList.add("ocultar")
		
	}
})
	// Mostramos y ocultamos submenus
	let submenu = document.querySelector(".submenu")
	let children = document.querySelector(".children")
	submenu.addEventListener("click", ()=> {
		let hijo = children.classList.contains("hijo")
		if (hijo) {
			children.classList.remove("hijo")
		}else{
			children.classList.add("hijo")
		}
	})