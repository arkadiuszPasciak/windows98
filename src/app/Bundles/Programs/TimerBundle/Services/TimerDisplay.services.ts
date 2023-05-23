export default class TimerDisplay {
  public showSecondZero(time: number): string {
    return time === 0 ? '0' : ''
  }
}
