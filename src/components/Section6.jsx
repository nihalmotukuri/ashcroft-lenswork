import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"

const Section6 = () => {
    useGSAP(() => {
        const headingSplit = new SplitText('#block6 h1', { type: 'words' })
        const paraSplit = new SplitText('#block6 p', { type: 'lines' })

        const sec6TL = gsap.timeline({
            scrollTrigger: {
                trigger: '#sec6',
                start: 'top 40%'
            }
        })
 
        sec6TL
            .from('#block5 img', {
                opacity: 0,
                duration: 1
            }, 0)
            .from('#block6 h2', {
                opacity: 0,
                yPercent: 100,
            }, 0)
            .from(headingSplit.words, {
                opacity: 0,
                yPercent: 100,
                stagger: 0.06
            }, 0)
            .from(paraSplit.lines, {
                opacity: 0,
                yPercent: 54,
                stagger: 0.02
            }, 0)
    }, [])

    return (
        <section id="sec6" className='min-h-screen flex justify-between items-center px-[120px] py-[60px] gap-[6vw]'>
            <div id="block5" className="w-[60%] max-w-[600px] shrink-0">
                <img className="w-full" src="/Group 17.png" alt="" />
            </div>

            <div id="block6">
                <h2
                    style={{
                        fontFamily: 'Zen Dots'
                    }}
                    className="text-xl"
                >
                    other models
                </h2>

                <h1
                    style={{
                        fontFamily: 'Zen Dots'
                    }}
                    className="text-[54px] leading-[46px] mt-4"
                >
                    RETHINK<br />CANVAS
                </h1>

                <p
                    style={{
                        wordSpacing: '10px',
                        fontFamily: 'Montserrat'
                    }}
                    className="text-2xl leading-[40px] my-5"
                >
                    Cameras have evolved significantly since their inception, transforming from bulky devices to sleek, portable gadgets. Today, digital cameras offer high-resolution image and advanced features that cater to both amateur and professional photographers. With the rise of smartphone cameras.
                </p>

                <p
                    style={{
                        wordSpacing: '10px',
                        fontFamily: 'Montserrat'
                    }}
                    className="text-2xl leading-[40px]"
                >
                    Cameras have evolved significantly since their inception, transforming from bulky devices to sleek, portable gadgets.
                </p>
            </div>
        </section>
    )
}

export default Section6