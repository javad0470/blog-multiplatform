package com.example.blogmultiplatform.navigation

import com.example.blogmultiplatform.models.Constants.POST_ID_PARAM
import com.example.blogmultiplatform.models.Constants.QUERY_PARAM

sealed class Screen(val route: String) {
    data object AdminHome : Screen(route = "/admin/")
    data object AdminLogin : Screen(route = "/admin/login")
    data object AdminCreate : Screen(route = "/admin/create") {
        fun passPostId(id: String) = "/admin/create?$POST_ID_PARAM=$id"
    }

    data object AdminMyPosts : Screen(route = "/admin/my_posts") {
        fun searchByTitle(query: String) = "/admin/mt_posts?$QUERY_PARAM=$query"
    }

    data object AdminSuccess : Screen(route = "/admin/success"){
        fun postUpdated() = "/admin/success?updated=true"
    }
}
