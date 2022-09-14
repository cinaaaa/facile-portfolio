<script context="module">
  import configuration from "$lib/config";
  import Background from "$lib/components/Background.svelte";
  import Avatar from "$lib/components/Avatar.svelte";
  import Titles from "$lib/components/Titles.svelte";
  import Socials from "$lib/components/Socials.svelte";
  import Posts from "$lib/components/Posts.svelte";

  let { personal, socials } = configuration;
</script>

<svelte:head>
  <title>
    {personal.firstName}
    {personal.lastName}
  </title>
  <!-- description meta header -->
  <meta name="description" content={personal.description} />
</svelte:head>

<Background>
  <Avatar />
  <Titles />
  <Socials />
  {#if socials.medium}
    <Posts />
  {/if}
</Background>

<style>
</style>
