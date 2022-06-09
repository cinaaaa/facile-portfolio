<script>
  import configuration from "$lib/config";

  let primaryColor = configuration.colors.primary;
</script>

<section style={`color: ${primaryColor}`}>
  <slot />
</section>

<style>
  :global(*) {
    margin: 0px;
    padding: 0px;
  }

  section {
    background-color: currentColor;
    min-height: 100vh;
    width: 100vw;
  }
</style>
