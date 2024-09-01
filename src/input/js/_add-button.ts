export function addButton() {
	const button = document.querySelector<HTMLButtonElement>(".add-button");
	let number = 0;

	button?.addEventListener("click", () => {
		number += 1;
		alert(`${number}回クリックしました`);
	});
}
