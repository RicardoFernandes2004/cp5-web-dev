

# GourmetOn

Grupo: RICARDO FERNANDES DE AQUINO (RM554597);KAUÃ SOARES GUIMARÃES (RM559044);DAYANA TICONA QUISPE (RM558023);FABRINI SOARES(RM557813);RICKELMYN DE SOUZA RUESCAS (RM556055);


## 📖 Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Executar o Projeto](#como-executar-o-projeto)


## 🧐 Sobre o Projeto

**GourmetOn** é uma plataforma web desenvolvida para facilitar a busca, organização e compartilhamento de receitas culinárias. Projetado como parte da **aula de Web Development**, este projeto visa proporcionar uma experiência de usuário intuitiva e responsiva, aproveitando as vantagens do **React** e **React Bootstrap** para criar uma interface amigável e funcional.

## 🚀 Funcionalidades

- **Busca de Receitas:** Permite aos usuários pesquisar receitas com base em ingredientes ou categorias.
- **Organização de Receitas:** Usuários podem salvar suas receitas favoritas para acesso rápido.
- **Interface Responsiva:** Design adaptável para dispositivos móveis e desktops.
- **Navegação Suave:** Transições suaves entre seções da página para uma melhor experiência de usuário.
- **Comentários e Avaliações:** Usuários podem comentar e avaliar receitas (caso implementado).

## 🛠 Tecnologias Utilizadas

- **Front-end:**
  - [React](https://reactjs.org/) - Biblioteca JavaScript para construção de interfaces de usuário.
  - [React Bootstrap](https://react-bootstrap.github.io/) - Componentes de UI responsivos.
  - [Styled-Components](https://styled-components.com/) - Biblioteca para estilização de componentes.
  - [React Scroll](https://www.npmjs.com/package/react-scroll) - Para navegação suave entre seções.
- **APIs:**
  - [Spoonacular API](https://spoonacular.com/food-api) - Para obtenção de dados de receitas.
- **Ferramentas:**
  - [Git](https://git-scm.com/) - Controle de versão.
  - [GitHub](https://github.com/) - Hospedagem do código fonte.


## 🖥 Como Executar o Projeto

### Pré-requisitos

Certifique-se de ter **Node.js** e **npm** instalados em sua máquina.

### Passo a Passo

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/RicardoFernandes2004/cp5-web-dev.git
   ```

2. **Acesse o Diretório do Projeto**

   ```bash
   cd gourmeton
   ```

3. **Instale as Dependências**

   ```bash
   npm install
   ```

4. **Configure as Variáveis de Ambiente**

   Crie um arquivo `.env` na raiz do projeto e adicione a sua chave da API do Spoonacular:

   ```env
   REACT_APP_SPOONACULAR_API_KEY=SuaChaveDeApiAqui
   ```

5. **Execute a Aplicação**

   ```bash
   npm start
   ```

   A aplicação será iniciada em `http://localhost:3000`.


