<template>
  <div class="p-3 card bg-light text-dark mb-3">
    <div id="AddPostDiv">
      <input type="text" v-model="titlePost" class="form-control mb-2" placeholder="Enter a title" />
      <textarea name="Content" id cols="30" rows="10" v-model="contentPost" class="form-control" placeholder="Enter a content"></textarea>
      <br />
      <button id="SavePost" type="button" class="btn btn-success mr-1 shadow-none" @click="AddPost">
        <VueFontawesome icon="save" class="mr-2" size="1" />Save New Post
      </button>
    </div>
  </div>
</template>

<script>
// We can the Axios Methode and get the AccessToken from LocalStorage
import ApiResult from "@/SubClasses/ApiResult";

// Get BlogId from the URL
var BlogID = window.location.href.split("/")[4];
var AccessToken = localStorage.getItem("AccessToken");
var AccessTokenString = "?access_token=" + AccessToken;
var UserAddPostLink =
  "https://www.googleapis.com/blogger/v3/blogs/" + BlogID + "/posts/";

// Declare a JSON Data for later when we Update
var jsonAddPost = {
  kind: "blogger#post",
  blog: {
    id: BlogID
  },
  title: "",
  content: ""
};
export default {
  name: "AddPost",
  data: () => ({
    titlePost: "",
    contentPost: ""
  }),
  methods: {
    // With ADD we call first an Alert for Success Message then we can ApplyREST
    // After it's done we Redirect in 5 Seconds, becuase API needs time to get refreshed on the Server
    // So if we refresh direclty we MIGHT not get the Result immediately      
    AddPost: function() {
      this.$fire({
        title: "Done",
        text: "Thanks for Adding a New Post .. Refreshing in 5 Seconds",
        type: "success"
      }).then(
        setTimeout(function() {
          window.location.href = "/Posts/" + BlogID;
        }, 5000)
      );
      jsonAddPost.title = this.titlePost;
      jsonAddPost.content = this.contentPost;
      ApiResult.ApplyREST(
        "POST",
        UserAddPostLink + AccessTokenString,
        jsonAddPost
      ).then();
    }
  }
};
</script>

<style scoped></style>
