const $text = document.getElementById('text');
const $more = document.getElementById('more');
const $end = document.getElementById('end');
const $vowel = document.getElementById('vowel');

const words = $text.textContent.split(" ");
let markedWords = [];

const markWords = () => {
    markedWords = [];
    for(let i in words){
        let word = words[i];
        if($more.checked && word.length > 8) {
            word = `<mark>${word}</mark>`;
        } else if($end.checked && /ть?ся$/.test(word)) {
            word = `<mark>${word}</mark>`;
        } else if($vowel.checked && /^[аеёиоуыэюя]/i.test(word) && word.length > 1) {
            word = `<mark>${word}</mark>`;
        }
        markedWords.push(word);
    }
    $text.innerHTML = markedWords.join(" ");
}

$more.addEventListener("click", markWords);
$end.addEventListener("click", markWords);
$vowel.addEventListener("click", markWords);
