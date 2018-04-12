/* TD08 Robbie 

Dans cet exercice, vous devez créer un petit robot.

Celui-ci prend en paramètre une instruction (représentée par un nombre), et potentiellement un 
ou plusieurs paramètres à la suite de celle-ci.

Voici la liste des instructions que votre robot doit être capable d'executer : 

Format : 

Numéro de l'instruction [paramètre1, paramètre2] // Description de l'instruction

Instructions :

1 [prénom]                  // Retourner 'Bonjour {prénom}!'
2                           // Retourner la date au format UTC
3 [texte]                   // Remplacer les 't' par des '7' dans {texte}
4 [texte]                   // Remplacer tous les mots par '####' dans {texte}
5 [texte, mot, alt]         // Remplacer {mot} par {alt} dans {texte}
6 [texte]                   // Remplacer la chaine 'date' par la date au format UTC dans {texte}

Exemple :

var robbie = Robbie()
robbie.do(1, 'Jérémie') // Retourne 'Bonjour Jérémie!'

*/

function Robbie() {
    this.do = function(pid, input = null, ...inputs) {
        var pattern

        switch(pid) {
            case 1:
                return 'Bonjour ' + input + '!'
            case 2:
                return !input ? new Date : null;
            case 3:
                pattern = /t/g
                return input.replace(pattern, '7')
            case 4:
                pattern = /\w+/g
                return input.replace(pattern, '####')
            case 5:
                pattern = new RegExp(inputs[0])
                return input.replace(pattern, inputs[1])
            case 6:
                pattern = /date/
                return input.replace(pattern, new Date)
            default:
                throw new Error
        }
    }
}

/* TD Part */

/* Testing Part */

function test() {
    var robbie = new Robbie()
    var text = 'Je suis un test'
    if (robbie.do(1, 'Jérémie') !== 'Bonjour Jérémie!') {
        return false
    } else if (!robbie.do(2)) {
        return false
    } else if (robbie.do(3, text) !== 'Je suis un 7es7') { 
        return false
    } else if (robbie.do(4, text) !== '#### #### #### ####' && robbie.do(4, text) !== '## #### ## ####') { 
        return false
    } else if (robbie.do(5, text, 'test', 'toast') !== 'Je suis un toast') {
        return false
    } else if (!robbie.do(6, text)) { 
        return false
    }
    return true
}

console.log(test() === true ? 'TD08 :: Success' : 'TD08 :: Failed')
