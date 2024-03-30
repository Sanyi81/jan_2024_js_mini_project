// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
// котра має детальну інфу про поточний пост.

let url = new URL(location.href);
let id = url.searchParams.get('id');

let userDetailsBlock = document.createElement('div');
userDetailsBlock.classList.add('user_details');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json())
    .then(user => {
        let div = document.createElement('div');
        div.classList.add('info');

        let userDiv = document.createElement('div');
        userDiv.classList.add('user_info');
        let userId = document.createElement('p');
        userId.innerText = `id: ${user.id}`;

        let userName = document.createElement('p');
        userName.innerText = `name: ${user.name}`;

        let userUsername = document.createElement('p');
        userUsername.innerText = `username: ${user.username}`;

        let userEmail = document.createElement('p');
        userEmail.innerText = `email: ${user.email}`;
        userDiv.append(userId, userName, userUsername, userEmail)

        let userAddress = document.createElement('div');
        userAddress.classList.add('user_address');
        userAddress.innerText = 'address:';

            let addressStreet = document.createElement('p');
            addressStreet.classList.add('address');
            addressStreet.innerText = `street: ${user.address.street}`;
            let addressSuite = document.createElement('p');
            addressSuite.classList.add('address');
            addressSuite.innerText = `suite: ${user.address.suite}`;
            let addressCity = document.createElement('p');
            addressCity.classList.add('address');
            addressCity.innerText = `city: ${user.address.city}`;
            let addressZipcode = document.createElement('p');
            addressZipcode.classList.add('address');
            addressZipcode.innerText = `zipcode: ${user.address.zipcode}`;
            let addressGeo = document.createElement('div');
            addressGeo.innerText = `geo:`;
            addressGeo.classList.add('address');
                let geoLat = document.createElement('p');
                geoLat.classList.add('geo');
                geoLat.innerText = `lat: ${user.address.geo.lat}`;
                let geoLng = document.createElement('p');
                geoLng.classList.add('geo');
                geoLng.innerText = `lng: ${user.address.geo.lng}`;
        addressGeo.append(geoLat, geoLng);
        userAddress.append(addressStreet, addressSuite, addressCity, addressZipcode, addressGeo);

        let userPhone = document.createElement('p');
        userPhone.innerText = `phone: ${user.phone}`;

        let userWebsite = document.createElement('p');
        userWebsite.innerText = `website: ${user.website}`;

        let company = document.createElement('div');
        company.innerText = `company:`;
            let companyName = document.createElement('p');
            companyName.classList.add('address');
            companyName.innerText = `name: ${user.company.name}`;
            let companyCatchPhrase = document.createElement('p');
            companyCatchPhrase.classList.add('address');
            companyCatchPhrase.innerText = `catchPhrase: ${user.company.catchPhrase}`;
            let companyBs = document.createElement('p');
            companyBs.classList.add('address');
            companyBs.innerText = `bs: ${user.company.bs}`;
        company.append(companyName, companyCatchPhrase, companyBs);

        let btnBlock = document.createElement('div');
        btnBlock.classList.add('button');
        let btn = document.createElement('button');
        btn.innerText = 'Posts of current user';
        btn.classList.add('post_button');
        btnBlock.appendChild(btn);

        let postBlock = document.createElement('ul');
        postBlock.classList.add('posts');
        userDetailsBlock.appendChild(postBlock);

        btn.onclick = (e) => {
            e.preventDefault();

            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(res => res.json())
                .then(posts => {
                    for (const post of posts) {

                        let postList = document.createElement('li');
                        postList.classList.add('post_list');

                        postBlock.appendChild(postList);

                    let a = document.createElement('a');
                    a.classList.add('user_posts');
                    a.href = `./post_details.html?id=${post.id}`;

                    a.innerText = `${post.title}`;

                    postList.appendChild(a);

                    postBlock.appendChild(postList);
                }
                });
            if (btn) {
                btn.setAttribute('disabled', 'disabled');
            }
        };

        div.append(userDiv, userAddress, userPhone, userWebsite, company);
        userDetailsBlock.append(div, btnBlock, postBlock);

        document.body.appendChild(userDetailsBlock);
});

