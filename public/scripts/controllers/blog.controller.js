myApp.controller('BlogController', function (BlogService) {
    console.log('In BlogController');
    var vm = this;
    vm.posts = [];
    vm.posts = BlogService.blogPosts;
    

    vm.createPost = function (post) {
        console.log('In createPost()');
        console.log('Post:', post);
        BlogService.createPost(post);
        console.log('vm.post', vm.post);
    } // end createPost

    vm.editPost = function (postId) {
        console.log('In editPost()');
        BlogService.editPost(postId).then(function() {
            vm.post = BlogService.editablePost;
            console.log('vm.post', vm.post);
        });
    } // end editPost

    vm.deletePost = function (postId) {
        console.log('In deletePost()');
        BlogService.removePost(postId);
        console.log('vm.post', vm.post);
    } // end deletePost

    vm.getPosts = function() {
        console.log('In getPosts()');
        BlogService.getAllPosts();
        console.log('vm.posts', vm.posts);
    } // end getPosts

    vm.updatePost = function (post) {
        console.log('In updatePost()', post);
        BlogService.changePost(post);
    }

}); // end BlogController