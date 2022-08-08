// This is an example array to demonstrate what the project list would look like on the site when the database is connected, some styling may have to be changed or added to make it look better




const projectList = [
    
    {
        locationName: 'Yorkton SK',
        projectName: 'Project Name'
    }, 
    {
        locationName: 'Waterville QC',
        projectName: 'Project Name'
    },
    {
        locationName: 'Saint-Ours, QC',
        projectName: 'Project Name'
    },
    {
        locationName: 'Westmount, QC',
        projectName: 'Project Name'
    },
    {
        locationName: 'North Battleford, SK',
        projectName: 'Project Name'
    },
    {
        locationName: 'Dollard-des-Ormeaux, QC',
        projectName: 'Project Name'
    },
    {
        locationName: 'Thorold, ON',
        projectName: 'Project Name'
    },
    {
        locationName: 'Waterloo, ON',
        projectName: 'Project Name'
    },
    {
        locationName: 'Morden, MB',
        projectName: 'Project Name'
    },
    {
        locationName: 'Thompson, MB',
        projectName: 'Project Name'
    },
    {
        locationName: 'White Rock, BC',
        projectName: 'Project Name'
    },
    {
        locationName: 'Salmon Arm, BC',
        projectName: 'Project Name'
    },
    
    // Below in this code block is what you would copy and paste to add more links onto the webpage
    // After you paste the code make sure there is a comma beneath the closing angle bracket or else the 
    //content will not show up
    {
        locationName: 'Calgary, AB',
        projectName: 'Project Name'
    },// Having this comma is very important for the content to show
    // { This is how you'd place it 
    //     locationName: 'Location Name',
    //     projectName: 'Project Name'
    // }, 
    

]


// Instructions
// Take the data above and display it as columns on the page below the map
let html = ""
const showLinks = document.querySelector('.list-of-projects')

for (data of projectList) {


    html = html + `
        <div class="project-links">
            <ul class="project-list">
                <li>${data.locationName}</li>
                <li><a href="../../html/projects-pages/individual-project-page.html">${data.projectName}</a></li>
            </ul>
        </div>`
}
// Where it says <li> <a href> this is a sample link so you can just see how the page would look like with all the info

showLinks.innerHTML += html