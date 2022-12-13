import React from 'react'
import { storyblokEditable } from "@storyblok/react";
import Image from 'next/image'
import Link from 'next/link';
import { formatPhoneNumber } from 'react-phone-number-input'

const Teaser = ({blok}) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className="container mx-auto px-4">
      <div className="flex justify-between py-16 sm:py-10">
        <div className="w-full lg:w-1/2 xl:w-6/12 text-center lg:text-left py-4 sm:p-0">
          <h1 className="text-4xl xl:text-5xl text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-medium tracking-normal leading-tight mb-6">
            { blok.headline }
          </h1>
          <h2 className="text-lg font-medium mb-6">
          You have successfully setup a Next.js project with Storyblok!
          </h2>
          <p><a href="tel:+41319280010">{formatPhoneNumber('+41319280010')}</a></p>
          <div className="flex flex-col sm:block py-4">
            <Link href={`/${blok.link.story.full_slug}`}>
              <a className="no-underline inline-block font-medium shadow uppercase rounded hover:shadow-md sm:mr-4 py-3 px-6 text-base mb-4 primary bg-blue-200">
                {blok.link.story.name}
              </a>
            </Link>
          </div>
        </div>
        <div className="hidden lg:block lg:w-5/12">
          <Image src="https://img.storyblok.com/ESj1lIqO5N2nrvzRp8KwVCg8CtU=/1300x0/filters:format(webp):quality(80)/f/88751/1734x1092/fac47826c3/storyblok-editor.png"   alt="Storyblok logo" width="644" height="406" />
        </div>
      </div>
    </div>
  )
}

export default Teaser
