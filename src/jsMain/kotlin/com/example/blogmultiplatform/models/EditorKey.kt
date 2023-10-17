package com.example.blogmultiplatform.models

import com.example.blogmultiplatform.util.Res

enum class EditorKey(
    val icon : String
) {
    Bold(icon = Res.Icon.bold),
    Italic(icon = Res.Icon.italic),
    Link(icon = Res.Icon.link),
    Title(icon = Res.Icon.title),
    SubTitle(icon = Res.Icon.subtitle),
    Quote(icon = Res.Icon.quote),
    Code(icon = Res.Icon.code),
    Image(icon = Res.Icon.image),
}