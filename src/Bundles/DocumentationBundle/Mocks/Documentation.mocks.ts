import {
  EDocumentationBundles,
  IDocumentationsBundles,
} from '@Bundles/DocumentationBundle/Supports/DocumentationNavigation.supports'
import AppDocumentation from '@Bundles/AppBundle/Documentations/App.documentations.md'
import AudioDocumentation from '@Bundles/AudioBundle/Documentations/Audio.documentations.md'
import CalculatorDocumentation from '@Bundles/CalculatorBundle/Documentations/Calculator.documentations.md'
import CalendarDocumentation from '@Bundles/CalendarBundle/Documentations/Calendar.documentations.md'
import ClockDocumentation from '@Bundles/ClockBundle/Documentations/Clock.documentations.md'
import DocumentationDocumentation from '@Bundles/DocumentationBundle/Documentations/Documentation.documentations.md'
import FileDocumentation from '@Bundles/FileBundle/Documentations/File.documentations.md'
import LanguageDocumentation from '@Bundles/LanguageBundle/Documentations/Language.documentations.md'
import MarkdownDocumentation from '@Bundles/MarkdownBundle/Documentations/Markdown.documentations.md'
import MediaPlayerDocumentation from '@Bundles/MediaPlayerBundle/Documentations/MediaPlayer.documentations.md'
import NavigationDocumentation from '@Bundles/NavigationBundle/Documentations/Navigation.documentations.md'
import NotepadDocumentation from '@Bundles/NotepadBundle/Documentations/Notepad.documentations.md'
import ProgramDocumentation from '@Bundles/ProgramBundle/Documentations/Program.documentations.md'
import UserAgentDocumentation from '@Bundles/UserAgentBundle/Documentations/UserAgent.documentations.md'

// TODO delete this after set dynamic component
export const testFirst = ProgramDocumentation

export const MDocumentations = [
  {
    name: EDocumentationBundles.APP_BUNDLE,
    component: AppDocumentation,
  },
  {
    name: EDocumentationBundles.AUDIO_BUNDLE,
    component: AudioDocumentation,
  },
  {
    name: EDocumentationBundles.CALCULATOR_BUNDLE,
    component: CalculatorDocumentation,
  },
  {
    name: EDocumentationBundles.CALENDAR_BUNDLE,
    component: CalendarDocumentation,
  },
  {
    name: EDocumentationBundles.CLOCK_BUNDLE,
    component: ClockDocumentation,
  },
  {
    name: EDocumentationBundles.DOCUMENTATION_BUNDLE,
    component: DocumentationDocumentation,
  },
  {
    name: EDocumentationBundles.FILE_BUNDLE,
    component: FileDocumentation,
  },
  {
    name: EDocumentationBundles.LANGUAGE_BUNDLE,
    component: LanguageDocumentation,
  },
  {
    name: EDocumentationBundles.MARKDOWN_BUNDLE,
    component: MarkdownDocumentation,
  },
  {
    name: EDocumentationBundles.MEDIA_PLAYER_BUNDLE,
    component: MediaPlayerDocumentation,
  },
  {
    name: EDocumentationBundles.NAVIGATION_BUNDLE,
    component: NavigationDocumentation,
  },
  {
    name: EDocumentationBundles.NOTEPAD_BUNDLE,
    component: NotepadDocumentation,
  },
  {
    name: EDocumentationBundles.PROGRAM_BUNDLE,
    component: ProgramDocumentation,
  },
  {
    name: EDocumentationBundles.PULPIT_BUNDLE,
    component: '',
  },
  {
    name: EDocumentationBundles.RUN_BUNDLE,
    component: '',
  },
  {
    name: EDocumentationBundles.SETTINGS_BUNDLE,
    component: '',
  },
  {
    name: EDocumentationBundles.SHUT_DOWN_BUNDLE,
    component: '',
  },
  {
    name: EDocumentationBundles.START_BUNDLE,
    component: '',
  },
  {
    name: EDocumentationBundles.STORAGE_BUNDLE,
    component: '',
  },
  {
    name: EDocumentationBundles.TELEPORT_BUNDLE,
    component: '',
  },
  {
    name: EDocumentationBundles.THEME_BUNDLE,
    component: '',
  },
  {
    name: EDocumentationBundles.TIC_TAC_TOE_BUNDLE,
    component: '',
  },
  {
    name: EDocumentationBundles.TIMEZONE_BUNDLE,
    component: '',
  },
  {
    name: EDocumentationBundles.UI_BUNDLE,
    component: '',
  },
  {
    name: EDocumentationBundles.USER_AGENT_BUNDLE,
    component: UserAgentDocumentation,
  },
] as Array<IDocumentationsBundles>
