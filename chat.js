// Toggle Chat Box Visibility
function toggleChat() {
    const chatBox = document.getElementById("chatBox");
    chatBox.style.display = chatBox.style.display === "flex" ? "none" : "flex";
}

// Send Message
function sendMessage() {
    const userMessage = document.getElementById("userMessage");
    const chatBody = document.getElementById("chatBody");

    if (userMessage.value.trim() !== "") {
        // Add User Message
        const userMsgDiv = document.createElement("div");
        userMsgDiv.className = "message user";
        userMsgDiv.innerHTML = `<p>${userMessage.value}</p>`;
        chatBody.appendChild(userMsgDiv);

        // Scroll to the bottom
        chatBody.scrollTop = chatBody.scrollHeight;

        // Clear input
        userMessage.value = "";

        // Simulate Bot Response
        setTimeout(() => {
            const botMsgDiv = document.createElement("div");
            botMsgDiv.className = "message bot";
            botMsgDiv.innerHTML = "<p>Thanks for your message! We'll get back to you shortly.</p>";
            chatBody.appendChild(botMsgDiv);

            // Scroll to the bottom
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 1000);
    }
}
