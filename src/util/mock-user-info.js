export const tokens = {
  admin: 'admin-token',
  visitor: 'visitor-token'
}

export const userInfos = {
  'admin-token': {
    name: 'Admin',
    roles: ['admin'],
    rules: {
      views: {
        Login: true,
        Layout: true,
        Dashboard: true,
        Document: true,
        DocumentIndex: true,
        Conventions: true,
        Menu: true,
        Menu1: true,
        Menu11: true,
        Menu12: true,
        Menu2: true,
        Err404: true,
        Permission: true,
        PermissionIndex: true,
        Form: true,
        Form1: true,
        Form2: true,
        All: true
      },
      components: {}
    }
  },
  'visitor-token': {
    name: 'Visitor',
    roles: ['visitor'],
    rules: {
      views: {
        Login: true,
        Layout: true,
        Dashboard: true,
        Document: true,
        DocumentIndex: true,
        Conventions: true,
        Menu: true,
        Menu1: true,
        Menu11: true,
        Menu12: true,
        Menu2: true,
        Err404: true,
        Permission: false,
        PermissionIndex: false,
        Form: true,
        Form1: true,
        Form2: false,
        All: true
      },
      components: {}
    }
  }
}
