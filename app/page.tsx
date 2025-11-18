"use client";
import Image from "next/image";
import PixelBlast from "../components/PixelBlast";
import PixelCard from "../components/PixelCard";
import CurvedLoop from "../components/CurvedLoop";
import ScrambledText from "../components/ScrambledText";

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
                    zIndex: 1
                    ,
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
                            [ Accueil Collection Automne Hiver 2025 ]
                        </span>
                        <br />
                        Collection Automne Hiver 2025. Sneakers, Sacs, Vestes,
                         New In, Chaussures, Jeans, Hoodies, Casquettes
                    </ScrambledText>
                </div>
            </section>



            <section
                style={{
                    position: "relative",
                    marginTop: "calc(400px + 12rem)",
                    width: "80%",
                    minHeight: "12rem",
                    zIndex: 1,
                    background: "#ffffff",
                    border: "2px solid #000",
                    padding: "2rem",
                }}
            >
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gridTemplateRows: "repeat(6, 1fr)",
                        gap: "1.5rem",
                        width: "100%",
                    }}
                >
                    {Array.from({ length: 24 }).map((_, index) => (
                        <div
                            key={index}
                            style={{
                                aspectRatio: "3/4",
                                border: "2px solid #000",
                                background: "#f5f5f5",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "0.875rem",
                                color: "#666",
                            }}
                        >
                            Produit {index + 1}
                        </div>
                    ))}
                </div>
            </section>
        </div>
        
    );
}
