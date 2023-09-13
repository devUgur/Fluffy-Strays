<template>
  <div id="fluffy-strays-blog-component">
    <div class="container">
      <div class="title">
        <h1> der Fluffy Strays Blog</h1>
        <p>neues aus dem Leben der flauschigen Streuner</p>
      </div>
      <div class="blog-list">
        <div class="list-item blog" v-for="blog in blogs">
          <div class="image">
            <img :src="require(`@/assets/canva/blog/${blog.filename}`)" alt="Blog Image">
          </div>
          <div class="content">
            <p class="title">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae obcaecati perferendis tempora unde vel voluptatem.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, corporis deserunt dolorem doloremque
              id in minima odio possimus suscipit unde? Dicta earum id nemo pariatur quaerat. Ducimus explicabo iste
              veritatis.
            </p>
            <router-link :to="blog.to">Erfahren Sie mehr</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBlogComponent",
  data(){
    return{
      blogs: [
        { title: '', filename:'blog01.png', descr: '', to: '' },
        { title: '', filename:'blog02.png', descr: '', to: '' },
        { title: '', filename:'blog04.png', descr: '', to: '' },
        { title: '', filename:'blog05.png', descr: '', to: '' },
        { title: '', filename:'blog06.png', descr: '', to: '' },
        { title: '', filename:'blog08.png', descr: '', to: '' },
      ]
    }
  }
}
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  place-items: center;
  padding-bottom: var(--home-vertical-padding);
}
.container > .title{
  text-align: center;
  padding-bottom: 50px;
}
.title p{
  font-weight: bold;
  margin: 0 auto;
  max-width: 300px;
  font-size: 20px;
  font-family: Indie, sans-serif;
}

.blog-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  max-width: 1260px;

}

.list-item{
  border-radius: 5px;
  overflow: hidden;
  background-color: #e1e1e1;
  transition: box-shadow 0.5s;
  border: 3px solid rgb(220,220,220);
  max-width: calc(300px - 16px);
}
.list-item:hover{
  box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
}
.image{
  height: 200px;
  width: 300px;
  overflow: hidden;
}

.image img{
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease-in-out;
}

.list-item:hover .image img{
  transform: scale(1.1);
}

.content{
  width: 260px;
  padding: 20px;
  background-color: white;

}

p.title{
  font-weight: bold;
}
.content p{
  margin-bottom: 15px;
}
</style>