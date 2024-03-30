// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html,
// котра має детальну інфорацію про об'єкт на який клікнули

let mineBlock = document.createElement('div');
mineBlock.classList.add('main');

fetch(' https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => users.forEach(user => {

        let userBlock = document.createElement('div');
        userBlock.classList.add('user');
        userBlock.innerText = `${user.id}. ${user.name}`;

        let btn = document.createElement('button');
        btn.classList.add('user_btn')

        let a = document.createElement('a');
        a.classList.add('a_user')
        a.href = ` ./user_details.html?id=${user.id}`;
        a.innerText = 'Looking for details';

        btn.appendChild(a)
            userBlock.appendChild(btn);
            mineBlock.appendChild(userBlock);
    }));

document.body.appendChild(mineBlock);