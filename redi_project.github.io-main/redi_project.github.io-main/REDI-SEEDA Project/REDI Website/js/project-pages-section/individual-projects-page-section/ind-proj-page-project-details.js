const projectDetails = [

    {
        listItem: 'Project Type:',
        itemName: 'Answer'
    },
    {
        listItem: 'Project Jurisdiction:',
        itemName: 'Answer'
    },
    {
        listItem: 'EIA Status:',
        itemName: 'Answer'
    },
    {
        listItem: 'EIA Update Date:',
        itemName: 'Answer'
    },
    {
        listItem: 'Project Latitude:',
        itemName: 'Answer'
    },
    {
        listItem: 'Project Longtitude:',
        itemName: 'Answer'
    },
    {
        listItem: 'Province/Territory:',
        itemName: 'Answer'
    },
    {
        listItem: 'Municipality:',
        itemName: 'Answer'
    },
    {
        listItem: 'Project Start Date:',
        itemName: 'Answer'
    },
    {
        // This section can be null if the project has not yet been completed
        listItem: 'Project End Date:',
        itemName: 'Answer'
    },
    {
        listItem: 'Est. Cost:',
        itemName: 'Answer'
    },
    {
        listItem: 'Cost to Date:',
        itemName: 'Answer'
    },
    {
        listItem: 'Project Federal Reference No:',
        itemName: 'Answer'
    },
    {
        listItem: 'Project Provincial Reference No:',
        itemName: 'Answer'
    },
    {
        listItem: 'Federal Link:',
        itemName: 'Answer'
    },
    {
        listItem: 'Provncial Link:',
        itemName: 'Answer'
    },
    {
        listItem: 'Project Website:',
        itemName: 'Answer'
    }
]


// Instructions
// Take the data above and display it as two columns within its container
let html = ""
const showLinks = document.querySelector('.project-list')

for (data of projectDetails) {
    html = html + `
        <div class="project-details-list">

            <ul>
                <li class="details-list-items">
                    <p>${data.listItem}</p>
                    <p>${data.itemName}</p>
                </li>
            </ul>
            
        </div>`
}
// Where it says <li> <a href> this is a sample link so you can just see how the page would look like with all the info

showLinks.innerHTML += html