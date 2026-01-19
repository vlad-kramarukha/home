import type { SetupContext } from 'vue'

export default function Main(_: {}, { slots }: SetupContext) {
    return <main class={'flex grow shrink-0 basis-auto p-2'}>{slots.default ? slots.default() : null}</main>
}
