<script>
  import configuration from "$lib/config";

  let primaryColor = configuration.colors.primary;
  let secondaryColor = configuration.colors.secondary;
</script>

<section style={`color: ${secondaryColor}; background-color: ${primaryColor}`}>
  <slot />
</section>

<style>
  :global(*) {
    margin: 0px;
    padding: 0px;
    scroll-behavior: smooth;
  }

  section {
    min-height: 100vh;
    width: 100vw;
  }
</style>
