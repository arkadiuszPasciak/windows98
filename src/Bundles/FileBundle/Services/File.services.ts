// 'text/csv;charset=utf-8;'

export function downloadData(
  content: string,
  filename: string,
  type = 'text/txt;charset=utf-8;',
) {
  const blob = new Blob([content], { type })
  const link = document.createElement('a')

  link.href = window.URL.createObjectURL(blob)
  link.setAttribute('download', filename)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
