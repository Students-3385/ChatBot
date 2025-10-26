document.getElementById('send-btn').addEventListener('click', function() {
  let userInput = document.getElementById('user-input').value;
  if (userInput.trim()) {
    let messageContainer = document.getElementById('message-container');
    let userMessage = document.createElement('div');
    userMessage.classList.add('user-message');
    userMessage.textContent = `You: ${userInput}`;
    messageContainer.appendChild(userMessage);

    let botResponse = document.createElement('div');
    botResponse.classList.add('bot-message');
    botResponse.textContent = `Bot: Sorry, I don't have an answer for that right now.`;
    messageContainer.appendChild(botResponse);

    document.getElementById('user-input').value = '';
    messageContainer.scrollTop = messageContainer.scrollHeight; // Auto scroll
  }
});
