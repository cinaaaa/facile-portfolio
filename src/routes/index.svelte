<script context="module">
	import configuration from "$lib/config";
	import Background from "$lib/components/Background.svelte";

	let {
		personal,
		assets,
		socials,
		colors
	} = configuration;
</script>

<svelte:head>
	<title>
		{personal.firstName} {personal.lastName} 
		{personal.description ? `- ${personal.description}` : ''}
	</title>
</svelte:head>

<Background>
	<h1>test</h1>
</Background>

<style>
</style>
