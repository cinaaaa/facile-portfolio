<script>
  import configuration from "$lib/config";

  let { firstName, lastName } = configuration.personal;
  let secondaryColor = configuration.colors.secondary;
</script>

<section style={`color: ${secondaryColor}`}>
  <h1>{firstName}</h1>
  <h1>{lastName}</h1>
</section>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap");

  h1 {
    color: currentColor;
    font-family: "Poppins", sans-serif;
    font-size: 15vw;
    margin: 0px;
    margin-left: 5%;
    line-height: 90%;
  }
</style>
