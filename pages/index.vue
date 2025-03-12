<template>
    <div>
      <h3>文章列表</h3>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <NuxtLink :to="`/posts/${post.documentId}`">{{ post.title }}</NuxtLink>
        </li>
      </ul>
    </div>
</template>

<script setup>
const { find } = useStrapi()

const response = await find('blogs')
const posts = response.data

</script>
