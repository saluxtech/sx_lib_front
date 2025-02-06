# SX Library

## Introdução
Esta é uma biblioteca Angular chamada `sx`, desenvolvida dentro de um workspace Angular. Ela foi projetada para ser reutilizável e modular.

## Instalação

Para instalar as dependências necessárias, execute:

```sh
npm install
```

## Construção da Biblioteca

Para compilar a biblioteca, utilize o comando:

```sh
ng build sx
```

Isso gerará os arquivos compilados na pasta `dist/sx`.

## Testes

Para executar os testes unitários, utilize:

```sh
ng test
```

## Documentação

A biblioteca possui suporte ao Compodoc. Para gerar a documentação, use:

```sh
npx compodoc -p projects/sx/tsconfig.lib.json -s
```

Isso iniciará um servidor local com a documentação gerada.

## Storybook

A biblioteca também conta com suporte ao Storybook para visualização dos componentes. Para iniciar o Storybook, execute:

```sh
npm run storybook
```

Para gerar a versão estática do Storybook:

```sh
npm run build-storybook
```

## Estrutura do Projeto

- `projects/sx/src/lib/` - Contém os componentes e serviços da biblioteca.
- `projects/sx/src/public-api.ts` - Define os elementos exportados pela biblioteca.
- `projects/sx/tsconfig.lib.json` - Configuração do TypeScript específica da biblioteca.
- `projects/sx/ng-package.json` - Configuração para empacotamento da biblioteca.

## Contribuição

Sinta-se à vontade para contribuir com melhorias! Antes de enviar um PR, certifique-se de executar os testes e validar as mudanças no Storybook.

## Licença

Esta biblioteca é distribuída sob a licença MIT.