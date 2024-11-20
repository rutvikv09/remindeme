// apiService.js
const API_BASE_URL = 'https://your-api-endpoint.amazonaws.com'; // Update with your API base URL

// Function to save a reminder to DynamoDB
export const saveReminderAPI = async (reminder) => {
    const response = await fetch(`${API_BASE_URL}/reminders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(reminder),
    });

    if (!response.ok) {
        throw new Error('Failed to save reminder');
    }
    return await response.json(); // Return the saved reminder data
};

// Function to upload a file to S3
export const uploadFileToS3 = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${API_BASE_URL}/upload`, { // Update with your upload endpoint
        method: 'POST',
        body: formData,
    });

    if (!response.ok) {
        throw new Error('Failed to upload file');
    }

    const data = await response.json(); 
    return data.fileUrl; 
};

// Function to fetch reminders from DynamoDB
export const fetchRemindersAPI = async () => {
    const response = await fetch(`https://5a186xmur1.execute-api.us-east-1.amazonaws.com/test/`);

    if (!response.ok) {
        throw new Error('Failed to fetch reminders');
    }
    return await response.json(); // Return the list of reminders
};

// Function to fetch attachment details if needed
export const fetchAttachmentDetailsAPI = async (attachmentId) => {
    const response = await fetch(`${API_BASE_URL}/attachments/${attachmentId}`);

    if (!response.ok) {
        throw new Error('Failed to fetch attachment details');
    }
    return await response.json(); // Return the attachment details
};
