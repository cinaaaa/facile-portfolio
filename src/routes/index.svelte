<script context="module">
	import configuration from "$lib/config";
	import Background from "$lib/components/Background.svelte";
	import Avatar from "$lib/components/Avatar.svelte";
	import Titles from "$lib/components/Titles.svelte";
	import Socials from "$lib/components/Socials.svelte";

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
	<Avatar />
	<Titles />
	<Socials />
</Background>

<style>
</style>
