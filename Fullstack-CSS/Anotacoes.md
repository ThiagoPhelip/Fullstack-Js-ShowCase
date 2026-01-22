Existem 3 maneiras de se utilizar o css, 2 mais antigas menos utilizadas a ultima mais utilizada, sendo ela a 3 maneira que é criando um arquivo separado com os codigos html.
1- Maneira seria in-line
ex:
 No body, colocando uma cor.
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seu Primeiro Código CSS</title>
</head>

<body style="background-color: black;"> <!-- aqui se encontra o codigo css, style, que seria estilo, background que seria fundo da pagina, seguido da cor -->
    <h1>Seu Primeiro Código CSS</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eaque quod aut iusto, nesciunt tempora eligendi. Nobis, pariatur nulla obcaecati fugiat voluptatibus, nihil incidunt natus quam aperiam, aliquid officiis dolore.</p>
</body>

</html>

2- Maneira atravez da tag <style> para mudar a cor de um titulo ou paragrafo.
ex:<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seu Primeiro Código CSS</title>

    <style>
        h1 {
            color: white; <!-- Aqui vemos a tag stule sendo utlizada em outro local, a tag possui abertura e fechamento, diferente de algumas outras tags que nao necessitam, a utlizaçã dessa tag exige se inserida as {} e ; apos a escolha de onde ela sera utilizada. -- >
        }
    </style>
</head>

<body style="background-color: black;">
    <h1>Seu Primeiro Código CSS</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eaque quod aut iusto, nesciunt tempora eligendi. Nobis, pariatur nulla obcaecati fugiat voluptatibus, nihil incidunt natus quam aperiam, aliquid officiis dolore.</p>
</body>

</html>

3- Atravez da tag link, esse seria o jeito de trazer o css que esta em um outro arquivo, para o arquivo html.
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seu Primeiro Código CSS</title>

    <style>
        h1 {
            color: white;
        }
    </style>

    <link rel="stylesheet" href="style.css"> <!-- Essa é a maneira de utilizar a tag link, que faz com que o css que esta escrito em outra pagina, seja utilizada na sua pagina html, ela é composta por Link, o rel é de relacionamento, apos ele vem o estilo, e tabem compoe o href, informando o nome do arquivo que voce esta utilizando, nesse caso como so tem uma estilização para o paragrafo, ele vai mudar somente o paragrafo. -->
</head>

<body style="background-color: black;">
    <h1>Seu Primeiro Código CSS</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eaque quod aut iusto, nesciunt tempora eligendi. Nobis, pariatur nulla obcaecati fugiat voluptatibus, nihil incidunt natus quam aperiam, aliquid officiis dolore.</p>
</body>

</html>

no arquivo css teria o seguinte codigo
p {
    color: white;
    font-size: x-large; <!-- em um codigo de arquivo css, nao precisa utilizar a tag style, mas precisa utilizar as identaçõeso : e ; -->
}



Importante lembrar que o css é lido em linha, entao se no arquivo é inserido varias cores ou estilos para alguma coisa, o que prevalecera, sera sempre o ultimo.
_______________________________________________________________________________________________________________________________________________________________________________________
A propriedade display no CSS define como um elemento será renderizado na página — ou seja, o tipo de "caixa" (box model) que ele vai ocupar e como ele vai se comportar em relação a outros elementos.

Principais valores de display:
🔹 1. block

O elemento ocupa toda a largura disponível.

Sempre começa em uma nova linha.

Exemplo: <div>, <p>, <h1>.

div {
  display: block;
}


📌 Resultado: cada div aparece embaixo da outra.

🔹 2. inline

O elemento ocupa apenas o espaço do conteúdo.

Não quebra linha automaticamente.

Exemplo: <span>, <a>, <strong>.

span {
  display: inline;
}


📌 Resultado: vários span ficam lado a lado.

🔹 3. inline-block

Combina características de inline e block:

Ficam lado a lado (como inline).

Mas aceitam largura (width) e altura (height) (como block).

img {
  display: inline-block;
}

🔹 4. none

O elemento desaparece totalmente (não ocupa espaço).

Diferente de visibility: hidden (que só esconde, mas mantém o espaço).

p {
  display: none;
}

🔹 5. flex

Transforma o elemento em um container flexível.

Permite alinhar itens facilmente em linha ou coluna.

Muito usado para layouts modernos.

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

🔹 6. grid

Cria um container de grade (linhas e colunas).

Ideal para layouts complexos.

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}


✅ Resumindo:
O display controla como o elemento aparece e se organiza na página.
É uma das propriedades mais importantes do CSS para estruturar layouts.



/* seletor universal */ <!-- Fazendo isso, remove todo o tipo de configuração padrão, pode ser utilizado para aplica uma configuração para tudo na pagina. -->
* {
    margin: 0; 
    padding: 0;
}

/* seletor de tag */ <!-- Nesse exemplo é feito a modificação de 2 lugares (header e footer usando somente um tipo configuração para ambos) -->
header, footer {
    background-color: #333;
    color: #fff;
    padding: 10px;
}

/* seletor de elementos aninhados */ <!--Nesse exemplo a modificação foi feita somente para a tag a do atributo nav -->
nav a {
    color: #27ae60;
}

/* seletor de filhos */ <!-- Aqui a modificação foi feita somente para os atributos filhos da tag a, utilizando o sinal de maior >, com isso ele modificou somente os que vem abaixo da tag a, não afetando a configuração da tag a -->
nav > a {
    display: block;
    color: #f5a623;
    padding: 10px;
}

/* seletor de classes */ <!--  Neste exemplo, vemo como modificar o html, atraves do seletor de classes, utilizando a classe laranja com o . O sistema vai modificar onde existir a classe larnja-->
.laranja {
    color: #f5a623;
}
.verde {
    color: #27ae60;
}

/* seletor de id */ <!-- Aqui temos um exemplo de como modificar atraves do id, utlizando a # e no nome do id, ele fará a modificação. -->
#secao-principal {
    padding: 20px;
    text-align: center;
}

/* combinação de seletores */ <!-- Aqui é utilizado a combinação pelo sinal de >  -->
#secao-principal > * {
    margin-top: 10px;
}

input {
    display: block;
    padding: 5px;
    margin: 5px;
}

/* seletor de sequência */ <!-- Com o sinal de + voce pode fazer a modificação sequencial apos o local escolhido, no caso ali o p que vem apos o h2 recebeu a modificação -->
input + input {
    margin-top: 30px;
    margin-bottom: 30px;
}
h2 + p {
    padding: 30px;
}

/* seletores de propriedade */ <!-- para fazer modificação por propriedade, utilizamos o [] seguido da propriedade -->
input[name="email"] {
    background-color: #f5a623;
}

input[type="password"] {
    background-color: #27ae60;
}


