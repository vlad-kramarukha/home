import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import Main from './components/Main.tsx'
import { RouterView } from 'vue-router'

export default function App() {
    return (
        <div class={'flex flex-col h-full'}>
            <Header />
            <Main>
                <RouterView />
            </Main>
            <Footer />
        </div>
    )
}
