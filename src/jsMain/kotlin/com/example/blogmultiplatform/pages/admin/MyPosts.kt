package com.example.blogmultiplatform.pages.admin

import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import com.example.blogmultiplatform.components.AdminPageLayout
import com.example.blogmultiplatform.components.Posts
import com.example.blogmultiplatform.components.SearchBar
import com.example.blogmultiplatform.models.ApiListResponse
import com.example.blogmultiplatform.models.Constants.POST_PER_PAGE
import com.example.blogmultiplatform.models.PostWithoutDetails
import com.example.blogmultiplatform.models.Theme
import com.example.blogmultiplatform.navigation.Screen
import com.example.blogmultiplatform.util.Constant.FONT_FAMILY
import com.example.blogmultiplatform.models.Constants.QUERY_PARAM
import com.example.blogmultiplatform.util.Constant.SIDE_PANEL_WIDTH
import com.example.blogmultiplatform.util.ID
import com.example.blogmultiplatform.util.deleteSelectedPosts
import com.example.blogmultiplatform.util.fetchMyPost
import com.example.blogmultiplatform.util.isUserLoggedIn
import com.example.blogmultiplatform.util.noBorder
import com.example.blogmultiplatform.util.parseSwitchText
import com.example.blogmultiplatform.util.searchPostsByTitle
import com.varabyte.kobweb.compose.css.CSSTransition
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.css.TransitionProperty
import com.varabyte.kobweb.compose.css.Visibility
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.core.Page
import com.varabyte.kobweb.core.rememberPageContext
import com.varabyte.kobweb.silk.components.forms.Switch
import com.varabyte.kobweb.silk.components.forms.SwitchSize
import com.varabyte.kobweb.silk.components.style.breakpoint.Breakpoint
import com.varabyte.kobweb.silk.components.text.SpanText
import com.varabyte.kobweb.silk.theme.breakpoint.rememberBreakpoint
import kotlinx.browser.document
import kotlinx.coroutines.launch
import org.jetbrains.compose.web.css.ms
import org.jetbrains.compose.web.css.percent
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.Button
import org.w3c.dom.HTMLInputElement

@Page("my_posts")
@Composable
fun MyPostsPage() {
    isUserLoggedIn {
        MyPostsScreen()
    }
}

@Composable
fun MyPostsScreen() {
    val context = rememberPageContext()
    val breakpoint = rememberBreakpoint()
    val myPost = remember { mutableStateListOf<PostWithoutDetails>() }
    val scope = rememberCoroutineScope()
    var selectedPost = remember { mutableStateListOf<String>() }

    var postToSkip by remember { mutableStateOf(0) }
    var showMoreVisibility by remember { mutableStateOf(false) }
    var selectableMode by remember { mutableStateOf(false) }
    var switchText by remember { mutableStateOf("Select") }

    val hasParams =
        remember(key1 = context.route) { context.route.params.containsKey(QUERY_PARAM) }
    val query = remember(key1 = context.route) { context.route.params[QUERY_PARAM] ?: "" }

    LaunchedEffect(key1 = context.route) {
        postToSkip = 0
        if (hasParams) {
            (document.getElementById(ID.adminSearchBar) as HTMLInputElement).value = query.replace("%20"," ")
            searchPostsByTitle(
                query = query,
                skip = postToSkip,
                onSuccess = {
                    if (it is ApiListResponse.Success) {
                        myPost.clear()
                        myPost.addAll(it.data)
                        postToSkip += POST_PER_PAGE
                        showMoreVisibility = it.data.size >= POST_PER_PAGE
                    }
                },
                onError = { println(it) }
            )
        } else {
            fetchMyPost(
                skip = postToSkip,
                onSuccess = {
                    if (it is ApiListResponse.Success) {
                        myPost.clear()
                        myPost.addAll(it.data)
                        postToSkip += POST_PER_PAGE
                        showMoreVisibility = it.data.size >= POST_PER_PAGE
                    }
                },
                onError = {
                    println(it)
                }
            )
        }

    }

    AdminPageLayout {
        Column(
            modifier = Modifier
                .margin(topBottom = 50.px)
                .fillMaxSize()
                .padding(left = if (breakpoint > Breakpoint.MD) SIDE_PANEL_WIDTH.px else 0.px),
            verticalArrangement = Arrangement.Top,
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Box(
                modifier = Modifier
                    .fillMaxWidth(if (breakpoint > Breakpoint.MD) 25.percent else 50.percent)
                    .margin(bottom = 24.px),
                contentAlignment = Alignment.Center
            ) {
                SearchBar(
                    modifier = Modifier
                        .visibility(if (selectableMode) Visibility.Hidden else Visibility.Visible)
                        .transition(CSSTransition(property = TransitionProperty.All, duration = 200.ms)),
                    onEnterClick = {
                        val query =
                            (document.getElementById(ID.adminSearchBar) as HTMLInputElement).value
                        if (query.isNotEmpty()) {
                            context.router.navigateTo(Screen.AdminMyPosts.searchByTitle(query = query))
                        } else {
                            context.router.navigateTo(Screen.AdminMyPosts.route)
                        }
                    }
                )
            }

            Row(
                modifier = Modifier
                    .fillMaxWidth(if (breakpoint > Breakpoint.MD) 80.percent else 90.percent)
                    .margin(bottom = 24.px),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Switch(
                        modifier = Modifier.margin(right = 8.px),
                        size = SwitchSize.LG,
                        checked = selectableMode,
                        onCheckedChange = {
                            selectableMode = it
                            if (selectableMode != false) {
                                switchText = "Select"
                                selectedPost.clear()
                            } else {
                                switchText = "0 Posts Selected"
                            }
                        }
                    )
                    SpanText(
                        modifier = Modifier
                            .color(if (selectableMode) Colors.Black else Theme.HalfBlack.rgb),
                        text = switchText
                    )
                }
                Button(
                    attrs = Modifier
                        .margin(right = 20.px)
                        .height(54.px)
                        .padding(leftRight = 24.px)
                        .backgroundColor(Theme.Red.rgb)
                        .color(Colors.White)
                        .borderRadius(4.px)
                        .noBorder()
                        .fontFamily(FONT_FAMILY)
                        .fontSize(14.px)
                        .fontWeight(FontWeight.Medium)
                        .visibility(if (selectedPost.isNotEmpty()) Visibility.Visible else Visibility.Hidden)
                        .onClick {
                            scope.launch {
                                val result = deleteSelectedPosts(ids = selectedPost)
                                if (result) {
                                    selectableMode = false
                                    switchText = "Select"
                                    postToSkip -= selectedPost.size
                                    selectedPost.forEach { deletedPostId ->
                                        myPost.removeAll { it.id == deletedPostId }
                                    }
                                    selectedPost.clear()
                                }
                            }
                        }
                        .toAttrs()
                )
                {
                    SpanText(text = "Delete")
                }
            }

            Posts(
                breakpoint = breakpoint,
                posts = myPost,
                selectableMode = selectableMode,
                onSelect = {
                    selectedPost.add(it)
                    switchText = parseSwitchText(posts = selectedPost.toList())
                },
                onDeselect = {
                    selectedPost.remove(it)
                    switchText = parseSwitchText(posts = selectedPost.toList())
                },
                showMoreVisibility = showMoreVisibility,
                onShowMore = {
                    scope.launch {
                        if (hasParams) {
                            searchPostsByTitle(
                                query = query,
                                skip = postToSkip,
                                onSuccess = {
                                    if (it is ApiListResponse.Success) {
                                        if (it.data.isNotEmpty()) {
                                            myPost.addAll(it.data)
                                            postToSkip += POST_PER_PAGE
                                            if (it.data.size < POST_PER_PAGE) showMoreVisibility =
                                                false
                                        } else {
                                            showMoreVisibility = false
                                        }
                                    }
                                },
                                onError = {
                                    println(it)
                                }
                            )
                        } else {
                            fetchMyPost(
                                skip = postToSkip,
                                onSuccess = {
                                    if (it is ApiListResponse.Success) {
                                        if (it.data.isNotEmpty()) {
                                            myPost.addAll(it.data)
                                            postToSkip += POST_PER_PAGE
                                            if (it.data.size < POST_PER_PAGE) showMoreVisibility =
                                                false
                                        } else {
                                            showMoreVisibility = false
                                        }
                                    }
                                },
                                onError = {
                                    println(it)
                                }
                            )
                        }
                    }
                },
            )
        }
    }
}








