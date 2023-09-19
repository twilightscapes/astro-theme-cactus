---
coverImage:
  src: ./artvsartst.webp
  alt: Astro build wallpaper
updatedDate: 14 August 2023
title: Example Cover Image
# featuredImage: ./artvsartst.jpg
tags:
  - test
  - image
publishDate: 04 July 2023
description: This post is an example of how to add a cover image
additionalImage: artvsartst.webp
---

<!-- ![Booya](./cover.png) -->


## Blockquotes

> Blockquotes can also be nested...
>
> > ...by using additional greater-than signs right next to each other...

## References

An example containing a clickable reference[^1] with a link to the source.

Second example containing a reference[^2] with a link to the source.

[^1]: Reference first footnote with a return to content link.
[^2]: Second reference with a link.

If you check out this example in `src/content/post/markdown-elements/index.md`, you'll notice that the references and the heading "Footnotes" are added to the bottom of the page via the [remark-rehype](https://github.com/remarkjs/remark-rehype#options) plugin.

## Lists

Unordered

- Create a list by starting a line with `+`, `-`, or `*`
- Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    - Ac tristique libero volutpat at
    - Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
- Very easy!