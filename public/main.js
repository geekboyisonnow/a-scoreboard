let count = 0;

const addOnePointForTeamOne = () => {
  console.log('Hurray, we clicked!');
  count += 1;

  // Find ptagCount
  const ptagCount = document.querySelector('p')
  console.log(ptagCount);
  
  // Make ptag content value of count
  ptagCount.textContent = count;
}

function main() {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }

  // find the ptag, t
  const ptagCount = document.querySelector('p');
  console.log(ptagCount);

  // make tag value of count
  ptagCount.textContent = count;

  // Find the add 1 button for team 1
  const addOneButton = document.querySelector('button.add-for-team-one');
  console.log(addOneButton);

  // When the add button for team 1 is clicked, increment count and update ptag
  addOneButton.addEventListener('click', addOnePointForTeamOne);

  // Find the subtract 1 button for team 1


}

document.addEventListener('DOMContentLoaded', main)
