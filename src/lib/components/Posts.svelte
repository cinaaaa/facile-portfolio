<script>
  import { onMount } from "svelte";
  import configuration from "$lib/config";
  import Card from "./Card.svelte";

  const loadingGifURL = configuration.assets.loadingGif;

  let secondaryColor = configuration.colors.secondary;
  let mediumUsername = configuration.socials.medium.split("@")[1];

  let mediumPosts;
  let mediumPostsLoading = false;
  let mediumPostsLoadingError = null;

  // fetch sinafarhadi posts from medium
  function fetchPosts() {
    return fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40" +
        mediumUsername
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
      .catch((error) => {
        mediumPostsLoadingError = error.message;
        resetLoadings();
      });
  });
</script>

<section class="posts" id="posts">
  <h1>Articles</h1>
  {#if mediumPosts}
    <div>
      {#each mediumPosts as post}
        <Card {post} />
      {/each}
    </div>
  {/if}
  {#if mediumPostsLoading}
    <img src={loadingGifURL} width="400px" height="100%" alt="loading-bean" />
  {/if}
  {#if mediumPostsLoadingError}
    <p>{mediumPostsLoadingError}</p>
  {/if}
</section>

<style lang="scss">
  .posts {
    margin-top: 80px;
    margin-left: 5%;
    min-height: 600px;
  }

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 15vw;
    color: currentColor;
  }

  div {
    width: 90vw;
    display: flex;
    flex-flow: row wrap;
    column-gap: 3%;
    row-gap: 30px;
    padding-bottom: 100px;
  }

  i {
    font-family: "Poppins", sans-serif;
    font-size: 5vw;
  }

  /** Mobile */
  @media (max-width: 768px) {
    .posts {
      margin-top: 50%;
    }

    h1 {
      font-size: 80px;
    }

    div {
      width: 90vw;
      display: flex;
      flex-flow: row wrap;
      column-gap: 3%;
      row-gap: 30px;
      padding-bottom: 100px;
    }
  }
</style>
