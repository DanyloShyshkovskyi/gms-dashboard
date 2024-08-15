export interface IIntervalTimerAlertDialog {
  title: string
  initialTime?: number
  onTimeEnd: () => void
}
