<script>
    import configuration from "$lib/config";

    let avatarImage = configuration.assets.image;
    let secondaryColor = configuration.colors.secondary;
</script>

<img 
    src={avatarImage}
    style={`color: ${secondaryColor}`}
    alt="avatar"
    width="180"
    height="180"
/>

<style>
    img {
        border: 2px solid currentColor;
        border-radius: 50%;
        margin: 3% 0% 4% 5%;
    }
</style>