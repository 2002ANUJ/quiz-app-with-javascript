const quizData = [
    {
        question: 'In which language is React.js written',
        a: 'Python',
        b: 'javascript',
        c: 'Php',
        d: ' java',
        correct: 'b'
    } ,{
        question: ' what is the most used programming language in 2023',
        a: 'java',
        b: 'python',
        c: 'javascript',
        d: 'c++',
        correct: 'c'
    }, {
        question: 'who is the president of india',
        a: 'Modi',
        b: ' Rahul gandhi',
        c: 'Arvind Kajeriwal',
        d: 'Droupadi Murmu',
        correct: 'd'
    },{
        question: 'Which of the following is used in React.js to increase performance',
        a: 'Virtual DOM',
        b: 'Original DOM',
        c: 'both a and b',
        d: ' none of these',
        correct: 'a',
    },{
        question: 'Identify the one which is used to pass data to components from outside',
        a:'Render with argument',
        b: 'setState',
        c: 'Prop Types',
        d: 'props',
        correct: 'd'
    }
]

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
    currentQuiz++;
}