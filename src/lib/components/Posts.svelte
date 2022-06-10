<script>
  import configuration from "$lib/config";
  import { onMount } from "svelte";
  import Card from "./Card.svelte";

  let secondaryColor = configuration.colors.secondary;

  let mediumPosts;
  let mediumPostsLoading = false;
  let mediumPostsLoadingError = null;

  // fetch sinafarhadi posts from medium
  function fetchPosts() {
    return fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40sinafarhadi"
    )
      .then((response) => response.json())
      .then((data) => data.items);
  }

  function resetLoadings() {
    mediumPostsLoading = false;
    mediumPostsLoadingError = null;
  }

  onMount(() => {
    mediumPostsLoading = true;
    fetchPosts()
      .then((posts) => {
        mediumPosts = posts;
        resetLoadings();
      })
      .catch(() => {
        mediumPostsLoading = false;
        mediumPostsLoadingError = "Error fetching posts";
      });
  });
</script>

<section class="posts" style={`color: ${secondaryColor}`}>
  <h1>Posts</h1>
  {#if mediumPosts}
    <div>
      {#each mediumPosts as post}
        <Card {post} />
      {/each}
    </div>
  {/if}
  {#if mediumPostsLoading}
    <p>Loading posts...</p>
  {/if}
  {#if mediumPostsLoadingError}
    <p>{mediumPostsLoadingError}</p>
  {/if}
</section>

<style lang="scss">
  .posts {
    margin-top: 7vh;
    margin-left: 5%;
  }

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 15vw;
  }

  div {
    width: 90vw;
    display: flex;
    flex-flow: row wrap;
    column-gap: 3%;
    row-gap: 30px;
    padding-bottom: 100px;
    justify-content: space-between;
  }
</style>
