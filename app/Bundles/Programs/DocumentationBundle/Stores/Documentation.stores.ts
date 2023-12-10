import { defineStore } from 'pinia'
import {
  TDocumentationBundles,
  EDocumentationBundles,
} from '@APP|Bundles/DocumentationBundle//Supports/DocumentationNavigation.supports'

export const useDocumentationStore = defineStore('documentation', {
  state: () => ({
    activePage: EDocumentationBundles.APP_BUNDLE as TDocumentationBundles,
  }),
  actions: {
    changeActivePage(name: TDocumentationBundles): void {
      if (!name) {
        return
      }

      this.activePage = name
    },
  },
})
