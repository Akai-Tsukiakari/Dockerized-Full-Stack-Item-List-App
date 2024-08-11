document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/items')
        .then(response => response.json())
        .then(data => {
            const itemList = document.getElementById('item-list');
            data.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item.name;
                itemList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching items:', error));
});
