
let groupsBtn = document.getElementById('groups-btn')
let contactsBtn = document.getElementById('contacts-btn')
let contactsContainer = document.getElementById('contacts')
let groupsContainer = document.getElementById('groups')



groupsBtn.onclick = function(){
            
    contactsContainer.style.display='none'
        contactsBtn.style.backgroundColor='transparent'
        contactsBtn.style.border='none'
        groupsContainer.style.display=''
        groupsBtn.style.backgroundColor='#fff'
        groupsBtn.style.border='1px solid #dee3e2'
    }
    contactsBtn.onclick = function(){
        groupsContainer.style.display='none'
        contactsContainer.style.display=''
        contactsBtn.style.backgroundColor='#fff'
        contactsBtn.style.border='1px solid #dee3e2'
        groupsBtn.style.backgroundColor='transparent'
        groupsBtn.style.border='none'

    }

