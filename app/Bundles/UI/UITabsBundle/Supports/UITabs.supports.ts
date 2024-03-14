import { Component } from "vue"

interface IUITabProps {
  title: string
  component: Component
}

export type TUITabsProps = Array<IUITabProps>
