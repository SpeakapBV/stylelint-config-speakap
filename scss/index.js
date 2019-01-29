"use strict";

module.exports = {
    extends: ["../css"],
    rules: {
        "at-rule-no-unknown": null,
        "scss/at-function-named-arguments": "never",
        "scss/at-function-parentheses-space-before": "never",
        "scss/at-function-pattern": [
            "^[a-z][a-z0-9\\-]*[a-z0-9]$",
            {
                message: "Function names should be lowercase, start with a letter, end with letter or number and should only contain letters, numbers and dashes "
            }
        ],
        "scss/at-import-no-partial-leading-underscore": true,
        "scss/at-mixin-argumentless-call-parentheses": "always",
        "scss/at-mixin-named-arguments": "never",
        "scss/at-mixin-parentheses-space-before": "never",
        "scss/at-mixin-pattern": [
            "^[a-z][a-z0-9\\-]*[a-z0-9]$",
            {
                message: "Mixin names should be lowercase, start with a letter, end with letter or number and should only contain letters, numbers and dashes "
            }
        ],
        "scss/at-rule-no-unknown": true,
        "scss/dollar-variable-colon-newline-after": "always-multi-line",
        "scss/dollar-variable-colon-space-after": "always-single-line",
        "scss/dollar-variable-colon-space-before": "never",
        "scss/dollar-variable-default": null,
        "scss/dollar-variable-no-missing-interpolation": true,
        "scss/dollar-variable-pattern": [
            "^[a-z][a-z0-9\\-]*[a-z0-9]$",
            {
                message: "Variable names should be lowercase, start with a letter, end with letter or number and should only contain letters, numbers and dashes "
            }
        ],
        "scss/double-slash-comment-whitespace-inside": "always",
        "scss/media-feature-value-dollar-variable": "always",
        "scss/no-duplicate-dollar-variables": [
            null,
            {
                ignoreInsideAtRules: ["if", "mixin"]
            }
        ],
        "scss/operator-no-newline-after": true,
        "scss/operator-no-newline-before": true,
        "scss/operator-no-unspaced": true,
        "scss/percent-placeholder-pattern": [
            "^[a-z][a-z0-9\\-]*[a-z0-9]$",
            {
                message: "Placeholder class names should be lowercase, start with a letter, end with letter or number and should only contain letters, numbers and dashes "
            }
        ],
        "scss/selector-nest-combinators": "always",
        "scss/selector-no-redundant-nesting-selector": true
    }
};
