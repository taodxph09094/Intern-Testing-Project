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
        getListProduct:`admin/product-type/all`,
        postProduct:`admin/product-type/create`
    },
    menu: {
        getList: `admin/menu/all`,
        updateMenu: `admin/menu/edit`,
        deleteMenu: `admin/menu/delete`,
        addMenu: `admin/menu/create`,
    },
   
    Account:{
        getlist:`admin/users`,
        getUpdate:`register`,
        getdelete: `admin/user`
    },
    Brand:{
        getlist:`admin/brand/all`,
        postBrand:`admin/brand/create`,
        putBrand:`admin/brand/edit`,
    },
    ProductType:{
        getList:`admin/product-type/all`,
        postProductType:`admin/product-type/create`,
        updateProductType:`admin/product-type/edit`,
        deleteProductType:`admin/product-type/delete`
    },
    Categories:{
        getList:`admin/categories/all`,
        postCategories:`admin/categories/create`,
        updateCategories:`admin/categories/edit`,
        deleteCategories:`admin/categories/delete`
    }
    

}   