export const schema = {
    "models": {
        "PostsModel": {
            "name": "PostsModel",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "post_title": {
                    "name": "post_title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "project_link": {
                    "name": "project_link",
                    "isArray": false,
                    "type": "AWSURL",
                    "isRequired": false,
                    "attributes": []
                },
                "image_link": {
                    "name": "image_link",
                    "isArray": false,
                    "type": "AWSURL",
                    "isRequired": false,
                    "attributes": []
                },
                "post_date": {
                    "name": "post_date",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "userID": {
                    "name": "userID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "lang_tag": {
                    "name": "lang_tag",
                    "isArray": true,
                    "type": {
                        "enum": "LanguageEnum"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "dev_type_tag": {
                    "name": "dev_type_tag",
                    "isArray": true,
                    "type": {
                        "enum": "DevelopmentTag"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "interest_tag": {
                    "name": "interest_tag",
                    "isArray": true,
                    "type": {
                        "enum": "InterestTag"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "size_tag": {
                    "name": "size_tag",
                    "isArray": true,
                    "type": {
                        "enum": "SizeTag"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "PostsModels",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byUsersModel",
                        "fields": [
                            "userID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "read",
                                    "create",
                                    "delete",
                                    "update"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "UsersModel": {
            "name": "UsersModel",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "user_name": {
                    "name": "user_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "password": {
                    "name": "password",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "user_posts": {
                    "name": "user_posts",
                    "isArray": true,
                    "type": {
                        "model": "PostsModel"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "userID"
                    }
                },
                "first_name": {
                    "name": "first_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "last_name": {
                    "name": "last_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "user_creation_date": {
                    "name": "user_creation_date",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "dahublink": {
                    "name": "dahublink",
                    "isArray": false,
                    "type": "AWSURL",
                    "isRequired": false,
                    "attributes": []
                },
                "saved_posts": {
                    "name": "saved_posts",
                    "isArray": true,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "hide_posts": {
                    "name": "hide_posts",
                    "isArray": true,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "UsersModels",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "read",
                                    "create",
                                    "delete",
                                    "update"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "SizeTag": {
            "name": "SizeTag",
            "values": [
                "LESS_FIVE",
                "MORE_FIVE",
                "LESS_TEN",
                "MORE_TEN",
                "MORE_TWENTY_FIVE",
                "MORE_FIFTY",
                "HUNDRED",
                "MORE_HUND"
            ]
        },
        "InterestTag": {
            "name": "InterestTag",
            "values": [
                "COMMUNICATE",
                "CONNECT",
                "ENVIRON",
                "EDU",
                "ENTERTAIN",
                "GAME"
            ]
        },
        "DevelopmentTag": {
            "name": "DevelopmentTag",
            "values": [
                "FRONTEND",
                "BACKEND",
                "FULL_STACK",
                "DESKTOP",
                "WEB_DEV",
                "DATABASE",
                "MOBILE",
                "CLOUD",
                "DEV_OPS",
                "CYBER_SEC"
            ]
        },
        "LanguageEnum": {
            "name": "LanguageEnum",
            "values": [
                "C_SHARP",
                "C_PLUS_PLUS",
                "C",
                "JAVA",
                "PYTHON",
                "TYPESCRIPT",
                "JAVASCRIPT",
                "KOTLIN",
                "SWIFT",
                "RUBY",
                "RUST",
                "SQL"
            ]
        }
    },
    "nonModels": {},
    "codegenVersion": "3.2.0",
    "version": "1b59cdffd3eb66b977af8def580da8ef"
};