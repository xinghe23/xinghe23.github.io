
function changeBG(){
	const r = Math.floor(Math.random() * 255)
	const b = Math.floor(Math.random() * 255)
	const g = Math.floor(Math.random() * 255)
	document.body.style.background = `rgb(${r},${b},${g})`
}
setInterval(changeBG, 1000)
