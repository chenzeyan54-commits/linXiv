/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Dev-only URL of the TeXbrain editor's Vite server; only its origin is used. */
  readonly VITE_EDITOR_DEV_URL?: string;
}
