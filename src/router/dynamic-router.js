// 订单管理
const Order = () => import('../pages/order-manage')
const OrderList = () => import('../pages/order-manage/order-list')
const ProductManage = () => import('../pages/order-manage/product-manage')
const ProductionList = () => import('../pages/order-manage/product-manage/production-list')
const ReviewManage = () => import('../pages/order-manage/product-manage/review-manage')
const ReturnGoods = () => import('../pages/order-manage/return-goods')

// 产品管理
const Goods = () => import('../pages/goods-manage')
const GoodsList = () => import('../pages/goods-manage/goods-list')
const GoodsClassify = () => import('../pages/goods-manage/goods-classify')

// 需要权限判断的路由
const dynamicRoutes = [
  {
    path: '/order',
    component: Order,
    name: 'order-manage',
    meta: {
      name: '订单管理',
      icon: 'icon-chanpinliebiaoliebiaomoshi'
    },
    children: [
      {
        path: 'list',
        name: 'order-list',
        component: OrderList,
        meta: {
          name: '订单列表',
          icon: 'icon-dingdanliebiao'
        }
      },
      {
        path: 'product',
        name: 'product-manage',
        component: ProductManage,
        meta: {
          name: '生产管理',
          icon: 'icon-shengchanguanli'
        },
        children: [
          {
            path: 'list',
            name: 'product-list',
            component: ProductionList,
            meta: {
              name: '生产列表',
              icon: 'icon-tubiaozhizuomoban-140'
            }
          },
          {
            path: 'review',
            name: 'review-manage',
            component: ReviewManage,
            meta: {
              name: '审核管理',
              icon: 'icon-wenbenshenhewancheng'
            }
          }
        ]
      },
      {
        path: 'returnGoods',
        name: 'return-goods',
        component: ReturnGoods,
        meta: {
          name: '退货管理',
          icon: 'icon-tui'
        }
      }
    ]
  },
  {
    path: '/goods',
    component: Goods,
    name: 'goods',
    meta: {
      name: '产品管理',
      icon: 'icon-ziyuan'
    },
    children: [
      {
        path: 'list',
        name: 'goods-list',
        component: GoodsList,
        meta: {
          name: '产品列表',
          icon: 'icon-iconfontdingdan'
        }
      },
      {
        path: 'classify',
        name: 'goods-classify',
        component: GoodsClassify,
        meta: {
          name: '产品分类',
          icon: 'icon-chanpinfenlei'
        }
      }
    ]
  }
]

export default dynamicRoutes
