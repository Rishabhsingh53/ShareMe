import {defineCliConfig} from 'sanity/cli'
import {config} from "dotenv"
config()

export default defineCliConfig({
  api: {
    projectId: process.env.PROJECT_ID,
    dataset: process.env.DATASET,
  }
})
