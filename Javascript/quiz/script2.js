const questions = [
    {
     question: "Which method is used to remove the last element from an array?",
     options: [
       { answer: "pop()", isCorrect: true },
       { answer: "shift()", isCorrect: false },
       { answer: "push()", isCorrect: false },
       { answer: "unshift()", isCorrect: false }
     ]
   },
     {
       question: "Which method is used to join all elements of an array into a string?",
       options: [
         { answer: "join()", isCorrect: true },
         { answer: "concat()", isCorrect: false },
         { answer: "slice()", isCorrect: false },
         { answer: "splice()", isCorrect: false }
       ]
     },
     {
     question: "Which method creates a new array with all elements that pass a test?",
     options: [
       { answer: "filter()", isCorrect: true },
       { answer: "map()", isCorrect: false },
       { answer: "reduce()", isCorrect: false },
       { answer: "forEach()", isCorrect: false }
     ]
   },
     {
       question: "Which of the following is not a valid JavaScript data type?",
       options: [
         { answer: "Number", isCorrect: false },
         { answer: "String", isCorrect: false },
         { answer: "Float", isCorrect: true },
         { answer: "Boolean", isCorrect: false }
       ]
     },
     {
       question: "What will the following code output: `console.log(3 + '3')`?",
       options: [
         { answer: "33", isCorrect: true },
         { answer: "6", isCorrect: false },
         { answer: "NaN", isCorrect: false },
         { answer: "Error", isCorrect: false }
       ]
     }
   ];


const ques = document.getElementById('ques');
questions.forEach((quesans,quesindex) =>{
    let queshtml = "";
    queshtml += `<p>${quesindex + 1}.${quesans.question}</p>`;
    quesans.options.forEach((b,c) => {
        queshtml +=`
    <div class="form-check">
    <input class="form-check-input" type="radio" name="question-${quesindex}" id="option-${quesindex}-${c}" value="${b.answer}" data-correct="${b.isCorrect}">
    <label class="form-check-label" for="option-${quesindex}-${c}"">
        ${b.answer}
    </label>
    </div>`
})
ques.innerHTML += `<div class="mb-4">${queshtml}</div>`;
})

document.getElementById('submit').addEventListener('click' ,() => {
  const subans = [];
  questions.forEach((a,b) => {
    const selectedopt = document.querySelector(`input[name="question-${b}"]:checked`);
    const correctopt = a.options.find(c => c.isCorrect);
    subans.push({
      question : a.question,
      subans : selectedopt.value,
      correctopt : correctopt.answer,
    })
  })
  localStorage.setItem("quizres", JSON.stringify(subans));
  window.location.href = "result.html";
})
