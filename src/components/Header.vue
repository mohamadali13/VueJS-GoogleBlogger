<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="/">
        <VueFontawesome icon="home primary" class="mr-3" size="1.5" />Google Blogger
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav mr-auto">
          <router-link v-for="Link in Links" :key="Link.Title" :to="Link.Link" class="nav-link text-white">{{ Link.Title }}</router-link>
        </div>
      </div>
      <span class="navbar-text">
        <button id="UserStatusButton" type="button" class="btn shadow-none" @click="GoogleSignIn">
          <VueFontawesome icon="sign-in primary" class="mr-3" size="1" />
          <span id="UserStatus"></span>
        </button>
      </span>
    </nav>
    <div class="container-fluid w-90 mt-3 mb-3">
      <div id="AnonymousContainer">
        <h4 class="text-white mb-4 bg-warning rounded p-3 text-center">You Must Sign in First</h4>
        <Landinpage />
      </div>
      <div id="LoggedInContainer">
        <h3 class="text-white mb-4 bg-info rounded p-3">
          <VueFontawesome icon="star" class="mr-3" size="1.7" />My Blogs
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import Landinpage from "@/components/Landinpage";

var LocalStorageUserName = localStorage.getItem("Username");

export default {
  components: {
    Landinpage
  },
  data() {
    return {
      Links: []
    };
  },
  methods: {
    GoogleSignIn: function() {
      // If User is not Signed in .. Then Apply Sign IN
      if (LocalStorageUserName == undefined) {
        this.$gAuth.signIn().then(GoogleUser => {
          // On Success STORE Values in Local-Storage and Refresh the Page
          this.isSignIn = this.$gAuth.isAuthorized;
          localStorage.setItem(
            "AccessToken",
            GoogleUser.getAuthResponse()["access_token"]
          );
          localStorage.setItem("Username", GoogleUser.getBasicProfile()["Bd"]);
          window.location.replace("/");
        });
      }
      // If User is Signed in .. Then Apply Sign OUT
      else {
        this.$gAuth.signOut().then(() => {
          this.isSignIn = this.$gAuth.isAuthorized;
          // On Success CLEAR Values from Local-Storage and Refresh the Page
          localStorage.clear();
          window.location.replace("/");
        });
      }
    },
    CheckUserStatus: function() {
      var LoggedInContainer = document.getElementById("LoggedInContainer");
      var AnonymousContainer = document.getElementById("AnonymousContainer");
      var UserStatus = document.getElementById("UserStatus");
      var UserStatusButton = document.getElementById("UserStatusButton");
      var CurrentClass = UserStatusButton.classList;
      UserStatus.innerText = LocalStorageUserName || "Sign in";

      // Show and Hide Divs based on User Status if Logged in or Not
      if (LocalStorageUserName == undefined) {
        UserStatusButton.setAttribute(
          "class",
          CurrentClass.value + " btn-info"
        );
        LoggedInContainer.setAttribute("style", "display:none;");
        AnonymousContainer.setAttribute("style", "display:block;");
      } else {
        UserStatusButton.setAttribute(
          "class",
          CurrentClass.value + " btn-danger"
        );
        LoggedInContainer.setAttribute("style", "display:block;");
        AnonymousContainer.setAttribute("style", "display:none;");
      }
    }
  },
  mounted() {
    this.CheckUserStatus();
  }
};
</script>

<style scoped></style>