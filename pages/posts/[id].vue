<script setup>
const route = useRoute();
const documentId=route.params.id
const { findOne } = useStrapi()
const response = await findOne('blogs',documentId)
const post = response.data


</script>

<template>
  <h1>欢迎来到 Nuxt 小 Demo ，本页的 documentId：{{documentId}}</h1>
  <div>
    <h2>页面标题：{{post.title}}</h2>
    <p>这里是页面的主要内容：{{post.content}}</p>
  </div>
</template>