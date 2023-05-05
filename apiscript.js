// Get access to each main div

const divCat = document.querySelector('.catImage');
const divDog = document.querySelector('.dogImage');
const divJoke = document.querySelector('.randomJoke');
const divBored = document.querySelector('.iFeelBored');

// Get access to each divs button

const catBtn = divCat.querySelector('button');
const dogBtn = divDog.querySelector('button');
const jokeBtn = divJoke.querySelector('button');
const boredBtn = divBored.querySelector('button');

// Get access to each divs area which will get the content fetched

const fetchedCat = divCat.querySelector('.toIntroduceCat');
const fetchedDog = divDog.querySelector('.toIntroduceDog');
const fetchedJoke = divJoke.querySelector('.toIntroduceJoke');
const fetchedIdeea = divBored.querySelector('.toIntroduceIdeea');

// Define a function that does the fetch on each button

function fetchResource(button, url, processingDataFetched) {
  button.addEventListener('click', () => {
    fetch(url)
      .then(response => response.json())
      .then(json => processingDataFetched(json))
  })
};

fetchResource(catBtn, "https://cataas.com/cat?json=true", catPhoto);
fetchResource(dogBtn, "https://dog.ceo/api/breeds/image/random", dogPhoto);
fetchResource(jokeBtn, "https://official-joke-api.appspot.com/random_joke", joke);
fetchResource(boredBtn, "https://www.boredapi.com/api/activity", boredIdeea);

// Define a function for each button. Each button fetches different infos, so they require different info handling

// 1. Handle the cat photo
function catPhoto(fetchedInfo) {
  let someDiv=document.createElement('div');
  let para1 = document.createElement('p');
  let para2 = document.createElement('p');
  let img = document.createElement('img');

  fetchedCat.append(someDiv);

  para1.textContent="Here is a random image with a cat."
  someDiv.append(para1);

  img.src = `https://cataas.com/${fetchedInfo.url}`;
  someDiv.append(img);


  para2.textContent="Press on the button one more time for another image.";
  someDiv.append(para2);

  img.classList.add('catImageFetchedSource');
  someDiv.classList.add('catImageSubSection');
}

// 2. Handle the dog photo
function dogPhoto(fetchedInfo) {
  let someDiv=document.createElement('div');
  let para1 = document.createElement('p');
  let para2 = document.createElement('p');
  let img = document.createElement('img');

  fetchedDog.append(someDiv);

  para1.textContent="Here is a random image with a dog."
  someDiv.append(para1);

  img.src = `${fetchedInfo.message}`;
  someDiv.append(img);


  para2.textContent="Press on the button one more time for another image.";
  someDiv.append(para2);

  img.classList.add('dogImageFetchedSource');
  someDiv.classList.add('dogImageSubSection');
}

// 3. Handle the joke
function joke(fetchedInfo) {
  let someDiv = document.createElement('div');
  let jokeType = document.createElement('p');
  let setup = document.createElement('p');
  let punchLine = document.createElement('p');
  
  fetchedJoke.append(someDiv);
  someDiv.append(jokeType, setup, punchLine);

  jokeType.textContent=`Joke type: ${fetchedInfo.type}`;
  setup.textContent=fetchedInfo.setup;
  punchLine.textContent=fetchedInfo.punchline;

  someDiv.classList.add('jokeDiv');
  jokeType.classList.add('jokeType');
  setup.classList.add('jokeSetup');
  punchLine.classList.add('jokePunchLine');
}

// 4. Handle the activity ideea fetched
function boredIdeea(fetchedInfo) {
  let someDiv = document.createElement('div');
  let activityType = document.createElement('p');
  let activity = document.createElement('p');
  let nrParticipants=document.createElement('p');
  let accessibility = document.createElement('p');

  fetchedIdeea.append(someDiv);
  someDiv.append(activityType, activity, nrParticipants, accessibility);

  activityType.textContent=`Activity type: ${fetchedInfo.type}`;
  activity.textContent=fetchedInfo.activity;
  nrParticipants.textContent=`Nr of participants required: ${fetchedInfo.participants}`;
  accessibility.textContent=`The median price and accessbility for this activity is ${fetchedInfo.price} / ${fetchedInfo.accessibility}. Please be aware of this.`;

  someDiv.classList.add('boredIdeeaGot');
  activityType.classList.add('activityType');
  activity.classList.add('activity');
  nrParticipants.classList.add('participants');
  accessibility.classList.add('accessibiity');
}