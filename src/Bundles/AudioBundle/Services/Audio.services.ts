export function muteAllSound(status: boolean): void {
  const mediaElements = document.querySelectorAll(
    'audio, video',
  ) as NodeListOf<Element>

  Array.from(mediaElements).forEach((element: Element): void => {
    (element as HTMLMediaElement).muted = status
  })
}
