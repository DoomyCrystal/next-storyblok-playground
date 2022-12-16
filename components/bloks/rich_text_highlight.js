import React from 'react'
import { storyblokEditable } from '@storyblok/react'
import CodeRenderer from '../helpers/code-renderer'

const RichTextHighlight = ({ blok }) => (
  <div className="" {...storyblokEditable(blok)}>
    {blok.text && (
      <CodeRenderer text={blok.text} />
    )}
  </div>
)

export default RichTextHighlight
