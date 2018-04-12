module.exports = function func(n) { 
	return n == 0 || n == 1 ? 1 : n * func(n - 1)
}