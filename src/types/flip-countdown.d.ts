declare module '@rumess/react-flip-countdown' {
    interface FlipCountdownProps {
      theme?: 'dark' | 'light'
      size?: 'small' | 'medium' | 'large'
      titlePosition?: 'top' | 'bottom'
      hideYear?: boolean
      hideMonth?: boolean
      hideDay?: boolean
      hideHour?: boolean
      hideMinute?: boolean
      hideSecond?: boolean
      yearTitle?: string
      monthTitle?: string
      dayTitle?: string
      hourTitle?: string
      minuteTitle?: string
      secondTitle?: string
      endAt: string
      endAtZero?: boolean
    }

    export default function FlipCountdown(props: FlipCountdownProps): JSX.Element
  }
