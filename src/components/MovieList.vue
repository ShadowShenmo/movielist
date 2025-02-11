<template>
  <div>
    <input v-model="searchQuery" placeholder="Search movies..." @input="filterMovies" />
    <div class="movie-list">
      <MovieItem v-for="movie in filteredMovies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<script>
import MovieItem from './MovieItem.vue';

export default {
  components: {
    MovieItem
  },
  data() {
    return {
      movies: [
        { id: 1, title: 'The Shawshank Redemption', year: '1994', poster: 'https://example.com/poster1.jpg' },
        { id: 2, title: 'The Godfather', year: '1972', poster: 'https://example.com/poster2.jpg' },
        { id: 3, title: 'Pulp Fiction', year: '1994', poster: 'https://example.com/poster3.jpg' }
      ],
      searchQuery: ''
    };
  },
  computed: {
    filteredMovies() {
      return this.movies.filter(movie =>
        movie.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    filterMovies() {
      // 触发搜索过滤
    }
  }
};
</script>

<style scoped>
.movie-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
