<script>
    import configuration from "$lib/config";

    let socials = configuration.socials;
    let secondaryColor = configuration.colors.secondary;
</script>

<section class="socials">
    {#each Object.entries(socials) as [socialName, socialLink]}
        <a href={socialLink}>
            <img
                src={`./node_modules/super-tiny-icons/images/svg/${socialName}.svg`} 
                alt={socialName}
                style={`fill: ${secondaryColor}`}
                height="40"
                width="40"
            />
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
        gap: 10px;
    }

    img {
        filter: grayscale(1);
    }
</style>