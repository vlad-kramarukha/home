import Nav from './Nav.tsx'

export default function Header() {
    return (
        <header class={'p-2'}>
            <h1 class={'text-9xl max-lg:text-8xl max-sm:text-6xl max-sm:text-center font-(family-name:--Lexend-Zetta)'}>
                Vlad{' '}
                <span
                    class={
                        'text-rose-600 selection:text-rose-600! bg-stone-950 dark:text-violet-700 dark:selection:text-violet-700! dark:bg-stone-50'
                    }
                >
                    D
                </span>
                ev
            </h1>

            <Nav />
        </header>
    )
}
