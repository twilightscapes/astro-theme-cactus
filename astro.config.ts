import { defineConfig } from 'astro/config';
import NetlifyCMS from 'astro-netlify-cms';
import fs from 'fs';
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import remarkUnwrapImages from "remark-unwrap-images";
// @ts-ignore:next-line
import { remarkReadingTime } from "./src/utils/remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
	// ! Please remember to replace the following site property with your own domain
	site: "https://astro-theme-cactus.netlify.app/",
	markdown: {
		remarkPlugins: [remarkUnwrapImages, remarkReadingTime],
		remarkRehype: { footnoteLabelProperties: { className: [""] } },
		shikiConfig: {
			theme: "dracula",
			wrap: true,
		},
	},
	integrations: [
		mdx({}),
		tailwind({
			applyBaseStyles: false,
		}),
		sitemap(),
		prefetch(),
		react(),
		NetlifyCMS({
			config: {
				// Use Netlify’s “Git Gateway” authentication and target our default branch
				backend: {
					name: 'git-gateway',
					branch: 'main',
				},
				// Configure where our media assets are stored & served from
				media_folder: 'public/',
				public_folder: '/',
				// Configure the content collections
				collections: [
					{
						folder: "src/content/post",
						name: 'posts',
						label: 'Blog Posts',
						label_singular: 'Blog Post',
						path: '{{slug}}/index',
						media_folder: '',
						public_folder: '',
						create: true,
						delete: true,
						fields: [
							{ name: 'title', widget: 'string', label: 'Post Title' },
							{
								label: "Featured Image",
								name: "coverImage",
								widget: "image",
								hint: "The primary image used for all social media, blog previews and the feature image at the top of the post",
								required: false,
							},
							{
								name: 'publishDate',
								widget: 'datetime',
								format: 'DD MMM YYYY',
								date_format: 'DD MMM YYYY',
								time_format: false,
								label: 'Publish Date',
							},
							{ name: 'author', widget: 'string', label: 'Author Name', required: false },
							{ name: 'authorURL', widget: 'string', label: 'Author URL', required: false },
							{ name: 'description', widget: 'string', label: 'Description', required: false },
							{ name: 'body', widget: 'markdown', label: 'Post Body' },
							{
								name: 'layout',
								widget: 'select',
								default: '../../layouts/BlogPost.astro',
								required: false,
								options: [
									{ label: 'Blog Post', value: '../../layouts/BlogPost.astro', },
								],
							},
						],
					},
				],
			},
			previewStyles: ['/src/styles/blog.css'],
		}),
	],
	vite: {
		plugins: [rawFonts(['.ttf'])],
		optimizeDeps: {
			exclude: ["@resvg/resvg-js"],
		},
	},
});

function rawFonts(ext: Array<string>) {
	return {
		name: 'vite-plugin-raw-fonts',
		// @ts-ignore:next-line
		transform(_, id) {
			if (ext.some(e => id.endsWith(e))) {
				const buffer = fs.readFileSync(id);
				return {
					code: `export default ${JSON.stringify(buffer)}`,
					map: null
				};
			}
		}
	};
}