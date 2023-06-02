# Hooks-Angular
 Aprendendo a usar os Hooks e seus tipos do Angular

Criamos um projeto Angular usando o comando: <br>
 * ng new


Comando para criar um servidor para executar a aplicação:
* Dentro da pasta do projeto use o comando: <br>
  ng serve

* Comando para pausar o servidor: <br>
  CTRL + C


Comando para criar um component generico: <br>
* Forma comum: <br>
  ng generate component "nome do componente"

* Forma resumida: <br>
  ng g c "nome do componente"

====================================================
<h2>Os 8 HOOKS do Angular</h2>

<span>OnInit</span> <br>
  * OnInit é um evento quando nosso componente é iniciado.

  * Podemos usar ele  para passar parametros sempre que iniciamos um component.

  * Dessa forma sempre que nasce o component podemos usar para colocar ou importar algo como nome, um menu de opções entre outras coisas.


<span>OnChanges</span> <br>
  * OnChanges serve para agir sempre que um valor é  inputado/alterado dentro de uma propriedade.

  * Nesse caso importamos o @Input na propriedade nome para que ele possa receber uma mudança de valor.

  * No nosso componente podemos add a propriedade nome para colocarmos as mudanças dentro dela, nesse caso uma string com a palavra produto.