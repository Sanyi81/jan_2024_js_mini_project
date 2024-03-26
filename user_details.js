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

// let key = 'key';
// let user = JSON.parse(localStorage.getItem(key));
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json())
    .then(user => {
        let div = document.createElement('div');
        div.classList.add('user_info')

        let userId = document.createElement('p');
        userId.innerText = `id: ${user.id}`;

        let userName = document.createElement('p');
        userName.innerText = `name: ${user.name}`;

        let userUsername = document.createElement('p');
        userUsername.innerText = `username: ${user.username}`;

        let userEmail = document.createElement('p');
        userEmail.innerText = `email: ${user.email}`;

        let userAddress = document.createElement('divAddress');
        userAddress.innerText = `address:`
            let addressStreet = document.createElement('p');
            addressStreet.innerText = `street: ${user.address.street}`;
            let addressSuite = document.createElement('p');
            addressSuite.innerText = `suite: ${user.address.suite}`;
            let addressCity = document.createElement('p');
            addressCity.innerText = `city: ${user.address.city}`;
            let addressZipcode = document.createElement('p');
            addressZipcode.innerText = `zipcode: ${user.address.zipcode}`;
            let addressGeo = document.createElement('divGeo');
            addressGeo.innerText = `geo:`;
            let geoLat = document.createElement('p');
            geoLat.innerText = `lat: ${user.address.geo.lat}`;
            let geoLng = document.createElement('p');
            geoLng.innerText = `lng: ${user.address.geo.lng}`;
        addressGeo.append(geoLat, geoLng);
        userAddress.append(addressStreet, addressSuite, addressCity, addressZipcode, addressGeo);

        let userPhone = document.createElement('p');
        userPhone.innerText = `phone: ${user.phone}`;

        let userWebsite = document.createElement('p');
        userWebsite.innerText = `website: ${user.website}`;

        let company = document.createElement('divCompany');
        company.innerText = `company:`;
            let companyName = document.createElement('p');
            companyName.innerText = `name: ${user.company.name}`;
            let companyCatchPhrase = document.createElement('p');
            companyCatchPhrase.innerText = `catchPhrase: ${user.company.catchPhrase}`;
            let companyBs = document.createElement('p');
            companyBs.innerText = `bs: ${user.company.bs}`;
        company.append(companyName, companyCatchPhrase, companyBs);

        div.append(userId, userName, userUsername, userEmail, userAddress, userPhone, userWebsite, company);

        document.body.appendChild(div);
    });

let btn = document.createElement('button');

