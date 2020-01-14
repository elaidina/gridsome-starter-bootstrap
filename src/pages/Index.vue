<template>
  <Layout>
    <img class="greet-image" src="../../uploads/hello.svg" />
    <h1>BEAUTIFUL</h1>
    <h2 class="mb-4">Pictures from Europe</h2>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Pictures from Europe"
  }
};
</script>

<style>
.greet-image {
  display: block;
  margin: auto;
  width: 90%;
  max-width: 500px;
  padding-bottom: 50px;
}
</style>
