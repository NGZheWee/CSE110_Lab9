class ValidationError extends Error {
  constructor(message) {
    super(message); 
    this.name = "ValidationError"; 
  }
}


let form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  let output = document.querySelector('output');
  let firstNum = document.querySelector('#first-num').value;
  let secondNum = document.querySelector('#second-num').value;
  let operator = document.querySelector('#operator').value;
  try {
    let result = eval(`${firstNum} ${operator} ${secondNum}`);
    output.innerHTML = result;
  }
  catch (err) {
    throw new ValidationError("At least one of the inputs were not numbers!");
  }
});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));
errorBtns[0].addEventListener('click', e => {
  console.log("Console Log Demo");
})
errorBtns[1].addEventListener('click', e => {
  console.error("Console Error Demo");
})
errorBtns[2].addEventListener('click', e => {
  console.count("Console Count Demo");
})
errorBtns[3].addEventListener('click', e => {
  console.warn("Console Warn Demo");
})
errorBtns[4].addEventListener('click', e => {
  console.assert(1 < 0, "(Console Assert Demo) 0 is not bigger than 1");
})
errorBtns[5].addEventListener('click', e => {
  console.clear();
})
errorBtns[6].addEventListener('click', e => {
  console.dir(errorBtns[6]);
})
errorBtns[7].addEventListener('click', e => {
  console.dirxml(errorBtns[7]);
})
errorBtns[8].addEventListener('click', e => {
  console.group();
})
errorBtns[9].addEventListener('click', e => {
  console.groupEnd();
})
errorBtns[10].addEventListener('click', e => {
  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  const me = new Person("Derrick", "NG");
  console.table(me);
})
errorBtns[11].addEventListener('click', e => {
  console.time("Console Timer Demo");
})
errorBtns[12].addEventListener('click', e => {
  console.timeEnd("Console Timer Demo");
})
errorBtns[13].addEventListener('click', e => {
  function testoutter() {
    function testinner() {
      console.trace();
    }
    testinner();
  }
  testoutter();
})
errorBtns[14].addEventListener('click', e => {
  generateAnError();
})

function generateAnError() {
  let result = anyRandomValue;
}

window.addEventListener("error", (e) => {
  console.log("Global Error Handler caught an Error!");
});


// Start your code here
// You may move this JS to another file if you wish
