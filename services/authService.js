
async function login(username, password) {
    return new Promise((res, rej) => {
        if (username.toLocaleLowerCase() == 'peter' && password == '123456') {
            res({
                _id: '293486c598234cebf',
                username: 'Peter',
                roles: ['user']
            });
        } else {
            rej(new Error('Incorrect Username or Password'))
        }
    });
};

module.exports = {
    login
};