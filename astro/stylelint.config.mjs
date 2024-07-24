/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-html',
  ],
  rules: {
    'custom-property-pattern': null,
    'selector-class-pattern': null,
    'media-query-no-invalid': null,
    'keyframes-name-pattern': null,
  },
}
