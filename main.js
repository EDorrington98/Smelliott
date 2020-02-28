let getData = () => {
    let request = new XMLHttpRequest();
    request.open("GET", "http://localhost:8081/note/");
    request.send();
    request.onload = () => {
        let data = JSON.parse(request.response);
        let list = document.getElementById("tasks");
        list.innerText = "";
        $('#my-amazing-modal').modal('show');

        for (let tasks of data) {
            let listItem = document.createElement("li");
            listItem.style = "none";

            let div = document.createElement("div");

            let para = document.createElement("p");
            para.innerText = tasks.text;

            let updateButton = document.createElement("Button");
            updateButton.className = "btn btn-info";
            updateButton.innerText = "Update";

            let updateFunction = (func) => {
                updateButton.removeEventListener("click", updateFunction);
                let modal = document.createElement("modal");
                modal.class = "modal";
                let modalContent = document.createElement("div");
                modalContent.class = "modal-content";
                let form = document.createElement("form");
                form.onsubmit = updateData(event);
                let text = document.createElement("input");
                text.type = "text";
                let submit = document.createElement("input");
                submit.type = "submit";
                form.appendChild(text);
                form.appendChild(submit);
                modalContent.appendChild(form);
                modal.appendChild(modalContent);
                updateButton.appendChild(modal);
            };

            updateButton.addEventListener("click", updateFunction);


            let deleteButton = document.createElement("Button");
            deleteButton.className = "btn btn-danger";
            deleteButton.innerText = "Delete";
            deleteButton.addEventListener("click", () => {
                deleteData(tasks.id);
            });

            div.appendChild(para);
            div.appendChild(updateButton);
            div.appendChild(deleteButton);
            listItem.appendChild(div);
            list.appendChild(listItem);


        }
    }
}

let postData = (event) => {
    event.preventDefault();
    let form = event.target;
    let obj = {};
    for (let input of form) {
        if (input.name) {
            obj[input.name] = input.value;
        }
    }


    let request = new XMLHttpRequest();
    request.open("POST", "http://localhost:8081/note/");
    request.setRequestHeader("Content-Type", "application/json")

    let body = JSON.stringify(obj);
    console.log(body);
    request.send(body);

    request.onload = () => {
        getData();
    }
}

let deleteData = (id) => {
    let request = new XMLHttpRequest();
    request.open("DELETE", "http://localhost:8081/note/" + id + "/");
    request.send();
    request.onload = () => {
        getData();
    }
}
getData();

let updateData = (record) => {
    console.log(record);
    // open model
    // record.text = "updated";
    // let request = new XMLHttpRequest();
    // request.open("PUT", "http://localhost:8081/note/");
    // request.setRequestHeader("Content-Type", "application/json");
    // let body = JSON.stringify(record);
    // console.log(body);
    // request.send(body);
    // request.onload = () => {
    //     getData();
    // }
}
    // var modal = document.getElementById("myModal");

    //     var btn = document.getElementById("myBtn");

    //     var span = document.getElementsByClassName("close")[0];

    //     btn.onclick = function () {
    //         modal.style.display = "block";
    //     }

    //     span.onclick = function () {
    //         modal.style.display = "none";
    //     }

    //     window.onclick = function (event) {
    //         if (event.target == modal) {
    //             modal.style.display = "none";
    //         }}
    // let request = new XMLHttpRequest();
    // request.open("PUT", "http://localhost:8081/note/");
    // request.setRequestHeader("Content-Type", "application/json")
    // let body = JSON.stringify(obj);
    // console.log(body);
    // request.send(body);

    // request.onload = () => {
    //     getData();
    // }



// let requestHandler = (method, url, callback) => {
//     let request = new XMLHttpRequest();
//     request.open(method, url);
//     request.send();
//     request.onload = () => {
//         callback(request.response);
//     }
// }
// class Dog {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     bark() {
//         console.log('woof');
//     }
// }
// let dog = new Dog('bob', 10);
// dog.bark();
// let display = (request) => {
//     console.log(request.response);
// }
// requestHandler("GET", "http://localhost:8081/note/", display);

// let requestHandlery = (method, url) => {
//     return new Promise((resolve, reject) => {
//         let request = new XMLHttpRequest();
//         try {
//             request.open(method, url);

//             request.send();
//             request.onload = () => {
//                 if (request.status >= 200 && request.status < 300) {
//                     resolve(request);
//                 } else {
//                     reject("status was " + request.status);
//                 }
//             }
//         } catch {
//             reject("status was " + request.status);
//         }
//     })
// }

// requestHandlery("GET", "http://localhost:8081/note/").then((request) => {
//     console.log(request.response)
// }).catch((error) => {
//     console.log(error);
// })

// async function showThis() {
//     let request = await requestHandlery("GET", "http://localhost:8081/note/");
//     console.log(request.response);
// }
// showThis();

// fetch("http://localhost:8081/note/")
//     .then(request => request.json())
//     .then(request => console.log(request))