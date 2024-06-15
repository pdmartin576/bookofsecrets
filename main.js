const scores = [0, 0, 0, 0, 0, 0]; // [Storm, Ice, Fire, Death, Myth, Life]

function submitQuiz() {
    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        const selectedOption = question.querySelector('input[type="radio"]:checked');
        if (selectedOption) {
            const points = JSON.parse(question.getAttribute('data-points'));
            const selectedIndex = parseInt(selectedOption.value);
            points[selectedIndex].forEach((point, index) => {
                scores[index] += point;
            });
        }
    });

    const maxScore = Math.max(...scores);
    const groupIndex = scores.indexOf(maxScore);
    let groupName = '';

    switch (groupIndex) {
        case 0:
            groupName = 'Storm';
            break;
        case 1:
            groupName = 'Ice';
            break;
        case 2:
            groupName = 'Fire';
            break;
        case 3:
            groupName = 'Death';
            break;
        case 4:
            groupName = 'Myth';
            break;
        case 5:
            groupName = 'Life';
            break;
        default:
            groupName = '...uhhh you didn\'t select anything, did you?';
    }

    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('resultText').innerText = `You belong to the School of ${groupName}.`;
    // Update the scores in the table
    document.getElementById('stormScore').innerText = scores[0];
    document.getElementById('iceScore').innerText = scores[1];
    document.getElementById('fireScore').innerText = scores[2];
    document.getElementById('deathScore').innerText = scores[3];
    document.getElementById('mythScore').innerText = scores[4];
    document.getElementById('lifeScore').innerText = scores[5];
}