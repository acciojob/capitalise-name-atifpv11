//your JS code here. If required.
const inpt = document.getElementById("fname");
inpt.addEventListener("blur",() => {
	inpt.value = inpt.value.toUpperCase();
})