myApp.controller('BlogController', function (BlogService) {
    console.log('In BlogController');
    var vm = this;
    vm.posts = [];
    vm.posts = BlogService.blogPosts;

    vm.createPost = function (post) {
        console.log('In createPost()');
        console.log('Post:', post);
        BlogService.createPost(post);
    } // end createPost

    vm.editPost = function (postId) {
        console.log('In editPost()');
        BlogService.editPost(postId);
        vm.post = BlogService.editablePost;
        console.log('vm.post', vm.post);
    } // end editPost

    vm.deletePost = function (postId) {
        console.log('In deletePost()');
        BlogService.removePost(postId);
    } // end deletePost

    vm.getPosts = function() {
        console.log('In getPosts()');
        BlogService.getAllPosts();
        // vm.posts = BlogService.blogPosts;
        console.log('vm.posts', vm.posts);
    } // end getPosts

}); // end BlogController