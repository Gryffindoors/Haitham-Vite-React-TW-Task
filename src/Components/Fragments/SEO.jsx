import React, { useEffect } from "react";

export default function SEO({ title = "Medi-Plus", metaDescription = "MediPlus Clinics' Main Website" }) {
    useEffect(() => {
        document.title = title;
        const metaTag = document.querySelector('meta[name="description"]');
        if (metaTag) {
            metaTag.setAttribute("content", metaDescription);
        }
    }, [title, metaDescription]); 

    return null; 
}
