let div=document.getElementById('form');
function showData() {
    // Fetching input values
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let mail = document.getElementById('mail').value;
    let description = document.getElementById('description').value;

    let displayDiv = document.getElementById('result');
    displayDiv.innerHTML = `
        <p>Name: ${name}</p>
        <p>Phone: ${phone}</p>
        <p>Email: ${mail}</p>
        <p>Description: ${description}</p>
    `;

    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Email:", mail);
    console.log("Description:", description);

    name.value='';
    phone.value='';
    mail.value='';
    description.value='';

}