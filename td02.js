/* TD02 

Le but de cet exercice est de créer une ExecutionQueue.

C'est une pile d'éxecution a laquelle on pourra ajouter des fonctions à executer.

Celles-ci ne seront pas directement executées, seulement lorsque la méthode execute

de l'ExecutionQueue sera appellée. 

Les retours des fonctions executées seront retournées dans un tableau ordonné à l'appel 
de la méthode execute().

Il sera également possible de connaître le nombre de fonctions dans la queue en utilisant la méthode size().

Exemple :

var queue = ExecutionQueue()

queue.size() // 0

queue.push(function() {return 'foo'})

queue.size() // 1

queue.execute() // ['foo']

*/
/* TD Part */
function ExecutionQueue() {
	return {
		_queue: [],
		push: function(callback) {
			this._queue.push(callback)
		},
		size: function() {
			return this._queue.length
		},
		execute: function() {
			var array
			array = []  

			while(this._queue.length) 
				array.push(this._queue.pop()())
			
			return array.reverse()
		}
	}
}

/* Testing Part */
var queue = ExecutionQueue()
queue.push(function() {
    return 'test'
})
queue.push(function() {
    return 'OK'
})

if (queue.execute().join() === 'test,OK' && queue.size() === 0) {
    console.log('TD02 :: Success')
} else {
    console.log('TD02 :: Failed')
}
