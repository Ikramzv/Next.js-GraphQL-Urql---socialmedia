import { createClient } from 'next-sanity'

export default createClient({
    dataset: "production",
    projectId: "tc0dt0o6",
    token: process.env.NEXT_PUBLIC_APP_TOKEN,
    useCdn: true,
    apiVersion: "2022-12-07"
})