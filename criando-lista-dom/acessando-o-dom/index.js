var lista = ['laranja', 'Maçã', 'Pera', 'Jaca']

var listaUl = document.createElement('ul')

var body = document.getElementsByTagName('body')[0]

console.log(body)

body.appendChild(listaUl)

var listaNoBody = document.getElementsByTagName('ul')[0]



for(var i = 0; i < lista.length; i++){
    var liFor = document.createElement('li')

    var textoLi = document.createTextNode(lista[i])
    
    liFor.appendChild(textoLi)

    listaNoBody[0].appendChild(liFor)
}



