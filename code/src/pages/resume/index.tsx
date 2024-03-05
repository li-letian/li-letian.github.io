import Header from 'contents/Header'
import Main from 'contents/Main'
import Footer from 'contents/Footer'
import { PDFView } from 'components/PDF'

export default function Resume() {
  return (
    <Main>
      <PDFView src="/assets/resume_en.pdf" />
    </Main>
  )
}
