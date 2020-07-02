const mainWord = document.querySelector('.mainWord');
const man = document.querySelector('#man');
const woman = document.querySelector('#woman');
const it = document.querySelector('#it');
const btn = document.querySelector('.check')
const farther = document.querySelector('.hide')
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
    let random = Math.floor(Math.random() * 10);
    mainWord.textContent = `${wordsRus[random]} (${wordsEng[random]})`;
    index = random;
}
function checkWord(input, end) {
    let word = wordsRus[index].toLowerCase();
    let newWord = word.slice(0, word.length-2);
    newWord+=end;
    if(input.value.toLowerCase() === newWord) {
        input.classList.remove('red');
        input.classList.add('green')
        ++count;
    } else {
        count = 0;
        input.classList.add('red')
    }
}

getWord();
btn.addEventListener('click', (e) => {
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
})