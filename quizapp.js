console.log("Quiz App :");

// questions :

const que = [
    {
        s_no: 1,
        question: "Yash's fav. Anime?",
        a: "My Hero Acadmeia",
        b: "Tokyo Ghoul",
        c: "Dragon Ball Super",
        d: "Black Clover",
        answer: "c"
    },
    {
        s_no: 2,
        question: "Yash's fav. Soft Drink?",
        a: "Coco Cola",
        b: "Pepsi",
        c: "Thumbs Up",
        d: "None of the above",
        answer: "b"
    },
    {
        s_no: 3,
        question: "Yash's hobby is to ...",
        a: "play cricket",
        b: "indoor games",
        c: "pc games",
        d: "None of the above",
        answer: "c"
    },
    {
        s_no: 4,
        question: "Yash's is ..?",
        a: "handsome",
        b: "smart",
        c: "awesome",
        d: "cool 😎",
        answer: "d"
    }
]

let question = document.getElementById('question');
let scoreboard = document.getElementById('scoreboard');
let opt = document.getElementById('opt');
let opt1 = document.getElementById('opt1');
let opt2 = document.getElementById('opt2');
let opt3 = document.getElementById('opt3');
let opt4 = document.getElementById('opt4');
let options = document.querySelectorAll('.options');
let submit = document.getElementById('submit');
let quiz_block = document.querySelector('quiz_block');

// by default score will not show

scoreboard.style.display = "none";

// displaying the question :

let questioncount = 0;
let score = 0;

const loadquestion = () => {
    let s = que[questioncount].s_no; // question's serial no.
    let q = que[questioncount].question; // question
    let html = `<h1 style="display: inline;">Q${s} : </h1><h2 style="display: inline;">${q}</h2>`;

    question.innerHTML = html;
}

// displaying the options of given que :

const loadoptions = () => {
    opt1.innerText = `${que[questioncount].a}`;
    opt2.innerText = `${que[questioncount].b}`;
    opt3.innerText = `${que[questioncount].c}`;
    opt4.innerText = `${que[questioncount].d}`;
}

loadoptions();
loadquestion();


// submit btn :

submit.addEventListener('click', () => {

    // checking which option is checked :

    const checkoptions = () => {
        for (i of options) {
            if (i.checked) {
                let optval = i.value;
                console.log("option : ", optval);
                return optval;
            }
        }
    }

    const checkedanswer = checkoptions();
    // console.log(checkedanswer);

    // score will inc. when ans is right :

    if (checkedanswer === que[questioncount].answer) {
        score++;
    }

    // before changing the question we first remove the checked btn :
    for (i of options) {
        i.checked = false;
    }

    // we will display another questions now :

    questioncount++;
    if (questioncount < que.length) {
        loadoptions();
        loadquestion();
    } else {
        // when the questions are completed then only scoreboard will visible : 
        scoreboard.style.display = "block";
        question.style.display = "none";
        opt.style.display = "none";

        if (score < 3) {
            scoreboard.innerHTML = `<h2>bsdk bap k bare m nhi pta tuje<h2>
                                    <h1>Your score : ${score}</h1>
            <button id="playagain" class="play_again">try again</button>`;

            playagain.addEventListener('click', () => {
                console.log("yo");
                location.reload();
            })
        } else {
            scoreboard.innerHTML = `<h2>Congratutations , 😍 you won<h2>
            <h1>Your score : ${score}</h1>
            <button id="playagain" class="play_again">Play again</button>`;

            playagain.addEventListener('click', () => {
                console.log("yo");
                location.reload();
            })
        }

    }

    console.log("question count : ", questioncount);
    console.log("score count : ", score);
});


