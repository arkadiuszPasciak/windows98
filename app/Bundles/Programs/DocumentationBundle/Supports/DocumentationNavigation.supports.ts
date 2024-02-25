import { Component } from 'vue'

export enum EDocumentationBundles {
  APP_BUNDLE = 'AppBundle',
  AUDIO_BUNDLE = 'AudioBundle',
  CALCULATOR_BUNDLE = 'CalculatorBundle',
  CLOCK_BUNDLE = 'ClockBundle',
  DOCUMENTATION_BUNDLE = 'DocumentationBundle',
  FILE_BUNDLE = 'FileBundle',
  LANGUAGE_BUNDLE = 'LanguageBundle',
  MARKDOWN_BUNDLE = 'MarkdownBundle',
  MEDIA_PLAYER_BUNDLE = 'MediaPlayerBundle',
  NAVIGATION_BUNDLE = 'NavigationBundle',
  NOTEPAD_BUNDLE = 'NotepadBundle',
  PROGRAM_BUNDLE = 'ProgramBundle',
  PULPIT_BUNDLE = 'PulpitBundle',
  RUN_BUNDLE = 'RunBundle',
  SETTINGS_BUNDLE = 'SettingsBundle',
  SHUT_DOWN_BUNDLE = 'ShutDownBundle',
  START_BUNDLE = 'StartBundle',
  STORAGE_BUNDLE = 'StorageBundle',
  TELEPORT_BUNDLE = 'TeleportBundle',
  THEME_BUNDLE = 'ThemeBundle',
  TIC_TAC_TOE_BUNDLE = 'TicTacToeBundle',
  TIMEZONE_BUNDLE = 'TimezoneBundle',
  UI_BUNDLE = 'UIBundle',
}

export interface IDocumentationsBundles {
  name: TDocumentationBundles
  component: Component
}

export type TDocumentationBundles =
  | EDocumentationBundles.APP_BUNDLE
  | EDocumentationBundles.AUDIO_BUNDLE
  | EDocumentationBundles.CALCULATOR_BUNDLE
  | EDocumentationBundles.CLOCK_BUNDLE
  | EDocumentationBundles.DOCUMENTATION_BUNDLE
  | EDocumentationBundles.FILE_BUNDLE
  | EDocumentationBundles.LANGUAGE_BUNDLE
  | EDocumentationBundles.MARKDOWN_BUNDLE
  | EDocumentationBundles.MEDIA_PLAYER_BUNDLE
  | EDocumentationBundles.NAVIGATION_BUNDLE
  | EDocumentationBundles.NOTEPAD_BUNDLE
  | EDocumentationBundles.PROGRAM_BUNDLE
  | EDocumentationBundles.PULPIT_BUNDLE
  | EDocumentationBundles.RUN_BUNDLE
  | EDocumentationBundles.SETTINGS_BUNDLE
  | EDocumentationBundles.SHUT_DOWN_BUNDLE
  | EDocumentationBundles.START_BUNDLE
  | EDocumentationBundles.STORAGE_BUNDLE
  | EDocumentationBundles.TELEPORT_BUNDLE
  | EDocumentationBundles.THEME_BUNDLE
  | EDocumentationBundles.TIC_TAC_TOE_BUNDLE
  | EDocumentationBundles.TIMEZONE_BUNDLE
  | EDocumentationBundles.UI_BUNDLE
