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

<span>DoCheck</span> <br>
  * O DoCheck é executado quando as propriedades dos componentes são verificadas, como um click por exemplo.
  
  * Ele executa 4 sub eventos, o AfterContentInit,  o AfterContentChecked, AfterViewInit e o AfterViewChecked.

* <span>AfterContentInit</span> 
    * AfterContentInit executa quando o Angular realiza a projeção do conteúdo no component.
*  <span>AfterContentChecked</span>
    * AfterContentChecked executa quando o conteúdo tem uma alteração detectada.
* <span>AfterViewInit</span>    
    * AfterViewInit executa depois que um component é totalmente iniciado.
* <span>AfterViewChecked</span>
    * AfterViewChecked executa quando a visualização  do componente é verificada pelo algoritmo de verificação do Angular.

<span>OnDestroy</span>
  * Ele serve para destruir um component, dessa forma podemos destruir o componente quando não precisarmos mais exibi-lo na tela, assim evitamos que ele seja executado por algum cache ou que sobrecarregue a nossa pagina por algum erro.
  
  * Nesse exemplo add um botão Destruir para que quando ele fosse clicado pudesse destruir o component do Contador. 