$.get("input.txt", (textString) => {
    var converter = new showdown.Converter();
    console.log(textString);
    document.getElementById("output").innerHTML = converter.makeHtml(textString);
})