//Questão 1//
let produtos = ["Celuar", "Mouse", "Monitor", "Notebbok", "Impressora", "Teclado", "Televisão", "Fone", "Webcam", "HD Externo"];
produtos[0] = "Celular";     
produtos[3] = "Notebook";    
produtos[6] = "Televisão";  
console.log(produtos);

//Questão2// 
let valor = [1.2, 3.7, 4.5, 6.1, 8.9];
let craque = [];
 
valor.forEach(function(media) 
{   craque.push(Math.ceil(media)
)
}
);
 
console.log(craque)
//Questão3//
let nota = [1.2, 3.7, 4.5, 6.1, 8.9];
let final = [];
 
nota.forEach(function(passar) 
{  final.push
   (Math.ceil(passar)

   )
}
);
 
console.log(final)
//Questão4//
let nomeCompleto = 'Gustavo Barros';
let quantidadeLetras = 0;
 
 
for (let i = 0; i < nomeCompleto.length; i++) {
   
    if (nomeCompleto[i] !== ' ') {
        quantidadeLetras++;
    }
}
 
console.log(`O seu nome tem ${quantidadeLetras} letras.`);


//Questão5//
let numerosOriginais = [4, 5, 6];
let novosNumeros = [1, 2, 3];
 
 
novosNumeros.forEach(function(numero) {
    numerosOriginais.unshift(numero);
});
 
 
console.log(numerosOriginais);





