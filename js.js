const mainWord = document.querySelector('.mainWord');
const man = document.querySelector('#man');
const woman = document.querySelector('#woman');
const it = document.querySelector('#it');
const btn = document.querySelector('.check')
const farther = document.querySelector('.hide')
const studyingSpan = document.querySelectorAll('.studyingSpan')
const allInputs = document.querySelectorAll('.getWord')
const studyingBlock = document.querySelector('.studyingBlock')
const toggleInput = document.querySelector('#cb2')
const wordsRus = ['Странный', 'Забавный', 'Раздраженный', 'Холодный', 'Теплый', 'Интересный', 'Счастливый', 'Грустный', 'Усталый', 'Милый'];
const wordsEng = ['Weird', 'Funny', 'Annoyed', 'Cold', 'Warm', 'Interesting', 'Happy', 'Sad', 'Tired', 'Cute'];
const WOMAN = 'ая'
const IT = 'ое'
const MAN = 'ый'
let index;
let count = 0;

function clearValue() {
    it.value = '';
    woman.value = '';
    man.value = '';

    it.classList.remove('green')
    man.classList.remove('green')
    woman.classList.remove('green')
}
function getWord() {
    clearValue();
    index = Math.floor(Math.random() * 10);
    mainWord.textContent = `${wordsRus[index]} (${wordsEng[index]})`;
}
function checkWord(input, end) {
    let word = wordsRus[index].toLowerCase(); //get a random word
    let newWord = word.slice(0, word.length-2); // get a word without the last two letters
    newWord+=end; //splice the word without the last two letters and main two letters(it goes from an argument of function)
    if(input.value.toLowerCase().trim() === newWord) {
        input.classList.remove('red');
        input.classList.add('green')
        ++count;
    } else {
        count = 0;
        input.classList.add('red')
    }
}

getWord();
const addWordToStudyMode = () => {
    let word = wordsRus[index].slice(0, wordsRus[index].length-2)
    studyingSpan[0].textContent = word+MAN.toUpperCase();
    studyingSpan[1].textContent = word+WOMAN.toUpperCase();
    studyingSpan[2].textContent = word+IT.toUpperCase();
}
btn.addEventListener('click', () => {
    checkWord(man, MAN);
    checkWord(woman, WOMAN);
    checkWord(it, IT);
    if(count > 2) {
        farther.style.display = 'block';
        count = 0;
    }
})
farther.addEventListener('click', () => {
    getWord()
    farther.style.display = 'none';
    addWordToStudyMode()
})
toggleInput.addEventListener('change', (e) => {
   if(e.target.checked) {
    studyingBlock.style.display = 'block';  
    addWordToStudyMode()
   } else studyingBlock.style.display = 'none';  
})