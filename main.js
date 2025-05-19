document.addEventListener('DOMContentLoaded', function() {
// Select elements
const form = document.querySelector('.todo-form');
const input = form.querySelector('input[type="text"]');
const list = document.querySelector('.todo-list');

// Add new task
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const task = input.value.trim();
    if (task === '') return;
    const li = document.createElement('li');
    li.innerHTML = `
        <label>
            <input type="checkbox">
            <span class="task">${task}</span>
        </label>
        <button class="remove-btn" aria-label="Remove task">&times;</button>
    `;
    list.appendChild(li);
    input.value = '';
});

// Remove task
list.addEventListener('click', function(e) {
    if (e.target.matches('.remove-btn')) {
        e.target.closest('li').remove();
    }
});
});