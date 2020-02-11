function showQuestions() {
    let questionIdx = 1;
    let table = null;
    let scores = null;
    getQuestions().forEach(question => {
        table = $(`<li><fieldset><legend class="label">` +
            `${question}</legend></fieldset></li>`);
        for (let i = 1; i <= 5; i++) {
            let id = `${questionIdx}-${i}`;
            scores = $(`<label for="${id}" class="radio_label">` +
                `<input type="radio" name="q${questionIdx}" id="${id}" value="${i}">` +
                `${i} </label>`);
            table.append(scores);
        }
        questionIdx++;
        $("#question_container").append(table);
    })
}

showQuestions();

$("#quiz_button").on("click", event => {
    event.preventDefault();
    checkForm();
})

function checkForm() {
    const fields = $(".item-required")
        .find("form").serializeArray();

    let unField = fields.filter(field => !field.value).map(field => field.name);

    for (let i = 1; i <= getQuestions().length; ++i) {
        if (!$(`input[name=q${i}]:checked`).length) {
            unField.push("Q" + i);
        }
    }

    if (unField.length !== 0) { alert(`Please enter ${unField.join(", ")}!`); }
    else { getUserInfo(); }
}

function getUserInfo() {
    const name = $("#name").val();
    const photo = $("#photo").val();
    let scores = [];

    for (let i = 1; i <= getQuestions().length; ++i) {
        scores.push(+($(`input[name=q${i}]:checked`).val()));
    }
    let userInfo = { name, photo, scores };

    $.post("/api/friends", userInfo, res => {
        console.log(res);
        $("#match_name").text(res.result.name);
        $("#match_photo").attr("src", res.result.photo);
        console.log(res.result.name, res.result.photo);
        openModal();
    })
}

// slideshow
$("#slideshow > div:gt(0)").hide();

setInterval(function () {
    $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
}, 2000);


//modal
function openModal() {
    const modal = $("#myModal");
    modal.css('display', 'block');

    $(".close").on("click", () => {
        modal.css('display', 'none');
    })

    $(window).on("click", event => {
        if (event.target == modal) {
            modal.css('display', 'none');
        }
    })
}