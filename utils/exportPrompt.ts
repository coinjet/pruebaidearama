import jsPDF from 'jspdf'

export function exportToTxt(text: string) {
  const blob = new Blob([text], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'prompt.txt'
  link.click()
  URL.revokeObjectURL(url)
}

export function exportToPdf(text: string) {
  const doc = new jsPDF()
  const lines = doc.splitTextToSize(text, 180)
  doc.text(lines, 10, 10)
  doc.save('prompt.pdf')
}
