/*
Ecrivez une fonction rotateArray qui prend en paramètres un int n et un array
La fonction renvoie un array qui aura subit n rotation(s)
Une rotation est effectuée lorsque par exemple :
    [1,2,3] => [2,3,1]
Et pour 2 rotations :
    ['h', 'e', 'l', 'l', 'o'] => ['l', 'l', 'o', 'h', 'e']
*/
function rotateArray(n, arr) {
	return arr.concat(arr).slice(n, n + arr.length);
}
