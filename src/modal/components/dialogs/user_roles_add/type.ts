export interface IUserRoleAdd {
  org_id: string | undefined
  user_id: string
  user_roles: { id: string }[]
}
