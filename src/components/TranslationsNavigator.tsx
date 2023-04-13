import { For, type Component } from 'solid-js'
import { AiFillStar } from 'solid-icons/ai'
import { BiRegularTransferAlt } from 'solid-icons/bi'

type Translation = {
  translation: string,
  translated: string,
  originalLanguage: string,
  destinyLanguage: string,
  favorite?: boolean,
  selected?: boolean,
}

const translations: Translation[] = [
  {
    translation: "Good morning",
    translated: "Guten Morgen",
    originalLanguage: "English",
    destinyLanguage: "German",
    favorite: true,
    selected: false,
  },
  {
    translation: "How are you?",
    translated: "Wie geht es dir?",
    originalLanguage: "English",
    destinyLanguage: "German",
    favorite: true,
    selected: true,
  },
  {
    translation: "Thank you",
    translated: "Grazie",
    originalLanguage: "English",
    destinyLanguage: "Italian",
    favorite: false,
    selected: false,
  },
  {
    translation: "Goodbye",
    translated: "Sayonara",
    originalLanguage: "English",
    destinyLanguage: "Japanese",
    favorite: false,
    selected: false,
  },
  {
    translation: "Please",
    translated: "Molim",
    originalLanguage: "English",
    destinyLanguage: "Croatian",
    favorite: false,
    selected: false,
  },
  {
    translation: "I love you",
    translated: "Je t'aime",
    originalLanguage: "English",
    destinyLanguage: "French",
    favorite: false,
    selected: false,
  },
  {
    translation: "What is your name?",
    translated: "¿Cómo te llamas?",
    originalLanguage: "English",
    destinyLanguage: "Spanish",
    favorite: false,
    selected: false,
  },
  {
    translation: "My name is",
    translated: "Меня зовут",
    originalLanguage: "English",
    destinyLanguage: "Russian",
    favorite: false,
    selected: false,
  },
  {
    translation: "Nice to meet you",
    translated: "Leuk je te ontmoeten",
    originalLanguage: "English",
    destinyLanguage: "Dutch",
    favorite: false,
    selected: false,
  },
  {
    translation: "Have a nice day",
    translated: "Ein schönen Tag noch",
    originalLanguage: "English",
    destinyLanguage: "German",
    favorite: false,
    selected: false,
  }
]

const FavoriteButton: Component<{ isFavorite?: boolean }> = ({ isFavorite }) => {
  return (
    <button class={`rounded-full p-2 hover:bg-hover-background transition-colors duration-500 flex items-center justify-center ${isFavorite ? 'text-primary' : 'text-surface-variant'}`}>
      <AiFillStar />
    </button>
  )
}

const TranslationItem: Component<{ translation: Translation }> = ({ translation }) => {
  return (
    <div class={`${translation.selected ? "bg-lighter-background shadow-md" : "bg-light-background hover:bg-lighter-background hover:shadow-md transition-all duration-500"} rounded-lg p-4 w-full space-y-6 text-left cursor-pointer`}>
      <div class="space-y-0">
        <p class="font-bold">{translation.translation}</p>
        <p class="text-surface-variant">{translation.translated}</p>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex justify-start items-center space-x-3">
          <p class="text-surface-variant">{translation.originalLanguage}</p>
          <BiRegularTransferAlt />
          <p class="text-surface-variant">{translation.destinyLanguage}</p>
        </div>
        <FavoriteButton isFavorite={translation.favorite} />
      </div>
    </div>
  )
}

export const TranslationsNavigator: Component = () => {
  return (
    <>
      <div class="bg-light-background text-on-primary-container p-6 w-[25rem] h-full overflow-y-auto space-y-6">
        <For each={translations}>
          {(translation: Translation) => <TranslationItem translation={translation} />}
        </For>
      </div>
    </>
  )
}
