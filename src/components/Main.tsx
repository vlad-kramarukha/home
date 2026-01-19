import type { SetupContext } from 'vue'

export default function Main(_: {}, { slots }: SetupContext) {
    return <main class={'flex flex-auto p-2'}>{slots.default ? slots.default() : null}</main>
}
