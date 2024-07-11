const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const questionElement = document.getElementById('question');
const choicesContainer = document.getElementById('choices');
const progressBar = document.getElementById('progress-bar');
const resultMessage = document.getElementById('result-message');
const resultDescription = document.getElementById('result-description');
const levelIndicator = document.getElementById('level-indicator');

const questions = [
    {
        question: '¿Qué es la empatía?',
        choices: [
            { text: 'La capacidad de entender y compartir los sentimientos de otro', correct: true },
            { text: 'Una forma de inteligencia emocional', correct: true },
            { text: 'La habilidad de resolver problemas matemáticos', correct: false },
            { text: 'Una técnica de estudio', correct: false }
        ]
    },
    {
        question: '¿Qué es la resiliencia?',
        choices: [
            { text: 'La capacidad de recuperarse de la adversidad', correct: true },
            { text: 'Una técnica de relajación', correct: false },
            { text: 'La habilidad de aprender rápidamente', correct: false },
            { text: 'Un tipo de inteligencia', correct: false }
        ]
    },
    {
        question: '¿Qué es la inteligencia emocional?',
        choices: [
            { text: 'La capacidad de reconocer, entender y gestionar nuestras propias emociones', correct: true },
            { text: 'La habilidad de resolver problemas complejos', correct: false },
            { text: 'Una forma de inteligencia matemática', correct: false },
            { text: 'La habilidad de recordar información', correct: false }
        ]
    },
    {
        question: '¿Qué es el autoestima?',
        choices: [
            { text: 'La percepción evaluativa de uno mismo', correct: true },
            { text: 'La capacidad de hacer amigos fácilmente', correct: false },
            { text: 'Una técnica de meditación', correct: false },
            { text: 'La habilidad de aprender nuevos idiomas', correct: false }
        ]
    },
    {
        question: '¿Qué es el estrés?',
        choices: [
            { text: 'Una respuesta física y emocional a las demandas del entorno', correct: true },
            { text: 'Una forma de ejercicio físico', correct: false },
            { text: 'Un tipo de alimentación', correct: false },
            { text: 'Una técnica de relajación', correct: false }
        ]
    },
    {
        question: '¿Qué es la motivación?',
        choices: [
            { text: 'El proceso que inicia, guía y mantiene el comportamiento orientado a objetivos', correct: true },
            { text: 'La capacidad de resolver problemas matemáticos', correct: false },
            { text: 'Una forma de meditación', correct: false },
            { text: 'Un tipo de inteligencia', correct: false }
        ]
    },
    {
        question: '¿Qué es la cognición?',
        choices: [
            { text: 'El conjunto de procesos mentales involucrados en el conocimiento y la comprensión', correct: true },
            { text: 'Una técnica de estudio', correct: false },
            { text: 'La habilidad de hacer ejercicio físico', correct: false },
            { text: 'Una forma de inteligencia emocional', correct: false }
        ]
    },
    {
        question: '¿Qué es el desarrollo personal?',
        choices: [
            { text: 'El proceso de mejorar la autoconciencia y la identidad', correct: true },
            { text: 'La capacidad de hacer amigos fácilmente', correct: false },
            { text: 'Una técnica de relajación', correct: false },
            { text: 'La habilidad de aprender nuevos idiomas', correct: false }
        ]
    },
    {
        question: '¿Qué es la percepción?',
        choices: [
            { text: 'El proceso de organizar e interpretar la información sensorial', correct: true },
            { text: 'Una forma de ejercicio físico', correct: false },
            { text: 'Un tipo de alimentación', correct: false },
            { text: 'Una técnica de meditación', correct: false }
        ]
    },
    {
        question: '¿Qué es la psicología?',
        choices: [
            { text: 'El estudio científico de la mente y el comportamiento', correct: true },
            { text: 'La capacidad de resolver problemas matemáticos', correct: false },
            { text: 'Una forma de inteligencia', correct: false },
            { text: 'Una técnica de relajación', correct: false }
        ]
    },
    {
        question: '¿Qué es la personalidad?',
        choices: [
            { text: 'El conjunto de características y patrones de comportamiento de una persona', correct: true },
            { text: 'Una técnica de meditación', correct: false },
            { text: 'La habilidad de resolver problemas complejos', correct: false },
            { text: 'Un tipo de alimentación', correct: false }
        ]
    },
    {
        question: '¿Qué es la asertividad?',
        choices: [
            { text: 'La capacidad de expresar nuestras opiniones y necesidades de manera clara y respetuosa', correct: true },
            { text: 'La habilidad de resolver problemas matemáticos', correct: false },
            { text: 'Una técnica de estudio', correct: false },
            { text: 'Una forma de inteligencia emocional', correct: false }
        ]
    },
    {
        question: '¿Qué es la neurociencia?',
        choices: [
            { text: 'El estudio del sistema nervioso y el cerebro', correct: true },
            { text: 'Una técnica de relajación', correct: false },
            { text: 'La capacidad de hacer amigos fácilmente', correct: false },
            { text: 'Una forma de meditación', correct: false }
        ]
    },
    {
        question: '¿Qué es la terapia cognitivo-conductual?',
        choices: [
            { text: 'Un tipo de terapia que se centra en cambiar patrones de pensamiento y comportamiento', correct: true },
            { text: 'Una forma de inteligencia emocional', correct: false },
            { text: 'La capacidad de resolver problemas complejos', correct: false },
            { text: 'Una técnica de estudio', correct: false }
        ]
    },
    {
        question: '¿Qué es el refuerzo positivo?',
        choices: [
            { text: 'La presentación de un estímulo agradable después de una conducta para aumentar su frecuencia', correct: true },
            { text: 'Una técnica de meditación', correct: false },
            { text: 'La habilidad de resolver problemas matemáticos', correct: false },
            { text: 'Un tipo de alimentación', correct: false }
        ]
    },
    {
        question: '¿Qué es el condicionamiento clásico?',
        choices: [
            { text: 'Un tipo de aprendizaje en el que un estímulo previamente neutro llega a evocar una respuesta después de ser emparejado con un estímulo que la provoca naturalmente', correct: true },
            { text: 'Una forma de ejercicio físico', correct: false },
            { text: 'Una técnica de estudio', correct: false },
            { text: 'Una forma de inteligencia emocional', correct: false }
        ]
    },
    {
        question: '¿Qué es la memoria a corto plazo?',
        choices: [
            { text: 'La capacidad de retener una pequeña cantidad de información durante un breve período de tiempo', correct: true },
            { text: 'La habilidad de aprender nuevos idiomas', correct: false },
            { text: 'Una técnica de relajación', correct: false },
            { text: 'La capacidad de resolver problemas complejos', correct: false }
        ]
    },
    {
        question: '¿Qué es el desarrollo cognitivo?',
        choices: [
            { text: 'El proceso de crecimiento y cambio en las habilidades de pensar y comprender', correct: true },
            { text: 'Una forma de inteligencia emocional', correct: false },
            { text: 'Una técnica de estudio', correct: false },
            { text: 'La capacidad de hacer amigos fácilmente', correct: false }
        ]
    },
    {
        question: '¿Qué es la introspección?',
        choices: [
            { text: 'El proceso de examinar nuestros propios pensamientos y emociones', correct: true },
            { text: 'Una técnica de meditación', correct: false },
            { text: 'La habilidad de resolver problemas complejos', correct: false },
            { text: 'Una forma de inteligencia emocional', correct: false }
        ]
    },
    {
        question: '¿Qué es el análisis conductual aplicado (ABA)?',
        choices: [
            { text: 'Un tipo de terapia que utiliza técnicas de aprendizaje para mejorar comportamientos específicos', correct: true },
            { text: 'Una técnica de relajación', correct: false },
            { text: 'La capacidad de resolver problemas matemáticos', correct: false },
            { text: 'Una forma de ejercicio físico', correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', startGame);

function startGame() {
    startScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    questionScreen.classList.remove('hidden');
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    levelIndicator.innerText = `Nivel ${currentQuestionIndex + 1}`;
    currentQuestion.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.classList.add('choice');
        button.addEventListener('click', () => selectChoice(choice));
        choicesContainer.appendChild(button);
    });
    progressBar.style.width = `${(currentQuestionIndex / questions.length) * 100}%`;
}

function resetState() {
    while (choicesContainer.firstChild) {
        choicesContainer.removeChild(choicesContainer.firstChild);
    }
}

function selectChoice(choice) {
    if (choice.correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    resultMessage.innerText = `¡Juego terminado! Tu puntuación es ${score}/${questions.length}`;
    resultDescription.innerText = 'Gracias por jugar. Esperamos que hayas aprendido algo nuevo sobre psicología.';
}
