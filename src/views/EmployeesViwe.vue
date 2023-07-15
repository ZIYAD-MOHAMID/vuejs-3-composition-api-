<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'

const newYears = '1 Jan 2024'
const RemainingDays = ref('')
const RemainingHours = ref('')
const RemainingMinutes = ref('')
const RemainingSeconds = ref('')

function setTime(value) {
  return value >= 10 ? value.toString() : `0${value}`
}
setInterval(() => {
  // function countDown() {
  const newYearsDate = new Date(newYears)
  const currentDate = new Date()

  const totalSeconds = (newYearsDate.getTime() - currentDate.getTime()) / 1000

  const days = Math.floor(totalSeconds / 3600 / 24)
  const hours = Math.floor(totalSeconds / 3600) % 24
  const minutes = Math.floor(totalSeconds / 60) % 60
  const seconds = Math.floor(totalSeconds) % 60

  RemainingDays.value = setTime(days)
  RemainingHours.value = setTime(hours)
  RemainingMinutes.value = setTime(minutes)
  RemainingSeconds.value = setTime(seconds)
  // }
}, 1000)

const startFromTop = () => {
  window.scrollTo({
    top: 0
  })
}
</script>

<template>
  <div class="employees">
    <div class="start">
      <div class="container">
        <h2>Lorem, ipsum dolor sit amet consectetur adipisicing</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci temporibus quaerat odio
          repellendus qui
        </p>
        <div class="mian">
          <div class="box">
            <p>Integrated</p>
            <p>8</p>
          </div>
          <div class="box">
            <p>All</p>
            <p>29,581</p>
          </div>
          <div class="box">
            <p>Volume</p>
            <p>$ $85,791,830</p>
          </div>
          <div class="box">
            <p>Total</p>
            <p>$ 214,506,061</p>
          </div>
        </div>
      </div>
    </div>
    <div class="t-slid">
      <div class="container slide carousel" data-bs-ride="true" id="carouselExampleRide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="info">
              <div class="img">
                <img
                  src="../assets/img/testimonials/client-1.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="insid-info">
                <h3>Patrick Muriungi</h3>
                <p>CEO & Founder</p>
                <div class="ratings p-1">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
            </div>
            <p>
              <i class="fas fa-quote-left"></i>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aut consequatur illo
              animi optio exercitationem doloribus eligendi iusto atque repudiandae. Distinctio.
              <i class="fas fa-quote-right"></i>
            </p>
          </div>
          <div class="carousel-item">
            <div class="info">
              <div class="img">
                <img
                  src="../assets/img/testimonials/client-2.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="insid-info">
                <h3>Joy Marete</h3>
                <p>Finance Manager</p>
                <div class="ratings p-1">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
            </div>
            <p>
              <i class="fas fa-quote-left"></i>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aut consequatur illo
              animi optio exercitationem doloribus eligendi iusto atque repudiandae. Distinctio.
              <i class="fas fa-quote-right"></i>
            </p>
          </div>
          <div class="carousel-item">
            <div class="info">
              <div class="img">
                <img
                  src="../assets/img/testimonials/client-3.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="insid-info">
                <h3>ClaireBelle Zawadi</h3>
                <p>Global Brand Manager</p>
                <div class="ratings p-1">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
            </div>
            <p>
              <i class="fas fa-quote-left"></i>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aut consequatur illo
              animi optio exercitationem doloribus eligendi iusto atque repudiandae. Distinctio.
              <i class="fas fa-quote-right"></i>
            </p>
          </div>
          <div class="carousel-item">
            <div class="info">
              <div class="img">
                <img
                  src="../assets/img/testimonials/client-4.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="insid-info">
                <h3>Uhuru Kenyatta</h3>
                <p>C.E.O & Founder</p>
                <div class="ratings p-1">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
            </div>
            <p>
              <i class="fas fa-quote-left"></i>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aut consequatur illo
              animi optio exercitationem doloribus eligendi iusto atque repudiandae. Distinctio.
              <i class="fas fa-quote-right"></i>
            </p>
          </div>
          <div class="carousel-item">
            <div class="info">
              <div class="img">
                <img
                  src="../assets/img/testimonials/client-5.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="insid-info">
                <h3>Matt Brandon</h3>
                <p>Freelancer</p>
                <div class="ratings p-1">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
            </div>
            <p>
              <i class="fas fa-quote-left"></i>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aut consequatur illo
              animi optio exercitationem doloribus eligendi iusto atque repudiandae. Distinctio.
              <i class="fas fa-quote-right"></i>
            </p>
          </div>
        </div>
        <div class="bot">
          <button
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide-to="0"
            aria-label="Slide 1"
            aria-current="true"
            class="active"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
      </div>
    </div>
    <div class="time">
      <div class="container">
        <p class="first">now you can watch the talent</p>
        <h2>year end conference</h2>
        <div class="mian">
          <p class="start-time">start in:</p>
          <p class="titl">{{ RemainingDays }}<span>days</span></p>
          <p class="titl">:{{ RemainingHours }}<span>hour</span></p>
          <p class="titl">:{{ RemainingMinutes }}<span>mins</span></p>
          <p class="titl">:{{ RemainingSeconds }}<span>secs</span></p>
        </div>
        <div class="derct">
          <div class="one">
            <i class="fas fa-calendar-days"></i>
            <p>05th - 09th february.2023</p>
          </div>
          <div class="one">
            <i class="fas fa-map"></i>
            <p>56/8, Dhanmondi, Dhaka - 1205</p>
          </div>
        </div>
        <div class="othr">
          <h4>Huge transaction in last week</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit velit, fuga
            quaerat doloribus. Sit distinctio recusandae veniam?
          </p>
          <router-link class="button-time" @click="startFromTop" to="/Contact"
            >Become a Member</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
