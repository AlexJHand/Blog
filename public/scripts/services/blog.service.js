// Initialize Service
myApp.service('BlogService', function ($http) {
    var self = this;
    self.blogPosts = {};
    self.editablePost = {};

    self.createPost = function(post) {
        console.log('In service createPost');
        console.log('Service post:', post);
        $http({
            method: 'POST',
            url: '/blog',
            data: post
        }).then(function (response) {
            console.log('Blog posted', response);
            self.getAllPosts();
        }) // end then
    } // end createPost

    self.editPost = function (postId) {
        console.log('In self.editPost()');
        return $http({
            method: 'GET',
            url: '/blog/' + postId
        }).then(function (response) {
            console.log('Response:', response);
            self.editablePost = response.data;
            console.log('self.editablePost', self.editablePost);
            console.log('self.editablePost.title', self.editablePost.title);
        })
    }

    self.getAllPosts = function() {
        console.log('In service getAllPosts');
        $http({
            method: 'GET',
            url: '/blog'
        }).then(function (response) {
            console.log('Response:', response);
            // self.blogPosts = {posts: response.data};
            self.blogPosts.posts = response.data;
            console.log('self.blogPosts', self.blogPosts);
        })
    } // end get

    self.removePost = function (postId) {
        console.log('In self.removePost()');
        $http({
            method: 'DELETE',
            url: '/blog/' + postId
        }). then(function (response) {
            console.log('Response:', response); 
            self.getAllPosts();           
        })
    }
}); // end service