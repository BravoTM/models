<template>
    <div class="banner">
      <div class="burier"></div>
      <div class="slider" style="--quantity: 10">
        <div v-for="(image, index) in images" :key="index" class="item" :style="{ '--position': index + 1 }">
          <img :src="image" alt="images">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import dragon1 from './images/dragon_1.jpg';
import dragon2 from './images/dragon_2.jpg';
import dragon3 from './images/dragon_3.jpg';
import dragon4 from './images/dragon_4.jpg';
import dragon5 from './images/dragon_5.jpg';
import dragon6 from './images/dragon_6.jpg';
import dragon7 from './images/dragon_7.jpg';
import dragon8 from './images/dragon_8.jpg';
import dragon9 from './images/dragon_9.jpg';
import dragon10 from './images/dragon_10.jpg';


export default {
    data() {
      return {
        images: [
        dragon1,
        dragon2,
        dragon3,
        dragon4,
        dragon5,
        dragon6,
        dragon7,
        dragon8,
        dragon9,
        dragon10,
        ]
      }
    }
  }
  </script>


<style scoped>

    @import url('https://fonts.cdnfonts.com/css/ica-rubrik-black');
@import url('https://fonts.cdnfonts.com/css/poppins');

.banner{
    width: 100%;
    height: 200vh;
    text-align: center;
    overflow: hidden;
    position: relative;
}
.banner .slider{
    position: absolute;
    width: 100px;
    height: 150px;
    top: 10%;
    left: calc(50% - 100px);
    transform-style: preserve-3d;
    transform: perspective(1000px);
    animation: autoRun 20s linear infinite;
    z-index: 2;
}
@keyframes autoRun{
    from{
        transform: perspective(1000px) rotateX(1deg) rotateY(0deg);
    }to{
        transform: perspective(1000px) rotateX(1deg) rotateY(360deg);
    }
}

.banner .slider .item{
    position: absolute;
    inset: 0 0 0 0;
    transform: 
        rotateY(calc( (var(--position) - 1) * (360 / var(--quantity)) * 1deg))
        translateZ(350px);
}
/* Add burier styles */
  .banner .burier {
    position: absolute;
    top: 0;
    left: 50%;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
    transform: translateZ(-200px); /* move burier to the back */
    z-index: 1; /* ensure burier is behind the slider */
  }
  
.banner .slider .item img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media screen and (max-width: 1023px) {
    .banner .slider{
        width: 160px;
        height: 200px;
        left: calc(50% - 80px);
    }
    .banner .slider .item{
        transform: 
            rotateY(calc( (var(--position) - 1) * (360 / var(--quantity)) * 1deg))
            translateZ(300px);
    }
    
    
}
@media screen and (max-width: 767px) {
    .banner .slider{
        width: 100px;
        height: 150px;
        left: calc(50% - 50px);
    }
    .banner .slider .item{
        transform: 
            rotateY(calc( (var(--position) - 1) * (360 / var(--quantity)) * 1deg))
            translateZ(180px);
    }
    
}

</style>