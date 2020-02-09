let questionIdx = 1;
let table = null;
let scores = null;

getQuestions().forEach(question => {
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
})

$("#quiz_button").on("click", event => {
    event.preventDefault();

    let name = $("#name").val();
    let photo = $("#photo").val();
    let scores = [];
    for (let i = 1; i <= getQuestions().length; ++i) {
        scores.push(+($(`input[name=q${i}]:checked`).val()));
    }

    let userInfo = { name, photo, scores };

    $.post("/api/friends", userInfo, res => {
        console.log(res);
    });
})

// slideshow
$("#slideshow > div:gt(0)").hide();

setInterval(function () {
    $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
}, 3000);