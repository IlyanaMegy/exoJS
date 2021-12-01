/*
Ecrivez une fonction sumArray qui prend en paramètre un array
Le tableau est un tableau de int uniquement
La fonction renvoie la somme de tous les élèments du tableau
*/
function sumArray(arr) {
	return arr.reduce((a, b) => a + b);
}
