package com.example.blogmultiplatform.components

import androidx.compose.runtime.Composable
import com.example.blogmultiplatform.models.EditorControl
import com.example.blogmultiplatform.models.Theme
import com.example.blogmultiplatform.util.Constant.FONT_FAMILY
import com.example.blogmultiplatform.util.ID
import com.example.blogmultiplatform.util.noBorder
import com.varabyte.kobweb.compose.css.TextAlign
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.silk.components.text.SpanText
import kotlinx.browser.document
import org.jetbrains.compose.web.attributes.InputType
import org.jetbrains.compose.web.css.Position
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.Button
import org.jetbrains.compose.web.dom.Input
import org.w3c.dom.HTMLInputElement

@Composable
fun MessagePopup(
    message: String,
    onDialogDismissed: () -> Unit
) {
    Box(
        modifier = Modifier
            .fillMaxSize()
            .position(Position.Fixed)
            .zIndex(19),
        contentAlignment = Alignment.Center
    ) {
        Box(
            modifier = Modifier
                .fillMaxSize()
                .backgroundColor(Theme.HalfBlack.rgb)
                .onClick { onDialogDismissed() }
        )
        Box(
            modifier = Modifier
                .padding(all = 24.px)
                .backgroundColor(Colors.White)
                .borderRadius(4.px),
        ) {
            SpanText(
                modifier = Modifier.fillMaxWidth()
                    .textAlign(TextAlign.Center)
                    .fontFamily(FONT_FAMILY)
                    .fontSize(16.px),
                text = message
            )
        }
    }
}

@Composable
fun LinkPopup(
    editorControl: EditorControl,
    onDialogDismissed: () -> Unit,
    onAddClick: (String, String) -> Unit
) {
    Box(
        modifier = Modifier
            .fillMaxSize()
            .position(Position.Fixed)
            .zIndex(19),
        contentAlignment = Alignment.Center
    ) {
        Box(
            modifier = Modifier
                .fillMaxSize()
                .backgroundColor(Theme.HalfBlack.rgb)
                .onClick { onDialogDismissed() }
        )
        Column(
            modifier = Modifier
                .width(500.px)
                .padding(all = 24.px)
                .backgroundColor(Colors.White)
                .borderRadius(4.px)
        ) {
            Input(
                type = InputType.Text,
                attrs = Modifier
                    .id(ID.linHrefInput)
                    .fillMaxWidth()
                    .height(54.px)
                    .padding(leftRight = 20.px)
                    .margin(bottom = 12.px)
                    .fontFamily(FONT_FAMILY)
                    .fontSize(14.px)
                    .noBorder()
                    .borderRadius(4.px)
                    .backgroundColor(Theme.LightGray.rgb)
                    .toAttrs {
                        attr("placeholder", if(editorControl == EditorControl.Link) "Href" else "Image URL")
                    }
            )
            Input(
                type = InputType.Text,
                attrs = Modifier
                    .id(ID.linTitleInput)
                    .fillMaxWidth()
                    .height(54.px)
                    .padding(leftRight = 20.px)
                    .margin(bottom = 20.px)
                    .fontFamily(FONT_FAMILY)
                    .fontSize(14.px)
                    .noBorder()
                    .borderRadius(4.px)
                    .backgroundColor(Theme.LightGray.rgb)
                    .toAttrs {
                        attr("placeholder", if(editorControl == EditorControl.Link) "Title" else "Description")
                    }
            )

            Button(
                attrs = Modifier
                    .onClick {
                        val href = (document.getElementById(ID.linHrefInput) as HTMLInputElement).value
                        val title = (document.getElementById(ID.linTitleInput) as HTMLInputElement).value

                        onAddClick(href, title)
                        onDialogDismissed()
                    }
                    .fillMaxWidth()
                    .height(54.px)
                    .borderRadius(4.px)
                    .backgroundColor(Theme.Primary.rgb)
                    .color(Colors.White)
                    .noBorder()
                    .fontFamily(FONT_FAMILY)
                    .fontSize(14.px)
                    .toAttrs()
            ) {
                SpanText(text = "Add")
            }
        }
    }
}











