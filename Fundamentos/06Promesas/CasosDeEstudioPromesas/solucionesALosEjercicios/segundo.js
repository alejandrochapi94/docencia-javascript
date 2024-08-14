let users = [];

function addUser(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            users.push(user);
            resolve(`Usuario ${user.name} agregado`);
        }, 1000);
    });
}

function removeUser(userName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            users = users.filter(user => user.name !== userName);
            resolve(`Usuario ${userName} eliminado`);
        }, 1000);
    });
}

function updateUser(userName, newDetails) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            users = users.map(user => user.name === userName ? { ...user, ...newDetails } : user);
            resolve(`Usuario ${userName} actualizado`);
        }, 1000);
    });
}

async function manageUsers() {
    try {
        await addUser({ name: "Juan", age: 25 });
        await addUser({ name: "María", age: 30 });
        console.log("Usuarios después de agregar:", users);

        await updateUser("Juan", { age: 26 });
        console.log("Usuarios después de actualizar:", users);

        await removeUser("María");
        console.log("Usuarios después de eliminar:", users);
    } catch (error) {
        console.error("Error al manejar usuarios:", error);
    }
}

manageUsers();
