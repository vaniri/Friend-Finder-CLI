const questions = ["Your mind is always buzzing with unexplored ideas and plans.", 
"Generally speaking, you rely more on your experience than your imagination", 
"You find it easy to stay relaxed and focused even when there is some pressure",
 "Q4", "Q5", "Q6", "Q7", "Q8", "Q9", "Q10"];

let questionIdx = 1;
let table = null;
let scores = null;

questions.forEach(question => {
    table = $(`<li><fieldset><legend class="label">` +
        `${question}</legend><div id="row"></div></fieldset></li>`);
    for (let i = 1; i <= 5; i++) {
        let id = `${questionIdx}-${i}`;
        scores = $(`<label for="${id}" class="label-active">` +
            `<input type="radio" name="q${questionIdx}" id="${id}" value="${i}">` +
            `${i} </label>`);
        table.append(scores);
    }
    questionIdx++;
    $("#question_container").append(table);

});

$("#quiz_button").on("click", event => {
    event.preventDefault();

    let name = $("#name").val();
    let photo = $("#photo").val();
    let scores = [];
    for (let i = 1; i <= questions.length; ++i) {
        scores.push(+($(`input[name=q${i}]:checked`).val()));
    }

    let userInfo = { name, photo, scores };
    console.log(userInfo);

    $.post("/api/friends", userInfo, res => {
        console.log(res);
    });
})

