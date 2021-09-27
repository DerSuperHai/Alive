client_id = undefined


const init = (info) => {
    client_id = info
}

const sock = io()
sock.on("init", init)

const test = (e) => {
    e.preventDefault()
}

document.querySelector("#form_test").addEventListener("submit", test)


