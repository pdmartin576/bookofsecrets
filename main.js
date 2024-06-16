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
    let groupMotto = '';
    let groupBlurb = '';

    switch (groupIndex) {
        case 0:
            groupName = 'Storm';
            groupMotto = '\"That which can be imagined, can be achieved.\"'
            groupBlurb = 'Storm Magic is all about creativity. It represents that flash of insight, or the spark of inspiration that makes you yell, "Eureka!" It is about the pleasure of catching lightning in a bottle. Wizards that embrace the School of Storm, known as <em><u>Sorcerers</u></em>, are driven by the thrill of investigation and discovery, the joys of invention and ingenuity, the power of creating and building. The drawback to such pursuits is the tendency to get lost in the maze of thoughts and being paralyzed to make a decision. Sorcerers use <em><u>Verses</u></em> to charm, enthrall or hypnotize creatures to help them.\n\nStorm Magic has roots in the power of the majestic Storm Lords, the race of Titans that ruled the seas in the Days Before.'
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
    document.getElementById('result').style.display = 'flex';
    document.getElementById('result').style.flexDirection = 'column';
    document.getElementById('resultText').innerText = `You belong to the School of ${groupName}.`;
    document.getElementById('resultMotto').innerText = `${groupMotto}`;
    document.getElementById('resultBlurb').innerHTML = `${groupBlurb}`;
    // Update the scores in the table
    document.getElementById('stormScore').innerText = scores[0];
    document.getElementById('iceScore').innerText = scores[1];
    document.getElementById('fireScore').innerText = scores[2];
    document.getElementById('deathScore').innerText = scores[3];
    document.getElementById('mythScore').innerText = scores[4];
    document.getElementById('lifeScore').innerText = scores[5];
}