<template>
  <div class="p-3 card bg-light text-dark mb-3">
    <div id="AddPostDiv">
      <input type="text" v-model="titlePost" class="form-control mb-2" placeholder="Enter a title" />
      <textarea name="Content" id cols="30" rows="10" v-model="contentPost" class="form-control" placeholder="Enter a content"></textarea>
      <br />
      <button id="SavePost" type="button" class="btn btn-success mr-1 shadow-none" @click="EditPost">
        <VueFontawesome icon="save" class="mr-2" size="1" />Update My Post
      </button>
    </div>
  </div>
</template>

<script>
import ApiResult from "@/SubClasses/ApiResult";
var BlogID = window.location.href.split("/")[4];
var PostID = window.location.href.split("/")[6];
var AccessToken = localStorage.getItem("AccessToken");
var AccessTokenString = "?access_token=" + AccessToken;
var UserEditPostLink =
  "https://www.googleapis.com/blogger/v3/blogs/" +
  BlogID +
  "/posts/" +
  PostID +
  AccessTokenString;

var jsonEditPost = {
  kind: "blogger#post",
  id: PostID,
  blog: {
    id: BlogID
  },
  title: "",
  content: ""
};
export default {
  name: "EditPost",
  data: () => ({
    titlePost: "",
    contentPost: ""
  }),
  methods: {
    GetPost: function() {
      ApiResult.ApplyREST("GET", UserEditPostLink, null).then(Result => {
        this.titlePost = Result["data"].title;
        this.contentPost = Result["data"].content;
      });
    },
    // With EDIT we call first an Alert for Success Message then we can ApplyREST
    // After it's done we Redirect in 5 Seconds, becuase API needs time to get refreshed on the Server
    // So if we refresh direclty we MIGHT not get the Result immediately       
    EditPost: function() {
      this.$fire({
        title: "Done",
        text: "Thanks for Editing the Post .. Refreshing in 5 Seconds",
        type: "success"
      }).then(
        setTimeout(function() {
          window.location.href = "/Posts/" + BlogID + "/Post/" + PostID;
        }, 5000)
      );
      jsonEditPost.title = this.titlePost;
      jsonEditPost.content = this.contentPost;
      ApiResult.ApplyREST(
        "PUT",
        UserEditPostLink,
        jsonEditPost
      ).then();
    }
  },
  mounted() {
    this.GetPost();
  }
};
</script>

<style scoped></style>
