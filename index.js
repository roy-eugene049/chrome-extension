let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = " "
    renderLeads()
})

// Log out the items in the myLeads array using a for loop 

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        /** 
        console.log(myLeads[i])
        //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
        const li = document.createElement("li")
        li.textContent = myLeads[i]
        ulEl.append(li)
        */
        //listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    
    ulEl.innerHTML = listItems
}

