const { data } = await api.get(
            `/api/products?category=${category}&size=${sizes}&color=${colors}&minPrice=${minPrice}&
            maxPrice=${maxPrice}&minDiscount=${minDiscount}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`
          );

        console.log("product data ",data);
        console.log( `/api/products?category=${category}&size=${sizes}&color=${colors}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&sort=${sort}`)


        dispatch({type:FIND_PRODUCTS_SUCCESS,payload:data,})
