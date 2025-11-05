# 🏥 Clínica Virtual

Aplicativo móvel desenvolvido com **React Native** e **Expo**, projetado
para facilitar o **gerenciamento de exames, consultas e informações de
pacientes** em uma clínica. O projeto serve como um protótipo funcional
de um sistema digital de apoio à saúde, com foco em acessibilidade e
simplicidade.

------------------------------------------------------------------------

## 🚀 Tecnologias Utilizadas

-   **React Native (Expo)** -- Framework principal para o
    desenvolvimento mobile\
-   **React Navigation** -- Navegação entre telas do app\
-   **Expo Vector Icons** -- Ícones personalizados\
-   **Expo Haptics / Constants / Font / Image / Linking** -- Recursos
    nativos do Expo\
-   **ESLint** -- Padronização e qualidade do código\
-   **Babel** -- Transpilador para compatibilidade de código JavaScript
    moderno

------------------------------------------------------------------------

## 📂 Estrutura do Projeto

    ClinicaVirtual/
    │
    ├── app/
    │   ├── components/          # Componentes reutilizáveis (Botões, Cards, API)
    │   ├── view/                # Telas principais do app (Home, Exams, Header, Logo)
    │   ├── index.js             # Tela inicial
    │   ├── exams.js             # Tela de exames
    │   ├── _layout.js           # Estrutura base de layout
    │
    ├── assets/
    │   └── images/              # Imagens e ícones do aplicativo
    │
    ├── .expo/                   # Configurações locais do Expo
    ├── .vscode/                 # Configurações do editor
    ├── app.json                 # Configuração do projeto Expo
    ├── babel.config.js          # Configuração Babel
    ├── eslint.config.js         # Configuração ESLint
    ├── package.json             # Dependências e scripts
    └── README.md

------------------------------------------------------------------------

## ⚙️ Instalação e Execução

### 1️⃣ Pré-requisitos

-   Node.js (versão 18 ou superior)\

-   NPM ou Yarn\

-   Expo CLI instalada globalmente:

    ``` bash
    npm install -g expo-cli
    ```

### 2️⃣ Clonar o repositório

``` bash
git clone https://github.com/seuusuario/ClinicaVirtual.git
cd ClinicaVirtual
```

### 3️⃣ Instalar dependências

``` bash
npm install
```

### 4️⃣ Executar o aplicativo

``` bash
npx expo start
```

Abra o app **Expo Go** no seu celular e escaneie o QR code para
visualizar o projeto.

------------------------------------------------------------------------

## 🧠 Funcionalidades Principais

-   📋 **Cadastro e exibição de exames**\
-   🏠 **Tela inicial intuitiva e moderna**\
-   🧩 **Componentes reutilizáveis (Card, Button, Header)**\
-   ⚡ **Integração com API simulada**\
-   📱 **Compatibilidade com Android e iOS**

------------------------------------------------------------------------

## 🌐 Publicação no Expo (Deploy)

### 🔑 1. Login na conta Expo

Se ainda não estiver logado, execute:

``` bash
npx expo login
```

### 🚀 2. Publicar o app

Para enviar seu app ao servidor do Expo e gerar um link público:

``` bash
npx expo publish
```

Após a publicação, o terminal mostrará um link semelhante a este:

    https://expo.dev/@seuusuario/clinica-virtual

📲 Qualquer pessoa pode abrir esse link no **Expo Go** e visualizar seu
aplicativo.

------------------------------------------------------------------------

## 📦 Build para Android e iOS

Se quiser gerar o **APK (Android)** ou **IPA (iOS)** para instalação
fora do Expo Go:

### Android:

``` bash
npx expo build:android
```

### iOS:

``` bash
npx expo build:ios
```

> ⚠️ É necessário ter uma conta Expo e seguir as instruções interativas
> durante o build.

------------------------------------------------------------------------

## 👥 Contribuição

1.  Faça um fork do projeto\
2.  Crie uma branch para sua feature
    (`git checkout -b feature/nova-funcionalidade`)\
3.  Commit suas alterações
    (`git commit -m 'Adiciona nova funcionalidade'`)\
4.  Faça push para a branch
    (`git push origin feature/nova-funcionalidade`)\
5.  Abra um **Pull Request**

------------------------------------------------------------------------

## 🧾 Licença

Este projeto está sob a licença **MIT** --- sinta-se à vontade para
utilizá-lo e modificá-lo.

------------------------------------------------------------------------

## 💡 Autores

Desenvolvido por **Otávio Silva Santana - 202251073891**
**Moisés Ribeiro Santos - 202351050786**
**Alessandro Ferreira Eugênio dos Santos - 202251061387**
**João Pedro Oliveira Jalles - 202351014658**
**Bernardo Alves Loures Leite - 202351011462**
**Caio Rodrigues de Oliveira Gomes - 202052309796** 💻\
