/**
 * 基本成本模拟数据
 */
module.exports = {
  findStandardCost: {
    "msg": "success",
    "code": 1,
    "data": {
      "standardcostlist": [
        {
          "standardcostid": 1,
          "serialno": "1",
          "versionid": "2018_V1",
          "approvedstate": "已审批",
          "effectivestate": "生效",
          "approvedate": "2017-12-01",
          "cityname": "嘉兴",
          "producttypename": "高层",
          "constructioncfg": "P1",
          "glcaliberunit": 3200.00,
          "cwcaliberunit": 3200.00,
          "handlename": "李娜",
          "remark": "无"
        },
        {
          "standardcostid": 2,
          "serialno": "2",
          "versionid": "2018_V2",
          "approvedstate": "审批中",
          "effectivestate": "生效",
          "approvedate": "2017-12-31",
          "cityname": "绍兴",
          "producttypename": "高层",
          "constructioncfg": "P2",
          "glcaliberunit": 3200.00,
          "cwcaliberunit": 3200.00,
          "handlename": "刘刚",
          "remark": "无"
        }
      ]
    }
  },
  deleteStandardCost: {
    "code": 1,
    "msg": "success",
    "data": {
      "resultcode": "000",
      "resultmsg": "成功"
    }
  },
  findStandardCostBaseInfo : {
    "msg": "success",
    "code": 1,
    "data": {
      "standardcostid": "1",
      "standardversionid": "1",
      "city": "",
      "area": "",
      "producttypename": "别墅",
      "producttypecode": "",
      "producttypeid": "",
      "constructioncfg": "P2",
      "versionname": "2018_北京_V2",
      "changetype": "",
      "calculatedate": "2018-02-22",
      "createusername": "123",
      "versionremark": "随意",
      "VersionrBaseDtoList": [
        {
          "standardbaseinfoid": "1",
          "contentinfo": "龙湖1号",
          "provalue": "12.00",
          "baseremark": "龙湖",
          "serialno": "1"
        },
        {
          "standardbaseinfoid": "2",
          "contentinfo": "龙湖2号",
          "provalue": "13.00",
          "baseremark": "longfor",
          "serialno": "1"
        }
      ],
      "AnnexDtoList": [
        {
          "annexid": "",
          "uploaddate": "",
          "annextype": "",
          "annexname": "",
          "annesremark": "",
          "serialno": ""
        }
      ]
    }
  },
  saveStandardCostBaseInfo: {
    "msg": "success",
    "code": 1,
    "data": {
      "standardcostid": "1",
      "standardversionid": "1",
      "cityid": "1",
      "area": "",
      "producttypename": "别墅",
      "producttypecode": "",
      "producttypeid": "",
      "constructioncfg": "P2",
      "versionname": "2018_北京_V2",
      "changetype": "",
      "calculatedate": "2018-02-22",
      "createuserid": "123",
      "versionremark": "随意",
      "VersionrBaseDtoList": [
        {
          "standardbaseinfoid": "1",
          "contentinfo": "龙湖1号",
          "provalue": "12.00",
          "baseremark": "龙湖",
          "serialno": "1"
        },
        {
          "standardbaseinfoid": "2",
          "contentinfo": "龙湖2号",
          "provalue": "13.00",
          "baseremark": "longfor",
          "serialno": "1"
        }
      ],
      "AnnexDtoList": [
        {
          "annexid": "",
          "uploaddate": "",
          "annextype": "",
          "annexname": "",
          "annesremark": "",
          "serialno": ""
        }
      ]
    }
  },
  lookStandardCostProPlanTotalIndexBaseInfo: {
    "msg": "success",
    "code": 1,
    "data": {}
  },
  lookStandardCostProPlanTotalIndexInfo: {
    "msg": "success",
    "code": 1,
    "data": {
      "standardindicatorDto": [
        {
          "standardindicatorid": "",
          "indicatorid": "1",
          "indicatorname": "",
          "indicatorvalue": "",
          "indicatorunit": ""
        },
        {
          "standardindicatorid": "",
          "indicatorid": "2",
          "indicatorname": "",
          "indicatorvalue": "",
          "indicatorunit": "",
          "childList": [
            {
              "standardindicatorid": "",
              "indicatorid": "2.1",
              "indicatorname": "",
              "indicatorvalue": "",
              "indicatorunit": ""
            }
          ]
        }
      ]
    }
  },
  lookStandardCostProPlanTotalIndexMainPrice: {
    "msg": "success",
    "code": 1,
    "data": {
      "standardmunicipalearthDto": [
        {
          "standardmatpriceid": "",
          "serialno": "",
          "matpricename": "",
          "materialsprice": "",
          "materialsunit": "",
          "remark": ""
        }
      ]
    }
  },
  lookStandardMunicipalEarthDto: {
    "msg": "success",
    "code": 1,
    "data": {
      "standardmunicipalearthDto": [
        {
          "standardmunicipalid": "",
          "utilityconditions": "",
          "utilityconditionsdata": "",
          "utilityconditionsunit": "",
          "remark": ""
        }
      ]
    }
  },
  lookStandardViewIndicatorDto: {
    "msg": "success",
    "code": 1,
    "data": {
      "StandardviewindicatorDto": [
        {
          "standardviewindicatorid": "",
          "viewindicatorid": "",
          "viewindicator": "",
          "viewindicatorparentid": "",
          "viewarea": "",
          "viewunit": "",
          "viewpercent": "",
          "remark": ""
        }
      ]
    }
  },
  lookStandardEarthworkDto: {
    "msg": "success",
    "code": 1,
    "data": {
      "StandardviewindicatorDto": [
        {
          "standardearthworkid": "",
          "utilitycondition": "",
          "earthworkunit": "",
          "remark": "",
          "flag": ""
        }
      ]
    }
  },
  lookCmprotypeAreaForDto: {
    "msg": "success",
    "code": 1,
    "data": {
      "cmprotypeAreaForDto": [
        {
          "producttypename ": "住宅",
          "producttypeid": 1,
          "producttypeidlv": 1,
          "producttypeparentid": "1",
          "haschild": "0",
          "details": [
            {
              "standardprotypeareaid": 3,
              "producttypename": "住宅",
              "producttypecode": "zz",
              "producttypeid": 1,
              "producttypeidlv": 1,
              "producttypeparentid": "1",
              "haschild": "0",
              "areaonroad": 321,
              "areaunroad": 3211,
              "areagivonroad": 231,
              "areagivunroad": 231,
              "saleareaonroad": 2312,
              "saleareaunroad": 213213,
              "rentareaonroad": 31232,
              "rentareaunroad": 2321321,
              "jzarea": 21,
              "createdate": "2018-02-23 00:00:00",
              "rentjzonroad": 321,
              "rentjzunroad": 32131,
              "jzbuildarea": 321321,
              "jzactualjzbuildarea": 312321,
              "jzbuilddata": 32131,
              "standardcostid": 1
            }
          ]
        },
        {
          " producttypename ": "公建",
          "producttypeid": 1,
          "producttypeidlv": 1,
          "producttypeparentid": "1",
          "haschild": "0",
          "details": [
            {
              "standardprotypeareaid": 1,
              "producttypename": "非人防车库",
              "producttypecode": "frf",
              "producttypeid": 12,
              "producttypeidlv": 2,
              "producttypeparentid": "1",
              "haschild": "1",
              "areaonroad": 123,
              "areaunroad": 312,
              "areagivonroad": 21,
              "areagivunroad": 21,
              "saleareaonroad": 321,
              "saleareaunroad": 213,
              "rentareaonroad": 21,
              "rentareaunroad": 45,
              "jzarea": 65,
              "createdate": "2018-02-22 00:00:00",
              "rentjzonroad": 33,
              "rentjzunroad": 12,
              "jzbuildarea": 32,
              "jzactualjzbuildarea": 32,
              "jzbuilddata": 23,
              "standardcostid": 1
            }
          ]
        },
        {
          " producttypename ": "非人防车库及储藏室",
          "producttypeid": 1,
          "producttypeidlv": 1,
          "producttypeparentid": "1",
          "haschild": "0",
          "details": [

          ]
        },
        {
          " producttypename ": "配套",
          "producttypeid": 1,
          "producttypeidlv": 1,
          "producttypeparentid": "1",
          "haschild": "0",
          "details": [
            {
              "standardprotypeareaid": 2,
              "producttypename": "超高层",
              "producttypecode": "cgc",
              "producttypeid": 22,
              "producttypeidlv": 2,
              "producttypeparentid": "1",
              "haschild": "1",
              "areaonroad": 122,
              "areaunroad": 32,
              "areagivonroad": 321,
              "areagivunroad": 321,
              "saleareaonroad": 41,
              "saleareaunroad": 123,
              "rentareaonroad": 132,
              "rentareaunroad": 324,
              "jzarea": 65,
              "createdate": "2018-02-22 00:00:00",
              "rentjzonroad": 22,
              "rentjzunroad": 4,
              "jzbuildarea": 21,
              "jzactualjzbuildarea": 12,
              "jzbuilddata": 32,
              "standardcostid": 1
            }
          ]
        }
      ]
    }
  },
  exportCmprotypeAreaForDto: {
    "msg": "success",
    "code": 1,
    "data": {}
  },
  lookProtypeAttributeDtoList: {
    "msg": "success",
    "code": 1,
    "data": {
      "protypeAttributeHierarchyDtoList": [
        {
          "protypeAttributeDtoList": [
            {
              "standardcostid": "1",
              "standardprotypeattributeid": "1",
              "producttypeid": "1",
              "producttypecode": "1",
              "producttypename": "超高层(>100m)",
              "producttypeidlv": "3",
              "producttypeparentid": "",
              "haschild": "",
              "label": "",
              "buildingamt": "111",
              "flooramt": "111",
              "allflooramt": "111",
              "unitamt": "111",
              "elevatoramt": "111",
              "useramt": "111",
              "garageamt": "111",
              "eleparkingamt": "111",
              "floorhight": "111",
              "highwidepercent": "111",
              "buildinghigh": "111",
              "buildingwidth": "",
              "modelarea": "111",
              "structuralstyle": "",
              "seismicgrade": "",
              "planepercent": ""
            }
          ],
          "producttypename": "住宅",
          "producttypeid": "",
          "producttypeidlv": "2",
          "producttypeparentid": "",
          "haschild": ""
        },
        {
          "protypeAttributeDtoList": [
            {
              "standardcostid": "1",
              "standardprotypeattributeid": "2",
              "producttypeid": "10",
              "producttypecode": "10",
              "producttypename": "持有商业",
              "producttypeidlv": "3",
              "producttypeparentid": "",
              "haschild": "",
              "label": "",
              "buildingamt": "111",
              "flooramt": "111",
              "allflooramt": "111",
              "unitamt": "111",
              "elevatoramt": "111",
              "useramt": "111",
              "garageamt": "111",
              "eleparkingamt": "111",
              "floorhight": "111",
              "highwidepercent": "111",
              "buildinghigh": "111",
              "buildingwidth": "",
              "modelarea": "111",
              "structuralstyle": "",
              "seismicgrade": "",
              "planepercent": ""
            }
          ],
          "producttypename": "公建",
          "producttypeid": "",
          "producttypeidlv": "2",
          "producttypeparentid": "",
          "haschild": ""
        },
        {
          "protypeAttributeDtoList": [
            {
              "standardcostid": "1",
              "standardprotypeattributeid": "3",
              "producttypeid": "20",
              "producttypecode": "20",
              "producttypename": "非人防车库",
              "producttypeidlv": "3",
              "producttypeparentid": "",
              "haschild": "",
              "label": "",
              "buildingamt": "111",
              "flooramt": "111",
              "allflooramt": "111",
              "unitamt": "111",
              "elevatoramt": "111",
              "useramt": "111",
              "garageamt": "111",
              "eleparkingamt": "111",
              "floorhight": "111",
              "highwidepercent": "111",
              "buildinghigh": "111",
              "buildingwidth": "",
              "modelarea": "111",
              "structuralstyle": "",
              "seismicgrade": "",
              "planepercent": ""
            },
            {
              "standardcostid": "1",
              "standardprotypeattributeid": "9",
              "producttypeid": "21",
              "producttypecode": "21",
              "producttypename": "储藏室",
              "producttypeidlv": "3",
              "producttypeparentid": "",
              "haschild": "",
              "label": "",
              "buildingamt": "111",
              "flooramt": "111",
              "allflooramt": "111",
              "unitamt": "111",
              "elevatoramt": "111",
              "useramt": "111",
              "garageamt": "111",
              "eleparkingamt": "111",
              "floorhight": "111",
              "highwidepercent": "111",
              "buildinghigh": "111",
              "buildingwidth": "",
              "modelarea": "111",
              "structuralstyle": "",
              "seismicgrade": "",
              "planepercent": ""
            }
          ],
          "producttypename": "非人防车库及储藏室",
          "producttypeid": "",
          "producttypeidlv": "2",
          "producttypeparentid": "",
          "haschild": ""
        },
        {
          "protypeAttributeDtoList": [
            {
              "standardcostid": "1",
              "standardprotypeattributeid": "4",
              "producttypeid": "22",
              "producttypecode": "22",
              "producttypename": "学校",
              "producttypeidlv": "3",
              "producttypeparentid": "",
              "haschild": "",
              "label": "",
              "buildingamt": "111",
              "flooramt": "111",
              "allflooramt": "111",
              "unitamt": "111",
              "elevatoramt": "111",
              "useramt": "111",
              "garageamt": "111",
              "eleparkingamt": "111",
              "floorhight": "111",
              "highwidepercent": "111",
              "buildinghigh": "111",
              "buildingwidth": "",
              "modelarea": "111",
              "structuralstyle": "",
              "seismicgrade": "",
              "planepercent": ""
            },
            {
              "standardcostid": "1",
              "standardprotypeattributeid": "10",
              "producttypeid": "23",
              "producttypecode": "23",
              "producttypename": "幼儿园",
              "producttypeidlv": "3",
              "producttypeparentid": "",
              "haschild": "",
              "label": "",
              "buildingamt": "111",
              "flooramt": "111",
              "allflooramt": "111",
              "unitamt": "111",
              "elevatoramt": "111",
              "useramt": "111",
              "garageamt": "111",
              "eleparkingamt": "111",
              "floorhight": "111",
              "highwidepercent": "111",
              "buildinghigh": "111",
              "buildingwidth": "",
              "modelarea": "111",
              "structuralstyle": "",
              "seismicgrade": "",
              "planepercent": ""
            },
            {
              "standardcostid": "1",
              "standardprotypeattributeid": "11",
              "producttypeid": "24",
              "producttypecode": "24",
              "producttypename": "会所",
              "producttypeidlv": "3",
              "producttypeparentid": "",
              "haschild": "",
              "label": "",
              "buildingamt": "111",
              "flooramt": "111",
              "allflooramt": "111",
              "unitamt": "111",
              "elevatoramt": "111",
              "useramt": "111",
              "garageamt": "111",
              "eleparkingamt": "111",
              "floorhight": "111",
              "highwidepercent": "111",
              "buildinghigh": "111",
              "buildingwidth": "",
              "modelarea": "111",
              "structuralstyle": "",
              "seismicgrade": "",
              "planepercent": ""
            }
          ],
          "producttypename": "配套",
          "producttypeid": "",
          "producttypeidlv": "2",
          "producttypeparentid": "",
          "haschild": ""
        }
      ],
      "producttypename": "规划指标",
      "producttypeid": "",
      "producttypeidlv": "2",
      "producttypeparentid": "",
      "haschild": ""
    }
  },
  exportProtypeAttributeDtoList: {
    "msg": "success",
    "code": 1,
    "data": {}
  },
  exportProtypeConfigHierarchyDtoList: {
    "msg": "success",
    "code": 1,
    "data": {}
  },
  lookProductTypeDtoList: {
    "msg": "success",
    "code": 1,
    "data": {
      "ProducttypeDtoList": [
        {
          "producttypename": "高层",
          "ProducttypeModuleDto": {
            "stairProductconfigDtoList": [
              {
                "productconfig": "外立面",
                "proconfiglv": "",
                "productconfigid": "",
                "productconfigparentid": "",
                "haschild": "",
                "secondProductconfigDtoList": [
                  {
                    "productconfig": "门窗、百页",
                    "proconfiglv": "",
                    "productconfigid": "",
                    "productconfigparentid": "",
                    "haschild": "",
                    "thirdProductconfigDtoList": [
                      {
                        "productconfig": "外窗形式",
                        "proconfiglv": "",
                        "productconfigid": "",
                        "productconfigparentid": "",
                        "haschild": "",
                        "ProductconfigDtoList": [
                          {
                            "standardcostid": "",
                            "standardprodtypeid": "",
                            "productconfig": "",
                            "proconfiglv": "",
                            "productconfigid": "",
                            "productconfigparentid": "",
                            "haschild": "",
                            "pricebasedata": "",
                            "dataunit": "",
                            "constructconfig": "",
                            "standardconfig": "",
                            "referenceprice": "",
                            "actualconfig": "",
                            "actualprice": "",
                            "remark": "",
                            "producttypeid": "",
                            "producttypename": "",
                            "producttypecode": ""
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        },
        {
          "producttypename": "花园洋房 (9层以下）",
          "ProducttypeModuleDto": {
            "stairProductconfigDtoList": [
              {
                "productconfig": "外立面",
                "proconfiglv": "",
                "productconfigid": "",
                "productconfigparentid": "",
                "haschild": "",
                "secondProductconfigDtoList": [
                  {
                    "productconfig": "门窗、百页",
                    "proconfiglv": "",
                    "productconfigid": "",
                    "productconfigparentid": "",
                    "haschild": "",
                    "thirdProductconfigDtoList": [
                      {
                        "productconfig": "外窗形式",
                        "proconfiglv": "",
                        "productconfigid": "",
                        "productconfigparentid": "",
                        "haschild": "",
                        "ProductconfigDtoList": [
                          {
                            "standardcostid": "",
                            "standardprodtypeid": "",
                            "productconfig": "",
                            "proconfiglv": "",
                            "productconfigid": "",
                            "productconfigparentid": "",
                            "haschild": "",
                            "pricebasedata": "",
                            "dataunit": "",
                            "constructconfig": "",
                            "standardconfig": "",
                            "referenceprice": "",
                            "actualconfig": "",
                            "actualprice": "",
                            "remark": "",
                            "producttypeid": "",
                            "producttypename": "",
                            "producttypecode": ""
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        },
        {
          "producttypename": "小高层(10-18层)",
          "ProducttypeModuleDto": {
            "stairProductconfigDtoList": [
              {
                "productconfig": "外立面",
                "proconfiglv": "",
                "productconfigid": "",
                "productconfigparentid": "",
                "haschild": "",
                "secondProductconfigDtoList": [
                  {
                    "productconfig": "门窗、百页",
                    "proconfiglv": "",
                    "productconfigid": "",
                    "productconfigparentid": "",
                    "haschild": "",
                    "thirdProductconfigDtoList": [
                      {
                        "productconfig": "外窗形式",
                        "proconfiglv": "",
                        "productconfigid": "",
                        "productconfigparentid": "",
                        "haschild": "",
                        "ProductconfigDtoList": [
                          {
                            "standardcostid": "",
                            "standardprodtypeid": "",
                            "productconfig": "",
                            "proconfiglv": "",
                            "productconfigid": "",
                            "productconfigparentid": "",
                            "haschild": "",
                            "pricebasedata": "",
                            "dataunit": "",
                            "constructconfig": "",
                            "standardconfig": "",
                            "referenceprice": "",
                            "actualconfig": "",
                            "actualprice": "",
                            "remark": "",
                            "producttypeid": "",
                            "producttypename": "",
                            "producttypecode": ""
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        }
      ]
    }
  },
  lookStandardProtypeBuildList: {
    "msg": "success",
    "code": 1,
    "data": {
      "standardcostid": "1",
      "standardprotypebuildlist": [
        {
          "protypename": "超高层（>100m）",
          "protypecode": "cgc",
          "protypeid": "1",
          "details": [
            {
              "standardprotypebuildid": "1",
              "productconfigid": "1",
              "productconfig": "混凝土框架"
            },
            {
              "standardprotypebuildid": "2",
              "productconfigid": "2",
              "productconfig": "无"
            },
            {
              "standardprotypebuildid": "3",
              "productconfigid": "3",
              "productconfig": "墙面面砖+玻璃橱窗+铝合金百叶+广告灯箱+钢构架玻璃雨蓬+石材踢脚与压顶"
            },
            {
              "standardprotypebuildid": "4",
              "productconfigid": "4",
              "productconfig": "地面水泥砂浆找平，拉毛，（底层做空心板，架空板防潮处理）"
            },
            {
              "standardprotypebuildid": "5",
              "productconfigid": "5",
              "productconfig": "UPVC管"
            },
            {
              "standardprotypebuildid": "6",
              "productconfigid": "6",
              "productconfig": ""
            },
            {
              "standardprotypebuildid": "7",
              "productconfigid": "7",
              "productconfig": "铁皮风管"
            }
          ]
        },
        {
          "protypename": "高层(18层以上，但<100m)",
          "protypecode": "gc",
          "protypeid": "2",
          "details": [
            {
              "standardprotypebuildid": "8",
              "productconfigid": "1",
              "productconfig": "混凝土框架"
            },
            {
              "standardprotypebuildid": "9",
              "productconfigid": "2",
              "productconfig": "无"
            },
            {
              "standardprotypebuildid": "10",
              "productconfigid": "3",
              "productconfig": "墙面面砖+玻璃橱窗+铝合金百叶+广告灯箱+钢构架玻璃雨蓬+石材踢脚与压顶"
            },
            {
              "standardprotypebuildid": "11",
              "productconfigid": "4",
              "productconfig": "地面水泥砂浆找平，拉毛，（底层做空心板，架空板防潮处理）"
            },
            {
              "standardprotypebuildid": "12",
              "productconfigid": "5",
              "productconfig": "UPVC管"
            },
            {
              "standardprotypebuildid": "13",
              "productconfigid": "6",
              "productconfig": ""
            },
            {
              "standardprotypebuildid": "14",
              "productconfigid": "7",
              "productconfig": "铁皮风管"
            }
          ]
        }
      ]
    }
  },
  exportStandardCollectHierarchy: {
    "msg": "success",
    "code": 1,
    "data": {}
  },
  lookStandardCollectPlanInfo: {
    "msg": "success",
    "code": 1,
    "data": {}
  },
  lookStandardCollectInfo: {
    "msg": "success",
    "code": 1,
    "data": {}
  },
  lookStandardNotBuildInfo: {
    "msg": "success",
    "code": 1,
    "data": {}
  },
  lookStandardCostBuildBaseEngineerInfo: {
    "msg": "success",
    "code": 1,
    "data": {
      "titles": [
        {
          "title": "地基与基础工程",
          "index": "1"
        },
        {
          "title": "高层",
          "index": "2"
        },
        {
          "title": "洋房",
          "index": "3"
        },
        {
          "title": "非人防车库",
          "index": "4"
        },
        {
          "title": "index",
          "index": "人防车库"
        }
      ],
      "cost": {
        "standardcostid": "1",
        "costlist": {
          "standardcostbuildid": "1",
          "expenditure": "1",
          "costcodename": "地基与基础工程",
          "costcode": "",
          "costcodelv": "",
          "costcodeparentid": "",
          "ischild": "",
          "indicatorsremark": "",
          "indicatorsdata": "",
          "coefficientdata": "",
          "coefficientunit": "",
          "engineerdata": "",
          "engineerunit": "",
          "unitprice": "",
          "sumprice": "801",
          "buildareaunitprice": "41",
          "nowbuildareaunitprice": "36",
          "leaseunit": "44",
          "costremark": "成本费用说明。。。",
          "Remark": "",
          "details": [
            {
              "standardcostid": "2",
              "expenditure": "1.1",
              "costcodename": "地基与基础工程",
              "costcode": "",
              "costcodelv": "",
              "costcodeparentid": "",
              "indicatorsremark": "",
              "indicatorsdata": "",
              "coefficientdata": "",
              "coefficientunit": "",
              "engineerdata": "",
              "engineerunit": "",
              "unitprice": "",
              "sumprice": "757",
              "buildareaunitprice": "38",
              "nowbuildareaunitprice": "34",
              "leaseunit": "42",
              "costremark": "成本费用说明。。。",
              "Remark": "",
              "costdetailList": [
                {
                  "standardcostid": "3",
                  "expenditure": "(1)",
                  "costcodename": "土方开挖",
                  "costcode": "",
                  "costcodelv": "",
                  "costcodeparentid": "",
                  "indicatorsremark": "基底面",
                  "indicatorsdata": 63,
                  "coefficientdata": "3.00",
                  "coefficientunit": "m3/m",
                  "engineerdata": "189.17",
                  "engineerunit": "m3",
                  "unitprice": "13",
                  "sumprice": "246",
                  "buildareaunitprice": "12",
                  "nowbuildareaunitprice": "11",
                  "leaseunit": "14",
                  "costremark": "成本费用说明。。。",
                  "Remark": "",

                },
                {
                  "standardcostid": "4",
                  "expenditure": "(2)",
                  "costcodename": "土方外运",
                  "costcode": "",
                  "costcodelv": "",
                  "costcodeparentid": "",
                  "indicatorsremark": "基底面",
                  "indicatorsdata": 63,
                  "coefficientdata": "2.00",
                  "coefficientunit": "m3/m",
                  "engineerdata": "126.11",
                  "engineerunit": "m3",
                  "unitprice": "28",
                  "sumprice": "353",
                  "buildareaunitprice": "18",
                  "nowbuildareaunitprice": "16",
                  "leaseunit": "20",
                  "costremark": "成本费用说明。。。",
                  "Remark": ""
                }
              ]
            },
            {
              "standardcostid": "5",
              "expenditure": "1.2",
              "costcodename": "护坡工程",
              "costcode": "",
              "costcodelv": "",
              "costcodeparentid": "",
              "indicatorsremark": "",
              "indicatorsdata": "",
              "coefficientdata": "",
              "coefficientunit": "",
              "engineerdata": "",
              "engineerunit": "",
              "unitprice": "",
              "sumprice": "757",
              "buildareaunitprice": "38",
              "nowbuildareaunitprice": "34",
              "leaseunit": "42",
              "costremark": "成本费用说明。。。",
              "Remark": "",
              "costdetailList": [
                {
                  "standardcostid": "6",
                  "expenditure": "(1)",
                  "costcodename": "放坡喷锚",
                  "costcode": "",
                  "costcodelv": "",
                  "costcodeparentid": "",
                  "indicatorsremark": "护坡面积",
                  "indicatorsdata": 63,
                  "coefficientdata": "3.00",
                  "coefficientunit": "m2/m2",
                  "engineerdata": "189.17",
                  "engineerunit": "m2",
                  "unitprice": "13",
                  "sumprice": "246",
                  "buildareaunitprice": "12",
                  "nowbuildareaunitprice": "11",
                  "leaseunit": "14",
                  "costremark": "成本费用说明。。。",
                  "Remark": "",

                },
                {
                  "standardcostid": "6",
                  "expenditure": "(2)",
                  "costcodename": "土钉或锚杆",
                  "costcode": "",
                  "costcodelv": "",
                  "costcodeparentid": "",
                  "indicatorsremark": "护坡面积",
                  "indicatorsdata": 63,
                  "coefficientdata": "2.00",
                  "coefficientunit": "m2/m2",
                  "engineerdata": "126.11",
                  "engineerunit": "m2",
                  "unitprice": "28",
                  "sumprice": "353",
                  "buildareaunitprice": "18",
                  "nowbuildareaunitprice": "16",
                  "leaseunit": "20",
                  "costremark": "成本费用说明。。。",
                  "Remark": "",
                }
              ]
            }
          ]
        }
      }
    }
  },
  exportStandardCostBuildBaseEngineerInfo: {
    "msg": "success",
    "code": 1,
    "data": {}
  },
  exportStandardCostBuildHeightHierarchy: {
    "msg": "success",
    "code": 1,
    "data": {}
  },
  lookStandardCostBuildHeightInfo: {
    "msg": "success",
    "code": 1,
    "data": {}
  },
  getStandardCostBuildBungalowsHierarchy: {
    "msg": "success",
    "code": 1,
    "data": {}
  },
  lookStandardCostBuildBungalowsInfo: {
    "msg": "success",
    "code": 1,
    "data": {}
  },
  getStandardCostBuildNoneGarageHierarchy: {
    "msg": "success",
    "code": 1,
    "data": {}
  },
  lookStandardCostBuildNoneGarageInfo: {
    "msg": "success",
    "code": 1,
    "data": {}
  },
  lookStandardCostBuildGarageInfoHierarchy: {
    "msg": "success",
    "code": 1,
    "data": {}
  },
  lookStandardCostBuildGarageInfo: {
    "msg": "success",
    "code": 1,
    "data": {}
  },
  saveStandardCostStatementShareFinance: {
    "msg": "success",
    "code": 1,
    "data": {
      "FinancePlanningDtoList": [
        {
          "standardcostshareid": "",
          "sharetype": "",
          "standardcostid": "",
          "shareinfoparentid": "",
          "haschild": "",
          " serialno ": "",
          "shareinfo": "开发成本（元/平米）",
          "FinanceTotalDtoList": [
            {
              "standardcostshareid": "",
              "shareinfoparentid": "",
              "haschild": "",
              " serialno ": "",
              "detailshareinfo": "合计",
              "FinanceProducttypeDtoList": [
                {
                  "standardcostshareid": "",
                  "shareinfoparentid": "",
                  "haschild": "",
                  " serialno ": "",
                  "producttypename": "叠拼别墅",
                  "producttypecode": "",
                  "producttypeid": "",
                  "shareamt": ""
                }
              ],
              "FinanceConAndRenCostsDtoList": [
                {
                  "standardcostshareid": "",
                  "shareinfoparentid": "",
                  "haschild": "",
                  " serialno ": "",
                  "detailshareinfo": "建安及装修工程费",
                  "FinanceProducttypeDtoList": [
                    {
                      "standardcostshareid": "",
                      "shareinfoparentid": "",
                      "haschild": "",
                      " serialno ": "",
                      "producttypename": "叠拼别墅",
                      "producttypecode": "",
                      "producttypeid": "",
                      "shareamt": ""
                    }
                  ],
                  "FinanceCostsDtoList": [
                    {
                      "standardcostshareid": "",
                      "shareinfoparentid": "",
                      "haschild": "",
                      " serialno ": "",
                      "detailshareinfo": "其中：业态建安",
                      "FinanceProducttypeDtoList": [
                        {
                          "standardcostshareid": "",
                          "shareinfoparentid": "",
                          "haschild": "",
                          " serialno ": "",
                          "producttypename": "叠拼别墅",
                          "producttypecode": "",
                          "producttypeid": "",
                          "shareamt": ""
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  },
  lookStandardCostStatementShareFinance: {
    "msg": "success",
    "code": 1,
    "data": {
      "FinancePlanningDtoList": [
        {
          "standardcostshareid": "",
          "sharetype": "",
          "standardcostid": "",
          "shareinfoparentid": "",
          "haschild": "",
          " serialno ": "",
          "shareinfo": "开发成本（元/平米）",
          "FinanceTotalDtoList": [
            {
              "standardcostshareid": "",
              "shareinfoparentid": "",
              "haschild": "",
              " serialno ": "",
              "detailshareinfo": "合计",
              "FinanceProducttypeDtoList": [
                {
                  "standardcostshareid": "",
                  "shareinfoparentid": "",
                  "haschild": "",
                  " serialno ": "",
                  "producttypename": "叠拼别墅",
                  "producttypecode": "",
                  "producttypeid": "",
                  "shareamt": ""
                }
              ],
              "FinanceConAndRenCostsDtoList": [
                {
                  "standardcostshareid": "",
                  "shareinfoparentid": "",
                  "haschild": "",
                  " serialno ": "",
                  "detailshareinfo": "建安及装修工程费",
                  "FinanceProducttypeDtoList": [
                    {
                      "standardcostshareid": "",
                      "shareinfoparentid": "",
                      "haschild": "",
                      " serialno ": "",
                      "producttypename": "叠拼别墅",
                      "producttypecode": "",
                      "producttypeid": "",
                      "shareamt": ""
                    }
                  ],
                  "FinanceCostsDtoList": [
                    {
                      "standardcostshareid": "",
                      "shareinfoparentid": "",
                      "haschild": "",
                      " serialno ": "",
                      "detailshareinfo": "其中：业态建安",
                      "FinanceProducttypeDtoList": [
                        {
                          "standardcostshareid": "",
                          "shareinfoparentid": "",
                          "haschild": "",
                          " serialno ": "",
                          "producttypename": "叠拼别墅",
                          "producttypecode": "",
                          "producttypeid": "",
                          "shareamt": ""
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  },
  exportStandardCostStatementBuildContract: {
    "msg": "success",
    "code": 1,
    "data": {}
  },
  lookStandardCostStatementBuildContract: {
    "msg": "success",
    "code": 1,
    "data": {}
  },
  saveStandardCostDataBaseLimit: {
    "msg": "",
    "code": "",
    "data": {
      "standardlimitid": "",
      "standardcostid": "",
      "shareinfoparentid": "",
      "haschild": "",
      " serialno ": "",
      "costcodelevel": "",
      "costcode": "",
      "costcodename": "前期工程费",
      "billingbasic": "",
      "chargeremark": "",
      "chargeorder": "",
      "chargernuit": "",
      "DesignProducttypeDtoList": [{
        "standardlimitid": "",
        "shareinfoparentid": "",
        "haschild": "",
        " serialno ": "",
        "producttypename": "",
        "producttypecode": "",
        "producttypeid": "",
        "shareamt": ""
      }],
      " DesignSurveyDtoList ": [{
        "standardlimitid": "",
        "shareinfoparentid": "",
        "haschild": "",
        " serialno ": "",
        "costcodelevel": "",
        "costcode": "",
        "costcodename": "勘测、设计费",
        "billingbasic": "",
        "chargeremark": "",
        "chargeorder": "",
        "chargernuit": "",
        "DesignProducttypeDtoList": [{
          "standardlimitid": "",
          "shareinfoparentid": "",
          "haschild": "",
          " serialno ": "",
          "producttypename": "",
          "producttypecode": "",
          "producttypeid": "",
          "shareamt": ""

        }],
        " SurveydtoDtoList ": [{
          "standardlimitid": "",
          "shareinfoparentid": "",
          "haschild": "",
          " serialno ": "",
          "costcodelevel": "",
          "costcode": "",
          "costcodename": "勘测费",
          "billingbasic": "",
          "chargeremark": "",
          "chargeorder": "",
          "chargernuit": "",
          "DesignProducttypeDtoList": [{
            "standardlimitid": "",
            "shareinfoparentid": "",
            "haschild": "",
            " serialno ": "",
            "producttypename": "",
            "producttypecode": "",
            "producttypeid": "",
            "shareamt": ""
          }],
          " DesignContractDtoList ": [{
            "standardlimitid": "",
            "shareinfoparentid": "",
            "haschild": "",
            " serialno ": "",
            "costcodelevel": "",
            "costcode": "",
            "costcodename": "合同",
            "billingbasic": "",
            "chargeremark": "",
            "chargeorder": "",
            "chargernuit": "",
            "DesignProducttypeDtoList": [{
              "standardlimitid": "",
              "shareinfoparentid": "",
              "haschild": "",
              " serialno ": "",
              "producttypename": "",
              "producttypecode": "",
              "producttypeid": "",
              "shareamt": ""
            }]
          }]
        }]
      }]
    }
  },
  lookStandardCostDataBaseLimit: {
    "msg": "",
    "code": "",
    "data": {
      "standardlimitid": "",
      "standardcostid": "",
      "shareinfoparentid": "",
      "haschild": "",
      " serialno ": "",
      "costcodelevel": "",
      "costcode": "",
      "costcodename": "前期工程费",
      "billingbasic": "",
      "chargeremark": "",
      "chargeorder": "",
      "chargernuit": "",
      "DesignProducttypeDtoList": [{
        "standardlimitid": "",
        "shareinfoparentid": "",
        "haschild": "",
        " serialno ": "",
        "producttypename": "",
        "producttypecode": "",
        "producttypeid": "",
        "shareamt": ""
      }],
      " DesignSurveyDtoList ": [{
        "standardlimitid": "",
        "shareinfoparentid": "",
        "haschild": "",
        " serialno ": "",
        "costcodelevel": "",
        "costcode": "",
        "costcodename": "勘测、设计费",
        "billingbasic": "",
        "chargeremark": "",
        "chargeorder": "",
        "chargernuit": "",
        "DesignProducttypeDtoList": [{
          "standardlimitid": "",
          "shareinfoparentid": "",
          "haschild": "",
          " serialno ": "",
          "producttypename": "",
          "producttypecode": "",
          "producttypeid": "",
          "shareamt": ""

        }],
        " SurveydtoDtoList ": [{
          "standardlimitid": "",
          "shareinfoparentid": "",
          "haschild": "",
          " serialno ": "",
          "costcodelevel": "",
          "costcode": "",
          "costcodename": "勘测费",
          "billingbasic": "",
          "chargeremark": "",
          "chargeorder": "",
          "chargernuit": "",
          "DesignProducttypeDtoList": [{
            "standardlimitid": "",
            "shareinfoparentid": "",
            "haschild": "",
            " serialno ": "",
            "producttypename": "",
            "producttypecode": "",
            "producttypeid": "",
            "shareamt": ""
          }],
          " DesignContractDtoList ": [{
            "standardlimitid": "",
            "shareinfoparentid": "",
            "haschild": "",
            " serialno ": "",
            "costcodelevel": "",
            "costcode": "",
            "costcodename": "合同",
            "billingbasic": "",
            "chargeremark": "",
            "chargeorder": "",
            "chargernuit": "",
            "DesignProducttypeDtoList": [{
              "standardlimitid": "",
              "shareinfoparentid": "",
              "haschild": "",
              " serialno ": "",
              "producttypename": "",
              "producttypecode": "",
              "producttypeid": "",
              "shareamt": ""
            }]
          }]
        }]
      }]
    }
  },
  exportStandardCostDataBaseEarlier: {
    "msg": "success",
    "code": 1,
    "data": {}
  },
  lookStandardCostDataBaseEarlier: {
    "msg": "success",
    "code": 1,
    "data": {}
  },
  exportStandardCostDataBaseAncillaryFacility: {
    "msg": "success",
    "code": 1,
    "data": {}
  },
  lookStandardCostDataBaseAncillaryFacility: {
    "msg": "success",
    "code": 1,
    "data": {}
  },
  exportStandardCostDataBaseBaseFacility: {
    "msg": "success",
    "code": 1,
    "data": {}
  },
  lookStandardCostDataBaseBaseFacility: {
    "msg": "success",
    "code": 1,
    "data": {}
  },
  exportStandardCostDataBaseEngineeringCost: {
    "msg": "success",
    "code": 1,
    "data": {}
  },
  lookStandardCostDataBaseEngineeringCost: {
    "msg": "success",
    "code": 1,
    "data": {}
  },
  exportStandardCostDataBaseSupplement: {
    "msg": "success",
    "code": 1,
    "data": {}
  },
  lookStandardCostDataBaseSupplement: {
    "msg": "success",
    "code": 1,
    "data": {}
  },
  exportStandardCostDataBaseSpecialHierarchy: {
    "msg": "success",
    "code": 1,
    "data": {}
  },
  lookStandardCostDataBaseSpecialHierarchy: {
    "msg": "success",
    "code": 1,
    "data": {}
  }
}
