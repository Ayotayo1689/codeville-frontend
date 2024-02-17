import React, { useEffect } from "react";

const ClutchWidget = () => {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://widget.clutch.co/static/js/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div
            className="clutch-widget"
            data-url="https://widget.clutch.co"
            data-widget-type="2"
            data-height="30"
            data-nofollow="true"
            data-expandifr="true"
            data-scale="80"
            data-clutchcompany-id="2123770"
        />
    );
};

export default ClutchWidget;
