<script>
  import configuration from "$lib/config";

  let avatarImage = configuration.assets.image;
</script>

<img
  src={avatarImage}
  alt="avatar"
  width="200"
  height="200"
  fetchpriority="high"
/>

<style>
  img {
    border: 2px solid currentColor;
    border-radius: 50%;
    margin: 3% 0% 1% 5%;
    object-fit: cover;
    object-position: center;
  }

  /** Mobile */
  @media (max-width: 768px) {
    img {
      width: 150px;
      height: 150px;
      margin: 15% 0% 1% 5%;
    }
  }
</style>
