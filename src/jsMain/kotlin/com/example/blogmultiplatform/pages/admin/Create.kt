package com.example.blogmultiplatform.pages.admin

import androidx.compose.runtime.*
import com.example.blogmultiplatform.components.AdminPageLayout
import com.example.blogmultiplatform.components.LinkPopup
import com.example.blogmultiplatform.components.MessagePopup
import com.example.blogmultiplatform.models.*
import com.example.blogmultiplatform.navigation.Screen
import com.example.blogmultiplatform.styles.EditorKeyStyle
import com.example.blogmultiplatform.util.*
import com.example.blogmultiplatform.util.Constant.FONT_FAMILY
import com.example.blogmultiplatform.util.Constant.SIDE_PANEL_WIDTH
import com.varabyte.kobweb.compose.css.Cursor
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.css.Overflow
import com.varabyte.kobweb.compose.css.Resize
import com.varabyte.kobweb.compose.css.ScrollBehavior
import com.varabyte.kobweb.compose.css.Visibility
import com.varabyte.kobweb.compose.file.loadDataUrlFromDisk
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.attrsModifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.compose.ui.thenIf
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.core.Page
import com.varabyte.kobweb.core.rememberPageContext
import org.jetbrains.compose.web.dom.Input
import com.varabyte.kobweb.silk.components.forms.Switch
import com.varabyte.kobweb.silk.components.forms.SwitchSize
import com.varabyte.kobweb.silk.components.graphics.Image
import com.varabyte.kobweb.silk.components.layout.SimpleGrid
import com.varabyte.kobweb.silk.components.layout.numColumns
import com.varabyte.kobweb.silk.components.style.breakpoint.Breakpoint
import com.varabyte.kobweb.silk.components.style.toModifier
import com.varabyte.kobweb.silk.components.text.SpanText
import com.varabyte.kobweb.silk.theme.breakpoint.rememberBreakpoint
import kotlinx.browser.document
import kotlinx.browser.localStorage
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import org.jetbrains.compose.web.attributes.InputType
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.A
import org.jetbrains.compose.web.dom.Button
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.Li
import org.jetbrains.compose.web.dom.Text
import org.jetbrains.compose.web.dom.TextArea
import org.jetbrains.compose.web.dom.Ul
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.HTMLTextAreaElement
import org.w3c.dom.get
import kotlin.js.Date

data class CreatePageUiState(
    var id: String = "",
    var title: String = "",
    var subTitle: String = "",
    var thumbnail: String = "",
    var content: String = "",
    var thumbnailInputDisabled: Boolean = true,
    var category: Category = Category.Programming,
    var popular: Boolean = false,
    var main: Boolean = false,
    var sponsored: Boolean = false,
    var editorVisibility: Boolean = true,
    var messagePopup: Boolean = false,
    var linkPopup: Boolean = false,
    var imagePopup: Boolean = false,
)

@Page
@Composable
fun CreatePage() {
    isUserLoggedIn {
        CreateScreen()
    }
}

@Composable
fun CreateScreen() {
    val context = rememberPageContext()
    val scope = rememberCoroutineScope()
    val breakpoint = rememberBreakpoint()
    var uiState by remember { mutableStateOf(CreatePageUiState()) }

    AdminPageLayout {
        Box(
            modifier = Modifier
                .fillMaxSize()
                .margin(topBottom = 50.px)
                .padding(left = if (breakpoint > Breakpoint.MD) SIDE_PANEL_WIDTH.px else 0.px),
            contentAlignment = Alignment.TopCenter
        ) {
            Column(
                modifier = Modifier
                    .fillMaxSize()
                    .maxWidth(700.px),
                verticalArrangement = Arrangement.Top,
                horizontalAlignment = Alignment.CenterHorizontally
            ) {
                SimpleGrid(
                    numColumns = numColumns(base = 1, sm = 3)
                ) {
                    Row(
                        modifier = Modifier
                            .margin(
                                right = if (breakpoint < Breakpoint.SM) 0.px else 24.px,
                                bottom = if (breakpoint < Breakpoint.SM) 12.px else 0.px
                            ),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Switch(
                            modifier = Modifier.margin(right = 8.px),
                            checked = uiState.popular,
                            onCheckedChange = {
                                uiState = uiState.copy(popular = it)
                            },
                            size = SwitchSize.LG
                        )
                        SpanText(
                            modifier = Modifier
                                .fontSize(14.px)
                                .fontFamily(FONT_FAMILY)
                                .color(Theme.HalfBlack.rgb),
                            text = "Popular"
                        )
                    }

                    Row(
                        modifier = Modifier
                            .margin(
                                right = if (breakpoint < Breakpoint.SM) 0.px else 24.px,
                                bottom = if (breakpoint < Breakpoint.SM) 12.px else 0.px
                            ),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Switch(
                            modifier = Modifier.margin(right = 8.px),
                            checked = uiState.main,
                            onCheckedChange = {
                                uiState = uiState.copy(main = it)
                            },
                            size = SwitchSize.LG
                        )
                        SpanText(
                            modifier = Modifier
                                .fontSize(14.px)
                                .fontFamily(FONT_FAMILY)
                                .color(Theme.HalfBlack.rgb),
                            text = "Main"
                        )
                    }

                    Row(
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Switch(
                            modifier = Modifier.margin(right = 8.px),
                            checked = uiState.sponsored,
                            onCheckedChange = {
                                uiState = uiState.copy(sponsored = it)
                            },
                            size = SwitchSize.LG
                        )
                        SpanText(
                            modifier = Modifier
                                .fontSize(14.px)
                                .fontFamily(FONT_FAMILY)
                                .color(Theme.HalfBlack.rgb),
                            text = "sponsored"
                        )
                    }
                }

                Input(
                    type = InputType.Text,
                    attrs = Modifier
                        .id(ID.titleInput)
                        .fillMaxWidth()
                        .height(54.px)
                        .margin(topBottom = 12.px)
                        .padding(leftRight = 20.px)
                        .backgroundColor(Theme.LightGray.rgb)
                        .borderRadius(4.px)
                        .noBorder()
                        .fontFamily(FONT_FAMILY)
                        .fontSize(16.px)
                        .toAttrs {
                            attr("placeholder", "Title")
                        }
                )

                Input(
                    type = InputType.Text,
                    attrs = Modifier
                        .id(ID.subTitleInput)
                        .fillMaxWidth()
                        .height(54.px)
                        .margin(bottom = 12.px)
                        .padding(leftRight = 20.px)
                        .backgroundColor(Theme.LightGray.rgb)
                        .borderRadius(4.px)
                        .noBorder()
                        .fontFamily(FONT_FAMILY)
                        .fontSize(16.px)
                        .toAttrs {
                            attr("placeholder", "SubTitle")
                        }
                )

                CategoryDropDown(
                    selectedCategory = uiState.category,
                    onCategorySelected = {
                        uiState = uiState.copy(category = it)
                    }
                )

                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .margin(topBottom = 12.px),
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.Start
                ) {
                    Switch(
                        modifier = Modifier.margin(right = 8.px),
                        checked = !uiState.thumbnailInputDisabled,
                        onCheckedChange = {
                            uiState = uiState.copy(thumbnailInputDisabled = !it)
                        },
                        size = SwitchSize.MD
                    )
                    SpanText(
                        modifier = Modifier
                            .fontSize(14.px)
                            .fontFamily(FONT_FAMILY)
                            .color(Theme.HalfBlack.rgb),
                        text = "Paste an Image URL instead"
                    )
                }
                ThumbnailUploader(
                    thumbnail = uiState.thumbnail,
                    thumbnailInputDisabled = uiState.thumbnailInputDisabled,
                    onThumbnailSelect = { filename, file ->
                        (document.getElementById(ID.thumbnailInput) as HTMLInputElement).value = filename
                        uiState = uiState.copy(thumbnail = file)
                    }
                )

                EditorControls(
                    breakpoint = breakpoint,
                    editorVisibility = uiState.editorVisibility,
                    onEditorVisibilityChanged = {
                        uiState = uiState.copy(editorVisibility = !uiState.editorVisibility)
                    },
                    onLinkClick = {
                        uiState = uiState.copy(linkPopup = true)
                    },
                    onImageClick = { uiState = uiState.copy(imagePopup = true) }
                )

                Editor(editorVisibility = uiState.editorVisibility)

                CreateButton(
                    onClick = {
                        uiState =
                            uiState.copy(title = (document.getElementById(ID.titleInput) as HTMLInputElement).value)
                        uiState =
                            uiState.copy(subTitle = (document.getElementById(ID.subTitleInput) as HTMLInputElement).value)
                        uiState =
                            uiState.copy(content = (document.getElementById(ID.editor) as HTMLTextAreaElement).value)

                        if (!uiState.thumbnailInputDisabled) {
                            uiState =
                                uiState.copy(thumbnail = (document.getElementById(ID.thumbnailInput) as HTMLInputElement).value)
                        }
                        if (
                            uiState.title.isNotEmpty() &&
                            uiState.subTitle.isNotEmpty() &&
                            uiState.thumbnail.isNotEmpty() &&
                            uiState.content.isNotEmpty()
                        ) {
                            scope.launch {
                                val result = addPost(
                                    post = Post(
                                        author = localStorage["username"].toString(),
                                        title = uiState.title,
                                        subTitle = uiState.subTitle,
                                        date = Date.now().toLong(),
                                        thumbnail = uiState.thumbnail,
                                        content = uiState.content,
                                        category = uiState.category,
                                        popular = uiState.popular,
                                        sponsored = uiState.sponsored,
                                        main = uiState.main,
                                    )
                                )
                                if (result) {
                                    context.router.navigateTo(Screen.AdminSuccess.route)
                                }
                            }
                        } else {
                            scope.launch {
                                uiState = uiState.copy(messagePopup = true)
                                delay(3000)
                                uiState = uiState.copy(messagePopup = false)
                            }
                        }
                    }
                )
            }
        }
    }

    if (uiState.messagePopup) {
        MessagePopup(
            message = "Please fill out all fields",
            onDialogDismissed = {
                uiState = uiState.copy(messagePopup = false)
            }
        )
    }

    if (uiState.linkPopup) {
        LinkPopup(
            editorControl = EditorControl.Link,
            onDialogDismissed = {
                uiState = uiState.copy(linkPopup = false)
            },
            onAddClick = { href, title ->
                applyStyle(
                    controlStyle = ControlStyle.Link(
                        selectedText = getSelectedText(),
                        href = href,
                        title = title
                    )
                )
            }
        )
    }

    if (uiState.imagePopup) {
        LinkPopup(
            editorControl = EditorControl.Image,
            onDialogDismissed = { uiState = uiState.copy(imagePopup = false) },
            onAddClick = { imageUrl, description ->
                applyStyle(
                    controlStyle = ControlStyle.Image(
                        selectedText = getSelectedText(),
                        imageUrl = imageUrl,
                        desc = description
                    )
                )
            }
        )
    }
}

@Composable
fun CategoryDropDown(
    selectedCategory: Category,
    onCategorySelected: (Category) -> Unit
) {
    Box(
        modifier = Modifier
            .margin(topBottom = 12.px)
            .classNames("dropdown")
            .height(54.px)
            .fillMaxWidth()
            .backgroundColor(Theme.LightGray.rgb)
            .cursor(Cursor.Pointer)
            .attrsModifier {
                attr("data-bs-toggle", "dropdown")
            },
    ) {
        Row(
            modifier = Modifier
                .fillMaxSize()
                .padding(leftRight = 20.px),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.SpaceBetween
        ) {
            SpanText(
                modifier = Modifier.fillMaxWidth()
                    .fontFamily(FONT_FAMILY)
                    .fontSize(16.px),
                text = selectedCategory.name
            )

            Box(
                modifier = Modifier
                    .classNames("dropdown-toggle")
            )
        }

        Ul(
            attrs = Modifier
                .classNames("dropdown-menu")
                .fillMaxWidth()
                .toAttrs()
        ) {
            Category.entries.forEach { category ->
                Li {
                    A(
                        attrs = Modifier
                            .classNames("dropdown-item")
                            .color(Colors.Black)
                            .fontFamily(FONT_FAMILY)
                            .fontSize(16.px)
                            .onClick { onCategorySelected(category) }
                            .toAttrs()
                    ) {
                        Text(value = category.name)
                    }
                }
            }
        }
    }
}


@Composable
fun ThumbnailUploader(
    thumbnail: String,
    thumbnailInputDisabled: Boolean,
    onThumbnailSelect: (String, String) -> Unit
) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .margin(bottom = 20.px)
            .height(54.px)
    ) {
        Input(
            type = InputType.Text,
            attrs = Modifier
                .id(ID.thumbnailInput)
                .fillMaxSize()
                .margin(right = 12.px)
                .padding(leftRight = 20.px)
                .backgroundColor(Theme.LightGray.rgb)
                .borderRadius(4.px)
                .noBorder()
                .fontFamily(FONT_FAMILY)
                .fontSize(16.px)
                .thenIf(
                    condition = !thumbnailInputDisabled,
                    other = Modifier.disabled()
                )
                .toAttrs {
                    attr("placeholder", "Thumbnail")
                    attr("value", thumbnail)
                }
        )
        Button(
            attrs = Modifier
                .onClick {
                    document.loadDataUrlFromDisk(
                        accept = "image/png, image/jpeg",
                        onLoaded = {
                            onThumbnailSelect(filename, it)
                        }
                    )
                }
                .fillMaxHeight()
                .padding(leftRight = 24.px)
                .backgroundColor(if (!thumbnailInputDisabled) Theme.Gray.rgb else Theme.Primary.rgb)
                .color(if (!thumbnailInputDisabled) Theme.DarkGray.rgb else Colors.White)
                .borderRadius(4.px)
                .noBorder()
                .fontFamily(FONT_FAMILY)
                .fontSize(14.px)
                .fontWeight(FontWeight.Medium)
                .thenIf(
                    condition = !thumbnailInputDisabled,
                    other = Modifier.disabled()
                )
                .toAttrs()
        ) {
            SpanText(
                modifier = Modifier,
                text = "Upload"
            )
        }
    }
}

@Composable
fun EditorControls(
    breakpoint: Breakpoint,
    editorVisibility: Boolean,
    onEditorVisibilityChanged: () -> Unit,
    onLinkClick: () -> Unit,
    onImageClick: () -> Unit
) {
    Box(
        modifier = Modifier.fillMaxWidth()
    ) {
        SimpleGrid(
            modifier = Modifier.fillMaxWidth(),
            numColumns = numColumns(base = 1, sm = 2)
        ) {
            Row(
                modifier = Modifier
                    .backgroundColor(Theme.LightGray.rgb)
                    .borderRadius(4.px)
                    .height(54.px)
            ) {
                EditorControl.entries.forEach {
                    EditorControlView(
                        control = it,
                        onClick = {
                            applyControlStyle(
                                editorControl = it,
                                onLinkClick = onLinkClick,
                                onImageClick = onImageClick
                            )
                        }
                    )
                }
            }
            Box(
                contentAlignment = Alignment.CenterEnd
            ) {
                Button(
                    attrs = Modifier
                        .height(54.px)
                        .thenIf(
                            condition = breakpoint < Breakpoint.SM,
                            other = Modifier.fillMaxWidth()
                        )

                        .margin(topBottom = if (breakpoint < Breakpoint.SM) 12.px else 0.px)
                        .padding(leftRight = 24.px)
                        .borderRadius(4.px)
                        .backgroundColor(if (editorVisibility) Theme.LightGray.rgb else Theme.Primary.rgb)
                        .color(if (editorVisibility) Theme.DarkGray.rgb else Colors.White)
                        .noBorder()
                        .onClick {
                            onEditorVisibilityChanged()
                            document.getElementById(ID.editorPreview)?.innerHTML = getEditor().value
                            js("hljs.highlightAll()") as Unit
                        }
                        .toAttrs()
                ) {
                    SpanText(
                        modifier = Modifier
                            .fontFamily(FONT_FAMILY)
                            .fontSize(14.px)
                            .fontWeight(FontWeight.Medium),
                        text = "Preview"
                    )
                }
            }
        }
    }
}

@Composable
fun EditorControlView(
    control: EditorControl,
    onClick: () -> Unit
) {
    Box(
        modifier = EditorKeyStyle.toModifier()
            .fillMaxHeight()
            .padding(leftRight = 12.px)
            .borderRadius(4.px)
            .cursor(Cursor.Pointer)
            .onClick { onClick() },
        contentAlignment = Alignment.Center
    ) {
        Image(
            src = control.icon,
            desc = "${control.name} icon"
        )
    }
}

@Composable
fun Editor(editorVisibility: Boolean) {
    Box(
        modifier = Modifier.fillMaxWidth()
    ) {
        TextArea(
            attrs = Modifier
                .id(ID.editor)
                .fillMaxWidth()
                .height(400.px)
                .maxHeight(400.px)
                .margin(top = 8.px)
                .padding(all = 20.px)
                .backgroundColor(Theme.LightGray.rgb)
                .borderRadius(4.px)
                .fontFamily(FONT_FAMILY)
                .fontSize(16.px)
                .noBorder()
                .resize(Resize.None)
                .visibility(
                    if (editorVisibility) Visibility.Visible else Visibility.Hidden
                )
                .onKeyDown {
                    if (it.code == "Enter" && it.shiftKey) {
                        applyStyle(
                            controlStyle = ControlStyle.Break(
                                selectedText = getSelectedText()
                            )
                        )
                    }
                }
                .toAttrs {
                    attr("placeholder", "Type here ...")
                }
        )
        Div(
            attrs = Modifier
                .id(ID.editorPreview)
                .fillMaxWidth()
                .height(400.px)
                .maxHeight(400.px)
                .margin(top = 8.px)
                .padding(all = 20.px)
                .backgroundColor(Theme.LightGray.rgb)
                .borderRadius(4.px)
                .visibility(
                    if (editorVisibility) Visibility.Hidden else Visibility.Visible
                )
                .overflow(Overflow.Auto)
                .scrollBehavior(ScrollBehavior.Smooth)
                .backgroundColor(Theme.LightGray.rgb)
                .borderRadius(4.px)
                .noBorder()
                .toAttrs()
        ) {

        }
    }
}

@Composable
fun CreateButton(onClick: () -> Unit) {
    Button(
        attrs = Modifier
            .onClick {
                onClick()
            }
            .fillMaxWidth()
            .height(54.px)
            .margin(top = 24.px)
            .backgroundColor(Theme.Primary.rgb)
            .color(Colors.White)
            .noBorder()
            .fontFamily(FONT_FAMILY)
            .fontSize(16.px)
            .borderRadius(4.px)
            .toAttrs()
    ) {
        SpanText(
            text = "Create"
        )
    }
}





