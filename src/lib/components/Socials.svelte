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
    color: currentColor;
    font-size: 3vw;
    text-decoration: none;
    text-transform: capitalize;
    font-family: "Poppins", sans-serif;
    padding-bottom: 6px;
  }

  .socials a:hover {
    padding-bottom: 0;
    border-bottom: 6px solid violet;
  }

  /** Mobile */
  @media (max-width: 768px) {
    .socials {
      margin: 10% 0% 0% 5%;
    }

    .socials a {
      font-size: 20px;
    }
  }
</style>
