export const createId = (provider: string) => {
    provider = provider.includes('google') ? "google" : "github"
    const prefix = `_${provider}_`

    return prefix + crypto.randomUUID()
}