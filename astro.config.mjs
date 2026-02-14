// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: "https://example.com",
	integrations: [
		starlight({
			title: "Stratum",
			sidebar: [
				{
					label: "Getting Started",
					slug: "getting-started",
				},
				{
					label: "Features",
					slug: "features",
				},
				{
					label: "Guides",
					items: [
						{
							label: "Example Guide",
							slug: "guides/example",
						},
					],
				},
			],
			editLink: {
				baseUrl: "https://github.com/yourname/yourrepo/edit/main/",
			},
		}),
	],
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
});
