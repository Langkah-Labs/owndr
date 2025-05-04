import { type FileUpload } from '@mjackson/form-data-parser'

export default async function uploadAvatar(
  env: CloudflareEnvironment,
  fileUpload: FileUpload
): Promise<string | undefined> {
  if (
    fileUpload.fieldName === 'avatar' &&
    fileUpload.type.startsWith('image/')
  ) {
    const storageKey = fileUpload.fieldName

    await env.STORAGE.put(storageKey, fileUpload)

    return storageKey
  }
}
