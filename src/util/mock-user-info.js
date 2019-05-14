export const tokens = {
  admin: 'admin-token',
  visitor: 'visitor-token'
}

export const userInfoList = {
  'admin-token': {
    name: '至尊宝',
    avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557495976853&di=3d57f91b4e885cfae438d067b07e6ff9&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201701%2F18%2F20170118234946_UmwMS.thumb.224_0.jpeg',
    username: 'admin',
    roleId: 'admin',
    role: {
      permissions: [
        {
          permissionId: 'dashboard',
          permissionName: '首页',
          actionList: ['profit']
        },
        {
          permissionId: 'permission',
          permissionName: '权限',
          actionList: ['add']
        },
        {
          permissionId: 'form',
          permissionName: '表单',
          actionList: ['add']
        },
        {
          permissionId: 'permissionForm',
          permissionName: '权限表单',
          actionList: ['add', 'delete']
        }
      ]
    }
  },
  'visitor-token': {
    name: '唐僧',
    avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557496245032&di=70e18d8e14e9f26abc85284421d89771&imgtype=0&src=http%3A%2F%2Faliimg.changba.com%2Fcache%2Fphoto%2F134115095_640_640.jpg',
    username: 'visitor',
    roleId: 'visitor',
    role: {
      permissions: [
        {
          permissionId: 'dashboard',
          permissionName: '首页',
          actionList: []
        },
        {
          permissionId: 'form',
          permissionName: '表单',
          actionList: []
        }
      ]
    }
  }
}
