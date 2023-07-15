<script setup>
import { ref } from 'vue'

const a = ref('2')
const drop = ref('one')
</script>

<template>
  <div class="grop">
    <div class="landing-grop">
      <div class="container">
        <div class="info">
          <div class="title-landing">
            <h2>The most popular questions <span>about Grop</span></h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta omnis maxime rerum.
              Fuga voluptates asperiores ut fugiat.
            </p>
          </div>
          <div class="drops-grop">
            <transition name="fade">
              <div
                class="min-drob"
                @click="drop = 'one'"
                :class="[drop === 'one' ? 'tarn-down' : '']"
              >
                <div class="blok">
                  <h4>01 - Lorem ipsum consectetur adipisicing ?</h4>
                  <i class="fas fa-angles-down icn-one"></i>
                </div>
                <div class="noner" v-if="drop == 'one'">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque saepe ut dolores
                    deserunt, expedita cupiditate quod commodi atque nemo exercitationem
                    dignissimos?
                  </p>
                </div>
              </div>
            </transition>
            <div
              class="min-drob"
              @click="drop = 'two'"
              :class="[drop === 'two' ? 'tarn-down' : '']"
            >
              <div class="blok">
                <h4>02 - Lorem ipsum consectetur adipisicing ?</h4>
                <i class="fas fa-angles-down icn-one"></i>
              </div>
              <div class="noner" v-if="drop == 'two'">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque saepe ut dolores
                  deserunt, expedita cupiditate quod commodi atque nemo exercitationem dignissimos?
                </p>
              </div>
            </div>
            <div
              class="min-drob"
              @click="drop = 'three'"
              :class="[drop === 'three' ? 'tarn-down' : '']"
            >
              <div class="blok">
                <h4>03 - Lorem ipsum consectetur adipisicing ?</h4>
                <i class="fas fa-angles-down icn-one"></i>
              </div>
              <div class="noner" v-if="drop == 'three'">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque saepe ut dolores
                  deserunt, expedita cupiditate quod commodi atque nemo exercitationem dignissimos?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="img">
          <img src="../assets/img/hero-img.png" alt="" />
        </div>
      </div>
    </div>
    <div class="team">
      <div class="h-team">
        <h2>Our team</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, soluta.</p>
      </div>
      <div class="container">
        <div class="box">
          <div class="img">
            <img src="../assets/img/testimonials/client-1.jpg" alt="" />
          </div>
          <h3>Walter White</h3>
          <p>front-end</p>
          <div class="sochal">
            <a href="https://www.youtube.com/">
              <i class="fab fa-youtube"></i>
            </a>
            <a href="https://www.linkedin.com/in/ziyad-mohamed-frontend-web-developer-666a51276/">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://twitter.com/">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com/">
              <i class="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
        <div class="box">
          <div class="img">
            <img src="../assets/img/testimonials/client-2.jpg" alt="" />
          </div>
          <h3>Sarah Jhinson</h3>
          <p>Marketing</p>
          <div class="sochal">
            <a href="https://www.youtube.com/">
              <i class="fab fa-youtube"></i>
            </a>
            <a href="https://www.linkedin.com/in/ziyad-mohamed-frontend-web-developer-666a51276/">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://twitter.com/">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com/">
              <i class="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
        <div class="box">
          <div class="img">
            <img src="../assets/img/testimonials/client-4.jpg" alt="" />
          </div>
          <h3>William .A</h3>
          <p>Back-End</p>
          <div class="sochal">
            <a href="https://www.youtube.com/">
              <i class="fab fa-youtube"></i>
            </a>
            <a href="https://www.linkedin.com/in/ziyad-mohamed-frontend-web-developer-666a51276/">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://twitter.com/">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com/">
              <i class="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
        <div class="box">
          <div class="img">
            <img src="../assets/img/testimonials/client-3.jpg" alt="" />
          </div>
          <h3>Amanda .J</h3>
          <p>Content</p>
          <div class="sochal">
            <a href="https://www.youtube.com/">
              <i class="fab fa-youtube"></i>
            </a>
            <a href="https://www.linkedin.com/in/ziyad-mohamed-frontend-web-developer-666a51276/">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://twitter.com/">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com/">
              <i class="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="portfolio">
      <div class="h-pro">
        <h2>Portfolio</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, soluta.</p>
      </div>
      <div class="romote-it">
        <ul>
          <li @click="a = '2'" :class="[a === '2' ? 'active-for-glro' : '']">App</li>
          <li @click="a = '3'" :class="[a === '3' ? 'active-for-glro' : '']">Product</li>
          <li @click="a = '4'" :class="[a === '4' ? 'active-for-glro' : '']">Branding</li>
          <li @click="a = '5'" :class="[a === '5' ? 'active-for-glro' : '']">Books</li>
        </ul>
      </div>
      <div class="container">
        <div class="box app" v-if="a === '2'">
          <div class="img">
            <img src="../assets/img/portfolio/portfolio-3.jpg" alt="" />
          </div>
          <h4>App - 1</h4>
          <p>Lorem ipsum dolor sit consectetur</p>
        </div>
        <div class="box product" v-if="a === '3'">
          <div class="img">
            <img src="../assets/img/portfolio/portfolio-9.jpg" alt="" />
          </div>
          <h4>Product - 1</h4>
          <p>Lorem ipsum dolor sit consectetur</p>
        </div>
        <div class="box branding" v-if="a === '4'">
          <div class="img">
            <img src="../assets/img/portfolio/portfolio-1.jpg" alt="" />
          </div>
          <h4>Branding - 1</h4>
          <p>Lorem ipsum dolor sit consectetur</p>
        </div>
        <div class="box books" v-if="a === '5'">
          <div class="img">
            <img
              src="../assets/img/arts/open-book-with-white-background_23-2148882765.avif"
              alt=""
            />
          </div>
          <h4>Books - 1</h4>
          <p>Lorem ipsum dolor sit consectetur</p>
        </div>
        <div class="box app" v-if="a === '2'">
          <div class="img">
            <img src="../assets/img/portfolio/portfolio-4.jpg" alt="" />
          </div>
          <h4>App - 2</h4>
          <p>Lorem ipsum dolor sit consectetur</p>
        </div>
        <div class="box product" v-if="a === '3'">
          <div class="img">
            <img src="../assets/img/portfolio/portfolio-2.jpg" alt="" />
          </div>
          <h4>Product - 2</h4>
          <p>Lorem ipsum dolor sit consectetur</p>
        </div>
        <div class="box branding" v-if="a === '4'">
          <div class="img">
            <img src="../assets/img/portfolio/portfolio-7.jpg" alt="" />
          </div>
          <h4>Branding - 2</h4>
          <p>Lorem ipsum dolor sit consectetur</p>
        </div>
        <div class="box books" v-if="a === '5'">
          <div class="img">
            <img src="../assets/img/arts/photo-1589998059171-988d887df646.jpg" alt="" />
          </div>
          <h4>Books - 2</h4>
          <p>Lorem ipsum dolor sit consectetur</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
