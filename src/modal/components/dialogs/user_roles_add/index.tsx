import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react'

import { useUpdateMemberRoles } from 'shared/api/organization'
import { IUser } from 'shared/api/user'
import { Button } from 'shared/ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from 'shared/ui/dialog'
import { MultiSelect } from 'shared/ui/multi-select'

import { IUserRoleAdd } from './type'

const UserRolesAddDialog = ({ user_roles, org_id, user_id }: IUserRoleAdd) => {
  const { user } = useAuth0<IUser>()
  const cur_user_roles = user?.user_roles?.map((role) => ({
    value: role.id,
    label: role.name,
  }))
  const { mutate: updateRoles } = useUpdateMemberRoles(org_id)
  const [values, onChange] = useState<string[]>(
    user_roles
      .map((role) => role.id)
      .filter((item) =>
        cur_user_roles?.some((cur_item) => cur_item.value === item)
      ) || []
  )
  return (
    <DialogContent className='sm:max-w-[425px]'>
      <DialogHeader>
        <DialogTitle>Roles</DialogTitle>
        <DialogDescription>
          Choose roles which you want to add to your member.
        </DialogDescription>
      </DialogHeader>
      <MultiSelect
        options={cur_user_roles}
        modalPopover={true}
        onValueChange={onChange}
        defaultValue={values}
        name={'roles'}
        placeholder='Select roles'
        maxCount={2}
      />

      <DialogFooter>
        <Button
          type='submit'
          onClick={() => updateRoles({ roles: values, user_id })}
        >
          Save changes
        </Button>
      </DialogFooter>
    </DialogContent>
  )
}

export default UserRolesAddDialog
