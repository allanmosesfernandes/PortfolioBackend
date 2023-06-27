import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {codeInput} from '@sanity/code-input'
import SidebarList from './customStudio/SidebarList'
export default defineConfig({
  name: 'default',
  title: 'PortfoliodB2023',
  projectId: 'lyairl50',
  dataset: 'production',

  plugins: [deskTool({
    structure: SidebarList
  }), visionTool(), codeInput()],

  schema: {
    types: schemaTypes,
  },

})
