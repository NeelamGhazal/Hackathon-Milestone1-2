// Toggle visibility function
function toggleVisibility(contentId: string) {
    const contentElement = document.getElementById(contentId);
    if (contentElement) {
        contentElement.classList.toggle('hidden');
    }
}

// Add event listener for the document to ensure the function is available globally
document.addEventListener('DOMContentLoaded', () => {
    (window as any).toggleVisibility = toggleVisibility;
});