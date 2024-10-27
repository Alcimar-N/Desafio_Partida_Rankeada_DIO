function calculaPartida(vitoria, derrota) {
	let result = vitoria - derrota;
	return result;
}

let functionReturn = calculaPartida(80, 3);

if (functionReturn >= 0 && functionReturn <= 10) {
	console.log(
		`O herói tem saldo de ${functionReturn} vitórias e está no vível Ferro`
	);
} else if (functionReturn >= 11 && functionReturn <= 20) {
	console.log(
		`O herói tem saldo de ${functionReturn} vitórias e está no vível Bronze`
	);
} else if (functionReturn >= 21 && functionReturn <= 50) {
	console.log(
		`O herói tem saldo de ${functionReturn} vitórias e está no vível Prata`
	);
} else if (functionReturn >= 51 && functionReturn <= 80) {
	console.log(
		`O herói tem saldo de ${functionReturn} vitórias e está no vível Ouro`
	);
} else if (functionReturn >= 81 && functionReturn <= 90) {
	console.log(
		`O herói tem saldo de ${functionReturn} vitórias e está no vível Diamante`
	);
} else if (functionReturn >= 91 && functionReturn <= 100) {
	console.log(
		`O herói tem saldo de ${functionReturn} vitórias e está no vível Lendário`
	);
} else if (functionReturn >= 101) {
	console.log(
		`O herói tem saldo de ${functionReturn} vitórias e está no vível Imortal`
	);
} else {
	console.log(`Suas derrotas foram maior que as vitórias, Herói☹️`);
}
