
function createCharacter() {

    const name = document.getElementById("name").value;
    const personality = document.getElementById("personality").value;
    const description = document.getElementById("description").value;

    const result = document.getElementById("result");

    if (name.trim() === "" || personality === "") {
        result.innerHTML = "Please enter a character name and select a personality!";
        return;
    }

    const greetings = {
        "Friendly": "Hello! It's wonderful to meet you. Let's have a great conversation!",
        "Funny": "Hey there! Ready for some fun and laughter?",
        "Intelligent": "Greetings! I'm ready to explore ideas and share knowledge.",
        "Creative": "Hello! Let's imagine something amazing together!",
        "Professional": "Welcome. I'm ready to assist you professionally."
    };

    result.innerHTML = `
        <h3>Character Created Successfully!</h3>
        <p><strong>Name:</strong> ${escapeHTML(name)}</p>
        <p><strong>Personality:</strong> ${escapeHTML(personality)}</p>
        <p><strong>Description:</strong> ${escapeHTML(description || "No description added.")}</p>
        <hr>
        <p><strong>Character Greeting:</strong></p>
        <p>${greetings[personality]}</p>
    `;
}

function escapeHTML(value) {
    return value.replace(/[&<>"']/g, function (character) {
        return {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }[character];
    });
}

