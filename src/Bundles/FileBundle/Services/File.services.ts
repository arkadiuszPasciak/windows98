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

export async function openFileFromUserDisk(
  event: Event,
): Promise<null | string | ArrayBuffer> {
  if (!event) {
    return null
  }

  const target = event.target as HTMLInputElement

  if (!target) {
    return null
  }

  const file: File = (target.files as FileList)[0]

  if (!file) {
    return null
  }

  const promise = new Promise((resolve) => {
    const reader = new FileReader() as FileReader

    reader.onload = () => {
      resolve(reader.result)
    }

    reader.readAsText(file)
  })

  let result = null

  await promise.then((value) => {
    result = value
  })

  return result ?? null
}
