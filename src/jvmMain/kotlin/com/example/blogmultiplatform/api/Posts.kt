package com.example.blogmultiplatform.api

import com.example.blogmultiplatform.data.MongoDB
import com.example.blogmultiplatform.models.ApiListResponse
import com.example.blogmultiplatform.models.ApiResponse
import com.example.blogmultiplatform.models.Constants.AUTHOR_PARAM
import com.example.blogmultiplatform.models.Constants.POST_ID_PARAM
import com.example.blogmultiplatform.models.Constants.SKIP_PARAM
import com.example.blogmultiplatform.models.Post
import com.varabyte.kobweb.api.Api
import com.varabyte.kobweb.api.ApiContext
import com.varabyte.kobweb.api.data.getValue
import com.varabyte.kobweb.api.http.Request
import com.varabyte.kobweb.api.http.Response
import com.varabyte.kobweb.api.http.setBodyText
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.json.Json
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.decodeToSequence
import org.litote.kmongo.id.ObjectIdGenerator
import kotlin.Exception

@Api(routeOverride = "add_post")
suspend fun addPost(context: ApiContext) {
    try {
//        val post = context.req.body?.decodeToString()?.let { Json.decodeFromString<Post>(it) }
        val post = context.req.getBody<Post>()
        val newPost = post?.copy(id = ObjectIdGenerator.newObjectId<String>().id.toHexString())
        context.res.setBodyText(
            newPost?.let {
                context.data.getValue<MongoDB>().addPost(it).toString()
            } ?: false.toString()
        )
    } catch (e: Exception) {
        context.res.setBodyText(Json.encodeToString(e.message))
    }
}

@Api(routeOverride = "update_post")
suspend fun updatePost(context: ApiContext) {
    try {
        val updatedPost = context.req.getBody<Post>()
        context.res.setBody(data = updatedPost?.let {
            context.data.getValue<MongoDB>().updatePost(post = it)
        })
    } catch (e: Exception) {
        context.res.setBody(data = e.message)
    }
}

@Api(routeOverride = "read_my_post")
suspend fun readMyPosts(context: ApiContext) {
    try {
        val skip = context.req.params[SKIP_PARAM]?.toInt() ?: 0
        val author = context.req.params[AUTHOR_PARAM] ?: ""
        val myPosts = context.data.getValue<MongoDB>().readMyPosts(skip = skip, author = author)
        context.res.setBodyText(
            Json.encodeToString(ApiListResponse.Success(data = myPosts))
        )
    } catch (e: Exception) {
        context.res.setBodyText(
            Json.encodeToString(ApiListResponse.Error(message = e.message.toString()))
        )
    }
}

@Api(routeOverride = "delete_selected_posts")
suspend fun deleteSelectedPost(context: ApiContext) {
    try {
//        val request = context.req.body?.decodeToString()?.let { Json.decodeFromString<List<String>>(it) }
        val request = context.req.getBody<List<String>>()
        context.res.setBodyText(
            request?.let {
                context.data.getValue<MongoDB>().deleteSelectedPost(ids = it).toString()
            } ?: "false"
        )

    } catch (e: Exception) {
        context.res.setBodyText(Json.encodeToString(e.message))
    }
}

@Api(routeOverride = "search_posts")
suspend fun searchPostsByTitle(context: ApiContext) {
    try {
        val query = context.req.params[POST_ID_PARAM] ?: ""
        val skip = context.req.params[SKIP_PARAM]?.toInt() ?: 0
        val request = context.data.getValue<MongoDB>().searchPostByTitle(
            query = query,
            skip = skip
        )

        context.res.setBodyText(Json.encodeToString(ApiListResponse.Success(data = request)))

    } catch (e: Exception) {
        context.res.setBodyText(
            Json.encodeToString(ApiListResponse.Error(message = e.message.toString()))
        )
    }
}

@Api(routeOverride = "read_selected_post")
suspend fun readSelectedPost(context: ApiContext) {
    val postId = context.req.params[POST_ID_PARAM]
    if (!postId.isNullOrBlank()) {
        try {
            val selectedPost = context.data.getValue<MongoDB>().readSelectedPost(id = postId)
            context.res.setBody(data = ApiResponse.Success(data = selectedPost))
        } catch (e: Exception) {
            context.res.setBody(data = ApiResponse.Error(message = e.message.toString()))
        }
    } else {
        context.res.setBody(data = ApiResponse.Error(message = "selected post does not exist"))
    }
}

inline fun <reified T> Response.setBody(data: T) {
    setBodyText(
        Json.encodeToString(data)
    )
}

inline fun <reified T> Request.getBody(): T? {
    return body?.decodeToString()?.let { return Json.decodeFromString(it) }
}






















