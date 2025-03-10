import { LocalFileStorage } from '@mjackson/file-storage/local'

const TMP_DIR = 'tmp'

export const fileStorage = new LocalFileStorage(TMP_DIR)
