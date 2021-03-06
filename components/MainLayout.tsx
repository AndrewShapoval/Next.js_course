import Link from "next/link";
import Head from "next/head";

export function MainLayout({children, title = "Next app"}) {
    return (
        <>
            <Head>
                <title>{title} | Next course</title>
                <meta name="keywords" content="next, javascript, ReactJS"/>
                <meta name="description" content="this is youtube tutorial for next"/>
                <meta charSet="utf-8"/>
            </Head>
            <nav>
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/posts"><a>Posts</a></Link>
            </nav>
            <main>
                {children}
            </main>
            {/*global - глобальные стили*/}
            <style jsx global>{`
            nav {
            position: fixed;
            height: 60px;
            left: 0;
            top: 0;
            right: 0;
            background: darkblue;
            display: flex;
            justify-content: space-around;
            align-items: center
            }
            
            nav a {
            color: white;
            text-decoration: none
            }
            
            main {
            margin-top: 60px;
            padding: 1rem
            }
            `}</style>
        </>
    )
}