import React from "react"
import Column from "./column"
import Section from "./section-1"

export default () => (
    <div className="squares">
        <div className="row">
            <Column>
                <Section 
                    title="elegant shoes" 
                    bg="404.jpg"
                    info="BRAIDED LEATHER" 
                    url="#" 
                    price="" 
                    usname="" 
                    class="link_h295" 
                    hoverIcon="errow"
                />
            </Column>
            <Column>
                <Section 
                    title="elegant shoes" 
                    bg="404.jpg"
                    info="BRAIDED LEATHER" 
                    url="#" 
                    price="" 
                    usname="" 
                    class="link_h295" 
                    hoverIcon="errow"
                />
            </Column>
            <Column>
                <Section 
                    title="elegant shoes" 
                    bg="404.jpg"
                    info="BRAIDED LEATHER" 
                    url="#" 
                    price="" 
                    usname="" 
                    class="link_h295" 
                    hoverIcon="errow"
                />
            </Column>
        </div>
    </div>
)