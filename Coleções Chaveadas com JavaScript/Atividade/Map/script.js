function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Steohany', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natalia', 'Admin');

console.log(getAdmins(usuarios));