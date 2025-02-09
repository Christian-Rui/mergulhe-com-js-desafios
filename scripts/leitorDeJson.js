// leitorDeJson.js
export async function obterDesafiosPorId(id) {
    try {
      const response = await fetch('../json/desafios.json');
      const data = await response.json();
      
      const aula = data.aulas.find(aula => aula.id === id);
      
      if (aula) {
        return aula.desafios;
      } else {
        throw new Error('Aula não encontrada');
      }
    } catch (error) {
      console.error('Erro ao carregar os desafios:', error);
    }
  }
  


// exibirDesafios.js
export function exibirDesafios(desafios, idAula) {
  document.getElementById('container__texto').innerHTML = `<h2>Desafio ${idAula}</h2>`;
    if (desafios) {
      let listaDesafios = `<ul>`;
      desafios.forEach(desafio => {
        listaDesafios += `<li>${desafio}</li>`;
      });
      listaDesafios += '</ul>';
  
      document.getElementById('lista-desafios').innerHTML = listaDesafios;
    }
}