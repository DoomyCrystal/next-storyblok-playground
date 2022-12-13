import React from 'react'
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Grid = ({blok}) => {
  return (
    <ul className="grid grid-cols-12 gap-6 py-8" {...storyblokEditable(blok)}>
      {blok.columns.map(blok => (
        <li key={blok._uid} className="col-span-full lg:col-span-4"><StoryblokComponent blok={blok}  /></li>
      ))}
    </ul>
  )
}

export default Grid
