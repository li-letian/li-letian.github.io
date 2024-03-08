import { ReactElement } from 'react'
import { renderToString } from 'react-dom/server'

export const TextToId = (text: string) => text.replaceAll(' ', '-').toLowerCase()
export const ElementToId = (children: ReactElement) => TextToId(renderToString(children))

export const components = {
  img: ({ src, alt, ...rest }) => <img alt={alt} src={'/' + src} {...rest} />,
  h1: ({ children, ...props }) => (
    <h1 id={ElementToId(children)} {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 id={ElementToId(children)} {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 id={ElementToId(children)} {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4 id={ElementToId(children)} {...props}>
      {children}
    </h4>
  ),
  h5: ({ children, ...props }) => (
    <h5 id={ElementToId(children)} {...props}>
      {children}
    </h5>
  ),
  h6: ({ children, ...props }) => (
    <h6 id={ElementToId(children)} {...props}>
      {children}
    </h6>
  ),
}
