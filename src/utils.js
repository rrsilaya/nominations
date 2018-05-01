export const getErrors = err => {
  /**
   * Given an error object `err`, maps down all of the error messages
   * into a single array.
   */

  return Object.entries(err.errors).map(([, error]) => error);
}