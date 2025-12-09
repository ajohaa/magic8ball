// thou have found my javascript file. huzzah!
// is it have or hast? i forgeteth. i am but a humble coder, not shakespeare.


function shakeMagic8Ball() {
    const question = prompt("ask the magic 8-ball a question:");


    if (question === null) {
        document.getElementById("response-text").innerText = "you didn't ask a question silly!";
        document.getElementById("response-text").classList = "lead text-white";
        document.getElementById("response-img").src = "blank.jpg";
        return;
    }

    if (!question.trim()) {
        alert("please ask a valid question.");
        return;
    }

    const randomNumber = Math.floor(Math.random() * 8);
    let answer, image, color;
    switch (randomNumber) {
        case 0:
            answer = "It is certain";
            image = "blank.jpg";
            color = "text-white";
            break;
        case 1:
            answer = "Without a doubt";
            image = "blank.jpg";
            color = "text-white";
            break;
        case 2:
            answer = "You may rely on it";
            image = "blank.jpg";
            color = "text-white";
            break;
        case 3:
            answer = "Most likely";
            image = "blank.jpg";
            color = "text-white";
            break;
        case 4:
            answer = "Signs point to yes";
            image = "blank.jpg";
            color = "text-white";
            break;
        case 5:
            answer = "Don't count on it";
            image = "blank.jpg";
            color = "text-white";
            break;
        case 6:
            answer = "My reply is no";
            image = "blank.jpg";
            color = "text-white";
            break;
        case 7:
            answer = "My sources say no";
            image = "blank.jpg";
            color = "text-white";
            break;
        case 8:
            answer = "Outlook not so good";
            image = "blank.jpg";
            color = "text-white";
            break;
        case 9:
            answer = "Very doubtful";
            image = "blank.jpg";
            color = "text-white";
            break;
        case 10:
            answer = "Reply hazy, try again";
            image = "blank.jpg";
            color = "text-white";
            break;
        case 11:
            answer = "Ask again later";
            image = "blank.jpg";
            color = "text-white";
            break;
        case 12:
            answer = "Better not tell you now";
            image = "blank.jpg";
            color = "text-white";
            break;
        case 13:
            answer = "Cannot predict now";
            image = "blank.jpg";
            color = "text-white";
            break;
        default:
            answer = "Concentrate and ask again";
            image = "blank.jpg";
            color = "text-white";
            break;
    }

    document.getElementById("response-text").innerText = answer;
    document.getElementById("response-text").classList = color;
    document.getElementById("response-img").src = image;
}