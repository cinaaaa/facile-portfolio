<script>
  import configuration from "$lib/config";

  let { bio } = configuration.personal;
  let secondaryColor = configuration.colors.secondary;
</script>

<section style={`color: ${secondaryColor}`}>
  <h3>{bio}</h3>
</section>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap");

  h3 {
    color: currentColor;
    font-family: "Poppins", sans-serif;
    font-size: 30px;
    margin: 0px;
    margin-left: 5%;
    line-height: 90%;
    margin-top: 30px;
  }

  /** Mobile */
  @media (max-width: 768px) {
    section {
      margin-top: 10%;
    }

    h1 {
      font-size: 80px;
    }
  }
</style>
