<template>
  <div id="one-blog-view">


    <div class="container">
      <TitleComponent :title="'Fluffy Strays Blog'"></TitleComponent>
      <div class="content" v-if="_blog">
        <div class="image">
          <img :src="require('@/assets/canva/blog/' + _blog.filename)" alt="">
        </div>
        <div class="text">
          <div class="top">
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolores hic ipsam neque possimus quia
              quibusdam repellat similique vero voluptas!
            </h3>
            <div>Veröffentlicht am [Datum]</div>
          </div>
          <p class="bottom">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, delectus dolor eum facilis ipsum
            minima? Architecto asperiores blanditiis consequuntur dolorum ea eius error et facilis fugiat impedit iste
            magni pariatur quasi quibusdam quisquam, quos, soluta suscipit voluptas. A debitis dolorum et
            exercitationem, facilis fugit nam voluptates! Accusantium adipisci aperiam architecto asperiores autem
            commodi cum doloribus facere ipsa labore laboriosam, maiores modi, nesciunt perspiciatis quasi quisquam quos
            rerum totam velit voluptas voluptate voluptates voluptatibus. Commodi consequatur corporis, eius id impedit
            molestiae nihil odit placeat possimus quam. A ab commodi dignissimos doloremque dolores, ducimus hic
            mollitia nisi soluta suscipit unde, voluptatibus voluptatum.
          </p>
        </div>
      </div>
      <div class="content" v-if="_blog">
        <div class="text">
          <p class="bottom">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, delectus dolor eum facilis ipsum
            minima? Architecto asperiores blanditiis consequuntur dolorum ea eius error et facilis fugiat impedit iste
            magni pariatur quasi quibusdam quisquam, quos, soluta suscipit voluptas. A debitis dolorum et
            exercitationem, facilis fugit nam voluptates! Accusantium adipisci aperiam architecto asperiores autem
            commodi cum doloribus facere ipsa labore laboriosam, maiores modi, nesciunt perspiciatis quasi quisquam quos
            rerum totam velit voluptas voluptate voluptates voluptatibus. Commodi consequatur corporis, eius id impedit
            molestiae nihil odit placeat possimus quam. A ab commodi dignissimos doloremque dolores, ducimus hic
            mollitia nisi soluta suscipit unde, voluptatibus voluptatum.
          </p>
        </div>
        <div class="image">
          <img src="../../assets/flaticons/img.png" alt="">
        </div>
      </div>
      <div class="content" v-if="_blog">
        <div class="image">
          <img src="../../assets/flaticons/img.png" alt="">
        </div>
        <div class="text">
          <p class="bottom">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, delectus dolor eum facilis ipsum
            minima? Architecto asperiores blanditiis consequuntur dolorum ea eius error et facilis fugiat impedit iste
            magni pariatur quasi quibusdam quisquam, quos, soluta suscipit voluptas. A debitis dolorum et
            exercitationem, facilis fugit nam voluptates! Accusantium adipisci aperiam architecto asperiores autem
            commodi cum doloribus facere ipsa labore laboriosam, maiores modi, nesciunt perspiciatis quasi quisquam quos
            rerum totam velit voluptas voluptate voluptates voluptatibus. Commodi consequatur corporis, eius id impedit
            molestiae nihil odit placeat possimus quam. A ab commodi dignissimos doloremque dolores, ducimus hic
            mollitia nisi soluta suscipit unde, voluptatibus voluptatum.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleComponent from "@/components/title/title.component.vue";
export default {
  name: "OneBlogView",
  props: ['blog'],
  components: {
    TitleComponent
  },
  data(){
    return {
      _blog: null,
    }
  },
  mounted() {
    const blogId = this.$route.params.id;
    if(this.blog){
      this._blog = this.blog;
    }
    else if(this.$route.params && this.$route.params.id){
      let blogs = this.$store.getters['blog/list'];
      this._blog = blogs.find(blog => blog._id === this.$route.params.id);
      console.log(this._blog)
    }
  }
}
</script>

<style scoped>
#one-blog-view{}

.container{
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 0 auto;
  max-width: 1200px;
  padding: 100px 30px;
}

.content{
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

.content:nth-child(2n) {
  flex-wrap: wrap-reverse !important; /* Nur das zweite .content-Element wird umgekehrt */
}

.image{
  flex: 1 1 300px;
  background-color: lightgrey;
  display: flex;
  place-items: center;
  justify-content: center;
  max-width: 400px;
  height: 250px;
}

img{
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.text .top{
  display: flex;
  gap: 30px;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
}

.content .text{
  flex: 1 1 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}

.content:nth-child(2) .text{

}

.text .top h3{
  flex: 1 1 400px;
  max-width: 550px;
}
</style>