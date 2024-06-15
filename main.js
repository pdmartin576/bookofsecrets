const scores = [0, 0, 0, 0, 0, 0]; // [groupA, groupB, groupC, groupD, groupE, groupF]

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
            groupName = 'groupA';
            break;
        case 1:
            groupName = 'groupB';
            break;
        case 2:
            groupName = 'groupC';
            break;
        case 3:
            groupName = 'groupD';
            break;
        case 4:
            groupName = 'groupE';
            break;
        case 5:
            groupName = 'groupF';
            break;
        default:
            groupName = 'No group selected';
    }

    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('resultText').innerText = `You belong to ${groupName}`;
}