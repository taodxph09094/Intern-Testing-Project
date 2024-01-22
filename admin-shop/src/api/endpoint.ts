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
        getList: `admin/menu/all`,
        updateMenu: `admin/menu/edit`,
        deleteMenu: `admin/menu/delete`,
        addMenu: `admin/menu/create`,
        valuesMeny:`admin/menu/`
    },
    userList:{
        getlist:`admin/users`,
    }
    

}   