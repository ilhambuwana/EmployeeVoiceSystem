document.getElementById('photo-post-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const photoInput = document.getElementById('photo-input');
    const file = photoInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;

            const post = document.createElement('article');
            post.classList.add('post');
            post.appendChild(img);

            // Create action buttons
            const actions = document.createElement('div');
            actions.classList.add('post-actions');

            const likeButton = document.createElement('button');
            likeButton.innerText = 'Like';
            likeButton.addEventListener('click', () => {
                alert('You liked this post!');
            });

            const commentButton = document.createElement('button');
            commentButton.innerText = 'Comment';
            commentButton.addEventListener('click', () => {
                const commentSection = post.querySelector('.comments-section');
                commentSection.style.display = 'block';
            });

            const shareButton = document.createElement('button');
            shareButton.innerText = 'Share';
            shareButton.addEventListener('click', () => {
                alert('Share functionality to be implemented!');
            });

            actions.appendChild(likeButton);
            actions.appendChild(commentButton);
            actions.appendChild(shareButton);

            post.appendChild(actions);

            // Create comment section
            const commentsSection = document.createElement('div');
            commentsSection.classList.add('comments-section');
            commentsSection.style.display = 'none';

            const commentInput = document.createElement('textarea');
            commentInput.placeholder = 'Write a comment...';

            const submitCommentButton = document.createElement('button');
            submitCommentButton.innerText = 'Submit';
            submitCommentButton.addEventListener('click', () => {
                const commentText = commentInput.value;
                if (commentText) {
                    const comment = document.createElement('li');
                    comment.innerText = commentText;

                    const commentsList = commentsSection.querySelector('.comments-list');
                    commentsList.appendChild(comment);

                    commentInput.value = '';
                }
            });

            commentsSection.appendChild(commentInput);
            commentsSection.appendChild(submitCommentButton);

            const commentsList = document.createElement('ul');
            commentsList.classList.add('comments-list');
            commentsSection.appendChild(commentsList);

            post.appendChild(commentsSection);

            const postsSection = document.getElementById('posts-section');
            postsSection.appendChild(post);
        }

        reader.readAsDataURL(file);
    }
});
