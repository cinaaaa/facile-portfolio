<script>
  import configuration from "$lib/config";

  export let post;

  let secondaryColor = configuration.colors.secondary;
</script>

<a href={post.link} target="__blank">
  <div style={`color: ${secondaryColor}`}>
    <h1>{@html post.title}</h1>
    <p>{post.pubDate.split(" ")[0]}</p>
  </div>
</a>

<style>
  a {
    text-decoration: none;
    width: 270px;
    height: 170px;
  }

  div {
    display: inline-block;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    border-style: solid;
    border-width: 2px;
    border-color: #090027;
    box-shadow: 3px 3px 0 0 #090027;
    -webkit-transition: all 200ms ease;
    transition: all 200ms ease;
    background-color: white;
  }

  div:hover {
    box-shadow: 6px 6px 0 0 #090027;
  }

  h1 {
    font-size: 25px;
    font-family: "Poppins", sans-serif;
    line-height: 1.9rem;
    margin: 10px 15px;
  }

  p {
    font-size: 15px;
    font-family: "Poppins", sans-serif;
    margin: 0 15px;
    color: #707070;
    position: absolute;
    bottom: 5px;
  }
</style>
