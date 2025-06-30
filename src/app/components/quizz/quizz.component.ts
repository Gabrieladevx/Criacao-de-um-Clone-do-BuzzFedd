import { Component, OnInit } from '@angular/core';

interface Option {
  id: number;
  name: string;
  alias: string;
}

interface Question {
  id: number;
  question: string;
  options: Option[];
}

interface QuizData {
  title: string;
  questions: Question[];
  results: { [key: string]: string };
}

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  
  title: string = '';
  questions: Question[] = [];
  questionSelected: Question | null = null;
  questionIndex: number = 0;
  answers: string[] = [];
  answerSelected: string = '';
  finished: boolean = false;
  results: { [key: string]: string } = {};

  constructor() { }

  ngOnInit(): void {
    this.loadQuizData();
  }

  loadQuizData(): void {
    // Simulando carregamento de dados - em um projeto real, você usaria HttpClient
    const quizData: QuizData = {
      "title": "🚀 Qual linguagem de programação combina com você?",
      "questions": [
        {
          "id": 1,
          "question": "Como você prefere resolver problemas?",
          "options": [
            {"id": 1, "name": "Com elegância e simplicidade", "alias": "A"},
            {"id": 2, "name": "Com flexibilidade e criatividade", "alias": "B"},
            {"id": 3, "name": "Com performance e controle total", "alias": "C"},
            {"id": 4, "name": "Com robustez e segurança", "alias": "D"},
            {"id": 5, "name": "Com rapidez e praticidade", "alias": "E"}
          ]
        },
        {
          "id": 2,
          "question": "Qual tipo de projeto te empolga mais?",
          "options": [
            {"id": 1, "name": "Ciência de dados e IA", "alias": "A"},
            {"id": 2, "name": "Aplicações web interativas", "alias": "B"},
            {"id": 3, "name": "Sistemas embarcados e jogos", "alias": "C"},
            {"id": 4, "name": "Aplicações empresariais robustas", "alias": "D"},
            {"id": 5, "name": "Desenvolvimento mobile", "alias": "E"}
          ]
        },
        {
          "id": 3,
          "question": "Como você lida com erros no código?",
          "options": [
            {"id": 1, "name": "Uso ferramentas inteligentes para encontrar", "alias": "A"},
            {"id": 2, "name": "Gosto de debugging em tempo real", "alias": "B"},
            {"id": 3, "name": "Controlo cada bit manualmente", "alias": "C"},
            {"id": 4, "name": "Prefiro que o compilador me avise antes", "alias": "D"},
            {"id": 5, "name": "Frameworks que facilitam a vida", "alias": "E"}
          ]
        },
        {
          "id": 4,
          "question": "Qual seu estilo de trabalho?",
          "options": [
            {"id": 1, "name": "Experimentação e prototipagem rápida", "alias": "A"},
            {"id": 2, "name": "Iteração constante e feedback", "alias": "B"},
            {"id": 3, "name": "Planejamento detalhado e otimização", "alias": "C"},
            {"id": 4, "name": "Estrutura sólida e padrões bem definidos", "alias": "D"},
            {"id": 5, "name": "Desenvolvimento ágil e multiplataforma", "alias": "E"}
          ]
        },
        {
          "id": 5,
          "question": "O que mais te motiva na programação?",
          "options": [
            {"id": 1, "name": "Descobrir insights em dados", "alias": "A"},
            {"id": 2, "name": "Criar experiências incríveis para usuários", "alias": "B"},
            {"id": 3, "name": "Construir sistemas ultra-performáticos", "alias": "C"},
            {"id": 4, "name": "Desenvolver software que dure décadas", "alias": "D"},
            {"id": 5, "name": "Lançar apps que milhões usarão", "alias": "E"}
          ]
        }
      ],
      "results": {
        "A": "🐍 Python é a sua linguagem! Você ama simplicidade, ciência de dados e resolver problemas complexos com código elegante!",
        "B": "⚡ JavaScript é perfeito para você! Versátil, criativo e sempre evoluindo - assim como seus projetos web incríveis!",
        "C": "⚙️ C/C++ combina com seu perfil! Você gosta de controle total, performance máxima e construir a base de tudo!",
        "D": "☕ Java é a sua praia! Robustez, estrutura sólida e aplicações enterprise são o seu forte!",
        "E": "📱 Kotlin/Swift é ideal para você! Moderno, prático e focado em criar experiências mobile fantásticas!"
      }
    };

    this.title = quizData.title;
    this.questions = quizData.questions;
    this.results = quizData.results;
    this.questionSelected = this.questions[0];
  }

  playerChoose(alias: string): void {
    this.answers.push(alias);
    this.nextStep();
  }

  nextStep(): void {
    this.questionIndex++;
    
    if (this.questionIndex < this.questions.length) {
      this.questionSelected = this.questions[this.questionIndex];
    } else {
      this.finished = true;
      this.checkResult();
    }
  }

  checkResult(): void {
    // Conta as respostas para determinar o resultado mais frequente
    const count: { [key: string]: number } = {};
    
    this.answers.forEach(answer => {
      count[answer] = (count[answer] || 0) + 1;
    });

    const mostFrequent = Object.keys(count).reduce((a, b) => count[a] > count[b] ? a : b);
    this.answerSelected = this.results[mostFrequent];
  }

  getProgress(): number {
    return (this.questionIndex / this.questions.length) * 100;
  }

  getOptionEmojiByAlias(alias: string): string {
    const emojis: { [key: string]: string } = {
      'A': '🐍',
      'B': '⚡',
      'C': '⚙️',
      'D': '☕',
      'E': '📱'
    };
    return emojis[alias] || '❓';
  }

  restartQuiz(): void {
    this.questionIndex = 0;
    this.answers = [];
    this.answerSelected = '';
    this.finished = false;
    this.questionSelected = this.questions[0];
  }
}