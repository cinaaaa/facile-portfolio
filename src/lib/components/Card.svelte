<script>
  import configuration from "$lib/config";

  export let post;
</script>

<a href={post.link} target="__blank">
  <div>
    <h1>{@html post.title}</h1>
    <p>{post.pubDate.split(" ")[0]}</p>
  </div>
</a>

<style>
  a {
    text-decoration: none;
    width: 270px;
    height: 230px;
    color: #222;
  }

  div {
    display: inline-block;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    border-style: solid;
    border-width: 2px;
    border-color: violet;
    box-shadow: 3px 3px 0 0 violet;
    transition: all 200ms ease;
    background-color: white;
    -webkit-transition: all 200ms ease;
  }

  div:hover {
    box-shadow: 6px 6px 0 0 violet;
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
    color: currentColor;
    position: absolute;
    bottom: 5px;
  }

  /** Mobile */
  @media (max-width: 768px) {
    a {
      width: 90vw;
      height: 230px;
    }

    div {
      width: 90vw;
      height: 100%;
    }

    h1 {
      font-size: 30px;
    }

    p {
      font-size: 15px;
    }
  }
</style>
