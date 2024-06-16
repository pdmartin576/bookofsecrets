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
            groupBlurb = 'Storm Magic is all about creativity. It represents that flash of insight, or the spark of inspiration that makes you yell, "Eureka!" It is about the pleasure of catching lightning in a bottle. Wizards that embrace the School of Storm, known as <em><u>Sorcerers</u></em>, are driven by the thrill of investigation and discovery, the joys of invention and ingenuity, the power of creating and building. The drawback to such pursuits is the tendency to get lost in the maze of thoughts and being paralyzed to make a decision. Sorcerers use <em><u>Verses</u></em> to charm, enthrall or hypnotize creatures to help them.<br>Storm Magic has roots in the power of the majestic Storm Lords, the race of Titans that ruled the seas in the Days Before.'
            break;
        case 1:
            groupName = 'Ice';
            groupMotto = '\"...with Persistence, Victory is assured.\"';
            groupBlurb = 'Ice Magic is all about persistence, slow but steady progression and advancement, like the great glaciers forever sliding across the landscape. Those who embrace the power of Ice, known as <em><u>Thaumaturges</u></em>, exhibit great patience and strength, but as a result they sometimes become rigid and inflexible. Thaumaturges use <em><u>Chants</u></em> to bargain or plead with Ice creatures to serve them.<br>Ice Magic has its origins in the great Ice Giants, a race of Titans that built massive castles in the sky in the Days Before.';
            break;
        case 2:
            groupName = 'Fire';
            groupMotto = '\"If the Mind is like a candle, the Heart is like the sun.\"';
            groupBlurb = 'Fire is passion, the bright, burning flame of raw emotion sweeping over everything. Those who follow the School of Fire, known as <em><u>Pyromancers</u></em>, are tempestuous, quick to anger, and consumed by whatever drives them at that moment. They tend to walk a fine line, having great passion and enthusiasm for one&#39;s loves in life is good, but watch out! Passion can burn you up and consume you, leaving nothing but a charred husk of your former self. Pyromancers use <em><u>Incantations</u></em> to dominate and convince Fire creatures to do their bidding.<br>Fire Magic traces its origins back to the fierce Fire Dragons, the race of Titans that ruled the land in the Days Before.';
            break;
        case 3:
            groupName = 'Death';
            groupMotto = '\"Timor mortis conturbat me.\" (The Fear of Death Confounds Me)';
            groupBlurb = 'Death is about ending and closure. All things pass eventually, and time cannot be held back forever. Wizards devoted to Death Magic, known as <em><u>Necromancers</u></em>, understand this fact about everything around them and strive to face it without fear. They try to make the most of their time. Beware, though; some Wizards become morbid or try to cheat death through undeath. Necromancers use <em><u>Whispers</u></em> to strengthen their will, and draw on the power of courage to channel their own fears out of themselves and at their opponents.<br>Death Magic sits between Ice and Storms, for the cold energy of undeath draws on those two forces.';
            break;
        case 4:
            groupName = 'Myth';
            groupMotto = '\"To control the Future, one must look to the Past.\"';
            groupBlurb = 'Myth is imagination. The power of the mind, and everything it can create, drives Myth Magic. It is illusion and dreams made real. If the Wizard can conceive it, it can be brought forth and even brought to life. Beware, though, for when imagination becomes too fanciful and whimsical, dreams can escape control and run wild. Wizards of the Myth School, known as <em><u>Conjurers</u></em>, use <em><u>Naming</u></em> to summon beasts of legend by memorizing and calling out their True Name.<br>Myth dwells between Fire and Ice, for that is where the shadows lie, and Myths are the shadowy forms of thought made real.';
            break;
        case 5:
            groupName = 'Life';
            groupMotto = '\"As we have been Created, so must we Create.\"';
            groupBlurb = 'Life is spirit, the force of awareness and existence. It is about constant growth and movement. Practitioners of Life Magic, known as <em><u>Theurgists</u></em>, are positive, enthusiastic people who seek to appreciate the simple pleasures. At times, however, they can be too flighty or frivolous when circumstances demand otherwise. Theurgists use <em><u>Songs</u></em> to breathe life and spirit into a vessel. Unlike other magic, which relies on summoning, coercing or beseeching, Life Magic harnesses the power of the Song of Creation to create something new. Scholars believe that Theurgy channels the tapestry of music from which the Spiral was created, and that in echoing portions of the great symphony, a Wizard can bring forth and create Life where none previously existed.<br>Life Magic rests between Fire and Storms, for the spark of Life comes from those two forces.';
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