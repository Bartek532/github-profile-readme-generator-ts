import React from "react"

type HTMLProps = {
  htmlAttributes: object
  headComponents: Array<any>
  bodyAttributes: object
  preBodyComponents: Array<any>
  body: string
  postBodyComponents: Array<any>
}

export default function HTML(props: HTMLProps) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <script
          data-name="BMC-Widget"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="rahuldkjain"
          data-description="Support me on Buy me a coffee!"
          data-message="Loved the tool🚀. Buy me a coffee to support the work!"
          data-color="#FF813F"
          data-position=""
          data-x_margin="18"
          data-y_margin="18"
        ></script>
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}
