<script>
  import configuration from "$lib/config";

  let { skills } = configuration.personal;
  let skilks_list = Object.keys(skills);
</script>

<section class="skills">
  <h1>Skills</h1>
  {#each skilks_list as skillTitle}
    <div>
      <h4>
        {skillTitle}
      </h4>
      <ul>
        {#each skills[skillTitle] as skill}
          <li>{skill}</li>
        {/each}
      </ul>
    </div>
  {/each}
</section>

<style lang="scss">
  .skills {
    margin-top: 80px;
    margin-left: 5%;
    min-height: 600px;
  }

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 15vw;
    color: currentColor;
  }

  h4 {
    font-family: "Poppins", sans-serif;
    font-size: 5vw;
    color: currentColor;
  }

  div {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    column-gap: 60px;
    padding-bottom: 30px;
  }

  ul {
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    color: currentColor;
    display: flex;
    flex-flow: row wrap;
    column-gap: 3%;
    max-width: 50%;
    list-style: none;
  }

  ul li::before {
    content: "\2022"; /* Add content: \2022 is the CSS Code/unicode for a bullet */
    color: violet; /* Change the color */
    font-weight: bold; /* If you want it to be bold */
    display: inline-block; /* Needed to add space between the bullet and the text */
    width: 1em; /* Also needed for space (tweak if needed) */
    margin-left: -0.5em; /* Also needed for space (tweak if needed) */
  }

  /** Mobile */
  @media (max-width: 768px) {
    .skills {
      margin-top: 50px;
    }

    h1 {
      font-size: 80px;
    }

    div {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      column-gap: 60px;
      padding-bottom: 30px;
    }

    ul {
      font-family: "Poppins", sans-serif;
      font-size: 16px;
      color: currentColor;
      display: flex;
      flex-flow: row wrap;
      column-gap: 3%;
      max-width: 50%;
      list-style: none;
    }

    ul li::before {
      content: "\2022"; /* Add content: \2022 is the CSS Code/unicode for a bullet */
      color: violet; /* Change the color */
      font-weight: bold; /* If you want it to be bold */
      display: inline-block; /* Needed to add space between the bullet and the text */
      width: 15px; /* Also needed for space (tweak if needed) */
      margin-left: 5px; /* Also needed for space (tweak if needed) */
    }
  }
</style>
