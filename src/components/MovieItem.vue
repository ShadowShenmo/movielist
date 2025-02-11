<template>
  <div class="movie-item">
    <img :src="movie.poster" alt="Movie Poster" />
    <h3>{{ movie.title }}</h3>
    <p>{{ movie.year }}</p>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.movie-item {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  text-align: center;
}

.movie-item img {
  max-width: 100%;
  height: auto;
}
</style>