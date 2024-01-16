export const settings = {
    API: import.meta.env.VITE_REACT_APP_URL
}

export const endpoints ={
    user: {
        login: `login`,
        logout: `logout`,
        detailUserById: `admin/user`
    },
    product: {

    },
    menu: {
        getList: `admin/menu/all`
    }
}