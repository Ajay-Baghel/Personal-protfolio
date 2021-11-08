console.log("script connected");

const elements = {
    submit: document.getElementById("submit"),
    comment: document.getElementById("comment_input"),
    email: document.getElementById("email_input"),
    name: document.getElementById("name_input"),
    comment_container: document.getElementById("comments_output"),
};
console.log(elements);

let cansubmit = false;

function getDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;
    return today;
}

function submit_comment() {
    console.log("button clicked");
    if (cansubmit) {
        let comment_data = {
            comment: elements.comment.value.trim(),
            email: elements.email.value.trim(),
            name: elements.name.value.trim(),
            date: getDate(),
        };

        elements.comment.value = "";
        elements.email.value = "";
        elements.name.value = "";
        disable_sumbit();
        can_submit = false;
        elements.comment_container.innerHTML += `<div class="comment">
        <div class="c_comment">
            <p>${comment_data.comment}</p>
        </div>
        <div class="meta">
            <div class="nameanddate">${comment_data.date}<span class="author">~ ${comment_data.name}</span></div>
        </div>
    </div>`;
        console.log(comment_data);
    }
}

function can_submit() {
    console.log("listener invoked");
    let comment = elements.comment.value.trim();
    let email = elements.email.value.trim();
    let name = elements.name.value.trim();
    if (comment.length >= 4 && email.length >= 4 && name.length >= 3) {
        elements.submit.classList.add("submit_enabled");
        elements.submit.disabled = false;
        cansubmit = true;
        // console.log("good to go");
    } else {
        disable_sumbit();
    }
}

function disable_sumbit() {
    elements.submit.classList.remove("submit_enabled");
    elements.submit.disabled = true;
    cansubmit = false;
}

function set_event_listener() {
    elements.submit.addEventListener("click", submit_comment);
    elements.comment.addEventListener("keyup", can_submit);
    elements.email.addEventListener("keyup", can_submit);
    elements.name.addEventListener("keyup", can_submit);
}

set_event_listener();
