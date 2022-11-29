import { computed, ref } from "vue";
import { defineStore } from "pinia";

interface Email {
    name: string,
    local: string,
    domain: string,
}


export const useEmailStore = defineStore("accounts", () => {
    const emails = ref<Array<Email>>([]);
    const activeIndex = ref<number | null>(null);

    const activeEmail = computed(() => {
        if (activeIndex.value !== null) {
            return emails.value[activeIndex.value];
        } else {
            return null;
        }
    });

    function updateEmail(index: number, updated: Email) {
        if (emails.value[index]) {
            emails.value[index] = updated;
        }
    }

    function addEmail(address: Email) {
        emails.value.push(address);
        if (activeIndex.value === null) {
            activeIndex.value = 0;
        }
    }

    function removeEmail(index: number) {
        emails.value.splice(index, 1);
        if (emails.value.length === 0) {
            activeIndex.value = null
        }
    }

    return { emails, activeIndex, activeEmail, updateEmail, addEmail, removeEmail };
});
