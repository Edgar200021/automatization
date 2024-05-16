import { TEmploye } from '@/db/models/employee'
import { CreateEmployee } from '../CreateEmployee/CreateEmployee'
import { DeleteEmployeeForm } from '../forms/DeleteEmployeeForm'
import { UpdateEmployeeForm } from '../forms/UpdateEmployeeForm'

const people = [
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
    role: 'Member',
  },
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
    role: 'Member',
  },
]

interface Props {
  employees?: TEmploye[]
}

export const UsersTable = ({ employees }: Props) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <CreateEmployee />
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 relative">
            {!employees?.length ? (
              <div>Այս պահին աշխատողներ չունեք</div>
            ) : (
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Աշխատակից
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Պաշտոն
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Բաժին
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Էլ.փոստ
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Օրական աշխատավարձ
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Այս ամսվա եկամուտը
                    </th>

                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {employees.map(employee => {
                    const createdMonth = new Date(
                        employee.createdAt
                      ).getMonth(),
                      createdDay = new Date(employee.createdAt).getDate()

                    const disabled =
                      new Date().getMonth() === createdMonth &&
                      new Date().getDate() === createdDay
                    const checked = disabled
                      ? false
                      : employee.updatedAt &&
                        new Date().getDate() ===
                          new Date(employee.updatedAt).getDate()
                      ? true
                      : false

                    return (
                      <tr key={employee.email}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0 capitalize">
                          {employee.fullName}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 capitalize">
                          {employee.position}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 capitalize">
                          {employee.department}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {employee.email}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 capitalize">
                          {employee.dailySalary}
                        </td>

                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">
                          {employee.monthlyEarnings}
                        </td>

                        <td className="relative flex items-center gap-x-4  whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0 capitalize">
                          <UpdateEmployeeForm
                            checked={checked}
                            disabled={disabled}
                            employeeEmail={employee.email}
                          />
                          <DeleteEmployeeForm employeeEmail={employee.email} />
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
