import type { Component } from 'solid-js'
import { AiFillCopy, AiOutlineSearch } from 'solid-icons/ai'
import { BiRegularTransferAlt } from 'solid-icons/bi'

const Searchbar: Component = () => {
  return (
    <button class="flex justify-start border-solid border-[1px] border-hover-background items-center bg-light-background rounded-xl py-2 px-4 cursor-pointer transition-all duration-500 hover:bg-lighter-background min-w-[40rem] shadow-sm hover:shadow-md">
      <span class="text-primary text-lg"><AiOutlineSearch /></span>
      <span class="ml-2 text-surface-variant">Go to quick search (Ctrl + P)</span>
    </button>
  )
}

const Translator: Component = () => {
  return (
    <div class="space-y-3">
      <div class="space-x-4 flex justify-start items-center">
        <p>English</p>
        <span class="text-primary"><BiRegularTransferAlt /></span>
        <p>Spanish</p>
      </div>
      <div class="rounded-xl bg-light-background p-10 px-5 pt-5 w-full h-[20rem] cursor-pointer flex flex-col justify-between items-stretch transition-all hover:bg-lighter-background hover:shadow-md shadow-sm duration-500">
        <div class="min-h-full">
          <textarea class="resize-none h-[95%] w-full bg-transparent placeholder-surface-variant text-on-primary-container outline-none text-2xl" placeholder="Enter something to translate..." />
        </div>
        <div class="pb-25 flex justify-end items-center">
          <button class="mb-15 rounded-full bg-transparent transition-colors hover:bg-hover-background p-3 duration-500 cursor-pointer">
            <AiFillCopy />
          </button>
        </div>
      </div>
    </div>
  )
}

export const Translate: Component = () => {
  return (
    <div class="p-6 space-y-4">
      <div class="flex justify-center items-center">
        <Searchbar />
      </div>
      <div class="mx-20">
        <Translator />
      </div>
    </div>
  )
}
