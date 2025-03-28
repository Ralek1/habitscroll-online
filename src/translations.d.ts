
// Define a recursive type that allows for nested translation objects
type TranslationValue = string | { [key: string]: TranslationValue };

declare module '*.json' {
  const value: { [key: string]: TranslationValue };
  export default value;
}
