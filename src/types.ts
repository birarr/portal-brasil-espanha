import { LucideIcon } from "lucide-react"

export type AccordionItemProps = {
    name: string
    image: LucideIcon | string
    href: string
}

export type AccordionDataProps = {
    data: AccordionItemProps
}

export type AccordionProps = {
    type: string
    data: AccordionItemProps[]
}

export type MainAccordionComponentProps = {
    data: AccordionProps
}

export type NewsProps = {
    articles: NewsItemsProps[]
}

export type NewsItemsProps = {
author: string
description?: string
title: string
url: string
image_url: string
published_at: string
source: NewsSourceProps
}

export type NewsSourceProps = {
    id?: string
    name: string
}