<script>
  import configuration from "$lib/config";

  let socials = configuration.socials;
  let userName = configuration.personal.firstName;
</script>

<section class="socials">
  {#each Object.entries(socials) as [socialName, socialLink]}
    <a href={socialLink} target="__blank" alt={userName + "'s " + socialName}>
      {socialName}
    </a>
  {/each}
</section>

<style>
  .socials {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 95%;
    margin: 2% 0% 0% 5%;
    column-gap: 5%;
    min-height: 70px;
  }

  .socials a {
    font-size: 3vw;
    color: black;
    text-decoration: none;
    text-transform: capitalize;
    font-family: "Poppins", sans-serif;
  }

  .socials a:hover {
    border-bottom: 6px solid black;
  }
</style>
