// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
let submitButton = document.getElementById("submit-button");
submitButton.addEventListener('click',replaceElement);
function replaceElement() {
    var newParagraph = document.createElement("p");
    newParagraph.textContent = "Thank you for your message!";
    newParagraph.style.fontSize = "24px";
    document.body.replaceChild(newParagraph, document.getElementById("contact-page"));
    console.log('hi');
}
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

