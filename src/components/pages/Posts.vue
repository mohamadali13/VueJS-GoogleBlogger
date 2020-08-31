<template>
  <div class="container-fluid w-90 mt-3 mb-3">
    <router-link :to="{name: 'addPost'}">
      <button class="mb-4 ml-2 btn btn-info mr-1 shadow-none">
        <VueFontawesome aria-hidden="true" class="mr-1" size="1" />Add Post
      </button>
    </router-link>
    <div class="p-3 card bg-light text-dark mb-3" v-for="Post in Posts" v-bind:key="Post.id">
      <div class="row">
        <div class="col-sm-8 text-left">
          <h4>{{ Post.title }}</h4>
        </div>
        <div class="col-sm-4 text-right text-secondary">
          <span class="text-dark">
            {{ Post.updated | formatDate }}
            <VueFontawesome icon="clock-o" class="ml-1" size="1" />
          </span>
          <br />
          <span class="text-dark">
            {{ Post.author.displayName }}
            <VueFontawesome icon="user" class="ml-1" size="1" />
          </span>
        </div>
      </div>
      <div>
        <button type="button" class="btn btn-danger mr-1 shadow-none" @click="DeletePost(Post.id)">
          <VueFontawesome icon="trash" class="mr-2" size="1" />Delete
        </button>
        <a class="btn btn-warning mr-1 shadow-none" :href="'/Posts/' + Post.blog.id + '/Post/' + Post.id">
          <VueFontawesome icon="arrows" class="mr-2" size="1" />Click for More
        </a>
        <div id="DeleteMessage" style="display:none;">
          <div class="text-white mb-4 bg-success rounded p-3 text-center">
            <b>Thanks for Adding a New Post</b>
            <br />Refreshing Page in 5 Seconds
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// We can the Axios Methode and get the AccessToken from LocalStorage
import ApiResult from "@/SubClasses/ApiResult.js";

// Get BlogId from the URL
var BlogID = window.location.href.split("/")[4];
var AccessToken = localStorage.getItem("AccessToken");
var AccessTokenString = "?access_token=" + AccessToken;
var UserPostsLink =
  "https://www.googleapis.com/blogger/v3/blogs/" +
  BlogID +
  "/posts" +
  AccessTokenString;

var UserOnePostLink =
  "https://www.googleapis.com/blogger/v3/blogs/" + BlogID + "/posts/";

export default {
  name: "Posts",
  components: {
  },
  data() {
    return { Posts: {} };
  },
  methods: {
    GetPosts: function() {
      ApiResult.ApplyREST("GET", UserPostsLink, null).then(Result => {
        this.Posts = Result.data["items"].sort(function(a, b) {
          return b.id - a.id;
        });
      });
    },
    // With Delete we call first an Alert for Confirmation then we can ApplyREST if it's ok    
    // After it's done we Redirect in 5 Seconds, becuase API needs time to get refreshed on the Server
    // So if we refresh direclty we MIGHT not get the Result immediately          
    DeletePost: function(KEY) {
      this.$confirm("Are you sure?").then(() => {
        ApiResult.ApplyREST(
          "DELETE",
          UserOnePostLink + KEY + AccessTokenString,
          null
        ).then();
        this.$fire({
          title: "Done",
          text: "Thanks for Adding a New Post .. Refreshing in 5 Seconds",
          type: "success"
        }).then(
          setTimeout(function() {
            window.location.href = "/Posts/" + BlogID;
          }, 5000)
        );
      });
    }
  },
  mounted() {
    this.GetPosts();
  }
};
</script>

<style scoped></style>
