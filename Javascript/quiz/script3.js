const resultpage  = document.getElementById('result-box');
const quizresult = JSON.parse(localStorage.getItem("quizres")) || [];
let totalmark = 0;
quizresult.forEach((a,b) =>{
    let mark
    let icon
    if(a.subans === a.correctopt)
    {
        mark = 1;
        totalmark++;
        icon = `<i class="fa-solid fa-circle-check" style="color: green"></i>`;
    }
    else
    {
        mark = 0;
        icon = `<i class="fa-solid fa-circle-xmark" style="color: #B20000"></i>`;
    }
    resultpage.innerHTML += `
    <p>Question ${b+1}: ${a.question}</p>
    <p>Your Ans: ${a.subans} ${icon}</p>
    <p>Correct Ans: ${a.correctopt}</p>
    <p>Mark: ${mark}</p>`
})
resultpage.innerHTML += `
<h4>Total Marks: ${totalmark}</h4>`