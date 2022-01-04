import { IQuestions } from "../../types/types"

export const geography: IQuestions[] = [
  {
    numberOfQuestion: 1,
    question: 'Сколько океанов в мире?',
    letterOfCorrectAnswer: 'C',
    correctAnswer: '5',
    answers: [['A', '3'], ['B', '4'], ['C', '5'], ['D', '6']]
  },
  {
    numberOfQuestion: 2,
    question: 'В каком году основана Москва?',
    letterOfCorrectAnswer: 'A',
    correctAnswer: '1147',
    answers: [['A', '1147'], ['B', '1204'], ['C', '998'], ['D', '1753']]
  },
  {
    numberOfQuestion: 3,
    question: 'Самая длинная река в мире?',
    letterOfCorrectAnswer: 'C',
    correctAnswer: 'Амазонка',
    answers: [['A', 'Миссисипи'], ['B', 'Нил'], ['C', 'Амазонка'], ['D', 'Москва']]
  },
  {
    numberOfQuestion: 4,
    question: 'В какой стране находится самое глубокое озеро?',
    letterOfCorrectAnswer: 'B',
    correctAnswer: 'Россия',
    answers: [['A', 'Казахстан'], ['B', 'Россия'], ['C', 'Япония'], ['D', 'Греция']]
  },
  {
    numberOfQuestion: 5,
    question: 'Самый большой в мире океан?',
    letterOfCorrectAnswer: 'D',
    correctAnswer: 'Тихий',
    answers: [['A', 'Северный Ледовитый'], ['B', 'Индийский'], ['C', 'Южный'], ['D', 'Тихий']]
  }
]

export const math: IQuestions[] = [
  {
    numberOfQuestion: 1,
    question: 'Сколько будет 10 в степени 0?',
    letterOfCorrectAnswer: 'A',
    correctAnswer: '1',
    answers: [['A', '1'], ['B', '0'], ['C', '10'], ['D', '0.1']]
  },
  {
    numberOfQuestion: 2,
    question: 'Сумма углов треугольника?',
    letterOfCorrectAnswer: 'A',
    correctAnswer: '180',
    answers: [['A', '180'], ['B', '60'], ['C', '90'], ['D', '360']]
  },
  {
    numberOfQuestion: 3,
    question: 'Сумма углов квадрата?',
    letterOfCorrectAnswer: 'C',
    correctAnswer: '360',
    answers: [['A', '180'], ['B', '60'], ['C', '360'], ['D', '180']]
  },
  {
    numberOfQuestion: 4,
    question: 'Чему равно число π?',
    letterOfCorrectAnswer: 'D',
    correctAnswer: '3.14',
    answers: [['A', '1.11'], ['B', '10.5'], ['C', '2.42'], ['D', '3.14']]
  },
  {
    numberOfQuestion: 5,
    question: 'Чему равен √100?',
    letterOfCorrectAnswer: 'B',
    correctAnswer: '10',
    answers: [['A', '1'], ['B', '10'], ['C', '50'], ['D', '100']]
  }
]

export const info: IQuestions[] = [
  {
    numberOfQuestion: 1,
    question: 'Чему равен 1 байт?', 
    letterOfCorrectAnswer: 'A',
    correctAnswer: '8бит',
    answers: [['A', '8бит'], ['B', '2бит'], ['C', '18бит'], ['D', '10мегабайт']]
  },
  {
    numberOfQuestion: 2,
    question: 'Выберите имя файла anketa с расширением txt',
    letterOfCorrectAnswer: 'D',
    correctAnswer: 'anketa.txt',
    answers: [['A', 'anketa|txt'], ['B', 'anketa-txt'], ['C', 'anketa/txt'], ['D', 'anketa.txt']]
  },
  {
    numberOfQuestion: 3,
    question: 'Какое расширение у исполняемых файлов?',
    letterOfCorrectAnswer: 'C',
    correctAnswer: 'exe,bat',
    answers: [['A', 'bak,doc'], ['B', 'png,jpeg,pdf'], ['C', 'exe,bat'], ['D', 'exe,pdf']]
  },
  {
    numberOfQuestion: 4,
    question: 'Архивация файлов – это',
    letterOfCorrectAnswer: 'A',
    correctAnswer: 'Сжатие',
    answers: [['A', 'Сжатие'], ['B', 'Объединение'], ['C', 'Удаление'], ['D', 'Установка']]
  },
  {
    numberOfQuestion: 5,
    question: 'Из каких цифр состоит двоичная система счисления?',
    letterOfCorrectAnswer: 'B',
    correctAnswer: '0-1',
    answers: [['A', '1-10'], ['B', '0-1'], ['C', '1-9'], ['D', '0-2']]
  }
]
