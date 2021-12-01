/*Ecrivez une fonction maxArray qui prend en paramètre un array(tableau)
Le tableau est un tableau de int uniquement
La fonction renvoie le plus grand nombre du tableau
*/
function maxArray(arr) {
	arr = arr.sort((a, b) => b - a);
	return arr[0];
}