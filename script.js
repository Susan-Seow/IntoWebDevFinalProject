$(document).ready(function() {
    const commentsArray = [];

    // Function to add a new comment
    function addComment() {
        const commentText = $('#comment-input').val();
        if (commentText) {
            const comment = $('<div class="comment">');
            comment.html('<p>' + commentText + '</p>');
            comment.append('<div class="comment-actions"><button class="edit">Edit</button><button class="delete">Delete</button></div>');
            
            $('.comments-container').append(comment);

            const newComment = {
                userName: $('#user-name').val(),
                userPicture: $('#user-picture').val(),
                commentText: commentText,
            };
            commentsArray.push(newComment);

            $('#comment-input').val('');
            $('#user-name').val('');
            $('#user-picture').val('');
        }
    }

    // Function to edit a comment
    $('.comments-container').on('click', '.edit', function() {
        const comment = $(this).closest('.comment');
        const commentText = comment.find('p').text();
        const newText = prompt('Edit your comment:', commentText);
        if (newText) {
            comment.find('p').text(newText);
            const commentIndex = $('.comment').index(comment);
            commentsArray[commentIndex].commentText = newText;
        }
    });

    // Function to delete a comment
    $('.comments-container').on('click', '.delete', function() {
        const comment = $(this).closest('.comment');
        const commentIndex = $('.comment').index(comment);
        commentsArray.splice(commentIndex, 1);
        comment.remove();
    });

    // Event listener for submitting a comment
    $('#submit-comment').click(addComment);
});