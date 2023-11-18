import sanityClient from "@sanity/client"
import ImageUrlBuilder from "@sanity/image-url"
export const client = sanityClient({
    projectId : import.meta.env.VITE_PROJECT_ID,
    dataset : "production",
    apiVersion : "2021-11-16",
    useCdn : true,
    token : import.meta.env.VITE_TOKEN
})

const builder = ImageUrlBuilder(client)

export const urlFor = (source) => {
    builder.image(source)
}
