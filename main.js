const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."; 

const insertx = [
    "Willy the Goblin",
    "Big Daddy",
    "Father Christmas"]; 

const inserty = [
    "the soup kitchen",
    "Disneyland",
    "the White House"];

const insertz = ["spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away"]; 

randomize.addEventListener('click', result);


function result() {

    let newStory = storyText; 
    let xItem = randomValueFromArray(insertx);
    let yItem = randomValueFromArray(inserty);
    let zItem = randomValueFromArray(insertz);

    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replaceAll("Bob", name);
    }
    
    if(document.getElementById("uk").checked) {
        const weight_num = Math.round(300/14);
        const temperature_num =  Math.round( ((94-32)*5)/9 );

        const weight = `${weight_num} stone`
        const temperature = `${temperature_num} celsius`

        newStory = newStory.replaceAll("94 fahrenheit", temperature);
        newStory = newStory.replaceAll("300 pounds", weight);
    }

    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replaceAll(":inserty:", yItem);
    newStory = newStory.replaceAll(":insertz:", zItem); 

    story.textContent = newStory;
    story.style.visibility = 'visible';
}