<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const startFromTop = () => {
  window.scrollTo({
    top: 0
  })
}
const scY = ref(false)
window.onscroll = function () {
  if (window.scrollY >= 600) {
    scY.value = true
  } else {
    scY.value = false
  }
}
</script>

<template>
  <div>
    <div class="header sticky-top">
      <div class="container">
        <div class="togather">
          <RouterLink to="/" class="a logo"> ZIZO </RouterLink>
        </div>
        <ul class="mainnav">
          <li>
            <RouterLink to="/home" @click="startFromTop" class="a h">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/services" @click="startFromTop" class="a h">Services</RouterLink>
          </li>
          <li>
            <RouterLink to="/grop" @click="startFromTop" class="a h">About Grop</RouterLink>
          </li>
          <li>
            <RouterLink to="/employees" @click="startFromTop" class="a h">Employees</RouterLink>
          </li>
          <li>
            <RouterLink to="/Contact" @click="startFromTop" class="a h o">Contact</RouterLink>
          </li>
        </ul>
      </div>
    </div>

    <RouterView />
    <transition>
      <button v-if="scY" @click="startFromTop" class="up" title="Go To Top">UP</button>
    </transition>

    <footer>
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 one c">
            <h1>ZiZo</h1>
            <P>A108 Adam Street</P>
            <P>New York, Ny 549070</P>
            <P>United States</P>
            <div class="phone"><span>Phone:</span> +20 1157 5013 06</div>
            <div class="email"><span>Email:</span> info@example.com</div>
          </div>
          <div class="col-lg-3 col-md-6 two c">
            <h5>Useful Links</h5>
            <div class="link">
              <RouterLink to="/" @click="startFromTop"
                ><i class="fas fa-globe i"></i>Home</RouterLink
              >
              <RouterLink to="/services" @click="startFromTop"
                ><i class="fas fa-globe i"></i>services</RouterLink
              >
              <RouterLink to="/grop" @click="startFromTop"
                ><i class="fas fa-globe i"></i>About Grop</RouterLink
              >
              <RouterLink to="/employees" @click="startFromTop"
                ><i class="fas fa-globe i"></i>Employees</RouterLink
              >
              <RouterLink to="/Contact" @click="startFromTop"
                ><i class="fas fa-globe i"></i>Contact</RouterLink
              >
            </div>
          </div>
          <div class="col-lg-3 col-md-6 three c">
            <h5>Our Services</h5>
            <div class="manu">
              <p><i class="fas fa-bullseye i"></i>Web Design</p>
              <p><i class="fas fa-bullseye i"></i>Web Development</p>
              <p><i class="fas fa-bullseye i"></i>Product Management</p>
              <p><i class="fas fa-bullseye i"></i>Marketing</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 faur c">
            <h5>Our Social Networks</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, libero.</p>
            <ul class="social">
              <li>
                <a href="https://www.facebook.com/" class="facbook">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a
                  class="twitter"
                  href="https://www.linkedin.com/in/ziyad-mohamed-frontend-web-developer-666a51276/"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a class="youtube" href="https://www.upwork.com/freelancers/~01d01056832a4c28b6">
                  <i class="fab fa-pushed"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

    <div class="end">
      <p class="copyright">Made With Love By ZiZo</p>
    </div>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
