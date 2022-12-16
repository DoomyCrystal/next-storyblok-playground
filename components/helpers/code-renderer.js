import React from 'react'
import { NODE_CODEBLOCK, render } from 'storyblok-rich-text-react-renderer'
import { StoryblokComponent } from '@storyblok/react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { agate } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const RichTextRenderer = ({ text }) => {
  return (
    <>
      {render(text, {
        nodeResolvers: {
          [NODE_CODEBLOCK]: (children, props) => {
            const lang = props.class?.replace('language-', '')
            return (
              <div className="relative my-4">
                <SyntaxHighlighter language={lang} style={agate} wrapLongLines>
                  {children}
                </SyntaxHighlighter>
              </div>
            )
          },
        },
        defaultBlokResolver: (name, props) => (
          <StoryblokComponent blok={{ component: name, ...props }} />
        ),
      })}
    </>
  )
}

export default RichTextRenderer
