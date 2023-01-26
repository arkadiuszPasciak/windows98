import { TFileTextTypes } from '@Bundles/FileBundle/Supports/File.supports'

export function saveFileOnUserDisk(
  content: string,
  filename: string,
  type: TFileTextTypes,
): void {
  const blob = new Blob([content], { type }) as Blob
  const link = document.createElement('a') as HTMLAnchorElement

  link.href = window.URL.createObjectURL(blob)
  link.setAttribute('download', filename)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}