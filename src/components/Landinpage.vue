<template>
  <div class="landing-page">
    <div class="container">
      <h2 class="titel">Was ist Blogger? Einfach erklärt</h2>
      <section class="section">
        <div class="container">
          <p>
            Bei der Webseite Blogger.com handelt es sich um einen Dienst von Google. Damit ist es jeder Person kostenlos möglich, einen eigenen Blog zu erstellen.
            Bei einem Blog handelt es sich um eine Art öffentliches Tagebuch einer Person. Ob Sie Bilder, Videos oder Texte veröffentlichen bleibt Ihnen überlassen.
          </p>
          <p>
            Damit andere Personen Zugriff auf Ihren Blog haben, erhalten Sie von Blogger Ihre eigene Internet-Adresse. Diese werden im Format "IhrBlog.blogspot.com" vergeben.
            Dank vorgegebener Grundstruktur müssen Sie keine HTML-Kenntnisse mitbringen, um den Blog zu betreiben.
          </p>
        </div>
      </section>
      <hr />
    </div>
    <team />
  </div>
</template>

<script>
// Nothing Amazing here .. Just an Intro
import Team from "@/components/Team";
export default {
  name: "Landinpage",
  components: {
    Team
  }
};
</script>

<style scoped src="@/assets/style/Team.css">
</style>



