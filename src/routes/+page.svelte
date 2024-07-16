<script context="module">
  import configuration from "$lib/config";
  import Background from "$lib/components/Background.svelte";
  import Avatar from "$lib/components/Avatar.svelte";
  import Contact from "$lib/components/Contact.svelte";
  import Titles from "$lib/components/Titles.svelte";
  import Skills from "$lib/components/Skills.svelte";
  import Socials from "$lib/components/Socials.svelte";
  import Posts from "$lib/components/Posts.svelte";

  let { personal, socials } = configuration;
</script>

<svelte:head>
  <title>{personal.description}</title>
  <!-- description meta header -->
  <meta name="description" content={personal.bio} />
</svelte:head>

<Background>
  <Avatar />
  <Titles />
  <Socials />
  {#if socials.medium}
    <Posts />
  {/if}
  <Skills />
  <Contact />
</Background>

<style>
</style>
