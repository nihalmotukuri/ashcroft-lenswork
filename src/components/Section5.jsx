import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const Section5 = () => {
    useGSAP(() => {
        gsap.fromTo('#mainCamera', {
            rotation: 0,
            scale: 0.8,
        }, {
            duration: 4,
            rotation: 25,
            scale: 1,
            ease: "expo.inOut"
        })

        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: '#sec2',
                start: 'top bottom',
                end: 'bottom bottom',
                scrub: true
            }
        })
        tl1.to('#mainCamera', {
            rotation: 90,
        })

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: '#sec3',
                start: 'top bottom',
                end: 'bottom bottom',
                scrub: true
            }
        })
        tl2.to('#mainCamera', {
            rotation: 50,
        })

        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: '#sec4',
                start: 'top bottom',
                end: 'bottom bottom',
                scrub: true
            }
        })
        tl3.to('#mainCamera', {
            rotation: 0,
        })

        const tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: '#sec5',
                start: 'top bottom',
                end: 'bottom bottom',
                scrub: true,
            }
        })
        tl4.to('#mainCamera', {
            scale: 0.6,
            top: '75%',
            ease: 'none'
        })

        const tl5 = gsap.timeline({
            scrollTrigger: {
                trigger: '#sec6',
                start: 'top bottom',
                end: 'bottom bottom',
                scrub: true
            }
        })
        tl5.to('#mainCamera', {
            position: 'absolute',
            ease: 'none'
        })

    }, [])
    return (
        <section
            id="sec5"
            style={{
                fontFamily: 'Zen Dots'
            }}
            className='relative min-h-screen pt-[14%]'
        >
            <h2 className="text-2xl text-center">OTHER MODELS</h2>
            <h1 className="text-[7.5vw] text-center leading-[11.5vh]">COLLECTIONS</h1>

            <div
                id="mainCamera"
                className="fixed z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-10/19 size-[740px]"
                style={{ rotation: '25deg' }}
            >
                <img
                    src="/main-camera.png"
                    className="absolute w-full z-2"
                />
                <img
                    src="/Shadow.png"
                    className="absolute inset-0 top-[30px] left-[120px] z-1"
                />
            </div>

            <div className="absolute z-9 top-3/4 left-1/2 -translate-x-1/2 -translate-y-10/19 h-[444px] w-full flex justify-between px-[80px]">
                <div
                    className="relative size-[444px]"
                >
                    <img
                        src="/Group 15.png"
                        className="absolute w-full z-2"
                    />
                    <img
                        src="/Shadow.png"
                        className="absolute inset-0 top-[20px] left-[50px] z-1"
                    />
                </div>

                <div
                    className="relative size-[444px]"
                >
                    <img
                        src="/Group 16.png"
                        className="absolute w-full z-2 mt-[-20px]"
                    />
                    <img
                        src="/Shadow.png"
                        className="absolute inset-0 top-[20px] left-[50px] z-1"
                    />
                </div>
            </div>

            <div className="absolute left-0 right-0 top-[92%] flex justify-between px-[200px]">
                <div className="text-center">
                    <p>Fujifilm SM0703</p>
                    <span>SM01200</span>
                </div>

                <div className="text-center">
                    <p>Fujifilm SM0703</p>
                    <span>SM01200</span>
                </div>

                <div className="text-center">
                    <p>Fujifilm SM0703</p>
                    <span>SM01200</span>
                </div>
            </div>
        </section>
    )
}

export default Section5