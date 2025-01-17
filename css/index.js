"use strict";

module.exports = {
    extends: ["stylelint-config-standard"],
    plugins: ["stylelint-order"],
    rules: {
        "at-rule-name-space-after": "always",
        "at-rule-no-unknown": true,
        "at-rule-no-vendor-prefix": true,
        "at-rule-semicolon-space-before": "never",
        "block-closing-brace-newline-before": "always",
        "block-opening-brace-newline-after": "always",
        "color-named": "never",
        "declaration-block-semicolon-newline-after": "always",
        "declaration-block-semicolon-newline-before": "never-multi-line",
        "declaration-block-semicolon-space-after": "always-single-line",
        "declaration-colon-space-after": "always-single-line",
        "declaration-empty-line-before": "never",
        "declaration-no-important": true,
        "font-family-name-quotes": "always-where-recommended",
        "font-weight-notation": "named-where-possible",
        "function-url-quotes": ["always", { except: ["empty"] }],
        indentation: 4,
        "max-line-length": null,
        "media-feature-name-no-unknown": [
            true,
            { ignoreMediaFeatureNames: ["prefers-reduced-motion"] }
        ],
        "media-feature-name-no-vendor-prefix": true,
        "no-descending-specificity": null,
        "no-duplicate-selectors": true,
        "property-no-vendor-prefix": true,
        "selector-attribute-quotes": "always",
        "selector-class-pattern": [
            "^[a-z][a-z0-9\\-]*[a-z0-9]$",
            {
                resolveNestedSelectors: true,
                message: "Class names should be lowercase, start with a letter, end with letter or number and should only contain letters, numbers and dashes "
            }
        ],
        "selector-list-comma-newline-after": "always",
        "selector-list-comma-newline-before": "never-multi-line",
        "selector-list-comma-space-after": "always-single-line",
        "selector-list-comma-space-before": "never",
        "selector-max-attribute": 2,
        "selector-max-class": 4,
        "selector-max-combinators": 4,
        "selector-max-compound-selectors": 4,
        "selector-max-empty-lines": 0,
        "selector-max-id": 0,
        "selector-max-specificity": null,
        "selector-max-type": 2,
        "selector-max-universal": 1,
        "selector-no-qualifying-type": [
            true,
            { ignore: ["attribute"] }
        ],
        "selector-no-vendor-prefix": true,
        "selector-pseudo-element-colon-notation": "double",
        "shorthand-property-no-redundant-values": true,
        "string-quotes": "double",
        "value-keyword-case": "lower",
        "value-list-comma-newline-before": "never-multi-line",
        "value-list-comma-space-after": "always-single-line",
        "value-no-vendor-prefix": true,

        "order/properties-alphabetical-order": true
    }
};
