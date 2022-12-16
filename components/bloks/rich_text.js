import React from 'react'
import { storyblokEditable } from '@storyblok/react'
import RichTextRenderer from '../helpers/rich-text-renderer'

const RichText = ({ blok }) => (
  <div className="" {...storyblokEditable(blok)}>
    {blok.text && (
      <RichTextRenderer text={blok.text} />
    )}
  </div>
)

export default RichText
