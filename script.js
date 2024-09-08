// Toggle visibility function
function toggleVisibility(contentId) {
    var contentElement = document.getElementById(contentId);
    if (contentElement) {
        contentElement.classList.toggle('hidden');
    }
}
// Add event listener for the document to ensure the function is available globally
document.addEventListener('DOMContentLoaded', function () {
    window.toggleVisibility = toggleVisibility;
});
