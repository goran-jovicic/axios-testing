<template>
  <div>
    <div>
    {{ getFormattedDate(date) }}
    </div>
    <input type="text" placeholder="Search.." v-model="term">
    <ul v-for="(post,index) in filteredArr" :key="index">
      <li>{{ `Post title: ${post.title}` }}</li>
      <li>{{ `Post body : ${post.body}` }}</li> 
    </ul>
  </div>
</template>

<script>
import { postService } from '@/services/PostService'
import { mixin4 } from '../mixins/mixin';

export default {
  mixins: [mixin4],
  data () {
    return {
      posts : [],
      post: {
        title:'',
        body:''
      },
      term: '',
    }
  },

  created () {
    postService.getPosts()
      .then(response => {
      this.posts = response.data
      }).catch(e => {
      console.log(e)
      })
  },

  computed : {
		filteredArr () {
			return this.posts.filter(post => {
				return post.title.toLowerCase().includes(this.term.toLowerCase())
			})
		}
	}
}
</script>

<style>
li {
  list-style: none;
}
</style>
