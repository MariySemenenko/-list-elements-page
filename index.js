 const technologies = [
    {
        title: 'HTML',
        description: 'HyperText Markup language',
    },
    {
        title: 'CSS',
        description: 'Cascading Style Sheets',
    },
    {
        title: 'Java Script',
        description: 'Java Script language',
    },
    {
        title: 'React',
        description: 'Java Script libraty',
    },
 ];

 function createLi (array) {
    return array.reduce((acc, item) => acc + 
    `<li data-description='${item.description}'>${item.title}</li>`, '')
 };

const result = createLi(technologies);

const list = document.querySelector('.list');
const p = document.querySelector('.description');

list.insertAdjacentHTML('beforeend', result);

 console.log(createLi(technologies));

function listHandler(e) {
    console.log(e.target);
    const description = e.target.dataset.description;
    p.textContent = description;
}

 list.addEventListener('click', listHandler )
