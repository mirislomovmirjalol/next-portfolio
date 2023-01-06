import Head from 'next/head'
import {Inter} from '@next/font/google'
import Header from "../components/Header";
import Hero from "../components/Hero";
import BackgroundCircles from "../components/BackgroundCircles";
import React from "react";
import About from "../components/About";
import Projects from "../components/Projects";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <div className="bg-gray-800 text-white snap-y snap-mandatory h-screen overflow-scroll scroll-smooth">
            <Head>
                <title>Jalol's Portfolio</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            {/*Header*/}
            <Header/>
            {/*Hero*/}
            <section className="flex items-center justify-center snap-start" id="home">
                <Hero/>
            </section>
            {/*About*/}
            <section className="snap-center" id="about">
                <About/>
            </section>
            {/*Projects*/}
            <section className="snap-center" id="projects">
                <Projects/>
            </section>
            {/*Contact*/}

            {/*Footer*/}

        </div>
    )
}
