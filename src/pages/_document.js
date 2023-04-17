import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
       static async getInitialProps(ctx) {
              const sheet = new ServerStyleSheet()
              const orinalRenderPage = ctx.renderPage;

        try {
          ctx.renderPage = () => 
            orinalRenderPage({
              enhanceApp: App => props =>
                sheet.collectStyles(<App {...props} />),});

        const initialProps = await Document.getInitialProps(ctx);

        return {
          ...initialProps,
          styled:(
            <>
             {initialProps.styles}
             {sheet.getStyleElement()}
            </>)}}finally {sheet.seal()}}}

