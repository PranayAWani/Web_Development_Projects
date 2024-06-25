function toggleEditMode() {
    var editForm = document.getElementById('edit-form');
    if (editForm.style.display === 'none') {
        editForm.style.display = 'block';
        document.getElementById('edit-name').value = document.getElementById('name').innerText;
        document.getElementById('edit-bio').value = document.getElementById('bio').innerText;
    } else {
        editForm.style.display = 'none';
    }
}

function saveChanges() {
    var newName = document.getElementById('edit-name').value;
    var newBio = document.getElementById('edit-bio').value;

    document.getElementById('name').innerText = newName;
    document.getElementById('bio').innerText = newBio;

    document.getElementById('edit-form').style.display = 'none';
}
