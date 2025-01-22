# Tech Today Blog

Este projeto é um blog simples criado com Angular para exibir notícias relacionadas a tecnologia. O projeto é composto por componentes bem organizados que estruturam o layout e permitem uma fácil manutenção.

## Estrutura do Projeto

Abaixo está a estrutura principal do projeto:

```
angular-blog/
|-- .angular/
|-- .vscode/
|-- blog/
|   |-- ideas/
|-- node_modules/
|-- src/
|   |-- app/
|       |-- components/
|           |-- big-card/
|               |-- big-card.component.css
|               |-- big-card.component.html
|               |-- big-card.component.spec.ts
|               |-- big-card.component.ts
|           |-- menu-bar/
|               |-- menu-bar.component.css
|               |-- menu-bar.component.html
|               |-- menu-bar.component.spec.ts
|               |-- menu-bar.component.ts
|           |-- menu-title/
|               |-- menu-title.component.css
|               |-- menu-title.component.html
|               |-- menu-title.component.spec.ts
|               |-- menu-title.component.ts
|               |-- menu-title.responsive.component.css
|           |-- small-card/
|               |-- small-card.component.css
|               |-- small-card.component.html
|               |-- small-card.component.spec.ts
|               |-- small-card.component.ts
|-- data/
```

## Tecnologias Utilizadas

- **Angular**: Framework principal para desenvolvimento.
- **TypeScript**: Linguagem utilizada no desenvolvimento.
- **CSS**: Para estilização dos componentes.
- **HTML**: Para criação da estrutura do layout.

## Passo a Passo para Reproduzir o Projeto

1. **Clone o repositório**:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd angular-blog
   ```

2. **Instale as dependências**:
   Certifique-se de que o Node.js e o Angular CLI estão instalados.
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**:
   ```bash
   ng serve
   ```
   O servidor será iniciado em [http://localhost:4200](http://localhost:4200).

4. **Organização dos Componentes**:
   - **`big-card`**: Exibe a notícia principal em destaque com imagem e descrição.
   - **`small-card`**: Exibe notícias secundárias com título e imagem.
   - **`menu-bar`**: Representa o menu de navegação superior com links como "LinkedIn", "GitHub" e "YouTube".
   - **`menu-title`**: Contém o título principal do blog "Tech Today".

5. **Estilização**:
   - As classes CSS foram usadas para dar espaçamento, responsividade e estilo aos componentes.
   - Arquivo CSS adicional para responsividade em `menu-title.responsive.component.css`.

6. **Dados Mockados**:
   - Os dados exibidos no blog foram simulados em um arquivo JSON. Certifique-se de substituir pelos dados reais conforme a necessidade.

## Exemplo de Layout

A imagem abaixo mostra a aparência do projeto final:

![Blog Preview](link_da_imagem)

[Selecione uma imagem para o projeto clicando aqui](https://example.com/upload-image)

### Elementos Principais:
- **Título:** "Tech Today" no centro superior.
- **Menu:** Links no topo direito.
- **Cartões:** Big Card à esquerda com a notícia principal e Small Cards à direita com notícias secundárias.

## Melhorias Futuras
- Implementar responsividade completa para dispositivos móveis.
- Adicionar API para carregamento dinâmico de dados.
- Melhorar o design visual utilizando bibliotecas como Angular Material ou Tailwind CSS.

## Contribuição
Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. **Fork este repositório**.
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça commit das suas modificações:
   ```bash
   git commit -m "Adiciona minha nova feature"
   ```
4. Faça push para a branch:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

