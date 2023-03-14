// ! DONT'S
// Manejo de errores dentro del código => para ellos debemos tener una clase especializada
// Lógica de presentación => de FrontEnd
// Lógica de persistencia => operaciones de BDD


// export function filterEmployees(httpClient, filters) {

//     try {

//         filters = removeDuplicateFilters(filters);
//         httpClient.get('/api/employees').then(employees => {
//             let result = applyFilters(employees);

//             // Lógica de presentación => de FrontEnd
//             let list = document.getElementById('employees-list');
//             result.forEach(employee => {
//                 let employeeItem = document.createElement('li');
//                 employeeItem.innerHTML = `<strong>${employee.lastName}</strong>`
//                 list?.appendChild(employeeItem);
//             });

//             // Lógica de persistencia => operaciones de BDD
//             result.forEach(employee => {
//                 httpClient.post('/api/employees/record', employee)
//             })
//         }).catch(err => {
//             console.error('Something went wrong');

//             // Manejo de errores dentro del código => para ellos debemos tener una clase especializada
//             let messageBox = new MessageBox();
//             messageBox.show('Something went wrong')
//         });

//     } catch (err) {
//         console.error('App critical error');
//         let messageBox = new MessageBox();
//         messageBox.show('Something went wrong')
//     }

// }

//* REFACTOR

var httpClient = new httpClient();

filterEmployees(httpClient, []).then(employees => {
    displayEmployees(employees);
    recordEmployee(employees, httpClient);
});

export function filterEmployees(httpClient, filters) {

    try {

        filters = removeDuplicateFilters(filters);
        
        return httpClient.get('/api/employees').then(employees => {

            let result = applyFilters(employees);

            return result;

        }).catch(err => {
            handleError(err, "Something went wrong");
        });

    } catch (err) {
        handleError(err, "Something went wrong");
    }

}

function recordEmployee(result: any[], httpClient: any) {
    result.forEach(employee => {
        httpClient.post('/api/employees/record', employee);
    });
}

function displayEmployees(result: any[]) {
    let list = document.getElementById('employees-list');
    result.forEach(employee => {
        let employeeItem = document.createElement('li');
        employeeItem.innerHTML = `<strong>${employee.lastName}</strong>`;
        list?.appendChild(employeeItem);
    });
}

function handleError(err, msg) {
    console.error(msg);
    let messageBox = new MessageBox();
    messageBox.show(msg);
}

function removeDuplicateFilters(filters) {
    // existe para evitar errores
};

function applyFilters(filters): any[] {
    // existe para evitar errores
    return [];
};

export class MessageBox {
    // existe para evitar errores
    show(msg) {

    };
}