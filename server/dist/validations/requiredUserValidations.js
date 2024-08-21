"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleIdValidationSchema = exports.emailValidationSchema = exports.displayNameValidationSchema = void 0;
exports.displayNameValidationSchema = {
    displayName: {
        isLength: {
            options: {
                min: 1,
                max: 32
            },
            errorMessage: "Display name must be between 1 and 32 characters"
        },
        notEmpty: {
            errorMessage: "Display name can't be empty"
        },
        isString: {
            errorMessage: "Display name must be a string"
        }
    }
};
exports.emailValidationSchema = {
    email: {
        isLength: {
            options: {
                min: 1,
                max: 32
            },
            errorMessage: "Email must be between 1 and 32 characters"
        },
        notEmpty: {
            errorMessage: "Email can't be empty"
        },
        isString: {
            errorMessage: "Email must be a string"
        }
    }
};
exports.googleIdValidationSchema = {
    email: {
        notEmpty: {
            errorMessage: "Google Id can't be empty"
        },
        isString: {
            errorMessage: "Google Id must be a string"
        }
    }
};
