export interface IAdmin {
  name: string
  email: string
  password: string
}
export interface ITokenUser {
  name: string
  email: string
}

export interface IContact {
  _id: string
  name: string
  email: string
  phone: string
  message: string
  createdAt: string
}

export interface IContext {
  loading: boolean
  contacts: IContact[]
  getContacts: () => Promise<void>
}

export interface NavigationItem {
  name: string
  path: string
}

export interface ITableData {
  name: string
  uid: string
}
