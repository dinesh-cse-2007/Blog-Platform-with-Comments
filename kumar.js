const API_URL =
    "http://localhost:5000/api/blogs/scalable-frontend-architecture";

// Fetch Threaded Comments from Backend
async function fetchCommentsFromBackend() {
    const response = await fetch(`${API_URL}/comments`);
    const data = await response.json();

    // Pass 'data.comments' to your frontend rendering engine
    console.log(data.totalComments, data.comments);
}

// Post Comment to Backend
async function postCommentToBackend(author, text) {
    await fetch(`${API_URL}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ author, text }),
    });
    fetchCommentsFromBackend(); // Refresh view
}