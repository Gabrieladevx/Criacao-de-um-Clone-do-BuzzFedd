# 🚀 Clone do BuzzFeed - Quiz de Linguagens de Programação

Um clone interativo do famoso quiz do BuzzFeed, desenvolvido em Angular, que descobre qual linguagem de programação combina mais com o seu perfil de desenvolvedor!

![Angular](https://img.shields.io/badge/Angular-14.1.0-red?style=for-the-badge&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-4.7.2-blue?style=for-the-badge&logo=typescript)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## 📋 Sobre o Projeto

Este projeto é uma aplicação web que simula a experiência dos famosos quizzes do BuzzFeed, focado especificamente em descobrir qual linguagem de programação mais se adequa ao perfil e preferências do usuário. O quiz apresenta 5 perguntas sobre estilo de trabalho, tipos de projetos preferidos e metodologias de desenvolvimento.

### 🎯 Linguagens Disponíveis no Quiz:
- 🐍 **Python** - Para quem ama simplicidade e ciência de dados
- ⚡ **JavaScript** - Para desenvolvedores versáteis e criativos
- ⚙️ **C/C++** - Para quem busca controle total e performance máxima
- ☕ **Java** - Para aplicações robustas e enterprise
- 📱 **Kotlin/Swift** - Para desenvolvimento mobile moderno

## ✨ Funcionalidades

- ✅ Quiz interativo com 5 perguntas
- ✅ Sistema de pontuação baseado em aliases
- ✅ Resultado personalizado para cada linguagem
- ✅ Interface responsiva e moderna
- ✅ Navegação fluida entre questões
- ✅ Barra de progresso visual
- ✅ Emojis representativos para cada opção
- ✅ Funcionalidade de reiniciar o quiz
- ✅ Design inspirado no BuzzFeed

## 🛠️ Tecnologias Utilizadas

- **Angular 14.1.0** - Framework principal
- **TypeScript 4.7.2** - Linguagem de programação
- **RxJS 7.5.0** - Programação reativa
- **Angular Router** - Navegação entre páginas
- **JSON** - Armazenamento das questões e respostas

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   └── quizz/           # Componente principal do quiz
│   ├── pages/
│   │   └── home/            # Página inicial
│   ├── app-routing.module.ts # Configuração de rotas
│   └── app.module.ts        # Módulo principal
├── assets/
│   ├── data/
│   │   └── quizz_questions.json # Questões e respostas do quiz
│   └── imgs/
│       └── logo.png         # Logo do projeto
└── environments/            # Configurações de ambiente
```

## 🚀 Como Executar o Projeto
- Acesse no link disponivél:[https://gentle-plant-0a2326c1e.1.azurestaticapps.net/)

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn
- Angular CLI

 **Acesse no navegador**



## 📜 Scripts Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run watch` - Build em modo watch para desenvolvimento
- `npm test` - Executa os testes unitários

## 🎮 Como Funciona o Quiz

1. **Início**: O usuário é apresentado à tela inicial com o título do quiz
2. **Questões**: 5 perguntas sobre preferências de desenvolvimento
3. **Pontuação**: Cada resposta contribui para um alias (A, B, C, D, E)
4. **Resultado**: O alias com maior pontuação determina a linguagem recomendada

### Perguntas do Quiz:
1. Como você prefere resolver problemas?
2. Qual tipo de projeto te empolga mais?
3. Como você lida com erros no código?
4. Qual seu estilo de trabalho?
5. O que mais te motiva na programação?

### Exemplo de Questão:
```json
{
  "id": 1,
  "question": "Como você prefere resolver problemas?",
  "options": [
    {"id": 1, "name": "Com elegância e simplicidade", "alias": "A"},
    {"id": 2, "name": "Com flexibilidade e criatividade", "alias": "B"}
  ]
}
```

## 🎨 Personalização

Para personalizar o quiz, você pode:

1. **Modificar as questões**: Edite o método `loadQuizData()` no componente
2. **Alterar os resultados**: Modifique a seção "results" no mesmo método
3. **Customizar o design**: Edite os arquivos CSS dos componentes
4. **Adicionar novas linguagens**: Adicione novos aliases e resultados
5. **Carregar dados externos**: Implemente HttpClient para buscar dados de uma API

## 🏗️ Arquitetura do Código

### Interfaces TypeScript:
- `Option` - Define uma opção de resposta
- `Question` - Define uma pergunta com suas opções
- `QuizData` - Define a estrutura completa do quiz

### Componentes:
- `QuizzComponent` - Lógica principal do quiz
- `HomeComponent` - Página inicial que contém o quiz

### Métodos Principais:
- `loadQuizData()` - Carrega os dados do quiz
- `playerChoose()` - Processa a escolha do usuário
- `checkResult()` - Calcula o resultado final
- `getProgress()` - Calcula o progresso atual
- `restartQuiz()` - Reinicia o quiz

## 📝 Licença

Este projeto é licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
