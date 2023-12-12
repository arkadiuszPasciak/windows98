import {
  EDocumentationBundles,
  IDocumentationsBundles,
} from '@APP|Bundles/DocumentationBundle/Supports/DocumentationNavigation.supports'
import AppDocumentation from '@APP|Bundles/AppBundle/Documentations/App.documentations.md'
import AudioDocumentation from '@APP|Bundles/AudioBundle/Documentations/Audio.documentations.md'
import CalculatorDocumentation from '@APP|Bundles/CalculatorBundle/Documentations/Calculator.documentations.md'
import CalendarDocumentation from '@APP|Bundles/CalendarBundle/Documentations/Calendar.documentations.md'
import ClockDocumentation from '@APP|Bundles/ClockBundle/Documentations/Clock.documentations.md'
import DocumentationDocumentation from '@APP|Bundles/DocumentationBundle/Documentations/Documentation.documentations.md'
import FileDocumentation from '@APP|Bundles/FileBundle/Documentations/File.documentations.md'
import LanguageDocumentation from '@APP|Bundles/LanguageBundle/Documentations/Language.documentations.md'
import MarkdownDocumentation from '@APP|Bundles/MarkdownBundle/Documentations/Markdown.documentations.md'
import MediaPlayerDocumentation from '@APP|Bundles/MediaPlayerBundle/Documentations/MediaPlayer.documentations.md'
import NavigationDocumentation from '@APP|Bundles/NavigationBundle/Documentations/Navigation.documentations.md'
import NotepadDocumentation from '@APP|Bundles/NotepadBundle/Documentations/Notepad.documentations.md'
import ProgramDocumentation from '@APP|Bundles/ProgramBundle/Documentations/Program.documentations.md'
import PulpitDocumentation from '@APP|Bundles/PulpitBundle/Documentations/Pulpit.documentations.md'
import RunDocumentation from '@APP|Bundles/RunBundle/Documentations/Run.documentations.md'
import SettingsDocumentation from '@APP|Bundles/SettingsBundle/Documentations/Settings.documentations.md'
import ShutDownDocumentation from '@APP|Bundles/ShutDownBundle/Documentations/ShutDown.documentations.md'
import StartDocumentation from '@APP|Bundles/StartBundle/Documentations/Start.documentations.md'
import StorageDocumentation from '@APP|Bundles/StorageBundle/Documentations/Storage.documentations.md'
import TeleportDocumentation from '@APP|Bundles/TeleportBundle/Documentations/Teleport.documentations.md'
import ThemeDocumentation from '@APP|Bundles/ThemeBundle/Documentations/Theme.documentations.md'
import TicTacToeDocumentation from '@APP|Bundles/TicTacToeBundle/Documentations/TicTacToe.documentations.md'
import TimezoneDocumentation from '@APP|Bundles/TimezoneBundle/Documentations/Timezone.documentations.md'
import UISelectBundleDocumentation from '@APP|Bundles/UISelectBundle/Documentations/UISelect.documentations.md'
import UserAgentDocumentation from '@APP|Bundles/UserAgentBundle/Documentations/UserAgent.documentations.md'

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
    component: PulpitDocumentation,
  },
  {
    name: EDocumentationBundles.RUN_BUNDLE,
    component: RunDocumentation,
  },
  {
    name: EDocumentationBundles.SETTINGS_BUNDLE,
    component: SettingsDocumentation,
  },
  {
    name: EDocumentationBundles.SHUT_DOWN_BUNDLE,
    component: ShutDownDocumentation,
  },
  {
    name: EDocumentationBundles.START_BUNDLE,
    component: StartDocumentation,
  },
  {
    name: EDocumentationBundles.STORAGE_BUNDLE,
    component: StorageDocumentation,
  },
  {
    name: EDocumentationBundles.TELEPORT_BUNDLE,
    component: TeleportDocumentation,
  },
  {
    name: EDocumentationBundles.THEME_BUNDLE,
    component: ThemeDocumentation,
  },
  {
    name: EDocumentationBundles.TIC_TAC_TOE_BUNDLE,
    component: TicTacToeDocumentation,
  },
  {
    name: EDocumentationBundles.TIMEZONE_BUNDLE,
    component: TimezoneDocumentation,
  },
  {
    name: EDocumentationBundles.UI_BUNDLE,
    component: UISelectBundleDocumentation,
  },
  {
    name: EDocumentationBundles.USER_AGENT_BUNDLE,
    component: UserAgentDocumentation,
  },
] as Array<IDocumentationsBundles>
