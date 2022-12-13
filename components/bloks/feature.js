import React from 'react'
import { storyblokEditable } from '@storyblok/react'
import Image from 'next/image'
import RichTextRenderer from '../helpers/rich-text-renderer'
import Link from 'next/link'

const Feature = ({ blok }) => (
  <div className="h-full p-6 rounded-lg bg-white" {...storyblokEditable(blok)}>
    {blok.picture?.filename && (
      <div className="relative aspect-square">
        <Image
          src={blok.picture.filename}
          alt={blok.picture.alt}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={blok.picture.filename + '/m/50x0'}
          className="rounded"
        />
      </div>
    )}
    <h2 className="font-medium text-2xl py-8">{blok.headline}</h2>
    {blok.text && <RichTextRenderer text={blok.text} />}
    {blok.link?.story && (
      <Link href={`/${blok.link.story.full_slug}`}>
        <a className="mt-4 no-underline inline-block font-medium shadow uppercase rounded hover:shadow-md sm:mr-4 py-3 px-6 text-base mb-4 primary bg-blue-200">
          {blok.link.story.name}
        </a>
      </Link>
    )}
  </div>
)

export default Feature
