"use client";
import Image from "next/image";
import PixelBlast from "../components/PixelBlast";
import PixelCard from "../components/PixelCard";
import CurvedLoop from "../components/CurvedLoop";
import ScrambledText from "../components/ScrambledText";
import Masonry from "../components/Masonry";

const catalogItems = [
    {
        id: "look-01",
        img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80&grayscale",
        url: "/catalogue/look-01",
        height: 520,
    },
    {
        id: "look-02",
        img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80&grayscale",
        url: "/catalogue/look-02",
        height: 420,
    },
    {
        id: "look-03",
        img: "https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&w=800&q=80&grayscale",
        url: "/catalogue/look-03",
        height: 640,
    },
    {
        id: "look-04",
        img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80&grayscale",
        url: "/catalogue/look-04",
        height: 380,
    },
    {
        id: "look-05",
        img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80&grayscale",
        url: "/catalogue/look-05",
        height: 560,
    },
    {
        id: "look-06",
        img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80&grayscale",
        url: "/catalogue/look-06",
        height: 460,
    },
    {
        id: "look-07",
        img: "https://images.unsplash.com/photo-1445510861639-5651173bc5d5?auto=format&fit=crop&w=800&q=80&grayscale",
        url: "/catalogue/look-07",
        height: 600,
    },
    {
        id: "look-08",
        img: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=800&q=80&grayscale",
        url: "/catalogue/look-08",
        height: 440,
    },
    {
        id: "look-09",
        img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80&grayscale",
        url: "/catalogue/look-09",
        height: 500,
    },
    {
        id: "look-10",
        img: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800&q=80&grayscale",
        url: "/catalogue/look-10",
        height: 360,
    },
    {
        id: "look-11",
        img: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=800&q=80&grayscale",
        url: "/catalogue/look-11",
        height: 540,
    },
    {
        id: "look-12",
        img: "https://images.unsplash.com/photo-1459348954176-7d99db8a21d5?auto=format&fit=crop&w=800&q=80&grayscale",
        url: "/catalogue/look-12",
        height: 600,
    },
];

export default function Home() {
    return (
        <div
            style={{ width: "100%", minHeight: "100vh", position: "relative" }}
        >
            <PixelBlast
                variant="square"
                pixelSize={3}
                color="#2e2e2e"
                patternScale={4.25}
                patternDensity={1.2}
                pixelSizeJitter={0.5}
                enableRipples
                rippleSpeed={0.2}
                rippleThickness={0.12}
                rippleIntensityScale={0.5}
                speed={0.6}
                edgeFade={0.25}
                transparent
                className=""
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 1,
                }}
            />

            {/* Section des PixelCards centrées */}
            <section
                style={{
                    position: "relative",
                    zIndex: 10,
                    width: "100%",
                    minHeight: "85vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "2rem",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        gap: "3rem",
                        alignItems: "center",
                        justifyContent: "top",
                        flexWrap: "wrap",
                    }}
                >
                    {/* PixelCard Femmes */}
                    <PixelCard
                        variant="default"
                        className="gender-card"
                        gap={undefined}
                        speed={undefined}
                        colors={undefined}
                        noFocus={undefined}
                        backgroundImage="/CollectionFemme.png"
                    >
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: 1,
                                pointerEvents: "none",
                            }}
                        >
                            <h2
                                style={{
                                    fontSize: "2.5rem",
                                    fontWeight: "bold",
                                    color: "#fff",
                                    marginBottom: "1rem",
                                    textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
                                }}
                            >
                                Femmes
                            </h2>
                        </div>
                    </PixelCard>

                    {/* PixelCard Hommes */}
                    <PixelCard
                        variant="default"
                        className="gender-card"
                        gap={undefined}
                        speed={undefined}
                        colors={undefined}
                        noFocus={undefined}
                        backgroundImage="/CollectionHomme.png"
                    >
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: 1,
                                pointerEvents: "none",
                            }}
                        >
                            <h2
                                style={{
                                    fontSize: "2.5rem",
                                    fontWeight: "bold",
                                    color: "#fff",
                                    marginBottom: "1rem",
                                    textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
                                }}
                            >
                                Hommes
                            </h2>
                        </div>
                    </PixelCard>
                </div>
            </section>

            <div
                style={{
                    position: "absolute",
                    top: 180,
                    left: 0,
                    width: "100%",
                    height: "10rem",
                    zIndex: 2,
                }}
            >
                <CurvedLoop
                    marqueeText="Be ✦ Creative ✦ With ✦ Encrypted ✦"
                    speed={1.5}
                    className="curved-loop"
                    curveAmount={400}
                    direction="left"
                    interactive={true}
                    pathId="hero-loop"
                />
            </div>

            <section
                style={{
                    position: "absolute",
                    marginTop: "200px",
                    left: 0,
                    width: "50%",
                    paddingTop: 34,
                    paddingBottom: 34,
                    background: "#ffffff",
                    border: "2px solid #000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1,
                }}
            >
                <div
                    style={{
                        display: "flex",
                        width: "100%",
                    }}
                >
                    <ScrambledText
                        className="scrambled-text-demo"
                        radius={150}
                        duration={1.2}
                        speed={0.5}
                        scrambleChars=".:"
                        style={{ color: "#000" }}
                    >
                        <span style={{ fontWeight: "bold", fontSize: "2em" }}>
                            [ Accueil Collection Automne Hiver 2025 © ]
                        </span>
                        <br />
                        Collection Automne Hiver 2025. Sneakers, Sacs, Vestes,
                        New In, Chaussures, Jeans, Hoodies, Casquettes.
                    </ScrambledText>
                </div>
            </section>

            <section
                style={{
                    position: "relative",
                    marginTop: "calc(400px + 12rem)",
                    width: "80%",
                    minHeight: "40rem",
                    zIndex: 1,
                    background: "#ffffff",
                    border: "2px solid #000",
                    padding: "2rem",
                    overflow: "visible",
                }}
            >
                <Masonry
                    items={catalogItems}
                    animateFrom="bottom"
                    duration={0.7}
                    stagger={0.06}
                    scaleOnHover={true}
                    hoverScale={0.97}
                    blurToFocus={true}
                    colorShiftOnHover={true}
                    triggerOnView
                    viewThreshold={0.35}
                />
            </section>
        </div>
    );
}
