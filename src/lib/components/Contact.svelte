<script>
  import { slide } from "svelte/transition";
  import configuration from "$lib/config";

  let { email } = configuration.contact;
  let displayToast = false;

  const FADE_OUT_DURATION = 3000;

  function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
      displayToast = true;
    } catch (err) {
      console.error("Fallback: Oops, unable to copy", err);
    }
    document.body.removeChild(textArea);
  }

  function copyEmailToClipboard() {
    // check the navigator support
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(email);
      return;
    }

    navigator.clipboard.writeText(email);
    displayToast = true;
    setTimeout(() => {
      displayToast = false;
    }, FADE_OUT_DURATION);
  }
</script>

<section>
  <h5>
    Let's talk 👋
    <span on:click={copyEmailToClipboard} on:keypress={copyEmailToClipboard}>
      {email}
    </span>
  </h5>

  {#if displayToast}
    <div id="toast-success" transition:slide={{ delay: 50, duration: 300 }}>
      Email copied to clipboard! 🎉
    </div>
  {/if}
</section>

<style>
  section {
    margin-top: 10%;
  }

  h5 {
    color: currentColor;
    font-family: "Poppins", sans-serif;
    font-size: 40px;
    margin: 0 5%;
    padding-bottom: 50px;
  }

  span {
    cursor: pointer;
    width: 400px;
    background: linear-gradient(
      to right,
      #7953cd 20%,
      #00affa 30%,
      #0190cd 70%,
      #764ada 80%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    background-size: 500% auto;
    animation: textShine 2s ease-in-out infinite alternate;
  }

  @keyframes textShine {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }

  #toast-success {
    position: fixed;
    bottom: 5%;
    right: 30px;
    width: 300px;
    height: 40px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    color: #222;
    border-radius: 5px;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
  }

  /** Mobile */
  @media (max-width: 768px) {
    section {
      margin-top: 10%;
    }
    h5 {
      font-size: 20px;
    }
  }
</style>
