let countForTeamOne = 0;
let countForTeamTwo = 0;

const addOnePointForTeamOne = () => {
  console.log('Hurray, we clicked!');
  countForTeamOne += 1;

  // Find ptagCount
  const ptagCountForTeamOne = document.querySelector('p.score-for-team-one')
  console.log(ptagCountForTeamOne);
  
  // Make ptag content value of count
  ptagCountForTeamOne.textContent = countForTeamOne;
}

const subtractOnePointFromTeamOne = () => {
  console.log('Hurray, we clicked!');
  countForTeamOne -= 1;

  // Find ptagCount
  const ptagCountForTeamOne = document.querySelector('p.score-for-team-one')
  console.log(ptagCountForTeamOne);
  
  // Make ptag content value of count
  ptagCountForTeamOne.textContent = countForTeamOne;
}

const addOnePointForTeamTwo = () => {
  console.log('Hurray, we clicked!');
  countForTeamTwo += 1;

  // Find ptagCount
  const ptagCountForTeamTwo = document.querySelector('p.score-for-team-two')
  console.log(ptagCountForTeamTwo);
  
  // Make ptag content value of count
  ptagCountForTeamTwo.textContent = countForTeamTwo;
}

const subtractOnePointFromTeamTwo = () => {
  console.log('Hurray, we clicked!');
  countForTeamTwo -= 1;

  // Find ptagCount
  const ptagCountForTeamTwo = document.querySelector('p.score-for-team-two')
  console.log(ptagCountForTeamTwo);
  
  // Make ptag content value of count
  ptagCountForTeamTwo.textContent = countForTeamTwo;
}

function main() {

  // Find the ptag for Team 1
  const ptagCountForTeamOne = document.querySelector('p.score-for-team-one');
  console.log(ptagCountForTeamOne);

  // Make tag value of count
  ptagCountForTeamOne.textContent = countForTeamOne;

  // Find the ptag for Team 2
  const ptagCountForTeamTwo = document.querySelector('p.score-for-team-two');
  console.log(ptagCountForTeamTwo);

  // Make tag value of count
  ptagCountForTeamTwo.textContent = countForTeamTwo;  

  // Find the add 1 button for Team 1
  const addOneButton = document.querySelector('button.add-for-team-one');
  console.log(addOneButton);

  // When the add button for Team 1 is clicked, increment count and update ptag
  addOneButton.addEventListener('click', addOnePointForTeamOne);

  // Find the subtract 1 button for Team 1
  const subtractOneButton = document.querySelector('button.subtract-from-team-one');
  console.log(subtractOneButton);

  // When the subtract button for Team 1 is clicked, decrement count and update ptag
  subtractOneButton.addEventListener('click', subtractOnePointFromTeamOne);

  // Find the add 1 button for Team 2
  const addOneButtonForTeamTwo = document.querySelector('button.add-for-team-two');
  console.log(addOneButtonForTeamTwo);

  // When the add button for Team 2 is clicked, increment count and update ptag
  addOneButtonForTeamTwo.addEventListener('click', addOnePointForTeamTwo);

  // Find the subtract 1 button for Team 1
  const subtractOneButtonFromTeamTwo = document.querySelector('button.subtract-from-team-two');
  console.log(subtractOneButtonFromTeamTwo);

  // When the subtract button for Team 1 is clicked, decrement count and update ptag
  subtractOneButtonFromTeamTwo.addEventListener('click', subtractOnePointFromTeamTwo);
}

document.addEventListener('DOMContentLoaded', main)
