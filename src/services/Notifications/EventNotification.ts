const WebHookURL = "https://discord.com/api/webhooks/1215415128229543976/uIgKHpeMYsZV8rYeW2bQHBl5S2C1-_ShL1gxRZBomJmedttfG2vQaHnstj8h4wT0i5ET";

export const EventNotification = async (message: string) => {
    const data = {
        content: message
    }
    const response = await fetch(WebHookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    if (!response.ok) {
        throw new Error('Failed to send notification');
    }

    return true;
}