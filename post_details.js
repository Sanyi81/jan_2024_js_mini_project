// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста
// (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let url = new URL(location.href);
let id = url.searchParams.get('id');

let postDetails = document.createElement('div');
postDetails.classList.add('post_block');

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json())
    .then(post => {
        let div = document.createElement('div');
        div.classList.add('posts')

            let userId = document.createElement('h3');
            userId.innerText = `User ID: ${post.userId}`;
            div.appendChild(userId);

            let id = document.createElement('p');
            id.innerText = `ID: ${post.id}`;

            let title = document.createElement('p');
            title.innerText = `Title: ${post.title}`;

            let body = document.createElement('p');
            body.innerText = `Body: ${post.body}`;

            let showBtn = document.createElement('button');
            showBtn.classList.add('comments_btn');
            showBtn.innerText = 'Comments';

            div.append(id, title, body, showBtn);

            let commentsDiv = document.createElement('div');
            commentsDiv.classList.add('comments');

            div.appendChild(commentsDiv);

            showBtn.onclick = (e) => {
                e.preventDefault();

                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                    .then(res => res.json())
                    .then(comments => {
                        for (const comment of comments) {
                            let commentsList = document.createElement('div');
                            commentsList.classList.add('comments_list');

                            let commentPostId = document.createElement('p');
                            commentPostId.innerText = `postId: ${comment.postId}`;

                            let commentId = document.createElement('p');
                            commentId.innerText = `Id: ${comment.id}`;

                            let commentName = document.createElement('p');
                            commentName.innerText = `Name: ${comment.name}`;

                            let commentEmail = document.createElement('p');
                            commentEmail.innerText = `Email: ${comment.email}`;

                            let commentBody = document.createElement('p');
                            commentBody.innerText = `Comment: ${comment.body}`;

                            commentsList.append(commentPostId, commentId, commentName, commentEmail, commentBody);
                            commentsDiv.appendChild(commentsList);

                        }
                        if (showBtn) {
                                showBtn.setAttribute('disabled', 'disabled');
                        }
                    });
            }
            postDetails.appendChild(div);
            document.body.appendChild(postDetails);
    });

