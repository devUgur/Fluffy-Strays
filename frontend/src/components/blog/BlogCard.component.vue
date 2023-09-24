<template>
  <div id="blog-card-component" class="card" @mouseenter="onHover=true" @mouseleave="onHover=false">
    <div class="image">
      <img :src="require(`@/assets/canva/blog/${blog.filename}`)" alt="Blog Image">
    </div>
    <div class="content">
      <p class="item title">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae obcaecati perferendis tempora unde vel voluptatem.
      </p>
      <p class="item">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, corporis deserunt dolorem doloremque
        id in minima odio possimus suscipit unde? Dicta earum id nemo pariatur quaerat. Ducimus explicabo iste
        veritatis.
      </p>
      <div class="item visit">
        <transition name="slide-fade">
          <div class="blog-route" v-show="onHover">
            <router-link :to="'/blogs/'+blog._id" target="_blank">
              <div>weiterlesen</div>
              <img src="@/assets/flaticons/next-color-1-A.png">
            </router-link>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogCardComponent",
  props: ['blog'],
  data(){
    return {
      onHover: false,
    }
  },
}
</script>

<style scoped>
.card{
  border-radius: 5px;
  overflow: hidden;
  background-color: #e1e1e1;
  transition: box-shadow 0.5s;
  /*border: 3px solid rgb(220,220,220);*/
  max-width: calc(400px);
  box-shadow: var(--box-shadow-palette-1-A);
}
.card:hover{
  /*box-shadow: rgba(100, 100, 111, 0.5) 0 7px 29px 0;*/
}
.image{
  height: 200px;
  width: 300px;
  overflow: hidden;
}

.content{
  width: 260px;
  padding: 20px;
  background-color: white;
}
.content p{
  margin-bottom: 15px;
}

.content .item{
  margin-bottom: 15px;
}

p.title{
  font-weight: bold;
}

.image img{
  height: 100%;
  object-fit: cover;
  transition: transform 1s ease-in-out;
}

.card:hover .image img{
  transform: scale(1.1);
}

.visit{
  height: 20px;
  overflow: hidden;
}


.blog-route{
  text-align: center;
  transition: all 0.3s ease-out;
}


.blog-route a{
  display: flex;
  place-items: center;
  justify-content: center;
  text-decoration: none;
  color: var(--color-palette-1-D);
}
.blog-route a:hover{
  text-decoration: underline;
}




.blog-route a img{
  height: 16px;
  margin-left: 5px;
  transition: all 0.5s;
}
.blog-route a:hover img{
  margin-left: 10px;
}

.slide-fade-enter-active {
  /*transition: all 0.3s ease-out;*/
  /*transition: all 0.3s ease-out;*/
}

.slide-fade-leave-active {
  /*ransition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);*/
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>