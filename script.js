//Natureza dinâmica de objetos
//Adicionando objetos ao mouse dentro do escopo
const mouse = {
  cor: 'green',
  marcar: 'razer'
}
//Adicionando objetos ao mouse fora do escopo

mouse.velocidade = 1000;
mouse.trocarDPI = function() {
  console.log('mudando DPI');
}
//Deletando valores dentro do objeto
delete mouse.velocidade;
delete mouse.trocarDPI;
console.log(mouse);