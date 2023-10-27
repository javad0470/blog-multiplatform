package com.example.blogmultiplatform.components

import androidx.compose.runtime.*
import com.example.blogmultiplatform.models.Theme
import com.example.blogmultiplatform.util.ID
import com.example.blogmultiplatform.util.noBorder
import com.varabyte.kobweb.compose.css.CSSTransition
import com.varabyte.kobweb.compose.css.TransitionProperty
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.silk.components.icons.fa.FaMagnifyingGlass
import com.varabyte.kobweb.silk.components.icons.fa.IconSize
import org.jetbrains.compose.web.attributes.InputType
import org.jetbrains.compose.web.css.LineStyle
import org.jetbrains.compose.web.css.ms
import org.jetbrains.compose.web.css.percent
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.Input

@Composable
fun SearchBar(
    modifier: Modifier = Modifier
    ,onEnterClick: () -> Unit
) {
    var focused by remember { mutableStateOf(false) }

    Row(
        modifier = modifier
            .fillMaxWidth()
            .padding(left = 20.px)
            .height(54.px)
            .backgroundColor(Theme.LightGray.rgb)
            .borderRadius(100.px)
            .border(
                width = 2.px,
                style = LineStyle.Solid,
                color = if (focused) Theme.Primary.rgb else Theme.LightGray.rgb
            )
            .transition(CSSTransition(property = TransitionProperty.All, duration = 200.ms)),
        verticalAlignment = Alignment.CenterVertically
    ) {
        FaMagnifyingGlass(
            modifier = Modifier
                .color(if (focused) Theme.Primary.rgb else Theme.DarkGray.rgb)
                .margin(right = 14.px),
            size = IconSize.SM
        )
        Input(
            type = InputType.Text,
            attrs = Modifier
                .id(ID.adminSearchBar)
                .fillMaxSize()
                .color(Colors.Black)
                .backgroundColor(Colors.Transparent)
                .noBorder()
                .onFocusIn { focused = true }
                .onFocusOut { focused = false }
                .onKeyDown {
                    if (it.key == "Enter") {
                        onEnterClick()
                    }
                }
                .toAttrs {
                    attr("placeholder", "Search...")
                },
        )
    }
}