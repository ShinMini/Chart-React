export type UserDataType = {
    spendMoney: Array<number>
    users: Array<number>
}


const spendMoney  = [    0.,  5000., 10000., 15000., 20000., 25000., 30000., 35000.,
    40000., 45000., 50000., 55000., 60000., 65000., 70000., 75000.,
    80000., 85000., 90000., 95000.]

const users = [1.189e+04, 2.553e+03, 6.970e+02, 3.490e+02, 1.700e+02, 8.800e+01,
    6.400e+01, 5.400e+01, 4.500e+01, 3.900e+01, 3.100e+01, 2.800e+01,
    1.800e+01, 1.100e+01, 1.000e+01, 9.000e+00, 2.000e+01, 1.100e+01,
    6.000e+00, 6.000e+00]

export const UserData: UserDataType = {
    spendMoney,
    users,
}
