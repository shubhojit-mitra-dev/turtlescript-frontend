"use client"

import { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-csharp'

interface CodeSnippetProps {
  code: string;
  language?: string;
}

export function CodeSnippet({ code, language = 'javascript' }: CodeSnippetProps) {
  useEffect(() => {
    Prism.highlightAll()
  }, [code])

  return (
    <pre>
      <code className={`language-${language}`}>
        {code}
      </code>
    </pre>
  )
}

