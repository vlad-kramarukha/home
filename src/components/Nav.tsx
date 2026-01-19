import router from '../router.ts'
import { computed } from 'vue'

type Page = 'home' | 'projects' | 'contacts'

export default function Nav() {
    const defaultBtnStyle = 'cursor-pointer px-3 py-1'

    const currentPageName = computed(() => router.currentRoute.value.name)

    function getBtnStyles(page: Page) {
        if (page === currentPageName.value) {
            return `${defaultBtnStyle} text-rose-700 dark:text-violet-500`
        }

        return defaultBtnStyle
    }

    return (
        <nav class={'flex max-sm:flex-col max-sm:gap-6 max-sm:mt-6 gap-2 py-6 text-xl select-none'}>
            <button class={getBtnStyles('home')} onClick={() => router.push('/')}>
                Home
            </button>
            <button class={getBtnStyles('projects')} onClick={() => router.push('/projects')}>
                Projects
            </button>
            <button class={getBtnStyles('contacts')} onClick={() => router.push('/contacts')}>
                Contacts
            </button>
        </nav>
    )
}
