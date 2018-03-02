module.exports = {
  data: {
    code: 200,
    data: {
      name: 'martin',
      age: 26,
      roles: ['admin'],
      columns: [
        {
          title: '序号',
          value: 'costcode',
          type: 'text',
          width: 200,
          fixed: 'left'
        }, {
          title: '特殊事项',
          value: 'costcodename',
          type: 'text',
          width: 300
        }, {
          title: '估算变量',
          value: 'budgetvariable',
          type: 'input',
          width: 200,
          colClass: 'bg_lightBlue'
        }, {
          title: '单位',
          value: 'specialunit',
          type: 'text',
          width: 100
        }, {
          title: '估算规则',
          value: 'calculationRule',
          type: 'text',
          width: 200
        }, {
          title: '参考成本(万元)',
          value: 'budgetCost',
          type: 'text',
          width: 200
        }, {
          title: '估算单价',
          value: 'budgetUnitPrice',
          type: 'input',
          width: 200,
          colClass: 'bg_lightBlue'
        }, {
          title: '实际成本',
          value: 'actualCost',
          type: 'text',
          width: 200
        }, {
          title: '备注',
          value: 'remark',
          type: 'input',
          width: 200,
          colClass: 'bg_lightBlue'
        }
      ],
      items: [
        {
          costcode: '(A)', // 唯一标识
          idStyle: {
            background: 'red'
          },
          checked: false,
          costcodename: '开发成本',
          budgetvariable: '',
          specialunit: '',
          calculationRule: '',
          budgetCost: '',
          budgetUnitPrice: '111',
          remark: '',
          actualCost: '',
          referenceunitprice: '',
          event: '事件1',
          comment: '无',
          backgroud: 'red',
          children: []
        },
        {
          costcode: '(A.01)', // 唯一标识
          idStyle: {
            background: 'red'
          },
          checked: false,
          costcodename: '土地费',
          budgetvariable: '',
          specialunit: '',
          calculationRule: '',
          budgetCost: '',
          budgetUnitPrice: '',
          remark: '',
          actualCost: '',
          referenceunitprice: '',
          event: '事件1',
          comment: '无',
          backgroud: 'red',
          children: [
            {
              costcode: '(A.01.01)', // 唯一标识
              checked: false,
              costcodename: '有房屋、建筑物、构筑物影响（拆除、保护、改善、补偿）',
              budgetvariable: '',
              calculationRule: '',
              specialunit: '项',
              budgetCost: '',
              budgetUnitPrice: '',
              actualCost: '',
              referenceunitprice: '',
              remark: '',
              event: '事件3',
              comment: '无'
            },
            {
              costcode: '(A.01.02)', // 唯一标识
              checked: false,
              costcodename: '高压线影响（拆除、迁移、埋地、防护）',
              budgetvariable: 1000,
              specialunit: 'm',
              calculationRule: '1、高压线迁移费用差不多1000元/m',
              budgetCost: '1,000,000',
              budgetUnitPrice: '200,000',
              actualCost: '',
              referenceunitprice: '100',
              remark: '做差值',
              event: '事件4',
              comment: '无'
            }, {
              costcode: '(A.01.03)', // 唯一标识
              checked: false,
              costcodename: '场地内坟墓（迁移、赔偿）',
              budgetvariable: '',
              specialunit: '项',
              calculationRule: '1、大坟墓影响约100万；2；一般中等影响约50万；3、小坟墓约20万。',
              budgetCost: '',
              budgetUnitPrice: '',
              actualCost: '',
              referenceunitprice: '',
              remark: '',
              event: '事件5',
              comment: '无'
            }, {
              costcode: '(A.01.04)', // 唯一标识
              checked: false,
              costcodename: '农田、林地、苗木影响',
              budgetvariable: '',
              specialunit: 'm2',
              calculationRule: '',
              budgetCost: '',
              budgetUnitPrice: '',
              actualCost: '',
              referenceunitprice: '',
              remark: '',
              event: '事件5',
              comment: '无'
            }, {
              costcode: '(A.01.05)', // 唯一标识
              checked: false,
              costcodename: '大型河道、沟渠影响',
              budgetvariable: '',
              specialunit: 'm',
              calculationRule: '',
              budgetCost: '',
              budgetUnitPrice: '',
              actualCost: '',
              referenceunitprice: '',
              remark: '',
              event: '事件5',
              comment: '无'
            }, {
              costcode: '(A.01.06)', // 唯一标识
              checked: false,
              costcodename: '矿坑影响',
              budgetvariable: '',
              specialunit: '项',
              calculationRule: '',
              budgetCost: '',
              budgetUnitPrice: '',
              actualCost: '',
              referenceunitprice: '',
              remark: '',
              event: '事件5',
              comment: '无'
            }, {
              costcode: '(A.01.07)', // 唯一标识
              checked: false,
              costcodename: '有古迹、地下文物影响（拆除、保护、改善）',
              budgetvariable: '',
              specialunit: '项',
              calculationRule: '',
              budgetCost: '',
              budgetUnitPrice: '',
              actualCost: '',
              referenceunitprice: '',
              remark: '',
              event: '事件5',
              comment: '无'
            }, {
              costcode: '(A.01.08)', // 唯一标识
              checked: false,
              costcodename: '有光缆（普通、军用）影响',
              budgetvariable: 10,
              specialunit: 'm',
              calculationRule: '普通军用光缆的迁移，大约1000-2000元/m',
              budgetCost: '230,000',
              budgetUnitPrice: '10,000',
              actualCost: '200,000',
              referenceunitprice: '50',
              remark: '',
              event: '事件5',
              comment: '无'
            }, {
              costcode: '(A.01.09)', // 唯一标识
              checked: false,
              costcodename: '有市政管线影响',
              budgetvariable: '',
              specialunit: '项',
              calculationRule: '',
              budgetCost: '',
              referenceunitprice: '',
              budgetUnitPrice: '',
              actualCost: '',
              remark: '',
              event: '事件5',
              comment: '无'
            }, {
              costcode: '(A.01.10)', // 唯一标识
              checked: false,
              costcodename: '土地自然灾害：有地裂缝、山体滑坡治理、山地泄洪等地质灾害影响',
              budgetvariable: '',
              specialunit: '项',
              calculationRule: '',
              budgetCost: '',
              budgetUnitPrice: '',
              actualCost: '',
              referenceunitprice: '',
              remark: '',
              event: '事件5',
              comment: '无'
            }, {
              costcode: '(A.01.11)', // 唯一标识
              checked: false,
              costcodename: '红线外附近有高压站、泵站等不利因素等迁移、改造、回避情况',
              budgetvariable: '',
              specialunit: '项',
              calculationRule: '',
              budgetCost: '',
              referenceunitprice: '',
              budgetUnitPrice: '',
              actualCost: '',
              remark: '',
              event: '事件5',
              comment: '无'
            }, {
              costcode: '(A.01.13)', // 唯一标识
              checked: false,
              costcodename: '其他特殊事项。。。',
              budgetvariable: '',
              specialunit: '项',
              calculationRule: '',
              budgetCost: '',
              referenceunitprice: '',
              budgetUnitPrice: '',
              actualCost: '',
              remark: '',
              event: '事件6',
              comment: '无',
              children: [
                {
                  costcode: '(A.01.13.01)', // 唯一标识
                  costcodename: '其他特殊事项。。。',
                  budgetvariable: '',
                  specialunit: '项',
                  calculationRule: '',
                  budgetCost: '',
                  budgetUnitPrice: '',
                  actualCost: '',
                  referenceunitprice: '',
                  remark: '',
                  event: '事件6',
                  comment: '无'
                }, {
                  costcode: '(A.01.13.02)', // 唯一标识
                  costcodename: '其他特殊事项。。。',
                  budgetvariable: '',
                  specialunit: '项',
                  calculationRule: '',
                  budgetCost: '',
                  referenceunitprice: '',
                  budgetUnitPrice: '',
                  actualCost: '',
                  remark: '',
                  event: '事件6',
                  comment: '无'
                }
              ]
            }, {
              costcode: '(A.01.14)', // 唯一标识
              checked: false,
              costcodename: '',
              budgetvariable: '',
              specialunit: '项',
              calculationRule: '',
              budgetCost: '',
              referenceunitprice: '',
              budgetUnitPrice: '',
              actualCost: '',
              remark: '',
              event: '事件5',
              comment: '无'
            }
          ]
        },
        {
          costcode: '(A.02)', // 唯一标识
          idStyle: {
            background: 'red'
          },
          checked: false,
          costcodename: '前期工程费',
          budgetvariable: '',
          specialunit: '',
          calculationRule: '',
          budgetCost: '',
          referenceunitprice: '',
          budgetUnitPrice: '',
          remark: '',
          actualCost: '1,000,000',
          event: '事件1',
          comment: '无',
          children: [],
          backgroud: 'red'
        },
        {
          costcode: '(A.03)', // 唯一标识
          idStyle: {
            background: 'red'
          },
          checked: false,
          costcodename: '配套设施费',
          budgetvariable: '',
          specialunit: '',
          children: [],
          calculationRule: '',
          budgetCost: '',
          referenceunitprice: '',
          budgetUnitPrice: '',
          remark: '',
          actualCost: '1,000,000',
          event: '事件1',
          comment: '无',
          backgroud: 'red'
        }
      ]
    }
  }
}
