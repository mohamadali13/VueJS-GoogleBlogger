<template>
  <section id="team" class="pb-5">
    <div class="container">
      <h5 class="section-title h1">OUR TEAM</h5>
      <div class="row justify-content-md-center">
        <!-- Team member -->
        <div class="col-xs-3">
          <div class="image-flip">
            <div class="mainflip flip-0">
              <div class="frontside">
                <div class="card">
                  <div class="card-body text-center">
                    <p>
                      <img class="img-fluid" src="@/assets/sven.jpg" alt="card image" />
                    </p>
                    <h4 class="card-title">Sven Redlich</h4>
                    <span class="card-text font-weight-bold">E-Mail-Adresse</span>                                        
                    <br/>
                    <span class="card-text">s75830@beuth-hochschule.de</span>                       
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- ./Team member -->
        <!-- Team member -->
        <div class="col-xs-2">
          <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
            <div class="mainflip">
              <div class="frontside">
                <div class="card">
                  <div class="card-body text-center">
                    <p>
                      <img class="img-fluid" src="@/assets/rami.jpg" alt="card image" />
                    </p>
                    <h4 class="card-title">Mohamad Rami Eita</h4>
                    <span class="card-text font-weight-bold">E-Mail-Adresse</span>                                        
                    <br/>
                    <span class="card-text">s76042@beuth-hochschule.de</span>                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- ./Team member -->
        <!-- Team member -->
        <div class="col-xs-2">
          <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
            <div class="mainflip">
              <div class="frontside">
                <div class="card">
                  <div class="card-body text-center">
                    <p>
                      <img class="img-fluid" src="@/assets/anas.jpg" alt="card image" />
                    </p>
                    <h4 class="card-title">Anas Alhakim</h4>
                    <span class="card-text font-weight-bold">E-Mail-Adresse</span>                                        
                    <br/>
                    <span class="card-text">s84981@beuth-hochschule.de.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- ./Team member -->
        <!-- Team member -->
        <div class="col-xs-2">
          <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
            <div class="mainflip">
              <div class="frontside">
                <div class="card">
                  <div class="card-body text-center">
                    <p>
                      <img class="img-fluid" src="@/assets/ali.jpg" alt="card image" />
                    </p>
                    <h4 class="card-title">Mohamad Ali</h4>
                    <span class="card-text font-weight-bold">E-Mail-Adresse</span>                                        
                    <br/>
                    <span class="card-text">s70997@beuth-hochschule.de</span>                       
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Team -->
</template>
<style scoped>
*{
    color:black;
}
.section{
display: flex;
}

.titel{
    text-align: center;
}

@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
#team {
    background: rgb(250, 250, 250) !important;
}

.btn-primary:hover,
.btn-primary:focus {
    background-color: #108d6f;
    border-color: #108d6f;
    box-shadow: none;
    outline: none;
}

.btn-primary {
    color: #fff;
    background-color: #007b5e;
    border-color: #007b5e;
}

section {
    padding: 60px 0;
}

section .section-title {
    text-align: center;
    color: #007b5e;
    margin-bottom: 50px;
    text-transform: uppercase;
}

#team .card {
    border: none;
    background: #ffffff;
}



.mainflip {
    -webkit-transition: 1s;
    -webkit-transform-style: preserve-3d;
    -ms-transition: 1s;
    -moz-transition: 1s;
    -moz-transform: perspective(1000px);
    -moz-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    transition: 1s;
    transform-style: preserve-3d;
    position: relative;
}

.frontside {
    position: relative;
    -webkit-transform: rotateY(0deg);
    -ms-transform: rotateY(0deg);
    z-index: 2;
    margin-bottom: 30px;
}

.backside {
    position: absolute;
    top: 0;
    left: 0;
    background: white;
    -webkit-transform: rotateY(-180deg);
    -moz-transform: rotateY(-180deg);
    -o-transform: rotateY(-180deg);
    -ms-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
    -webkit-box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
    -moz-box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
    box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
}

.frontside,
.backside {
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transition: 1s;
    -webkit-transform-style: preserve-3d;
    -moz-transition: 1s;
    -moz-transform-style: preserve-3d;
    -o-transition: 1s;
    -o-transform-style: preserve-3d;
    -ms-transition: 1s;
    -ms-transform-style: preserve-3d;
    transition: 1s;
    transform-style: preserve-3d;
}

.frontside .card,
.backside .card {
    min-height: 312px;
}

.backside .card a {
    font-size: 18px;
    color: #007b5e !important;
}

.frontside .card .card-title,
.backside .card .card-title {
    color: #007b5e !important;
}

.frontside .card .card-body img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
}
</style>
