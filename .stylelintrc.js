module.exports = {
  "processors": [
    [
      "stylelint-processor-styled-components",
      {
        "ignoreFiles": ["**/*.css", "**/*.less", "**/*.scss"]
      }
    ]
  ],
  "extends": ["stylelint-config-recommended", "stylelint-config-styled-components"],
  "rules": {
    "string-quotes": "single",
    "property-no-unknown": [
      true,
      {
        "ignoreProperties": ["composes"]
      }
    ],
    "selector-pseudo-class-no-unknown": [
      true,
      {
        "ignorePseudoClasses": ["global"]
      }
    ],
    "selector-pseudo-element-colon-notation": null,
    "no-descending-specificity": null,
    "number-leading-zero": null,
    "at-rule-no-unknown": null,
    "at-rule-empty-line-before": null,
    "no-eol-whitespace": [
      true,
      {
        "ignore": ["empty-lines"]
      }
    ],
    "max-empty-lines": [
      1,
      {
        "ignore": ["comments"]
      }
    ],
    "no-missing-end-of-source-newline": null,
    "color-hex-case": null,
    "color-hex-length": null,
    "block-no-empty": null,
    "declaration-colon-newline-after": null,
    "value-list-comma-newline-after": null,
    "declaration-empty-line-before": null,
    "property-no-vendor-prefix": null
  }
}
