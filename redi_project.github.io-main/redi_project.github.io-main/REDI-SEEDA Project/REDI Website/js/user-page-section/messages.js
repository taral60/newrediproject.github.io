// This array will be for the message boards located on the user home page as well as the user profile page

const messages = [

    {
        userName: 'User',
        userImage: 'User Image',
        incomingMessage: 'This is a test message for the message board on the user home page',

        // The date here will have to be changed in the future to a function to allow a date to be properly added to the message itself
        messageDate: 'July 10, 2010'

    },

    {
        userName: 'User',
        userImage: 'User Image',
        incomingMessage: 'This is a test message for the message board on the user home page',

        // The date here will have to be changed in the future to a function to allow a date to be properly added to the message itself
        messageDate: 'July 10, 2010'

    },

    {
        userName: 'User',
        userImage: 'User Image',
        incomingMessage: 'This is a test message for the message board on the user home page',

        // The date here will have to be changed in the future to a function to allow a date to be properly added to the message itself
        messageDate: 'July 10, 2010'

    },

    {
        userName: 'User',
        userImage: 'User Image',
        incomingMessage: 'This is a test message for the message board on the user home page',

        // The date here will have to be changed in the future to a function to allow a date to be properly added to the message itself
        messageDate: 'July 10, 2010'

    },

    {
        userName: 'User',
        userImage: 'User Image',
        incomingMessage: 'This is a test message for the message board on the user home page',

        // The date here will have to be changed in the future to a function to allow a date to be properly added to the message itself
        messageDate: 'July 10, 2010'

    },

    {
        userName: 'User',
        userImage: 'User Image',
        incomingMessage: 'This is a test message for the message board on the user home page',

        // The date here will have to be changed in the future to a function to allow a date to be properly added to the message itself
        messageDate: 'July 10, 2010'

    },

    {
        userName: 'User',
        userImage: 'User Image',
        incomingMessage: 'This is a test message for the message board on the user home page',

        // The date here will have to be changed in the future to a function to allow a date to be properly added to the message itself
        messageDate: 'July 10, 2010'

    },

    {
        userName: 'User',
        userImage: 'User Image',
        incomingMessage: 'This is a test message for the message board on the user home page',

        // The date here will have to be changed in the future to a function to allow a date to be properly added to the message itself
        messageDate: 'July 10, 2010'

    },

    {
        userName: 'User',
        userImage: 'User Image',
        incomingMessage: 'This is a test message for the message board on the user home page',

        // The date here will have to be changed in the future to a function to allow a date to be properly added to the message itself
        messageDate: 'July 10, 2010'

    },

    {
        userName: 'User',
        userImage: 'User Image',
        incomingMessage: 'This is a test message for the message board on the user home page',

        // The date here will have to be changed in the future to a function to allow a date to be properly added to the message itself
        messageDate: 'July 10, 2010'

    },

    {
        userName: 'User',
        userImage: 'User Image',
        incomingMessage: 'This is a test message for the message board on the user home page',

        // The date here will have to be changed in the future to a function to allow a date to be properly added to the message itself
        messageDate: 'July 10, 2010'

    },

    {
        userName: 'User',
        userImage: 'User Image',
        incomingMessage: 'This is a test message for the message board on the user home page',

        // The date here will have to be changed in the future to a function to allow a date to be properly added to the message itself
        messageDate: 'July 10, 2010'

    },

    {
        userName: 'User',
        userImage: 'User Image',
        incomingMessage: 'This is a test message for the message board on the user home page',

        // The date here will have to be changed in the future to a function to allow a date to be properly added to the message itself
        messageDate: 'July 10, 2010'

    },

    {
        userName: 'User',
        userImage: 'User Image',
        incomingMessage: 'This is a test message for the message board on the user home page',

        // The date here will have to be changed in the future to a function to allow a date to be properly added to the message itself
        messageDate: 'July 10, 2010'

    },

]



// Instructions
// Take the data above and display it as the message board below the user profile card
let html = ""
const displayMessages = document.querySelector('.messages')

for (messageData of messages) {
    html = html + `
    <div class="message-rectangle" id="message-rectangle">
        <div class="user-image">${messageData.userImage}</div>
        <p class="user-name">${messageData.userName}</p>
        <p class="message-itself">${messageData.incomingMessage}</p>
        <p class="message-date">${messageData.messageDate}</p>
    </div>`
}


displayMessages.innerHTML += html