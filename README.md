# localspa

Executável para disponibilizar servidor localmente (`localhost:3030`)

## Utilização

1. Baixe o [executável](https://github.com/nenitf/localspa/releases)
2. Na pasta do executável, crie o diretório `static` com os arquivos que serão servidos
    - Em caso de uma [SPA](https://pt.wikipedia.org/wiki/Aplicativo_de_p%C3%A1gina_%C3%BAnica) os arquivos devem ser os *buildados*
3. Execute o binário

## Por quê?

1. Normalmente build de *SPA* referenciam seus arquivos como se estivesse em um servidor, ao invés de caminhos relativos
2. Suporte ao roteamento no *frontend*
3. Evitar baixar uma ferramenta mais robusta e complexa somente para executar localmente uma *SPA*
