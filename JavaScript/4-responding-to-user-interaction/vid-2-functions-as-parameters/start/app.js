const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');
// const listItems = document.querySelectorAll('li');

toggleList.addEventListener('click', () => {
    if (listDiv.style.display == 'none') {
        toggleList.textContent = 'Hide list';
        listDiv.style.display = 'block';
    } else {
        toggleList.textContent = 'Show list';
        listDiv.style.display = 'none';
    }
});

descriptionButton.addEventListener('click', () => {
    descriptionP.innerHTML = descriptionInput.value + ':';
    descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    ul.appendChild(li);
    addItemInput.value = '';
});

removeItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.querySelector('li:last-child');
    ul.removeChild(li);
});


// Ternary Operator way 
listDiv.addEventListener('mouseover', (e) => {
    (event.target.tagName === 'LI') ?
    (e.target.style.textTransform = 'uppercase') :
    (e.target = '')
})

listDiv.addEventListener('mouseout', (e) => {
    (event.target.tagName === 'LI') ?
    (e.target.style.textTransform = 'lowercase') :
    (e.target = '')
})

// normal if statement 
listDiv.addEventListener('mouseover', (e) => {
    if (event.target.tagName === 'LI') {
        (e.target.style.textTransform = 'uppercase')
    }
})

listDiv.addEventListener('mouseout', (e) => {
    if (event.target.tagName === "LI") {
        e.target.style.textTransform = "lowercase";
    }
})




// listDiv.addEventListener("mouseout", () => {
//     listItems.style.textTransform = "lowercase";
// })


// document.addEventListener('click', (event) => {
//     console.log(event.target);
// })



// listItems.addEventListener("mouseover", () => {
//     listItems.style.textTransform = 'uppercase';
// })

// listItems.addEventListener("mouseout", () => {
//     listItems.style.textTransform = "lowercase";
// }) 

// for (let i = 0; i < listItems.length; i++) {
//     listItems[i].addEventListener('mouseover', () => {
//         listItems[i].textContent = listItems[i].textContent.toUpperCase();

//         listItems[i].addEventListener("mouseout", () => {
//             listItems[i].textContent = listItems[i].textContent.toLowerCase();
//         })
//     })
// }