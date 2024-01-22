function randomizeCapitalization(text) {
    let newText = '';
    for (let char of text) {
        // Randomly capitalize each character
        newText += Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase();
    }
    return newText;
}
let texts = [
    "Your next design will feature swirling galaxies in shades of midnight blue and silver.",
    "Envision a landscape of geometric shapes, where triangles meet circles in harmony.",
    "Imagine a world where watercolors bleed into one another, creating a dreamy haze.",
    "Your canvas is a dance of dotted rhythms, each dot a different vibrant color.",
    "A maze of neon lines will guide your next creation, leading to an unknown destination.",
    "Picture a fusion of ancient symbols with modern minimalism.",
    "Your art will be a tapestry of textures, from rough to silky smooth.",
    "Envision an abstract garden, where metallic flowers bloom under a ruby-red sky.",
    "Create a symphony of abstract musical notes, each a different hue of the rainbow.",
    "Your design will be a kaleidoscope of fragmented glass pieces, shimmering in the light.",
    "Imagine a series of overlapping circles, each representing a different phase of the moon.",
    "Your canvas is a storm of colors, each brushstroke a bolt of lightning.",
    "Envision a peaceful blend of soft pastels, like a gentle sunrise.",
    "Create a world where shadows and light play in monochrome harmony.",
    "Your design will feature the fluidity of ink in water, each swirl telling its own story.",
    "Imagine an abstract cityscape, where buildings are made of vibrant, surreal colors.",
    "Your canvas is a celebration of contrast: sharp angles meet soft curves.",
    "Envision an ethereal realm where floating geometric shapes defy gravity.",
    "Create a tapestry of tiny, intricate patterns, each more detailed than the last.",
    "Your art will be a journey through a prism, each facet a different shade."
];
let displayText = '';
let textReady = false;

function setup() {
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER, CENTER);
    text('#EFEFEF');
    textSize(20); // Adjust text size as needed
    textFont('Monaco'); // Set the font to Monaco

    select('#newPageButton').mousePressed(() => window.location.href = 'index.html'); 

    setTimeout(() => {
        displayText = randomizeCapitalization(random(texts));
        textReady = true;
    }, 50); 
}

function splitTextIntoLines(text, maxWidth) {
    let words = text.split(' ');
    let lines = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
        let word = words[i];
        let width = textWidth(currentLine + " " + word);
        if (width < maxWidth) {
            currentLine += " " + word;
        } else {
            lines.push(currentLine);
            currentLine = word;
        }
    }
    lines.push(currentLine); // Push the last line
    return lines;
}

function draw() {
    background('#EFEFEF');

    if (textReady) {
        let lines = splitTextIntoLines(displayText, width - 500); // Subtracts 20 pixels for padding
        let y = (height - lines.length * (textSize() + 5)) / 2; // Calculates starting y position

        for (let line of lines) {
            text(line, width / 2, y);
            y += textSize() + 5; // Move to the next line
        }
    }
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
