Aqui tem uma lista de exericios que foram criados pelo gpt, começando com exercicios simples e depois mais complexos para melhoria dos estudos de html,css e js.

* Exercicios somente de html

Exercício 1 — Página de Documentação com Sumário e âncoras (documentacao.html)

Objetivo: Criar uma página de documentação técnica com navegação interna por âncoras e uso de elementos semânticos.

Requisitos

<header> com título e descrição curta.

<nav> com links que saltam para 4 seções diferentes dentro da mesma página (use href="#id-da-secao").

Pelo menos 4 <section> com id distintos: Introdução, Instalação, Uso, Referência.

Cada seção deve conter pelo menos:

Um <h2>,

Um <p> descritivo,

Uma <pre><code> com um trecho de código fictício (mínimo 4 linhas).

Incluir uma <aside> com um sumário (lista ordenada) que repete as mesmas âncoras do <nav>.

Uso correto de <main> e <footer> com copyright.

Critério de aceitação

Clicar em qualquer link do <nav> ou do sumário faz a página rolar até a seção correspondente (âncoras funcionando).

Código dentro de <pre><code> preserva formatação de linha.

Exercício 2 — Formulário Avançado de Registro (registro.html)

Objetivo: Montar um formulário com validações HTML nativas e campos variados.

Requisitos

Form com method="post" (não precisa ter action real).

Campos obrigatórios: Nome (text), Email (type=email), Senha (type=password, minlength="8"), Confirmação de senha (type=password).

Campo Telefone com pattern que obrigue o formato (xx)xxxxx-xxxx (ex.: (41)99999-9999).

Campo Data de Nascimento (type="date") com required.

Select para país com opção padrão “Selecione...” que é inválida (disabled selected).

Campo para aceitar termos (type="checkbox") com required.

Campo input type="file" aceitando apenas PDF (accept=".pdf").

Botões: submit e reset.

Use label com for ligados a todos os inputs; organize semanticamente com <fieldset> e <legend>.

Critério de aceitação

HTML nativo rejeita envio se campos obrigatórios não preenchidos ou se o pattern do telefone não é satisfeito.

Labels associados corretamente (clicar no label foca o input).

Exercício 3 — Tabela com Agrupamentos e Sumário (relatorio.html)

Objetivo: Construir uma tabela complexa com cabeçalho múltiplo, rodapé e agrupamentos (rowspan/colspan).

Requisitos

Tabela de vendas com:

Cabeçalho com duas linhas: primeira linha com 3 células onde a do meio cobre 2 colunas (colspan), segunda linha com os subcabeçalhos (ex.: Produto | Região Norte | Região Sul | Total).

Corpo com pelo menos 4 produtos (linhas).

Uma célula que usa rowspan para agrupar duas linhas (ex.: categoria).

Incluir <caption> descrevendo a tabela.

Incluir <thead>, <tbody>, <tfoot>.

Em <tfoot> colocar uma linha com somatórios (pode ser valores fictícios).

Fornecer atributos scope em <th> onde apropriado (por coluna/linha).

Critério de aceitação

Estrutura semântica correta (caption, thead/tbody/tfoot).

Uso visível e correto de colspan e rowspan ao abrir no navegador (mesmo sem CSS deve ficar lógico).

Exercício 4 — Galeria acessível com <figure> / <figcaption> e imagem com mapa (galeria.html)

Objetivo: Criar uma galeria de imagens acessível que use legendas semânticas e um image map (áreas clicáveis na imagem).

Requisitos

Pelo menos 3 imagens apresentadas com <figure> e <figcaption> descrevendo cada imagem.

Uma das figuras deve usar <img usemap="#mapa-exemplo"> e um <map name="mapa-exemplo"> com 2 <area>:

Uma área circular (shape="circle") que linke para #detalhe1.

Uma área retangular (shape="rect") que linke para #detalhe2.

Incluir seções id="detalhe1" e id="detalhe2" mais abaixo com texto explicativo.

Todas as imagens devem ter alt descritivo.

Fornecer pelo menos um link para download de uma imagem usando download no <a>.

Critério de aceitação

Clicar nas áreas do mapa leva à âncora correspondente da página.

Figcaption aparece junto à imagem (sem CSS fica abaixo por padrão).

Todas as imagens têm alt (acessibilidade).