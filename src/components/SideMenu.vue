<template>
<aside class = "bg-back-menu w-64 px-4 divide-y divide-gray-700">
  <div>
    <header class = "px-4 py-4 font-bold text-3xl text-gray-200">
      Email Client
    </header>
  </div>

  <div class = "pl-4 pr-2 py-4 flex flex-col gap-6">
    <header class = "font-semibold text-xl text-gray-200">
      <Icon icon = "far fa-user" class = "mr-2" />
      Accounts
    </header>
    <listbox v-if = "activeIndex !== null" v-model = "activeIndex">
      <listbox-button>
        <div class = "email-btn">
          <div class = "border-r-4 border-purple-300 rounded-r -mr-[4px]" />
          <div class = "email-layout gap-2 ml-8 mr-6 w-full">
            <div class = "text-xl text-purple-300">{{ activeEmail.name }}</div>
            <div class = "truncate">
              <div class = "truncate text-end text-xs text-purple-300">
                {{ activeEmail.local }}
              </div>
              <div class = "truncate text-end text-xs text-purple-300/50">
                @{{ activeEmail.domain }}
              </div>
            </div>
          </div>
        </div>
      </listbox-button>
      <transition
        leave-active-class = "transition duration-100 ease-in"
        leave-from-class = "opacity-100"
        leave-to-class = "opacity-0"
      >
        <listbox-options class = "email-list">
          <listbox-option
            v-for = "(email, index) in emails"
            :key = "email.name"
            :value = "index"
            v-slot = "{ selected }"
            as = "template"
          >
            <li class = "email-btn">
              <div
                v-show = "selected"
                class = "border-r-4 border-purple-300 rounded-r -mr-[4px]"
              />
              <div class = "email-layout gap-2 ml-8 mr-6 w-full">
                <div
                  class = "text-xl"
                  :class = '{"text-purple-300": selected, "text-gray-400": !selected}'
                >
                  {{ email.name }}
                </div>
                <div class = "truncate">
                  <div
                    class = "truncate text-end text-xs"
                    :class = '{ "text-purple-300": selected, "text-gray-400": !selected }'
                  >
                    {{ email.local }}
                  </div>
                  <div
                    class = "truncate text-end text-xs"
                    :class = '{ "text-purple-300/50": selected, "text-gray-400/50": !selected }'
                  >
                    @{{ email.domain }}
                  </div>
                </div>
              </div>
            </li>
          </listbox-option>
        </listbox-options>
      </transition>
    </listbox>
    <div v-else class = "py-2 -ml-8 -mr-6 rounded-lg text-center text-purple-300">
        Add an email first
    </div>
  </div>

  <div class = "pl-4 pr-2 py-4 flex flex-col gap-4">
    <button class = "compose-btn">
      <icon icon = "far fa-edit" class = "mr-2" />
      Compose
    </button>
  </div>

</aside>
</template>

<script setup lang = "ts">
import { FontAwesomeIcon as Icon } from "@fortawesome/vue-fontawesome";
import { useEmailStore } from "@/stores/emails";
import { storeToRefs } from "pinia";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/vue";

const store = useEmailStore();
const { emails, activeIndex, activeEmail } = storeToRefs(store);
const { addEmail, removeEmail } = store;

</script>

<style scoped>
.email-list {
    @apply absolute mt-1 pl-8 pr-6 max-h-60 w-80 overflow-auto rounded-lg bg-back-menu text-base
    shadow-lg ring-1 ring-gray-200/10 focus:outline-none sm:text-sm
}

.compose-btn {
    @apply w-full rounded text-lg py-2 shadow transition duration-300
    bg-transparent text-gray-200 border border-gray-200
    hover:text-black hover:bg-gray-200 hover:border-transparent hover:duration-150
    active:text-black active:bg-gray-300 active:border-transparent active:duration-150;
}

.email-layout {
    display: grid;
    grid-template-columns: auto 1fr;
}

.email-btn {
    @apply flex py-2 -ml-8 -mr-6 rounded-lg cursor-pointer transition duration-150
    hover:bg-gray-700/50 active:bg-gray-700/25
}
</style>