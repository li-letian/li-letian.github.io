export function PDFView({ src, ...props }) {
  return (
    <object data={src} type="application/pdf" className="h-[50rem] w-full" {...props}>
      <p className="p-3 text-center">
        Unable to display PDF file.{' '}
        <a href={src} className="text-blue-400">
          Click here to Download
        </a>{' '}
        instead.
      </p>
    </object>
  )
}
