import { z } from 'zod'

export default class ValidationException extends Error {
  _errors: z.typeToFlattenedError<any, string>

  constructor(message: string, errors: z.typeToFlattenedError<any, string>) {
    super(message)

    this._errors = errors
  }

  get errors(): Record<string, string[]> {
    const errs: Record<string, string[]> = {}

    for (let [key, e] of Object.entries(this._errors.fieldErrors)) {
      if (e) {
        errs[key] = e
      }
    }

    return errs
  }
}
