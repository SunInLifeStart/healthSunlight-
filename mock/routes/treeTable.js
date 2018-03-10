module.exports = {
  data: {
    code: 200,
    data: {
      name: 'martin',
      age: 26,
      roles: ['admin'],
      columns: [{
        title: '项目',
        value: 'id',
        type: 'text',
        width: 300,
        index: 0,
        fixed: 'left',
        sortable: true
      }, {
        title: '估算基础&&估算量',
        value: 'value1',
        type: 'select',
        width: 200,
        index: 1,
        sortable: true,
        tooltip: 'tooltip', // 暂时测试字段 不可用
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        children: [{
          title: '估算基础',
          value: 'value1',
          type: 'select',
          options: [{
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶'
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }, {
            value: '选项4',
            label: '龙须面'
          }, {
            value: '选项5',
            label: '北京烤鸭'
          }],
          width: 200,
          index: 1,
          sortable: true
        }, {
          title: '估算量',
          value: 'value2',
          type: 'text',
          width: 200,
          index: 2,
          children: [{
            title: 'aaa',
            value: 'comment5',
            type: 'input',
            width: 200,
            index: 7
          }, {
            title: 'bbb',
            value: 'comment6',
            type: 'input',
            width: 200,
            index: 8
          }]
        }]
      }, {
        title: '单位&&单价（元）',
        value: 'comment1',
        type: 'input',
        width: 200,
        index: 3,
        // 整列样式 可选
        colClass: 'bg_lightBlue',
        children: [{
          title: '单位',
          value: 'comment1',
          type: 'input',
          width: 200,
          index: 3,
          // 整列样式 可选
          colClass: 'bg_lightBlue'
        }, {
          title: '单价（元）',
          value: 'comment2',
          type: 'input',
          width: 200,
          index: 4
        }]
      }, {
        title: '合价（万元）',
        value: 'comment3',
        type: 'input',
        width: 200,
        index: 5
      }, {
        title: '可租售产权面积单价（元）',
        value: 'comment4',
        type: 'input',
        width: 200,
        index: 6
      }, {
        title: '建面面积单价（元）',
        value: 'comment5',
        type: 'input',
        width: 200,
        index: 7
      }, {
        title: '取票率',
        value: 'comment6',
        type: 'input',
        width: 200,
        index: 8
      }, {
        title: '综合进项税率',
        value: 'comment7',
        type: 'input',
        width: 200,
        index: 9
      }, {
        title: '进项税率',
        value: 'comment8',
        type: 'input',
        width: 200,
        index: 10
      }],
      items: [{
        id: 1, // 唯一标识 如果不需要自定义样式可不用对象 直接 id：1即可
        checked: false,
        value1: '选项5',
        value2: '777090909090909090909090909090909090909090111',
        // 自定义单个表格样式
        cellStyles: [{
          col: 0, // 列
          class: 'font_color_red'
        }, {
          col: 2, // 列
          class: 'font_color_red',
          type: 'input' // 可录入
        }],
        event: '事件1',
        comment: '无',
        backgroud: 'red',
        children: [{
          id: 2, // 唯一标识
          checked: false,
          value1: '选项2',
          value2: 777,
          event: '事件2',
          comment: '无',
          mergeFlag: true,
          cellStyles: [{
            col: 0, // 列
            class: 'font_color_red'
          }, {
            col: 2,
            class: 'bg_grey',
            type: 'input',
            tooltip: ['我是id2的tooltip', '我是第二行', '我是第三行'] // 鼠标划过提示信息
          }],
          children: [{
            id: 71, // 唯一标识
            parentId: 2,
            checked: false,
            value1: '选项2',
            value2: '2-1',
            event: '事件71',
            cellStyles: [{
              col: 0, // 列
              class: 'font_color_red'
            }, {
              col: 3,
              class: 'bg_grey font_color_green',
              tooltip: ['我是id71的tooltip', '我是第二行', '我是第三行'] // 鼠标划过提示信息
            }],
            comment: 'xx'
          }, {
            id: 72, // 唯一标识
            parentId: 2,
            checked: false,
            value1: '选项2',
            value2: '2-2',
            event: '事件72',
            comment: 'xx'
          }, {
            id: 73, // 唯一标识
            parentId: 2,
            checked: false,
            value1: '选项2',
            value2: '2-3',
            event: '事件73',
            comment: 'xx'
          }]
        }, {
          id: 3, // 唯一标识
          checked: false,
          value1: '选项2',
          value2: 777,
          event: '事件3',
          comment: '无',
          tooltip: '123123adasd', // 暂时测试不可用
          children: [{
            id: 4, // 唯一标识
            checked: false,
            tooltip: [123123, 3123123], // 暂时测试不可用
            value1: '选项2',
            value2: 777,
            event: '事件4',
            comment: '无'
          }, {
            id: 5, // 唯一标识
            checked: false,
            value1: '选项2',
            value2: 777,
            event: '事件5',
            comment: '无'
          }, {
            id: 6, // 唯一标识
            checked: false,
            value1: '选项2',
            value2: 777,
            event: '事件6',
            comment: '无',
            children: [{
              id: 7, // 唯一标识
              checked: false,
              value1: '选项2',
              value2: 777,
              event: '事件7',
              comment: '无',
              mergeFlag: true, // 是否合并children标识
              children: [{
                id: 71, // 唯一标识
                parentId: 7,
                checked: false,
                value1: '选项2',
                value2: '7-1',
                event: '事件71',
                comment: 'xx'
              }, {
                id: 72, // 唯一标识
                parentId: 7,
                checked: false,
                value1: '选项2',
                value2: '7-2',
                event: '事件72',
                comment: 'xx'
              }, {
                id: 73, // 唯一标识
                parentId: 7,
                checked: false,
                value1: '选项2',
                value2: '7-3',
                event: '事件73',
                comment: 'xx'
              }]
            }, {
              id: 8, // 唯一标识
              checked: false,
              value1: '选项2',
              value2: 777,
              event: '事件8',
              comment: '无'
            }]
          }]
        }]
      }]
    }
  }
}
