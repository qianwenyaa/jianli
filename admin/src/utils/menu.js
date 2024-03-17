const menu = {
    list() {
        return [{
            "backMenu": [{
                "child": [{
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "用户",
                    "menuJump": "列表",
                    "tableName": "yonghu"
                }],
                "menu": "用户管理"
            }, {
                "child": [{
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "简历模板",
                    "menuJump": "列表",
                    "tableName": "jianlimoban"
                }],
                "menu": "简历模板管理"
            }, {
                "child": [{
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "模板类型",
                    "menuJump": "列表",
                    "tableName": "mobanleixing"
                }],
                "menu": "模板类型管理"
            }, {
                "child": [{
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "招聘会",
                    "menuJump": "列表",
                    "tableName": "zhaopinhui"
                }],
                "menu": "招聘会管理"
            }, {
                "child": [{
                    "buttons": ["审核", "新增", "查看", "修改", "删除"],
                    "menu": "报名招聘",
                    "menuJump": "列表",
                    "tableName": "baomingzhaopin"
                }],
                "menu": "报名招聘管理"
            }, {
                "child": [{
                    "buttons": ["修改", "删除"],
                    "menu": "我的收藏管理",
                    "tableName": "storeup"
                }],
                "menu": "我的收藏管理"
            }, {
                "child": [{
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "轮播图管理",
                    "tableName": "config"
                }, {
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "系统公告",
                    "tableName": "news"
                }],
                "menu": "系统管理"
            }],
            "frontMenu": [{
                "child": [{
                    "buttons": ["查看"],
                    "menu": "简历模板列表",
                    "menuJump": "列表",
                    "tableName": "jianlimoban"
                }],
                "menu": "简历模板模块"
            }, {
                "child": [{
                    "buttons": ["审核", "删除", "修改", "查看"],
                    "menu": "简历上传",
                    "menuJump": "列表",
                    "tableName": "jianlishangchuan"
                }],
                "menu": "简历上传管理"
            }, {
                "child": [{
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "求职论坛",
                    "tableName": "forum"
                }],
                "menu": "求职论坛"
            }, {
                "child": [{
                    "buttons": ["查看", "报名"],
                    "menu": "招聘会列表",
                    "menuJump": "列表",
                    "tableName": "zhaopinhui"
                }],
                "menu": "招聘会模块"
            }, {
                "child": [{
                    "buttons": ["查看", "新增"],
                    "menu": "简历上传列表",
                    "menuJump": "列表",
                    "tableName": "jianlishangchuan"
                }],
                "menu": "简历上传模块"
            }],
            "hasBackLogin": "是",
            "hasBackRegister": "否",
            "hasFrontLogin": "否",
            "hasFrontRegister": "否",
            "roleName": "管理员",
            "tableName": "users"
        }, {
            "backMenu": [{
                "child": [{
                    "buttons": ["查看"],
                    "menu": "报名招聘",
                    "menuJump": "列表",
                    "tableName": "baomingzhaopin"
                }],
                "menu": "报名招聘管理"
            }, {
                "child": [{
                    "buttons": ["查看", "修改", "删除", "新增"],
                    "menu": "简历上传",
                    "menuJump": "列表",
                    "tableName": "jianlishangchuan"
                }],
                "menu": "简历上传管理"
            }, {
                "child": [{
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "我的收藏管理",
                    "tableName": "storeup"
                }],
                "menu": "我的收藏管理"
            }],
            "frontMenu": [{
                "child": [{
                    "buttons": ["查看"],
                    "menu": "简历模板列表",
                    "menuJump": "列表",
                    "tableName": "jianlimoban"
                }],
                "menu": "简历模板模块"
            }, {
                "child": [{
                    "buttons": ["查看", "报名"],
                    "menu": "招聘会列表",
                    "menuJump": "列表",
                    "tableName": "zhaopinhui"
                }],
                "menu": "招聘会模块"
            }, {
                "child": [{
                    "buttons": ["查看", "新增"],
                    "menu": "简历上传列表",
                    "menuJump": "列表",
                    "tableName": "jianlishangchuan"
                }],
                "menu": "简历上传模块"
            }],
            "hasBackLogin": "否",
            "hasBackRegister": "否",
            "hasFrontLogin": "是",
            "hasFrontRegister": "是",
            "roleName": "用户",
            "tableName": "yonghu"
        }]
    }
}
export default menu;