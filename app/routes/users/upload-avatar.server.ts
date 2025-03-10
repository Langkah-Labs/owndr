import { type FileUpload } from '@mjackson/form-data-parser'
import { fileStorage } from '~/lib/storage.server'

export default async function uploadAvatar(
  fileUpload: FileUpload
): Promise<string | undefined> {
  if (
    fileUpload.fieldName === 'avatar' &&
    fileUpload.type.startsWith('image/')
  ) {
    const storageKey = `${fileUpload.fieldName}-${Bun.randomUUIDv7()}`

    // @ts-ignore - FileUpload is supposed to be File implementation
    await fileStorage.put(storageKey, fileUpload)

    return storageKey
  }
}
