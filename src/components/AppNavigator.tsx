import type { Component } from 'solid-js'
import { AiFillCloud, AiFillFolder, AiFillLock, AiFillStar } from 'solid-icons/ai'
import { BsTranslate } from 'solid-icons/bs'

type Type = {
  icon: Component,
  text: string,
  count: number,
  active?: boolean
}

type Folder = {
  name: string,
  count: number,
  active?: boolean
}

const types: Type[] = [
  {
    icon: () => <AiFillLock />,
    text: 'All items',
    count: 12,
    active: true
  },
  {
    icon: () => <AiFillStar />,
    text: 'Favorite',
    count: 4,
  },
  {
    icon: () => <AiFillCloud />,
    text: 'Cloud',
    count: 0,
  }
]

const folders: Folder[] = [
  {
    name: "Learning",
    active: false,
    count: 25,
  },
  {
    name: "Documents",
    active: false,
    count: 3
  },
  {
    name: "Traveling",
    active: false,
    count: 10
  }
]

const Type: Component<{ type: Type }> = ({ type }) => {
  return (
    <>
      <button class={`${type.active ? "bg-primary text-lighter-background" : "bg-lighter-background text-on-primary-container hover:bg-hover-background"} transition-colors duration-500 py-2 px-4 rounded-lg flex justify-between items-center min-w-full`}>
        <div class="flex items-center justify-normal space-x-3 mr-12">
          {type.icon({})}
          <p>{type.text}</p>
        </div>
        <p class="text-surface-variant">
          {JSON.stringify(type.count)}
        </p>
      </button>
    </>
  )
}

const Types: Component = () => {
  return (
    <div class="space-y-4 w-full">
      <p class="text-surface-variant">
        Types
      </p>
      {types.map((type: Type) => (
        <Type type={type} />
      ))}
    </div>
  )
}

const Folder: Component<{ folder: Folder }> = ({ folder }) => {
  return (
    <>
      <button class={`${folder.active ? "bg-primary text-lighter-background" : "bg-lighter-background text-on-primary-container hover:bg-hover-background"} transition-colors duration-500 py-2 px-4 rounded-lg flex justify-between items-center min-w-full`}>
        <div class="flex items-center justify-normal space-x-3 mr-12">
          <AiFillFolder />
          <p>{folder.name}</p>
        </div>
        <p class="text-surface-variant">
          {JSON.stringify(folder.count)}
        </p>
      </button>
    </>
  )
}

const Folders: Component = () => {
  return (
    <div class="space-y-4 w-full">
      <p class="text-surface-variant">
        Folders
      </p>
      {folders.map((folder: Folder) => (
        <Folder folder={folder} />
      ))}
    </div>
  )
}

export const AppNavigator: Component = () => {
  return (
    <>
      <div class="bg-lighter-background text-on-primary-container overflow-y-visible min-w-[16rem] shadow-2xl h-[100vh]">
        <div class="h-full flex justify-center items-start my-4">
          <div class="space-y-10 mx-4">
            <h1 class="font-bold text-xl flex justify-start items-center">
              <span class="text-primary mr-3"><BsTranslate /></span>
              Speakify
            </h1>
            <Types />
            <Folders />
          </div>
        </div>
      </div>
    </>
  )
}
